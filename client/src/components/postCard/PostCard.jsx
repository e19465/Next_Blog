import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import Link from "next/link";
import styled from "styled-components";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import PostDeleteModal from "../models/post_delete/PostDeleteModal";
import { openPostDeleteModal } from "@/redux/features/post_delete_modal/postDeleteSlice";

const StyledLink = styled(Link)`
  color: ${(props) => props.colors.greenAccent[500]};
  text-decoration: none;
  transition: all 0.5s;
  font-size: 14px;
  color: ${(props) =>
    props.mode === "dark"
      ? props.colors.blueAccent[200]
      : props.colors.blueAccent[300]};
  &:hover {
    text-decoration: underline;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: -7px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
  background-color: transparent;
`;

const PostCard = ({
  img,
  title,
  desc,
  id,
  owner,
  postData,
  post_uuid,
  setPostData,
}) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  const { payload } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { isPostDeleteModalOpen } = useSelector(
    (store) => store.post_delete_modal
  );

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Card
        sx={{
          minWidth: 250,
          maxWidth: 300,
          backgroundColor: colors.primary[400],
          margin: "20px",
          position: "relative",
        }}
      >
        <CardActionArea>
          {img && (
            <CardMedia
              component="img"
              height="100"
              image={img}
              alt="blog post image"
              sx={{
                objectFit: "cover",
                width: "100%",
                height: "250px",
                overflow: "hidden",
              }}
            />
          )}
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                height: "50px",
                overflow: "hidden",
                color: mode === "dark" ? colors.gray[200] : colors.primary[200],
                fontSize: "14px",
              }}
            >
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <StyledLink
            colors={colors}
            mode={mode}
            href={`blog/post/?id=${id}&owner=${owner}&post_uuid=${post_uuid}`}
          >
            Read More
          </StyledLink>
        </CardActions>
      </Card>
      {payload?.user_id === owner && (
        <StyledButton>
          <DeleteOutlineOutlined
            style={{
              width: "100%",
              height: "100%",
              color: mode === "dark" ? colors.gray[200] : colors.primary[200],
            }}
            onClick={() => dispatch(openPostDeleteModal())}
          />
        </StyledButton>
      )}
      {isPostDeleteModalOpen && (
        <PostDeleteModal
          post_id={post_uuid}
          postData={postData}
          setPostData={setPostData}
        />
      )}
    </div>
  );
};

export default PostCard;
