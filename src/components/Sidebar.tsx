import { ReactNode, useEffect, useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import { sideBarData } from "../utils/fakeData";

export interface SidebarItemProps {
  title: string;
  icon: ReactNode;
  hasDropDown?: boolean;
  dropdownItems?: { title: string; url?: string; active?: boolean }[];
}

const SideBarItem = ({
  hasDropDown,
  dropdownItems,
  title,
  icon,
}: SidebarItemProps) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (dropdownItems?.find((item) => item.active === true)) {
      setActive(true);
    }
  }, [dropdownItems]);

  return (
    <div className="w-full pr-5 text-bodyText transition-all duration-300 mb-8">
      <button
        className="w-full"
        onClick={hasDropDown ? () => setActive(!active) : undefined}
      >
        <div
          className={`flex transition-all duration-300 hover:text-primary justify-between items-center ${
            hasDropDown && dropdownItems?.find((item) => item.active === true)
              ? "text-primary"
              : ""
          }`}
        >
          <div className="flex items-center gap-x-5">
            {icon} {title}
          </div>
          <div className="text-[#E5E4EF]">
            {!active ? (
              <HiOutlineChevronRight size={15} />
            ) : (
              <HiOutlineChevronDown size={15} />
            )}
          </div>
        </div>
      </button>
      {hasDropDown ? (
        <div
          className={`pl-9 flex flex-col gap-y-2 mt-3 origin-top transform transition-all duration-300 ${
            active
              ? "h-auto opacity-100 scale-100"
              : "h-0 overflow-hidden opacity-0 scale-0"
          }`}
        >
          {dropdownItems?.map((item, i) => (
            <button
              key={i}
              className={`text-left transition-all duration-300 hover:text-text-black ${
                item.active ? "text-text-black" : ""
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-[262px] h-screen overflow-y-auto p-5 border-r-[1px] border-r-[#ECEBF5]">
      <button className="w-full border-[1px] border-[#ECEBF5] rounded-lg py-3 px-9 flex mb-7">
        <div className="h-[30px] w-[20px] mr-3"></div>
        <div>
          <p className="text-sm text-text-black text-left">Metacare</p>
          <p className="text-xs text-bodyText">adeyinka@metacare.app</p>
        </div>
      </button>
      <div>
        {sideBarData.map((data: SidebarItemProps, i: number) => (
          <SideBarItem
            key={i}
            icon={data.icon}
            title={data.title}
            hasDropDown={data.hasDropDown}
            dropdownItems={data.dropdownItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
