import React from "react";
import PrimarySearchAppBar from "./component/Navbar";

function Dashboard({ children }) {
  return (
    <div className="h-screen">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <div>{children}</div>
    </div>
  );
}
export default Dashboard;
