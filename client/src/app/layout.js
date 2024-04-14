"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import { useTheme } from "@mui/material";
import { tokens } from "./theme";
import StateProvider from "@/redux/provider";
import SidebarDrawer from "@/components/sidebar/SidebarDrawer";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import LogoutModal from "@/components/models/logout/LogoutModal";
import useAuthAxios from "@/hooks/authHook";
import { loginSuccess } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";

const inter = Inter({ subsets: ["latin"] });

// METHOD A layout WORK WITH METHOD A provider LAYOUT IN provider.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider>
          <WrappedLayout>{children}</WrappedLayout>
        </StateProvider>
      </body>
    </html>
  );
}

// METHOD B layout WORK WITH METHOD B provider LAYOUT IN provider.js
// export default function RootLayout({ children }) {
//   const [theme, colorMode] = useMode();
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <StateProvider>
//           <ColorModeContext.Provider value={colorMode}>
//             <ThemeProvider theme={theme}>
//               <CssBaseline />
//               <WrappedLayout>{children}</WrappedLayout>
//             </ThemeProvider>
//           </ColorModeContext.Provider>
//         </StateProvider>
//       </body>
//     </html>
//   );
// }

function WrappedLayout({ children }) {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  const { isLogoutModelOpen } = useSelector((store) => store.logout_modal);
  const { user } = useSelector((store) => store.user);
  const authInstance = useAuthAxios();
  const dispatch = useDispatch();
  const nine_minutes = 1000 * 60 * 9;
  const fifty_nine_minutes = 1000 * 60 * 59;

  const updateAccessToken = async () => {
    console.log("update token called!");
    try {
      const response = await authInstance.post("/access/refresh", {
        token: user?.refresh,
      });
      dispatch(loginSuccess({ access: response.data, refresh: user.refresh }));
      console.log(user);
    } catch (err) {
      console.log(err.message);
      return err;
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (user !== null) {
        updateAccessToken();
      }
    }, nine_minutes);

    return () => {
      clearInterval(interval);
    };
  }, [nine_minutes, user]);

  const updateRefreshToken = async () => {
    console.log("update token called!");
    try {
      const response = await authInstance.post("/new/refresh", {
        token: user?.refresh,
      });
      dispatch(loginSuccess({ access: user.access, refresh: response.data }));
    } catch (err) {
      console.log(err.message);
      return err;
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (user !== null) {
        updateRefreshToken();
      }
    }, fifty_nine_minutes);

    return () => {
      clearInterval(interval);
    };
  }, [nine_minutes, user]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.gray[100],
        position: "relative",
      }}
    >
      {isLogoutModelOpen && <LogoutModal />}
      <Navbar />
      <SidebarDrawer />
      <main
        style={{
          flexGrow: 1,
          zIndex: 5,
          overflow: "hidden",
          // paddingBottom: "10px",
          background: mode === "dark" ? colors.primary[600] : "#fff",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
