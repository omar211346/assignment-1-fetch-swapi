export function getImage(category, index) {
    const nameMap = {
      films: "film",
      people: "people",
      planets: "planet",
      vehicles: "vehicle"
    };
  
    const prefix = nameMap[category] || category;
  
    return `src/img/${category}/${prefix}${index + 1}.jpg`;
  }
  