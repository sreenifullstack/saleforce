import { DataExchange } from "./DataExchange";

export const Network = () => {
  return (
    <>
      <div className="z-10 h-10 bg-white">
        <ul className="z-10 ml-3 mt-2 inline-flex gap-1">
          <li className="  bg-white-200 h-8 w-36 whitespace-nowrap rounded-t-md border-2 border-b-0 border-indigo-900 border-b-white bg-white p-1 px-3 text-sm text-black">
            Request Input
          </li>
          <li className="  h-8 w-36 whitespace-nowrap rounded-t-md border-2 border-b-0 border-indigo-900 bg-indigo-900 p-1 text-center text-sm text-white">
            Response Output
          </li>
        </ul>
      </div>
      <DataExchange />
    </>
  );
};
