export function getImage(category, index) {
  const nameMap = {
    films: "film",
    people: "people",
    planets: "planet",
    vehicles: "vehicle"
  };

  const prefix = nameMap[category] || category;


  return `/img/${category}/${prefix}${index + 1}.jpg`;
}
