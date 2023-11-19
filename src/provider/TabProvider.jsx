import { createContext, useContext, useState } from "react";

const TabContext = createContext({
  tabItems: [],
  addToTab: () => {},
  removeFromTab: () => {},
});

const TabProvider = ({ children }) => {
  const [tabItems, setTabItems] = useState([]);

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
