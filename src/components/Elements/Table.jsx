import { useState } from "react";
import { clsx } from "clsx";
import { IoClose } from "react-icons/io5";

const tableData = [
  {
    Box: '<input type="checkbox">',
    name: "Int 1",
    value: "request",
    testValue: 2,
    defaultValue: "",
    dataType: "string",
    encode: "encode",
    description: "monospace",
  },
  {
    Box: '<input type="checkbox">',
    name: "Float 2",
    value: "response",
    testValue: 3.14,
    defaultValue: "",
    dataType: "float",
    encode: "encode",
    description: "monospace",
  },
  {
    Box: "None",
    name: "String 3",
    value: "description",
    testValue: "Some text",
    defaultValue: "",
    dataType: "string",
    encode: "decode",
    description: "None",
  },
  {
    Box: "None",
    name: "Bool 4",
    value: "status",
    testValue: true,
    defaultValue: "",
    dataType: "boolean",
    encode: "decode",
    description: "None",
  },
  {
    Box: "None",
    name: "Date 5",
    value: "date",
    testValue: "2023-11-19",
    defaultValue: "",
    dataType: "date",
    encode: "decode",
    description: "None",
  },
];

const SelectBox = () => {
  const [select, setSelect] = useState(true);

  return (
    <button
      // onClick={() => setSelect(!select)}
      className={clsx(
        "w-4 h-4  text-xs bg-gray-200 border rounded",
        select ? "bg-indigo-900" : "border-gray-400 "
      )}
    >
      {select && <IoClose className="w-full h-full fill-white " />}
    </button>
  );
};

export const Table = ({ data }) => {
  return (
    <>
      <table className="text-sm text-center  w-full">
        <thead>
          <tr>
            <th className="border border-t-0 border-l-0   px-3 py-1 font-semibold">
              <SelectBox />
            </th>
            <th className="border border-t-0 border-l-0 px-3 py-1 font-semibold">
              NAME
            </th>
            <th className="border border-t-0 border-l-0 px-3 py-1 font-semibold">
              VALUE
            </th>
            <th className="border border-t-0 border-l-0 px-3 py-1 font-semibold">
              DEFAULT VALUE
            </th>
            <th className="border border-t-0 border-l-0 px-3 py-1 font-semibold">
              DATA TYPE
            </th>
            <th className="border border-t-0 border-l-0 px-3 py-1 font-semibold">
              ENCODE
            </th>
            <th className="border border-t-0 border-l-0 px-3 py-1 font-semibold">
              DESCRIPTION
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border border-t-0 border-l-0 px-2 py-1">
                  <SelectBox />
                </td>
                <td className="border border-t-0 border-l-0 px-2 py-1">
                  {item.name}
                </td>
                <td className="border border-t-0 border-l-0 px-2 py-1">
                  {item.value}
                </td>
                <td className="border border-t-0 border-l-0 px-2 py-1">
                  {item.defaultValue}
                </td>
                <td className="border border-t-0 border-l-0 px-2 py-1">
                  {item.dataType}
                </td>
                <td className="border border-t-0 border-l-0 px-2 py-1">
                  {item.encode}
                </td>
                <td className="border border-t-0 border-l-0 px-2 py-1">
                  {item.description}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
