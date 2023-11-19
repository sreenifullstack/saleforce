import { FaCode, FaCodeBranch, FaRegStickyNote, FaSearch  } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdDeleteOutline, MdDisplaySettings } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { Outlet, useOutletContext } from "react-router-dom";
import { List } from "../Details";
import { Details } from "../Details";
import { useDispatch, useSelector } from "react-redux";
import { addServices, apiService } from "../../store/ApiServiceSlice";
import { useCallback, useState } from "react";
import { useTab } from "../../provider/TabProvider";

const sampleData = [
  {
    id: 1,
    title: "rest api 1",
    service: [
      { name: "addIntiger", id: 1 },
      { name: "addDivider", id: 2 },
    ],
  },
  {
    id: 2,
    title: "rest api 2",
    service: [
      { name: "addIntiger", id: 1 },
      { name: "addDivider", id: 2 },
    ],
  },
  {
    id: 3,
    title: "rest api 3",
    service: [
      { name: "addIntiger", id: 1 },
      { name: "addDivider", id: 2 },
    ],
  },
];

const AddService = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addServices());
  };

  return (
    <button className="block w-full h-full">
      <FaPlus />
    </button>
  );
};

const sampleWidgets = [
  {
    id: 1,
    label: "Add",
    icon: AddService,
  },
  {
    id: 2,
    label: "Copy",
    icon: MdContentCopy,
  },
  {
    id: 3,
    label: "Dev",
    icon: FaCode,
  },
  {
    id: 4,
    label: "Branch",
    icon: FaCodeBranch,
  },
  {
    id: 5,
    label: "Delete",
    icon: MdDeleteOutline,
  },
  {
    id: 6,
    label: "Search",
    icon: FaSearch,
  },
];

const ServiceList = ({ data }) => {
  const { addToTab } = useTab();
  addToTab(data[0]);
  return (
    <div>
      <ul className="">
        {data.map((data) => (
          <li className="my-0" key={data.id}>
            <Details summary={<List type="json" {...data} />}>
              <ul>
                {data.services.map((list) => (
                  <li key={list.id}>
                    <List
                      onClick={() => addToTab(data)}
                      type="json"
                      title={list.name}
                    />
                  </li>
                ))}
              </ul>
            </Details>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Widgets = ({ widget }) => {
  return (
    <div className="h-12 flex place-items-center place-content-around ">
      {widget.map(({ icon: Icon, id }) => (
        <div className="w-8 h-8 p-2 bg-white" key={id}>
          <Icon className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

const ServiceWrapper = ({ children }) => {
  return (
    <div className="px-2 border border-green-900 h-full">
      <div className="flex place-items-center pt-1  mb-1">
        <CiSettings className=" w-4 h-4  mr-1" />
        <h1 className="flex-1  font-semibold text-sm"> All Services </h1>
        <MdDisplaySettings className="w-4 h-4" />
      </div>
      <div className="ml-5">{children}</div>
    </div>
  );
};

export const ServiceLayout = () => {
  const services = useSelector((state) => state[apiService]);

  return (
    <>
      <div className="flex h-full text-sm ">
        <div className=" w-52 flex flex-col h-full border border-green-400">
          <div className="h-12">
            <Widgets widget={sampleWidgets} />
          </div>
          <div className="flex-1 bg-white">
            <ServiceWrapper>{<ServiceList data={services} />}</ServiceWrapper>
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-x-hidden ">
          {<Outlet />}
        </div>
      </div>
    </>
  );
};

