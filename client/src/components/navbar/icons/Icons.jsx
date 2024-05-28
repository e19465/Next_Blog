"use client";

import styled from "styled-components";
import Link from "next/link";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer, closeDrawer } from "@/redux/features/drawer/drawerSlice";
import { openLogoutModal } from "@/redux/features/logout_model/logoutModelSlice";
import { useRouter } from "next/navigation";

const IconMain = styled.div`
  display: flex;
`;

const StyledIconButton = styled(IconButton)`
  color: ${(props) =>
    props.$theme.palette.mode === "dark"
      ? props.$colors.gray[100]
      : props.$colors.gray[900]};
  transition: all 0.5s;

  ${xs({
    width: "20px",
    marginRight: "5px",
  })}
`;

const Icons = ({ $colors, $colorMode, $theme }) => {
  const router = useRouter();
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const isMaxWidth380 = useMediaQuery("(max-width:768px)");
  const mode = $theme.palette.mode;

  return (
    <IconMain>
      <StyledIconButton
        title="chnage color mode"
        onClick={$colorMode.toggleColorMode}
        $colors={$colors}
        $theme={$theme}
      >
        {$theme.palette.mode === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon style={{ color: $colors.primary[500] }} />
        )}
      </StyledIconButton>
      {user ? (
        <StyledIconButton
          onClick={() => dispatch(openLogoutModal())}
          title="logout"
          $colors={$colors}
          $theme={$theme}
        >
          <LogoutIcon
            style={{ color: mode === "light" && $colors.primary[500] }}
          />
        </StyledIconButton>
      ) : (
        <StyledIconButton
          onClick={() => router.push("/login")}
          title="login"
          $colors={$colors}
          $theme={$theme}
        >
          <LoginIcon
            style={{ color: mode === "light" && $colors.primary[500] }}
          />
        </StyledIconButton>
      )}
      {/* {user && (
        <Link href={"/settings"}>
          <StyledIconButton title="settings" $colors={$colors} $theme={$theme}>
            <SettingsIcon
              style={{ color: mode === "light" && $colors.primary[500] }}
            />
          </StyledIconButton>
        </Link>
      )}
      {user && (
        <Link href={"/notifications"}>
          <StyledIconButton
            title="notofications"
            $colors={$colors}
            $theme={$theme}
          >
            <NotificationsIcon
              style={{ color: mode === "light" && $colors.primary[500] }}
            />
          </StyledIconButton>
        </Link>
      )} */}
      {isMaxWidth380 && (
        <StyledIconButton
          onClick={() => dispatch(openDrawer())}
          title="menu"
          $colors={$colors}
          $theme={$theme}
        >
          <MenuIcon
            style={{ color: mode === "light" && $colors.primary[500] }}
          />
        </StyledIconButton>
      )}
    </IconMain>
  );
};

export default Icons;
