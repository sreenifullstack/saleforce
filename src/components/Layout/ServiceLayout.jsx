import { FaCode, FaCodeBranch, FaRegStickyNote, FaSearch  } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdDeleteOutline, MdDisplaySettings } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { List } from "../Details";
import { Details } from "../Details";


 const sampleData = [
    {
        id:1,
        title:"rest api 1",
        service:[{name:'addIntiger' , id:1},{name:'addDivider' , id:2}]
    },
    {
        id:2,
        title:"rest api 2",
        service:[{name:'addIntiger' , id:1},{name:'addDivider' , id:2}]
    },
    {
        id:3,
        title:"rest api 3",
        service:[{name:'addIntiger' , id:1},{name:'addDivider' , id:2 }]
    }
 ]

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






const ServiceList = ({data})=>{   
    return (
      <div>
        <ul className="">
          {sampleData.map((data) => (
            <li className="my-2" key={data.id}>
              <Details summary={<List type="json" {...data} />}>
                <ul>
                  {data.service.map((list) => (
                    <li key={list.id}>
                      <List type="json" title={list.name} />
                    </li>
                  ))}
                </ul>
              </Details>
            </li>
          ))}
        </ul>
      </div>
    );
}



const Widgets = ({data})=>{
return ( 
    <div className="h-12 flex place-items-center place-content-around " >
         {data.map(({icon:Icon,id})=><div  className="w-8 h-8 p-2 bg-white" key={id}> <Icon className="w-full h-full" /> </div>)}     
    </div>
 )
}

const ServiceWrapper = ()=>{


return (<div className="px-2 border border-green-900 h-full">
<div className="flex place-items-center pt-1  mb-1"  >
      <CiSettings className=" w-5 h-5  mr-1"/>
      <h1 className="flex-1  font-semibold text-base" > All Services </h1>
      <MdDisplaySettings className="w-5 h-5" />
</div>
    <div className="ml-5">
    <ServiceList data={sampleData}/>
   </div>
</div>)
}



export const ServiceLayout = ()=>{

return (
  <>
  <div className="flex h-full">
    <div className=" w-52 flex flex-col h-full border border-green-400">
      <div className="h-12">
       <Widgets data={sampleWidgets} />
      </div>
       <div className="flex-1 bg-white">
       <ServiceWrapper />
       </div>
    </div>

    <div className="flex flex-col flex-1">
      
      <div className="h-12">
           <ul className=" ml-3 z-10 mt-4 inline-flex gap-1">
             <li className="h-8 w-36 whitespace-nowrap rounded-t-md border-2 border-b-0 border-indigo-900 bg-indigo-900 p-1 text-center text-sm text-white">Service Definition</li>
             <li className="h-8 w-36 whitespace-nowrap rounded-t-md border-2 border-b-0 border-indigo-900 bg-indigo-900 p-1 text-center text-sm text-white">Operation Definition</li>
             <li className="h-8 bg-white-200 w-36 whitespace-nowrap rounded-t-md border-2 border-b-0 border-indigo-900 border-b-white bg-white p-1 px-3 text-sm text-black">Add Integer <button className="border-red-00 float-right border-2 text-right text-xs">X</button></li>
          </ul>
      </div>

      <div className=" overflow-x-hidden z-0 -mt-0 flex-1 border-t-2 border-indigo-900">{
        <Outlet />
      }</div>
    </div>
  </div>
  </>
);
}