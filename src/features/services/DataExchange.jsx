import { RequestInput } from "./RequestInput";

export const DataExchange = () => {
  return (
    <>
      <div className="z-0 w-full border-t-2 border-indigo-900 bg-white">
        <ul className="inline-flex w-full gap-2 border-b-2 border-gray-200">
          <li className="border-b-4 border-indigo-900 bg-white p-2 pb-2">
            Body
          </li>
          <li className="border-b-4 border-none border-indigo-900 bg-white p-2 pb-2">
            Header
          </li>
        </ul>
        <RequestInput />
      </div>
    </>
  );
};
