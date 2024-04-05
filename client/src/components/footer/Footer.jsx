import styled from "styled-components";
import { useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";


const FooterMain = styled.div`
  height: 40px;
  position: sticky;
  bottom: 0;
  z-index: 999;
  background-color: ${props => props.mode === "dark" ? props.colors.primary[600] : "#fff" };
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  font-size: 15px;

  /* RESPONSIVE */
  ${xs({
    justifyContent: "center",
    padding: "30px 10px",
    textAlign: "center",
  })}
  
  ${l({
    fontSize: "12px",
    padding: "10px",
  })}
  
  
  ${xl({
    fontSize: "13px",
    padding: "10px",
  })}
`;

const Left = styled.div`
    ${xs({
    display: "none",
  })}
`;

const Right = styled.div``;

const Footer = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  return (
    <FooterMain colors={colors} mode={mode}>
      <Left>
        SDR
      </Left>
      <Right>
        SDR creative throughts agency. all rights reserved @ 2024
      </Right>
    </FooterMain>
  );
};

export default Footer;
