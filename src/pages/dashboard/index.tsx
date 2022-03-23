import { ReactNode } from "react";
import { FiSearch } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BsCalendar } from "react-icons/bs";

const data = [
  {
    name: "Jan",
    "high priority": 5,
  },
  {
    name: "Feb",
    "high priority": 18,
  },
  {
    name: "Mar",
    "high priority": 45,
  },
  {
    name: "April",
    "high priority": 35,
  },
  {
    name: "May",
    "high priority": 20,
  },
  {
    name: "Jun",
    "high priority": 30,
  },
  {
    name: "July",
    "high priority": 40,
  },
  {
    name: "Aut",
    "high priority": 32,
  },
];

interface TabButtonProps {
  children: ReactNode;
  active?: boolean;
}

const TabButton = ({ children, active }: TabButtonProps) => {
  return (
    <button
      className={`py-4 border-b-2 duration-300 transition-all hover:text-text-black ${
        active
          ? "border-b-primary text-text-black"
          : "border-b-white text-bodyText"
      }`}
    >
      {children}
    </button>
  );
};

const Dashboard = () => {
  return (
    <>
      <div className="px-10 border-b-[1px] border-b-[#ECEBF5] flex gap-x-10">
        <TabButton active>Efficiency</TabButton>
        <TabButton>Volume</TabButton>
        <TabButton>Customer Satisfaction</TabButton>
        <TabButton>Backlog</TabButton>
      </div>
      <div className="py-9 px-10 flex justify-between items-center">
        <div className="text-2xl font-semibold text-text-black">
          Efficiency Analytics
        </div>
        <div className="flex items-center">
          <div className="h-11 w-[350px] mr-6 border-[1px] text-[#A3A3C2] border-[#ECEBF5] rounded-lg overflow-hidden px-4 flex items-center">
            <FiSearch />
            <input
              type="search"
              className="placeholder:text-[#A3A3C2] outline-none ml-4 flex-1"
              placeholder="Search"
            />
          </div>
          <div className="mr-4 h-11 w-40 border-[1px] border-[#ECEBF5] rounded-lg overflow-hidden px-4">
            <select className="h-full w-full outline-none text-text-black">
              <option>Filter Options</option>
            </select>
          </div>
          <div className="pl-4 border-l-[1px] border-l-[ECEBF5]">
            <button className="bg-[#25BB87] text-white rounded-lg h-11 px-7 transition-all duration-300 hover:shadow-lg">
              Export
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll">
        <div className="mx-10 rounded-[10px] border-[1px] border-[#ECEBF5] flex mb-6 max-h-[314px]">
          <div className="flex-1 self-stretch px-6 py-7 flex flex-col">
            <div className="flex justify-between mb-7">
              <div className="flex items-center">
                <div className="font-semibold text-lg mr-7">
                  Average response Time
                </div>
                <div className="bg-[#25BB871A] py-1 text-xs px-3 rounded text-[#25BB87] font-semibold">
                  +4.14%
                </div>
              </div>
              <div className="flex items-center">
                <div className="font-medium text-text-black flex items-center text-sm pr-4 border-r-[1px] border-r-[#E1E1EB]">
                  <div className="h-[10px] w-[10px] rounded-[2px] bg-[#F05D23] mr-2"></div>{" "}
                  High Priority
                </div>
                <div>
                  <div className="ml-4 h-11 w-40 border-[1px] border-[#ECEBF5] rounded-lg overflow-hidden px-4 flex justify-between items-center text-sm text-text-black">
                    This Month <BsCalendar />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid horizontal vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis
                    type="number"
                    domain={[0, 50]}
                    ticks={[0, 10, 20, 30, 40, 50]}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="high priority"
                    stroke="#F05D23"
                    dot={{ r: 6 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="px-6 py-8 border-l-[1px] border-l-[ECEBF5]">
            <div className="bg-[#FAFAFA] border-[1px] border-[#ECEBF5] pl-4 py-7 rounded-[10px] pr-7 w-[187px] mb-4">
              <p className="text-bodyText text-sm mb-2">
                Average Response Time
              </p>
              <h4 className="text-black text-xl font-semibold">30 Mins</h4>
            </div>
            <div className="bg-[#FAFAFA] border-[1px] border-[#ECEBF5] pl-4 py-7 rounded-[10px] pr-7 w-[187px]">
              <p className="text-bodyText text-sm mb-2">Response Time</p>
              <h4 className="text-black text-xl font-semibold">
                1 Hour 30 Mins
              </h4>
            </div>
          </div>
        </div>
        <div className="mx-10 rounded-[10px] border-[1px] border-[#ECEBF5] flex mb-6 max-h-[314px]">
          <div className="flex-1 self-stretch px-6 py-7 flex flex-col">
            <div className="flex justify-between mb-7">
              <div className="flex items-center">
                <div className="font-semibold text-lg mr-7">
                  Replies per resolution
                </div>
                <div className="bg-[#25BB871A] py-1 text-xs px-3 rounded text-[#25BB87] font-semibold">
                  +4.14%
                </div>
              </div>
              <div className="flex items-center">
                <div className="font-medium text-text-black flex items-center text-sm pr-4 border-r-[1px] border-r-[#E1E1EB]">
                  <div className="h-[10px] w-[10px] rounded-[2px] bg-[#3E68FF] mr-2"></div>{" "}
                  High Priority
                </div>
                <div>
                  <div className="ml-4 h-11 w-40 border-[1px] border-[#ECEBF5] rounded-lg overflow-hidden px-4 flex justify-between items-center text-sm text-text-black">
                    This Month <BsCalendar />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid horizontal vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis
                    type="number"
                    domain={[0, 50]}
                    ticks={[0, 10, 20, 30, 40, 50]}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="high priority"
                    stroke="#3E68FF"
                    dot={{ r: 6 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="px-6 py-8 border-l-[1px] border-l-[ECEBF5]">
            <div className="bg-[#FAFAFA] border-[1px] border-[#ECEBF5] pl-4 py-7 rounded-[10px] pr-7 w-[187px] mb-4">
              <p className="text-bodyText text-sm mb-2">Average Replies</p>
              <h4 className="text-black text-xl font-semibold">30 Mins</h4>
            </div>
            <div className="bg-[#FAFAFA] border-[1px] border-[#ECEBF5] pl-4 py-7 rounded-[10px] pr-7 w-[187px]">
              <p className="text-bodyText text-sm mb-2">Response Time</p>
              <h4 className="text-black text-xl font-semibold">
                1 Hour 30 Mins
              </h4>
            </div>
          </div>
        </div>
        <div className="mx-10 rounded-[10px] border-[1px] border-[#ECEBF5] flex mb-6 max-h-[314px]">
          <div className="flex-1 self-stretch px-6 py-7 flex flex-col">
            <div className="flex justify-between mb-7">
              <div className="flex items-center">
                <div className="font-semibold text-lg mr-7">
                  Average resolution time
                </div>
                <div className="bg-[#25BB871A] py-1 text-xs px-3 rounded text-[#25BB87] font-semibold">
                  +4.14%
                </div>
              </div>
              <div className="flex items-center">
                <div className="font-medium text-text-black flex items-center text-sm pr-4 border-r-[1px] border-r-[#E1E1EB]">
                  <div className="h-[10px] w-[10px] rounded-[2px] bg-[#FB6491] mr-2"></div>{" "}
                  High Priority
                </div>
                <div>
                  <div className="ml-4 h-11 w-40 border-[1px] border-[#ECEBF5] rounded-lg overflow-hidden px-4 flex justify-between items-center text-sm text-text-black">
                    This Month <BsCalendar />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid horizontal vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis
                    type="number"
                    domain={[0, 50]}
                    ticks={[0, 10, 20, 30, 40, 50]}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="high priority"
                    stroke="#FB6491"
                    dot={{ r: 6 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="px-6 py-8 border-l-[1px] border-l-[ECEBF5]">
            <div className="bg-[#FAFAFA] border-[1px] border-[#ECEBF5] pl-4 py-7 rounded-[10px] pr-7 w-[187px] mb-4">
              <p className="text-bodyText text-sm mb-2">
                Average Resolution Rate
              </p>
              <h4 className="text-black text-xl font-semibold">30 Mins</h4>
            </div>
            <div className="bg-[#FAFAFA] border-[1px] border-[#ECEBF5] pl-4 py-7 rounded-[10px] pr-7 w-[187px]">
              <p className="text-bodyText text-sm mb-2">Response Time</p>
              <h4 className="text-black text-xl font-semibold">
                1 Hour 30 Mins
              </h4>
            </div>
          </div>
        </div>
        <div className="mx-10 rounded-[10px] border-[1px] border-[#ECEBF5] flex mb-6 max-h-[314px]">
          <div className="flex-1 self-stretch px-6 py-7 flex flex-col">
            <div className="flex justify-between mb-7">
              <div className="flex items-center">
                <div className="font-semibold text-lg mr-7">
                  First contact resolution rate
                </div>
                <div className="bg-[#25BB871A] py-1 text-xs px-3 rounded text-[#25BB87] font-semibold">
                  +4.14%
                </div>
              </div>
              <div className="flex items-center">
                <div className="font-medium text-text-black flex items-center text-sm pr-4 border-r-[1px] border-r-[#E1E1EB]">
                  <div className="h-[10px] w-[10px] rounded-[2px] bg-[#07C9E2] mr-2"></div>{" "}
                  High Priority
                </div>
                <div>
                  <div className="ml-4 h-11 w-40 border-[1px] border-[#ECEBF5] rounded-lg overflow-hidden px-4 flex justify-between items-center text-sm text-text-black">
                    This Month <BsCalendar />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid horizontal vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis
                    type="number"
                    domain={[0, 50]}
                    ticks={[0, 10, 20, 30, 40, 50]}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="high priority"
                    stroke="#07C9E2"
                    dot={{ r: 6 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="px-6 py-8 border-l-[1px] border-l-[ECEBF5]">
            <div className="bg-[#FAFAFA] border-[1px] border-[#ECEBF5] pl-4 py-7 rounded-[10px] pr-7 w-[187px] mb-4">
              <p className="text-bodyText text-sm mb-2">
                Average Response Time
              </p>
              <h4 className="text-black text-xl font-semibold">30 Mins</h4>
            </div>
            <div className="bg-[#FAFAFA] border-[1px] border-[#ECEBF5] pl-4 py-7 rounded-[10px] pr-7 w-[187px]">
              <p className="text-bodyText text-sm mb-2">Response Time</p>
              <h4 className="text-black text-xl font-semibold">
                1 Hour 30 Mins
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
