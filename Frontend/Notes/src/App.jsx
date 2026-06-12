import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

export const AppContext = createContext();

export default function App() {
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}
