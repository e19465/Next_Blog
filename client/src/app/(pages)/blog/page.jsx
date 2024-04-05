"use client";
import styled from "styled-components";
import PostCard from "@/components/postCard/PostCard";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";

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


const Blog = () => {
  return (
    <BlogMain>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </BlogMain>
  );
};

export default Blog;
