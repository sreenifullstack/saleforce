import { useState } from "react";
import { tableData } from "./Service";


export const Table = () => {

  return (<>
    <table className="text-sm text-center  w-full">
      <thead>
        <tr>
          <th className="border border-t-0 border-x-0   px-3 py-1 font-semibold">BOX</th>
          <th className="border border-t-0 border-x-0 px-3 py-1 font-semibold">NAME</th>
          <th className="border border-t-0 border-x-0 px-3 py-1 font-semibold">VALUE</th>
          <th className="border border-t-0 border-x-0 px-3 py-1 font-semibold">DEFAULT VALUE</th>
          <th className="border border-t-0 border-x-0 px-3 py-1 font-semibold">DATA TYPE</th>
          <th className="border border-t-0 border-x-0 px-3 py-1 font-semibold">ENCODE</th>
          <th className="border border-t-0 border-x-0 px-3 py-1 font-semibold">DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => {
          return (
            <tr key={index}>
              <td className="border border-t-0 border-l-0 px-2 py-1"> {item.box} </td>
              <td className="border border-t-0 border-l-0 px-2 py-1"> {item.name} </td>
              <td className="border border-t-0 border-l-0 px-2 py-1"> {item.value} </td>
              <td className="border border-t-0 border-l-0 px-2 py-1"> {item.defaultValue} </td>
              <td className="border border-t-0 border-l-0 px-2 py-1"> {item.dataType} </td>
              <td className="border border-t-0 border-l-0 px-2 py-1"> {item.encode} </td>
              <td className="border border-t-0 border-l-0 px-2 py-1"> {item.description} </td>
            </tr>
          );
        })}

      </tbody>
    </table>
  </>);
};
