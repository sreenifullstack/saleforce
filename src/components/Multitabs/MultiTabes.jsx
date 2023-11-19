
import clsx from "clsx"
import { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useTab } from "../../provider/TabProvider";

export const MultiTabs = ({ tabItems, removeTab, children }) => {
  const [tabId, setActive] = useState(0);

  const handleActive = ({ target }) => {
    setActive(parseInt(target["dataset"]["tabid"]));
  };

  return (
    <div className="w-full">
      <ul className="flex h-8 gap-1 ml-4">
        {tabItems.map((tab, index) => {
          const common =
            "  relative ml-0 rounded-t-md border-2 border-b-0  border-indigo-900 bg-indigo-900  text-semibold  px-2 py-1 ";
          return (
            <li
              key={index}
              className={clsx(
                common,
                index == tabId ? "z-20 bg-white text-black" : "text-white"
              )}
            >
              <a
                className="cursor-pointer"
                data-tabid={index}
                onClick={handleActive}
              >
                {tab.title}
              </a>
              <button
                onClick={() => {
                  removeTab(tab);
                }}
                className="ml-2"
              >
                <IoMdClose className="inline-block" />{" "}
              </button>
              <span
                className={clsx(
                  "absolute left-0 top-full w-full h-2 bg-white",
                  index == tabId ? "block" : "visible"
                )}
              ></span>
            </li>
          );
        })}
      </ul>
      <div className="relative z-10  rounded-sm w-full border-t-2 border-indigo-900  bg-white px-2">
        {tabItems.length ? children(tabItems[tabId]) : "select the Field"}
      </div>
    </div>
  );
};