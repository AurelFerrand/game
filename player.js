const getMyNumbers = () => {
  // Génère un chiffre random
  const tab = Math.floor(Math.random() * 10 + 1);
  return tab;
};

//Tableau de parametres start
const objectParamPlayer = { power: 0, life: 0, shield: 0 };
// stock et  initialise parametres
let stock = {};
//array des players cree
const arrayPlayers = [];

const plop = (str) => {
  // for in pour parcourir object arrayPlayer
  for (let key in objectParamPlayer) {
    stock[key] = getMyNumbers();

    if (Object.keys(stock).length === 3) {
      stock["player"] = str;
      arrayPlayers.push(stock);
      stock = {};
    }
  }
};
plop("freezer");

plop("freeaky");

console.log("second", arrayPlayers);
