"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "@/components/navbar/Navbar";
import { ColorModeContext, useMode } from "./theme";
import { useTheme } from "@mui/material";
import { tokens } from "./theme";
import StateProvider from "@/redux/provider";
import SidebarDrawer from "@/components/sidebar/SidebarDrawer";

const inter = Inter({ subsets: ["latin"] });

// METHOD A layout WORK WITH METHOD A provider LAYOUT IN provider.js
export default function RootLayout({ children }) {
  const [theme, colorMode] = useMode();
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
  const colors = tokens(theme.palette.mode);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.primary[100],
      }}
    >
      <Navbar />
      <SidebarDrawer />
      {children}
    </div>
  );
}
