
import { NavLink, Outlet } from "react-router-dom";
import {
  CubeIcon,
  CloudIcon,
  SquaresPlusIcon,
  WrenchScrewdriverIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";


//services
//category
//Support
//Cloud
//Setting

const navigation = [
    {
      id: 1,
      label: "services",
      icon: CubeIcon,
      link: "/services",
    },
    {
      id: 2,
      label: "category",
      icon: SquaresPlusIcon,
      link: "/category",
    },
    {
      id: 3,
      label: "support",
      icon: ChatBubbleOvalLeftEllipsisIcon,
      link: "/support",
    },
    {
      id: 4,
      label: "cloud",
      icon: CloudIcon,
      link: "/cloud",
    },
    {
      id: 5,
      label: "setting",
      icon: WrenchScrewdriverIcon,
      link: "/setting",
    },
  ];


 export  const MainLayout = () => {
    return (
      <>
        <div className=" w-full h-full flex flex-row">
          <div className="w-14 h-full bg-indigo-800">
            <ul className="w-full">
              {navigation.map(({ id, icon: Icon, link }) => {
                return (
                  
                    <li key={id} className="w-14">
                      <NavLink to={link}>
                        {({ isActive }) => (
                          <Icon
                            className={clsx(
                              "p-3 stroke-1",
                              isActive
                                ? "stroke-white bg-indigo-900"
                                : "stroke-gray-200"
                            )}
                          />
                        )}
                      </NavLink>
                    </li>   
                
                );
              })}
            </ul>
          </div>
          <div className="bg-gray-200 flex-1">
            <Outlet />
          </div>
        </div>
      </>
    );
  };
