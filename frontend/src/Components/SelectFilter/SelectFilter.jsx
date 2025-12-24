const SelectFilter = () => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-xl mb-4">Select Filter</h2>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center mb-2">
          <input
            type="checkbox"
            id="in-stock"
            className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
          />
          <label htmlFor="in-stock" className="text-gray-700">
            In Stock
          </label>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="checkbox"
            id="without-stock"
            className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
          />
          <label htmlFor="without-stock" className="text-gray-700">
            Without Stock
          </label>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="checkbox"
            id="upcoming"
            className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
          />
          <label htmlFor="upcoming" className="text-gray-700">
            Upcoming
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectFilter;
