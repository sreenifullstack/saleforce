import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export const Details = ({ summary, children }) => {
    const [expand, setExpand] = useState(false);
    const handleExpand = (target) => {
        setExpand(!expand);
    };
    const Indication = expand ? CiCircleMinus : CiCirclePlus;
    return (
        <>
            <div className="max-w-xs">
                <div className="cursor-pointer" onClick={handleExpand}>
                    <Indication className=" w-4 h-4 stroke-1  mr-1 inline-block" />
                    {summary}
                </div>
                {expand && <div className="ml-5">{children}</div>}
            </div>
        </>
    );
};
