import Links from "./links/Links"
import Logo from "./logo/Logo";
import Icons from "./icons/Icons";
import styled from "styled-components"
import { useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import { ColorModeContext } from "@/app/theme";
import { useContext } from "react";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";

const NavMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 50px;
    height: 60px;
    background-color: ${props => props.mode === "dark" ? props.colors.primary[600] : "#fff" };
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;

    /* RESPONSIVE */
    ${xs({
      padding: "10px 10px",
    })}
`;

const Navbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    
  return (
    <NavMain colors={colors} mode={theme.palette.mode}>
        <Logo colors={colors} theme={theme}/>
        <Links colors={colors} colorMode={colorMode} theme={theme}/>
        <Icons colors={colors} colorMode={colorMode} theme={theme}/>
    </NavMain>
  )
}

export default Navbar