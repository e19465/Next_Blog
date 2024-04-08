const {
  S3Client,
  ListObjectsV2Command,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");

const deleteFromS3 = async (id) => {
  const s3 = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: process.env.AWS_DEFAULT_REGION,
  });

  try {
    // Get list of all objects in the bucket
    const { Contents: objects } = await s3.send(
      new ListObjectsV2Command({
        Bucket: process.env.AWS_BUCKET,
      })
    );

    // Iterate through objects
    for (const obj of objects) {
      const key = obj.Key;

      // Check if the object's key contains the id
      if (key.includes(id)) {
        // Delete the object
        await s3.send(
          new DeleteObjectCommand({ Bucket: process.env.AWS_BUCKET, Key: key })
        );
      }
    }

    return true;
  } catch (error) {
    // Handle exceptions
    console.error("An error occurred:", error);
    return false;
  }
};

module.exports = { deleteFromS3 };
