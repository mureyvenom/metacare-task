import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full flex bg-white h-screen">
      <Sidebar />
      <div className="flex-1 flex-col flex h-screen overflow-y-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
