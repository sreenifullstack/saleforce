import { useEffect, useState } from "react";
import { RequestInput } from "./RequestInput";
import { IoMdClose } from "react-icons/io";
import { clsx } from "clsx";
import { Button } from "./Button";



export const tableData = [
  {
    "box": 1,
    "name": "Int 1",
    "value": "request",
    "testValue": 2,
    "defaultValue": "",
    "dataType": "string",
    "encode": "encode",
    "description": "<input type=\"checkbox\">"
  },
  {
    "box": 1,
    "name": "Float 2",
    "value": "response",
    "testValue": 3.14,
    "defaultValue": "",
    "dataType": "float",
    "encode": "encode",
    "description": ""
  },
  {
    "box": 1,
    "name": "String 3",
    "value": "description",
    "testValue": "Some text",
    "defaultValue": "",
    "dataType": "string",
    "encode": "decode",
    "description": "This is a string input field with a test value of \"Some text\"."
  },
  {
    "box": 1,
    "name": "Bool 4",
    "value": "status",
    "testValue": true,
    "defaultValue": "",
    "dataType": "boolean",
    "encode": "decode",
    "description": "This is a boolean input field with a test value of true."
  },
  {
    "box": 1,
    "name": "Date 5",
    "value": "date",
    "testValue": "2023-11-19",
    "defaultValue": "",
    "dataType": "date",
    "encode": "decode",
    "description": "This is a date input field with a test value of 2023-11-19."
  }
]

const Forms = ()=>{
  return(<>
  <form >
    <div className="flex  flex-col gap-2">
      <div className="flex w-full flex-row">
        <div className="flex flex-1 flex-col">
          <label htmlFor="name"> Name </label>
          <input id="name" className="mt-1 border px-2 py-1 focus:border-gray-400 focus:outline-0" type="string" />
        </div>

        <div className="flex w-2/5 flex-col whitespace-nowrap">
          <label htmlFor="name"> Operationl Security Level </label>
          <input id="name" className="mt-1 border px-2 py-1 focus:border-gray-400 focus:outline-0" type="string" />
        </div>
      </div>

      <div className="flex flex-col">
        <label>Target Url</label>
        <div className="flex">
          <input className="mt-1 table-cell w-2/5 border px-2 py-1 focus:border-gray-400 focus:outline-0" type="text" />
          <input className="mt-1 table-cell w-3/5 border px-2 py-1 focus:border-gray-400 focus:outline-0" type="text" />
        </div>
      </div>

      <details>
        <summary>Advanced</summary>
      </details>

      <div className="flex flex-col">
        <label>Descriptions</label>
        <textarea className="mt-1 h-12 resize-none border px-2 focus:border-gray-400 focus:outline-none"></textarea>
      </div>
    </div>
  </form>  </>)
}





const DataExchange = ()=>{
  return (
    <>
    <div className="z-0 w-full border-t-2 border-indigo-900 bg-white">
      <ul className="inline-flex w-full gap-2 border-b-2 border-gray-200">
        <li className="border-b-4 border-indigo-900 bg-white p-2 pb-2">Body</li>
        <li className="border-b-4 border-none border-indigo-900 bg-white p-2 pb-2">Header</li>
      </ul>
    <RequestInput/>
    </div>

    </>
  )
}

const Network =()=>{
  return(
  <>
     <div className="z-10 h-10 bg-white">
           <ul className="z-10 ml-3 mt-2 inline-flex gap-1">
             <li className="bg-white-200 h-8 w-36 whitespace-nowrap rounded-t-md border-2 border-b-0 border-indigo-900 border-b-white bg-white p-1 px-3 text-sm text-black">Request Input<button className="border-red-00 float-right border-2 text-right text-xs">X</button></li>
             <li className="h-8 w-36 whitespace-nowrap rounded-t-md border-2 border-b-0 border-indigo-900 bg-indigo-900 p-1 text-center text-sm text-white">Response Input</li>
           </ul>
     </div>
     <DataExchange/>
  </>)

}







const sampleTab = [
  { id : 1,
    name:'service Definition',
    content : 'service definition',
    active : true,
  },
  
  {
    id:2,
    name:'Operation Definition',
    content : 'Operation definition',
    active : false, 
  },
  
  {
    id:3,
    name:'Add Integer',
    content : 'Add Integer',
    active : false, 

  },

]


export const Services = ()=>{

  const [tabs , setTabs] = useState([]) 
  
  useEffect(()=>{
     setTabs(sampleTab);
  },[])

  const removeTab = (id)=>{
    console.log(id);
    console.log(tabs.filter( tab => tab.id !== id));
    setTabs( tabs.filter( tab => tab.id !== id) );
  }

  return (<>
    <div className="p-2 px-4 pt-3 bg-white  border border-red-500">
      {/* <Forms/> */}
      <MultiTabs tabs={tabs}  removeTab={removeTab} />
      {/* <Network/> */}
    </div>
  </>)


}
