const url = "https://swapi.dev/api/starships/";

const getAllShip = async () => {
  try {
    const response = await fetch(url);
    const shipCard = await response.json();
    return shipCard;
  } catch (e) {
    console.error(e);
  }
};

export default getAllShip;
