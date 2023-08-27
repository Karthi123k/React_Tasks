import { restaurantList } from "./resturentlist";
import { RestaurantCard } from "./ResturenCard";
import React, { useState } from "react";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filteredData = filterData(searchText, restaurantList);
    setRestaurants(filteredData);
  };

  const resetSearch = () => {
    setSearchText("");
    setRestaurants(restaurantList);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="searchbox"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        <button className="reset-btn" onClick={resetSearch}>
          Reset
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;

