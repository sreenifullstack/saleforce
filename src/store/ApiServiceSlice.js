import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidV4 } from "uuid";

const generateID = () => {
  return uuidV4();
};

console.log((window.gen = generateID));

const sampleService = [
  {
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
];

const getLocalStorage = (key) => {
  let data = localStorage.getItem(key);
  data = data && JSON.parse(data);
  return data;
};

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getInitialValue = () => {
  let data = getLocalStorage("salesforce-api-service");
  !data && (data = setLocalStorage("salesforce-api-service", sampleService));
  return data;
};

const ApiServiceSlice = createSlice({
  name: "apiService",
  initialState: getInitialValue(),
  reducers: {
    addServices: (state, action) => {
      console.log(state, action, " addServices");
    },
    removeServices: (state, action) => {
      console.log(state, action, "remove services");
    },
  },
});

console.log(ApiServiceSlice.name);
export const { addServices, removeServices } = ApiServiceSlice.actions;
export const apiService = ApiServiceSlice.name;
export default ApiServiceSlice.reducer;
