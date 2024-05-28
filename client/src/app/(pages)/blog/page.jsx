"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PostCard from "@/components/postCard/PostCard";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";
// import { post_data } from "@/app/data";
import { IconButton, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/hooks/authHook";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsStart,
  getPostsSuccess,
  getPostsFailure,
} from "@/redux/features/posts/postsSlice";
//////////////////////////////////////////////
const BlogMain = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const AddPostBtnContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Blog = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const router = useRouter();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState(null);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    const getPostData = async () => {
      dispatch(getPostsStart());
      try {
        const response = await axios.get(`${BASE_URL}/post/all`);
        dispatch(getPostsSuccess(response.data));
        setPostData(response.data);
      } catch (err) {
        dispatch(getPostsFailure());
        console.log(err);
        return err;
      }
    };

    getPostData();
  }, [dispatch]);

  return (
    <BlogMain>
      {user && (
        <AddPostBtnContainer>
          <IconButton
            title="crate blog post"
            onClick={() => router.push("/createblog")}
          >
            <AddIcon
              sx={{
                background:
                  mode === "dark" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                color: "#fff",
                borderRadius: "50%",
                fontSize: "25px",
              }}
            />
          </IconButton>
        </AddPostBtnContainer>
      )}
      <>
        {postData ? (
          postData.length !== 0 ? (
            postData.map((post) => (
              <PostCard
                key={post._id}
                img={post?.img?.url || null}
                desc={post.description}
                title={post.title}
                id={post._id}
                owner={post.owner_id}
                postData={postData}
                post_uuid={post.unique_uuid}
                setPostData={setPostData}
              />
            ))
          ) : (
            <p>No posts to show</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </>
    </BlogMain>
  );
};

export default Blog;
