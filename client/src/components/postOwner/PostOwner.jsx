import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { BASE_URL } from "@/hooks/authHook";

const AuthurImageDataContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const AuthurImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const AuthurData = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const StyledP = styled.p`
  font-size: 14px;
`;

const StyledH3 = styled.h3`
  font-size: 15px;
`;

const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostOwner = ({ owner_id }) => {
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/one/${owner_id}`);
        setOwner(response.data);
      } catch (err) {
        console.log(err);
        return err;
      }
    };
    getUser();
  }, [owner_id]);

  return (
    <>
      {owner ? (
        <AuthurImageDataContainer>
          <AuthurImage
            src={owner.dp.url}
            alt="authur image"
            loading="lazy"
            width={500}
            height={500}
          />
          <AuthurData>
            <StyledP>Author</StyledP>
            <StyledH3>{owner.username}</StyledH3>
          </AuthurData>
        </AuthurImageDataContainer>
      ) : (
        <LoadingDiv>Loading...</LoadingDiv>
      )}
    </>
  );
};

export default PostOwner;
