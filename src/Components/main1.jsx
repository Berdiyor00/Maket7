import { useEffect, useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { fetchData } from "../reducer/reducersa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Main = () => {
  let [x, setX] = useState(false);
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const data = useSelector((state) => state.user.userss);

  useEffect(() => {
    if (sort) {
      dispatch(fetchData(sort));
    } else {
      dispatch(fetchData());
    }
  }, [sort, dispatch]);

  const handleSort = (e) => setSort(e);

  const filteredData = data.filter((item) => {
    // If no genre is selected or "All Genres" is selected, return true for all items
    if (!sort || sort === "All Genres") {
      return true;
    }
    // Check if the item belongs to the selected genre
    return item.volumeInfo.genre === sort; // Replace 'genre' with the actual property holding genre information
  });

  return (
    <div className="fonts">
      <div className="pt-[0px] pr-[30px] listborter">
        <button
          onClick={() => setX(!x)}
          className="absolute z-10 left-[320px] md:stickml-[20px] md:hidden"
        >
          {x ? <IoArrowBackOutline /> : <IoArrowForwardOutline />}
        </button>
        <ul className={x ? "block ease-in md:block" : "hidden ease-in md:block"}>
          <h4 className="text-nowrap pl-[20px]">Book by Genre</h4>
          <li
            onClick={({ target }) => handleSort(target.innerText)}
            className="pl-[20px] pt-[20px] ease-in "
          >
            All Genres
          </li>
          <li className="pl-[20px] hovers ease-in">Business</li>
          <li className="pl-[20px] hovers ease-in">Science</li>
          <li className="pl-[20px] hovers ease-in">Fiction</li>
          <li className="pl-[20px] hovers ease-in">Philosophy</li>
          <li className="pl-[20px] hovers ease-in">Biography</li>
        </ul>
        <ul className={x ? "block ease-in md:block" : "hidden ease-in md:block"}>
          <h4 className="text-nowrap pl-[20px] pt-[20px]">Recomendations</h4>
          <li className="pl-[20px] hovers pt-[20px] ease-in">Artist of the Month</li>
          <li className="pl-[20px] hovers ease-in">Book of the Year</li>
          <li className="pl-[20px] hovers ease-in">Top Genre</li>
          <li className="pl-[20px] hovers ease-in">Trending</li>
        </ul>
      </div>

    </div>
  );
};

export default Main;
