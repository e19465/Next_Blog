import styled from "styled-components";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";


/* STYLED COMPONENTS */
const SinglePostMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: auto;

  /* RESPONSIVE */
  
  ${xs({
    flexDirection: "column",
  })}
  
  ${xm({
    flexDirection: "column",
  })}
  
  ${m({
    flexDirection: "column",
  })}
  
  
  ${l({
    flexDirection: "column",
  })}
  
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
  height: 90%;

  ${xs({
    justifyContent: "center",
    padding:"0px",
  })}
  
  ${xm({
    justifyContent: "center",
    padding:"0px",
  })}
  
  ${m({
    justifyContent: "center",
    padding:"0px",
  })}
  
  ${l({
    flexDirection: "column",
  })}
`;

const PostImage = styled(Image)`
  width: 90%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  height: 90%;
  margin-right: 10px;

  ${l({
    padding: "40px 20px",
  })}
`;

const Title = styled.h1`
  padding: 10px;
  font-size: 30px;
  overflow: hidden;
`;

const AuthurAndDateContainer = styled.div`
  display: flex;
`;

const AuthurImageDataContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const AuthurImage = styled(Image)`
  width: 70px;
  height: 70px;
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

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
`;

const PostContent = styled.div`
  font-size: 20px;
  padding: 20px;
  overflow: auto;
  flex-grow: 1;
  padding-bottom: 50px;
`;

const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 10px 10px;
`;

const IconButtonsContainer = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
`;

const StyledIconButton = styled(IconButton)`
  width: 40px;
  height: 40px;
  padding: 10px;
`;


export {
    SinglePostMain,
    ImageContainer,
    PostImage,
    TextContainer,
    Title,
    AuthurAndDateContainer,
    AuthurImageDataContainer,
    AuthurImage,
    AuthurData,
    DateContainer,
    PostContent,
    IconsContainer,
    IconButtonsContainer,
    StyledIconButton
  };