import { useEffect, useState } from "react";
import { RequestInput } from "./RequestInput";
import { IoMdClose } from "react-icons/io";
import { clsx } from "clsx";
import { Button } from "../../components/Elements/Button";

import { Network } from "./Network";
import { MultiTabs } from "../../components/Multitabs/MultiTabes";
import { useTab } from "../../provider/TabProvider";

import { SingleService } from "./SingleService";

const FormWrapper = ({ children }) => {
  return (
    <>
      <form>{children}</form>

      <div className="table w-full py-2 my-2  border-b-2 ">
        <p className="table-cell w-2/3">
          Default value will be used if test value is empty
        </p>
        <div className="table-cell text-right whitespace-nowrap">
          <select
            name="latency"
            id="latency"
            className="text-xs  px-2 py-1 rounded   border border-gray-400"
          >
            <option defaultValue={"default"} disabled value="m1005">
              m1000548797
            </option>
            <option value="default">m6000548797</option>
          </select>

          <button className=" ml-2 px-2 py-1 bg-indigo-900 text-white text-sm font-semibold rounded">
            SAVE AND FETCH RESPONSE
          </button>
        </div>
      </div>

      <div className="text-right">
        <button className=" uppercase text-sm px-2 py-1 font-semibold text-gray-200 bg-gray-400 mr-2 rounded ">
          cancel
        </button>
        <button className=" uppercase text-sm px-2 py-1 font-semibold text-white bg-indigo-900 rounded ">
          save operation
        </button>
      </div>
    </>
  );
};

export const Services = () => {
  const { tabItems, removeFromTab } = useTab();

  return (
    <>
      <div className="p-2 px-4 pt-3 bg-gray-100 ">
        <MultiTabs tabItems={tabItems} removeTab={removeFromTab}>
          {(data) => {
            console.log(data);
            return (
              <FormWrapper>
                <SingleService data={data} />
                <Network />
              </FormWrapper>
            );
          }}
        </MultiTabs>
      </div>
    </>
  );
};
