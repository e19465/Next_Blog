import LogoImage from "../../../../public/assests/logo.png";
import Image from "next/image";
import styled from "styled-components";

const LogoMain = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const LogoTitle = styled.p`
    color: ${props => props.theme.palette.mode === "dark" ? props.colors.gray[100] : props.colors.gray[200]};
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    &::first-letter {
        color: ${props => props.theme.palette.mode === "dark" ? props.colors.greenAccent[500] : props.colors.redAccent[400]};
    }
`;

const LogoImageContainer = styled(Image)`
    width: 25px;
    height: 25px;
    margin-right: 5px;
`;

const Logo = ({colors, theme}) => {
  return (
    <LogoMain>
        <LogoImageContainer width={25} height={25} loading="lazy" src={LogoImage} alt="Logo image of the blog website"/>
        <LogoTitle colors={colors} theme={theme}>blog</LogoTitle>
    </LogoMain>
  )
}

export default Logo