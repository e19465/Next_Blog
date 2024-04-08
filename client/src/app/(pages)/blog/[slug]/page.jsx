"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
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
import { useEffect, useState } from "react";
import { post_data } from "@/app/data";
import Logo from "../../../../../public/assests/logo.png";
import PostOwner from "@/components/postOwner/PostOwner";
///////////////////////////////////////////////////////
const SinglePost = ({ searchParams }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  const post_id = searchParams.id;
  const owner_id = searchParams.owner;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const new_post = post_data.filter((post) => post.id === parseInt(post_id));
    setPost(new_post[0]);
  }, [post_id]);

  return (
    <>
      {post ? (
        <SinglePostMain mode={mode} colors={colors}>
          <ImageContainer>
            <PostImage
              src={post ? post.img : Logo}
              width={500}
              height={500}
              alt="single blog post image"
              loading="lazy"
            />
          </ImageContainer>
          <TextContainer>
            <Title>This is title</Title>
            <AuthurAndDateContainer>
              <PostOwner owner_id={owner_id} />
              <DateContainer>
                <StyledP>Published</StyledP>
                <StyledH3>{post.createdAt}</StyledH3>
              </DateContainer>
            </AuthurAndDateContainer>
            <PostContent>{post.description}</PostContent>
            <IconsContainer>
              <IconButtonsContainer>
                <StyledIconButton>
                  <FavoriteIcon />
                </StyledIconButton>
                <span>{post.likes}</span>
              </IconButtonsContainer>
              <IconButtonsContainer>
                <StyledIconButton>
                  <ShareIcon />
                </StyledIconButton>
              </IconButtonsContainer>
            </IconsContainer>
          </TextContainer>
        </SinglePostMain>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default SinglePost;
