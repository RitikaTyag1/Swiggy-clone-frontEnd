export const BACKEND_URL = "http://localhost:4000";

export const getRestaurantMenuEndpoint = (restaurantId) => {
  console.log("restaurantId");
  return {
    method: "get",
    url: `/menu/${restaurantId}`,
  };
};
