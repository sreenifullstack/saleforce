import { useState } from "react";
import { CiCirclePlus , CiCircleMinus } from "react-icons/ci";
import { VscJson } from "react-icons/vsc";
import { FaCode, FaCodeBranch, FaRegStickyNote, FaSearch  } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdDeleteOutline, MdDisplaySettings } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { Outlet } from "react-router-dom";
const type = {
    "json" : '{}',
    "xml"  :  '{}'
}

 const sampleData = [
    {
        id:1,
        title:"rest api 1",
        service:[{name:'addIntiger'},{name:'addDivider'}]
    },
    {
        id:2,
        title:"rest api 2",
        service:[{name:'addIntiger'},{name:'addDivider'}]
    },
    {
        id:3,
        title:"rest api 3",
        service:[{name:'addIntiger'},{name:'addDivider'}]
    }
 ]





 const Service = ({data})=>{
    
    const [expand ,setExpand] = useState(false);
    const  {id, title, service} = data;

    const handleExpand = (target)=>{
        setExpand(!expand)
    }
    
    return (
      <>
          <div className="w-full">
            <div onClick={handleExpand} className=" flex place-items-center">
              {expand ? (
                <CiCircleMinus className="mr-1 " />
              ) : (
                <CiCirclePlus className="mr-1 " />
              )}

              <VscJson className="mr-1 fill-blue-500" />
              <p className="text-base"> {title} </p>
            </div>

            {expand && (
              <ul className="ml-5">
                {service.map((list) => (
                  <li key={list.id} className="flex place-items-center">
                    <FaRegStickyNote className="mr-1" />
                    {list.name}
                  </li>
                ))}
              </ul>
            )}
         
        </div>
      </>
    );
}


const ServiceList = ()=>{

    return (
        <>
          <div className="border-2 h-full bg-white border-green-500">
           <div className="flex py-2 px-1  place-items-center  w-full" >    
           <CiSettings className="mr-2 w-5 h-5"  />
           <p className="flex-1 font-semibold  text-base "> All Services</p>
           <MdDisplaySettings  className=" w-5 h-5 " />      
           </div>
           <div className="ml-5 mt-0">
              {sampleData.map((data) =><Service  key={data.id} data={data} /> )}
           </div>
          </div>
        </>
      );

}



const sampleWidgets = [
    {
        id:1,
        label:'Add',
        icon :FaPlus,
    },
    {
        id:2,
        label:'Copy',
        icon :MdContentCopy,
    },
    {
        id:3,
        label:'Dev',
        icon :FaCode,
    },
    {
        id:4,
        label:'Branch',
        icon :FaCodeBranch,
    },
    {
        id:5,
        label:'Delete',
        icon : MdDeleteOutline,
    },
    {
        id:6,
        label:'Search',
        icon : FaSearch,
    }


    
]


const Widgets =()=>{
    return (
      <>
        <ul className="w-full my-2 flex   place-content-around gap-1">{
            sampleWidgets.map(({ icon:Icon , id })=>{
                return<li  className=" bg-white flex-1 p-2  border border-white" key={id}> <Icon className="w-full h-full" /> </li>
            })
        }</ul>
      </>
    );
} 

export const ServiceLayout = ()=>{

return(<>
   <div className="flex">
      <div className="w-56 px-2 flex flex-col h-screen bg-gray-2000">
      <Widgets/>
      <ServiceList/>
      </div>
      <div className="flex-1">
        <Outlet/>
      </div> 
   </div> 
</>)
}




////////////////////////////////////////////

import { useState } from "react";
import { CiCirclePlus , CiCircleMinus } from "react-icons/ci";
import { VscJson } from "react-icons/vsc";
import { FaCode, FaCodeBranch, FaRegStickyNote, FaSearch  } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdDeleteOutline, MdDisplaySettings } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";


const type = {
    "json" : '{}',
    "xml"  :  '{}'
 }

 const sampleData = [
    {
        id:1,
        title:"rest api 1",
        service:[{name:'addIntiger'},{name:'addDivider'}]
    },
    {
        id:2,
        title:"rest api 2",
        service:[{name:'addIntiger'},{name:'addDivider'}]
    },
    {
        id:3,
        title:"rest api 3",
        service:[{name:'addIntiger'},{name:'addDivider'}]
    }
 ]





 const Service = ({data})=>{
    
    const [expand ,setExpand] = useState(false);
    const  {id, title, service} = data;

    const handleExpand = (target)=>{
        setExpand(!expand)
    }
    
    return (
      <>
          <div className="w-full">
            <div onClick={handleExpand} className=" flex place-items-center">
              {expand ? (
                <CiCircleMinus className="mr-1 " />
              ) : (
                <CiCirclePlus className="mr-1 " />
              )}

              <VscJson className="mr-1 fill-blue-500" />
              <p className="text-base"> {title} </p>
            </div>

            {expand && (
              <ul className="ml-5">
                {service.map((list) => (
                  <li key={list.id} className="flex place-items-center">
                    <FaRegStickyNote className="mr-1" />
                    {list.name}
                  </li>
                ))}
              </ul>
            )}
         
        </div>
      </>
    );
}


const ServiceList = ()=>{

    return (
        <>
          <div className="border-2 h-full bg-white border-green-500">
           <div className="flex py-2 px-1  place-items-center  w-full" >    
           <CiSettings className="mr-2 w-5 h-5"  />
           <p className="flex-1 font-semibold  text-base "> All Services</p>
           <MdDisplaySettings  className=" w-5 h-5 " />      
           </div>
           <div className="ml-5 mt-0">
              {sampleData.map((data) =><Service  key={data.id} data={data} /> )}
           </div>
          </div>
        </>
      );

}

import { MdContentCopy } from "react-icons/md";

const sampleWidgets = [
    {
        id:1,
        label:'Add',
        icon :FaPlus,
    },
    {
        id:2,
        label:'Copy',
        icon :MdContentCopy,
    },
    {
        id:3,
        label:'Dev',
        icon :FaCode,
    },
    {
        id:4,
        label:'Branch',
        icon :FaCodeBranch,
    },
    {
        id:5,
        label:'Delete',
        icon : MdDeleteOutline,
    },
    {
        id:6,
        label:'Search',
        icon : FaSearch,
    }    
]


const Widgets =()=>{
    return (
      <>
        <ul className="w-full my-2 flex   place-content-around gap-1">{
            sampleWidgets.map(({ icon:Icon , id })=>{
                return<li  className=" bg-white flex-1 p-2  border border-white" key={id}> <Icon className="w-full h-full" /> </li>
            })
        }</ul>
      </>
    );
} 

export const Services = ()=>{

return(<>
   <div className="w-56 px-2 flex flex-col h-screen bg-gray-200">
      <Widgets/>
      <ServiceList/>
   </div> 
</>)
}