import { updateSearchValue } from "../slices/iconSlice";
import {useSelector, useDispatch} from "react-redux";

export default function SearchBar() {
  const searchValue = useSelector((state) => state.icon.searchValue);  
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(updateSearchValue(event.target.value))
  }

  return <>
      <div className="pt-2 relative mx-auto text-gray-600">
        <input 
          onChange={(e) => handleChange(e)}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          value={searchValue}
        />
    </div>
  </>
}