"use client";
import styled from "styled-components";
import PostCard from "@/components/postCard/PostCard";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";
import { post_data } from "@/app/data";

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
      {post_data.map((post) => (
        <PostCard
          key={post.id}
          img={post.img}
          desc={post.description}
          title={post.title}
          id={post.id}
          owner={post.owner_id}
        />
      ))}
    </BlogMain>
  );
};

export default Blog;
