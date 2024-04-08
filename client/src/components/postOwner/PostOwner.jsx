import styled from "styled-components";
import { authurs } from "@/app/data";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    const owner = authurs.filter((authur) => authur.id === parseInt(owner_id));
    setOwner(owner[0]);
  }, [owner_id]);
  return (
    <>
      {owner ? (
        <AuthurImageDataContainer>
          <AuthurImage
            src={owner.img}
            alt="authur image"
            loading="lazy"
            width={500}
            height={500}
          />
          <AuthurData>
            <StyledP>Authur</StyledP>
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
