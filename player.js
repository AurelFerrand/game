const getMyNumbers = () => {
  // Génère un chiffre random
  const tab = Math.floor(Math.random() * 10 + 1);
  return tab;
};

//Tableau de parametres start
const objectParamPlayer = { power: 0, life: 0, shield: 0, defense: 0 };
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

    //si stock n'a pas la longeur du paramPlayer + 1 ,  car on ajoute str il continue for in
    if (
      Object.keys(stock).length ===
      Object.keys(objectParamPlayer).length + 1
    ) {
      // si = 5 il push dans arraPlayer
      arrayPlayers.push(stock);
      //on reinitialise stock
      stock = {};
    }
  }
};

plop("Shanta");

plop("Freako");

// document.getElementById("player").innerHTML = `il y a : ${
//   arrayPlayers.length
// } joueurs , qui se nomment ${arrayPlayers.map((p) => p.player)}`;

console.log("arrayPlayer", Object.keys(arrayPlayers[0])); //Choix Object a voir

const playerConst = arrayPlayers.map((item) => {
  const container = [];

  container.player = item.player;
  container.power = item.power;
  container.life = item.life;
  container.shield = item.shield;
  container.defense = item.defense;

  return container;
});
console.log("playerFight", playerConst[0].player); //Choix Array a voir
