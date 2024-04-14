const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getUniqueNameForDP } = require("./get_unique_name");
const { v4: uuidv4 } = require("uuid");

//! environment variables
const aws_access_key_id = process.env.AWS_ACCESS_KEY_ID;
const aws_secret_access_key = process.env.AWS_SECRET_ACCESS_KEY;
const aws_default_region = process.env.AWS_DEFAULT_REGION;
const aws_bucket = process.env.AWS_BUCKET;
const aws_url = process.env.AWS_URL;

//! Amazon S3 client
const s3 = new S3Client({
  credentials: {
    accessKeyId: aws_access_key_id,
    secretAccessKey: aws_secret_access_key,
  },
  region: aws_default_region,
});

const MainProjectFolderName = "Next14_blog";

const uploadToS3AndGetURL = async (
  img_buffer,
  name,
  fileType,
  folderName,
  unique_uuid_user,
  unique_uuid_post
) => {
  try {
    // if you do image resizing with sharp
    // const sharp = require("sharp")
    // const buffer = await sharp(img_buffer)
    //   .resize({ height: 1920, width: 1080, fit: "contain" })
    //   .toBuffer();
    const unique_uuid_image = uuidv4();
    let u_name;

    if (unique_uuid_post != null) {
      u_name = getUniqueNameForDP(
        name,
        unique_uuid_user,
        unique_uuid_post,
        unique_uuid_image
      );
    } else {
      u_name = getUniqueNameForDP(name, unique_uuid_user, unique_uuid_image);
    }

    const key = `${MainProjectFolderName}/${folderName}/${u_name}`;
    const params = {
      Bucket: aws_bucket,
      Key: key,
      Body: img_buffer,
      ContentType: fileType,
    };

    const command1 = new PutObjectCommand(params);
    await s3.send(command1);

    const url = `${aws_url}/${MainProjectFolderName}/${folderName}/${u_name}`;

    // this method works with library getSignedUrl
    // const { GetObjectCommand } = require("@aws-sdk/client-s3");
    // const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
    // const getObjectParams = {
    //   Bucket: aws_bucket,
    //   Key: uniqueIdForImage,
    // };
    // const command2 = new GetObjectCommand(getObjectParams);
    // const url = await getSignedUrl(s3, command2);

    return {
      url: url,
      id: unique_uuid_image,
    };
  } catch (err) {
    throw new Error(
      "error occured during image uploading process please try again"
    );
  }
};

module.exports = { uploadToS3AndGetURL };
