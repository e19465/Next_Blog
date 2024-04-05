import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useSelector, useDispatch } from "react-redux";
import { closeDrawer } from "@/redux/features/drawer/drawerSlice";
import Link from "next/link";
import styled from "styled-components";
import { useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const links = [
  {
    title: "Home",
    path: "/",
    Icon: HomeOutlinedIcon,
  },
  {
    title: "About",
    path: "/about",
    Icon: InfoOutlinedIcon,
  },
  {
    title: "Blog",
    path: "/blog",
    Icon: SendOutlinedIcon,
  },
  {
    title: "Contact",
    path: "/contact",
    Icon: CallOutlinedIcon,
  },
];

const SidebarDrawer = () => {
  const { isDrawerOpen } = useSelector((store) => store.drawer);
  const dispatch = useDispatch();
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(theme.palette.mode);

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        // backgroundColor: mode === "dark" ? colors.blueAccent[300] : colors.blueAccent[100]
      }}
      role="presentation"
    >
      <List>
        {links.map((link) => {
          const Icon = link.Icon;
          return (
            <StyledLink href={link.path} key={link.title}>
              <ListItem key={link.title} disablePadding>
                <ListItemButton onClick={() => dispatch(closeDrawer())}>
                  <ListItemIcon
                    sx={{
                      color:
                        mode === "dark"
                          ? colors.primary[900]
                          : colors.gray[900],
                    }}
                  >
                    <Icon />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color:
                        mode === "dark"
                          ? colors.primary[900]
                          : colors.gray[900],
                      fontWeight: 900,
                    }}
                    primaryTypographyProps={{ style: { fontWeight: 700 } }}
                    primary={link.title}
                  />
                </ListItemButton>
              </ListItem>
            </StyledLink>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => dispatch(closeDrawer())}
      PaperProps={{
        sx: {
          marginTop: `60px`,
          height: `calc(100vh - 60px)`,
          backgroundColor:
            mode === "dark" ? colors.primary[300] : colors.blueAccent[200],
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
};

export default SidebarDrawer;
