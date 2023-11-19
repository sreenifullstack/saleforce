import { FaIcons, FaPlus } from "react-icons/fa";
import { SearchBar } from "../../components/Elements/SearchBar";
import { Table } from "../../components/Elements/Table";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Button } from "../../components/Elements/Button";

export const RequestInput = () => {
  return (
    <>
      <div className="my-2">
        <div className="text-right">
          <label className="mr-3 ">Enable Passthrough :</label>
          <input type="checkbox" />
          Input body ?
        </div>
      </div>

      <div className="w-full">
        <Button className="text-black font-semibold inline-flex justify-center place-items-center">
          <FaPlus className="inline-block fill-green-300 mr-1 stroke-0 w-sm h-sm align-base-line" />
          Add Parameter
        </Button>

        <div className="mx-2 inline-block ">
          <Button className=" rounded-none rounded-l-sm text-gray-400 font-medium inline-flex justify-center place-items-center">
            <FaPlus className="inline-block fill-yellow-300 mr-1 stroke-0 w-sm h-sm align-base-line" />
            Copy
          </Button>

          <Button className=" rounded-none text-gray-400 font-medium inline-flex justify-center place-items-center">
            <FaPlus className="inline-block fill-green-300 mr-1 stroke-0 w-sm h-sm align-base-line" />
            Paste
          </Button>

          <Button className=" rounded-none rounded-r-sm text-gray-400 font-medium inline-flex justify-center place-items-center">
            <FaPlus className="inline-block fill-red-300 mr-1 stroke-0 w-sm h-sm align-base-line" />
            Delete
          </Button>
        </div>

        <div className="inline-block">
          <Button className=" rounded-none text-gray-400 font-medium inline-flex justify-center place-items-center">
            <MdOutlineKeyboardDoubleArrowUp className="block fill-green-300 mr-1 stroke-0  align-base-line" />
          </Button>

          <Button className=" rounded-none rounded-r-sm text-gray-400 font-medium inline-flex justify-center place-items-center">
            <MdOutlineKeyboardDoubleArrowDown className="inline-block fill-red-300 mr-1 stroke-0  align-base-line" />
          </Button>
        </div>

        <div className="float-right inline-block mt-4">
          <span className="align-top">Request Template : </span>
          <Button className=" mr-2 text-gray-400  font-medium inline-flex justify-center rounded place-items-center">
            Show
          </Button>

          <Button className=" bg-indigo-800 text-white font-medium inline-flex justify-center rounded place-items-center">
            Hide
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-right mb-2">
          <SearchBar />
        </div>
        <div className="border h-64 ">
          <Table />
        </div>
      </div>
    </>
  );
};
