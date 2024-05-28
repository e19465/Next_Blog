"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { useTheme } from "@mui/material";
import { tokens } from "./theme";
import StateProvider from "@/redux/provider";
import SidebarDrawer from "@/components/sidebar/SidebarDrawer";
import Footer from "@/components/footer/Footer";
import { useSelector } from "react-redux";
import LogoutModal from "@/components/models/logout/LogoutModal";

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
