export const BACKEND_URL = "http://localhost:4000";

export const getRestaurantMenuEndpoint = (restaurantId) => {
  console.log("restaurantId");
  return {
    method: "get",
    url: `/menu/${restaurantId}`,
  };
};

export const GET_RESTAURANTS_ENDPOINT = {
  method: "get",
  url: "/restaurants",
};

export const getByDishEndpoint = (dish) => ({
  method: "get",
  url: `/search?dish=${dish}`,
});
