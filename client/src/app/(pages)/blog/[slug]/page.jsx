"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import {
  SinglePostMain,
  ImageContainer,
  PostImage,
  TextContainer,
  Title,
  AuthurAndDateContainer,
  DateContainer,
  PostContent,
  IconsContainer,
  IconButtonsContainer,
  StyledIconButton,
  StyledP,
  StyledH3,
} from "./styled";
import { useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import { Suspense, useEffect, useState } from "react";
import Logo from "../../../../../public/assests/logo.png";
import PostOwner from "@/components/postOwner/PostOwner";
import axios from "axios";
import { BASE_URL } from "@/hooks/authHook";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { openPostDeleteModal } from "@/redux/features/post_delete_modal/postDeleteSlice";
import PostDeleteModal from "@/components/models/post_delete/PostDeleteModal";
import Loading from "@/app/loading";
import useAuthAxios from "@/hooks/authHook";
///////////////////////////////////////////////////////
const SinglePost = ({ searchParams }) => {
  const authAxios = useAuthAxios();
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  const post_id = searchParams.id;
  const post_uuid = searchParams.post_uuid;
  const owner_id = searchParams.owner;
  const [post, setPost] = useState(null);
  const [postLikes, setPostLikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const dispatch = useDispatch();
  const { payload } = useSelector((store) => store.user);
  const { isPostDeleteModalOpen } = useSelector(
    (store) => store.post_delete_modal
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const getOnePost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/post/one/${post_id}`);
        setPost(response.data);
      } catch (err) {
        console.log(err);
        return err;
      }
    };
    getOnePost();
  }, [post_id]);

  useEffect(() => {
    const getPostLikes = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/post/likes/${post_id}`);
        setPostLikes(response.data);
      } catch (err) {
        console.log(err);
        return err;
      }
    };
    getPostLikes();
  }, [post, post_id]);

  const handleLikeClick = async (post_id) => {
    if (userLiked) {
      setPostLikes((prev) => prev - 1);
    } else {
      setPostLikes((prev) => prev + 1);
    }
    setUserLiked(!userLiked);

    try {
      const response = await authAxios.patch(
        `${BASE_URL}/post/like/${post_id}`,
        {}
      );
      alert("success");
      setUserLiked(response.data);
    } catch (err) {
      // alert(err.response.data.error);
      console.log(err);
    }
  };

  // console.log("post: ", post);
  useEffect(() => {
    const isUserLiked = post?.likes?.find(
      (like) => like.user_id === payload?.user_id
    );
    // console.log("isUserLiked: ", isUserLiked);
    if (isUserLiked?.liked) {
      setUserLiked(true);
    } else {
      setUserLiked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  return (
    <>
      {post ? (
        <SinglePostMain $mode={mode} $colors={colors}>
          <ImageContainer>
            <Suspense fallback={<Loading />}>
              <PostImage
                src={post?.img?.url ? post?.img?.url : Logo}
                width={500}
                height={500}
                alt="single blog post image"
                priority
              />
            </Suspense>
          </ImageContainer>
          <TextContainer>
            <Title>{post?.title}</Title>
            <AuthurAndDateContainer>
              <PostOwner owner_id={owner_id} />
              <DateContainer>
                <StyledP>Published</StyledP>
                <StyledH3>{formatDate(post.createdAt)}</StyledH3>
              </DateContainer>
            </AuthurAndDateContainer>
            <PostContent>{post.description}</PostContent>
            <IconsContainer>
              {payload && (
                <IconButtonsContainer>
                  <StyledIconButton onClick={() => handleLikeClick(post_id)}>
                    {userLiked ? <FavoriteIcon /> : <FavouriteBorderIcon />}
                  </StyledIconButton>
                  <span>{postLikes}</span>
                </IconButtonsContainer>
              )}
              {/* <IconButtonsContainer>
                <StyledIconButton>
                  <ShareIcon />
                </StyledIconButton>
              </IconButtonsContainer> */}
              {payload?.user_id === owner_id && (
                <IconButtonsContainer>
                  <StyledIconButton
                    onClick={() => dispatch(openPostDeleteModal())}
                  >
                    <DeleteOutlineOutlined />
                  </StyledIconButton>
                </IconButtonsContainer>
              )}
            </IconsContainer>
          </TextContainer>
          {isPostDeleteModalOpen && <PostDeleteModal post_id={post_uuid} />}
        </SinglePostMain>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default SinglePost;
