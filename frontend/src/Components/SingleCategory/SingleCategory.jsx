import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RangeFilter from "../RangeFilter/RangeFilter";
import SelectFilter from "../SelectFilter/SelectFilter";

const SingleCategory = () => {
  const { data } = useSelector((state) => state.fetchReducer);
  const { id } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      const initialFilteredData = data.filter(
        (item) => item.CategoryName === id
      );
      setFilteredData(initialFilteredData);
    }
  }, [data, id]);

  if (!data) {
    return (
      <div className="h-[55vh] flex justify-center items-center text-4xl text-white">
        Loading...
      </div>
    );
  }

  if (!filteredData.length) {
    return (
      <div className="h-[55vh] flex justify-center items-center text-4xl text-white">
        No items match the selected filter.
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 md:px-8 py-8 bgDarkGray text-white">
      {/* Sidebar */}
      <aside className="md:w-1/4 shrink-0 flex flex-col gap-6">
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">Filter by Price</h3>
          <RangeFilter />
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">Filter by Category</h3>
          <SelectFilter />
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">Filter by Rating</h3>
          <SelectFilter />
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">Filter by Availability</h3>
          <SelectFilter />
        </div>
      </aside>

      {/* Main content */}
      <main className="md:w-3/4 flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-900 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">{id}</h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 md:mt-0">
            <div>
              <label htmlFor="show" className="mr-2 font-semibold">
                Show:
              </label>
              <select
                id="show"
                className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-1 text-white"
              >
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
            </div>
            <div>
              <label htmlFor="sort" className="mr-2 font-semibold">
                Sort By:
              </label>
              <select
                id="sort"
                className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-1 text-white"
              >
                <option value="">Default</option>
                <option value="low-high">Price (Low to High)</option>
                <option value="high-low">Price (High to Low)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <div
              key={item._id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <a className="block relative h-48">
                <img
                  alt={item.CategoryName}
                  className="object-cover object-center w-full h-full"
                  src={item.img}
                />
              </a>
              <div className="p-4 flex flex-col gap-1">
                <h3 className="text-primaryTextColor text-xs sm:text-sm font-semibold tracking-widest">
                  {item.CategoryName}
                </h3>
                <h2 className="text-white text-lg sm:text-xl font-medium">
                  {item.name}
                </h2>
                <p className="text-gray-300 font-semibold mt-1">
                  Tk-{item.options[0].half}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SingleCategory;
