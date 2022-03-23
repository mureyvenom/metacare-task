import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="w-full px-8 py-3 border-b-[1px] border-b-[#ECEBF5] md:flex justify-between items-center sticky">
      <div>
        <div className="md:h-[54px] bg-[#FAFAFC] flex items-center md:w-[440px] text-[#A3A3C2] justify-between px-4 rounded-[10px]">
          <input
            type="search"
            className="outline-none flex-1 bg-[#FAFAFC]"
            placeholder="Ask us any question"
          />
          <button>
            <FiSearch />
          </button>
        </div>
      </div>
      <div className="flex px-5 py-3 border-[1px] border-[#ECEBF5] rounded-lg items-center">
        <button className="flex-1 flex pr-6 border-r-[1px] border-r-[#ECEBF5] items-center py-1">
          <BsBell color="#92929D" />
          <span className="h-4 w-4 rounded bg-error text-white flex justify-center items-center ml-2 text-xs">
            3
          </span>
        </button>
        <button className="ml-6 flex-1 flex items-center">
          <div className="h-8 w-8 rounded-full border-[1px] border-primary mr-3"></div>
          <BiChevronDown color="#696D8C" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
