import { createContext, useContext, useEffect, useState } from "react";

const TabContext = createContext({
  tabItems: [],
  addToTab: () => {},
  removeFromTab: () => {},
});

const TabProvider = ({ children }) => {
  const [tabItems, setTabItems] = useState([]);
  useEffect(()=>{
    setTabItems( [{
      id: "357c178e-dff3-47fd-9aa0-ad2f9f4f0bb4",
      title: "rest api 2",
      services: [
        {
          id: "1dce715e-ef16-45d2-b74a-965d1056e1f1",
          box: 2,
          name: "String 3",
          value: "description",
          testValue: "Some text",
          defaultValue: "",
          dataType: "string",
          encode: "decode",
          description: '<input type="checkbox">',
        },
        {
          id: "711af363-67fe-4bff-bf9f-4d63bf6456b8",
          box: 2,
          name: "Bool 4",
          value: "status",
          testValue: true,
          defaultValue: "",
          dataType: "boolean",
          encode: "decode",
          description: '<input type="checkbox">',
        },
      ],
    },
    {
      id: "191960cb-acc6-43fa-9790-ef291b0ec0c7",
      title: "rest api 3",
      services: [
        {
          id: "e8f5ee85-5b0d-4173-b3e0-bf39d87dbf35",
          box: 3,
          name: "Date 5",
          value: "date",
          testValue: "2023-11-19",
          defaultValue: "",
          dataType: "date",
          encode: "decode",
          description: '<input type="checkbox">',
        },
      ],
    },
  ])
  },[])

  const addToTab = (item) => {
    let tab = [...tabItems].filter((tab) => tab.id === item.id);
    if (tab.length) return;
    setTabItems([...tabItems, item]);
  };

  const removeFromTab = (item) => {
    let tab = [...tabItems].filter((tab) => tab.id === item.id);
    if (!tab.length) return;
    setTabItems([...tabItems].filter((tab) => tab.id !== item.id));
  };

  return (
    <TabContext.Provider value={{ tabItems, addToTab, removeFromTab }}>
      {children}
    </TabContext.Provider>
  );
};

const useTab = () => {
  return useContext(TabContext);
};

export { TabContext, TabProvider, useTab };
