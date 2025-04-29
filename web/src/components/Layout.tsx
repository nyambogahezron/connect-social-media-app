
import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-agline-background flex flex-col">
      <AppNavbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
