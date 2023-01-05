import React, {useState} from "react";
import "../styles/globals.css";
import { LayoutGroup } from "framer-motion";

import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <LayoutGroup>
      <div className="flex darkGradientBackground  min-h-screen ">
        <div className="">
          <SideBar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
        </div>
        <div className={"w-full container mx-auto py-6 lg:pb-12 px-4 lg:px-12 " + (isSidebarOpen ? "opacity-0 lg:opacity-100 ":"")}>
          <NavBar
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
          <Component {...pageProps} />
        </div>
      </div>
    </LayoutGroup>
  );
}

export default MyApp;
