import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";
import { useState } from "react";

const GoalLayout = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex h-screen">
      <div className={`fixed h-screen border-r bg-slate-200 transition-width duration-300 ${toggle ? 'w-[200px]' : 'w-0 overflow-hidden'}`}>
        <Sider toggle={toggle} setToggle={setToggle} />
      </div>
      <div className={`flex-grow h-full flex justify-end`}>
        <div className="w-[calc(100vw-270px)] h-full p-2 border rounded-md m-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default GoalLayout;
