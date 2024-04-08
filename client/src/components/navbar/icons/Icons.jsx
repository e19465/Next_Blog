"use client";

import styled from "styled-components"
import Link from "next/link"
import { IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";
import { useDispatch } from "react-redux";
import { openDrawer, closeDrawer } from "@/redux/features/drawer/drawerSlice";


const IconMain = styled.div`
    display: flex;

    
`;

const StyledIconButton = styled(IconButton)`
    color: ${props => props.theme.palette.mode === "dark" ? props.colors.gray[100] : props.colors.gray[900]};
    transition: all 0.5s;

    ${xs({
        width: "20px",
        marginRight: "5px",
    })}
`;


const Icons = ({colors, colorMode, theme}) => {
    const isAuthenticated = true;
    const dispatch = useDispatch();
    const isMaxWidth380 = useMediaQuery('(max-width:768px)');
    const mode = theme.palette.mode;
  return (
    <IconMain>
        <StyledIconButton title="chnage color mode" onClick={colorMode.toggleColorMode} colors={colors} theme={theme}>
            {theme.palette.mode === "dark" 
            ? (<LightModeOutlinedIcon />) 
            : (<DarkModeOutlinedIcon style={{color:colors.primary[500]}}/>)
            }
        </StyledIconButton>
        {isAuthenticated 
            ?
            <StyledIconButton title="logout" colors={colors} theme={theme}>
                <LogoutIcon style={{color: mode==='light' && colors.primary[500]}}/>
            </StyledIconButton>
            :
            <Link href={"/login"}>
                <StyledIconButton title="login" colors={colors} theme={theme}>
                    <LoginOutlinedIcon style={{color: mode==='light' && colors.primary[500]}}/>
                </StyledIconButton>
            </Link>
        }
        {
            isAuthenticated &&
            <Link href={"/settings"}>
                <StyledIconButton title="settings" colors={colors} theme={theme}>
                    <SettingsIcon style={{color: mode==='light' && colors.primary[500]}}/>
                </StyledIconButton>
            </Link>
        }
        {
            isAuthenticated &&
            <Link href={"/notifications"}>
                <StyledIconButton title="notofications" colors={colors} theme={theme}>
                    <NotificationsIcon style={{color: mode==='light' && colors.primary[500]}}/>
                </StyledIconButton>
            </Link>
        }
        {
            isMaxWidth380 &&
            <StyledIconButton onClick={() => dispatch(openDrawer())} title="menu" colors={colors} theme={theme}>
                <MenuIcon style={{color: mode==='light' && colors.primary[500]}}/>
            </StyledIconButton>

        }
    </IconMain>
  )
}

export default Icons