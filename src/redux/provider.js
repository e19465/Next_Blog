"use client";

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { ColorModeContext, useMode } from "@/app/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

// METHOD A PROVIDER WORK WITH METHOD A ROOT LAYOUT IN layout.js
export default function StateProvider({ children }) {
  const [theme, colorMode] = useMode();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
      </PersistGate>
    </Provider>
  );
}

// METHOD B PROVIDER WORK WITH METHOD B ROOT LAYOUT IN layout.js
// "use client";

// import { Provider } from "react-redux";
// import { store, persistor } from "./store";
// import { PersistGate } from "redux-persist/integration/react";

// export default function StateProvider({ children }) {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {children}
//       </PersistGate>
//     </Provider>
//   );
// }
