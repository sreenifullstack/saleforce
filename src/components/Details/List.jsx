import { VscJson } from "react-icons/vsc";

const DataType = {
    'json': VscJson
};
export const List = ({ type = 'json', title }) => {
    let Icon = DataType[type];
    return (<div className="inline-block"><Icon className=" mr-1 inline" /><span className="text-base">{title}</span></div>);
};
