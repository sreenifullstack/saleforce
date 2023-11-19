
import clsx from "clsx"

export const MultiTabs =({tabs , removeTab })=>{

    const handleRemove = (target) =>{}
  
    const [tabId , setActive ] = useState(1)
  
    const handleActive = ({target})=>{
     setActive( parseInt(target['dataset']['tabid']) )
    }
    
    return (
    <div className="w-full">
       <ul className="inline-flex h-8 gap-1">
       { 
        tabs.map((tab,index)=>{
        const common = " text-sm relative  rounded-t-md border-2 border-b-0  border-indigo-900 bg-indigo-900  text-semibold  px-2 py-1 "
        return (
             <li  key={index} className={ clsx(common ,  (index==tabId) ? "z-20 bg-white text-black" : "text-white"  )} >
              <a className="cursor-pointer" data-tabid={index} onClick={handleActive}>{tab.name}</a>
              <button onClick={()=>{removeTab(tab.id)}} className="ml-2"> <IoMdClose className="inline-block" /> </button> 
              <span className={clsx("absolute left-0 top-full w-full h-2 bg-white",index==tabId ? "block" : "visible" )}></span>
             </li>
            )
         })
       }
       </ul>
    <div className="relative z-10 h-64 w-full border-2 border-indigo-900  bg-white px-2"> content </div> 
    </div>)
   }