import { useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slider";
import { setRangeValue } from "../../redux/actions/actionsCreator";

const MIN = 10;
const MAX = 1000;

const RangeFilter = () => {
  const [values, setValues] = useState([MIN, MAX]);
  const dispatch = useDispatch();

  const handleChange = (values) => {
    setValues(values);
    dispatch(setRangeValue(values));
  };

  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold mb-2">Price Range</h1>

      <Slider
        value={values}
        min={MIN}
        max={MAX}
        onChange={handleChange}
        className="w-full my-4 h-2 bg-gray-300 rounded"
        thumbClassName="h-5 w-5 bg-pink-600 rounded-full cursor-pointer shadow focus:outline-none focus:ring-2 focus:ring-pink-200"
        trackClassName="bg-pink-500 h-2 rounded"
      />

      <div className="flex justify-between mt-2 gap-3">
        <div className="w-20 border border-gray-300 rounded text-center py-1">
          {values[0]}
        </div>
        <div className="w-20 border border-gray-300 rounded text-center py-1">
          {values[1]}
        </div>
      </div>
    </div>
  );
};

export default RangeFilter;
