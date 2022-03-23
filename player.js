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
  //si str n'est pas un string = erreur
  if (typeof str === "string") {
    stock["player"] = str;
  } else console.log(`erreur ${typeof str}`);
  // for in pour parcourir object arrayPlayer
  for (let key in objectParamPlayer) {
    // key parcour object et Numberise l'element
    stock[key] = getMyNumbers();
    //si stock n'a pas une longueur en dessous de 4 il continue for in
    if (Object.keys(stock).length === 4) {
      // si = 4 il push dans arraPlayer
      arrayPlayers.push(stock);
      //on reinitialise stock
      stock = {};
    }
  }
};
plop("Shanta");

plop("Freako");

console.log("second", arrayPlayers);
