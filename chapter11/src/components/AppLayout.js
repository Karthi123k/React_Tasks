import Head from "./Head";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "../utils/UserContext";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Thurbilli Karthik",
    email: "karthikthuribilli@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Head />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

export default AppLayout;