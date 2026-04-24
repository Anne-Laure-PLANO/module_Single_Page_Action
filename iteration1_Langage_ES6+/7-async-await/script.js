
async function main() {
  console.log("- 1 - START of main function");

  // il n'est pas possible d'utiliser await en dehors d'une fonction async
  // vous devez donc appeler les fonctions que vous allez écrire ci dessous

  // wait 100 ms
  console.log("- 2 - BEFORE await");
  await new Promise( resolve => setTimeout(resolve, 10));
  console.log("- 3 - AFTER await");

  console.log("- 4 - END of main function");
}

// console.log("= a = BEFORE main call");
// main();
// console.log("= b = AFTER main call");


/*
Les promesses sont les briques de base pour gérer l'asynchronisme, mais certains codes restent compliqués à lire et à écrire 
(les boucles et les appels interdépendants entre autres).

C'est pourquoi ont été introduits les mots clé async/await qui permettent d'écrire du code asynchrone plus facilement.
Prenez connaissance de https://blog.eleven-labs.com/fr/asyncawait/ ou https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/await

Regarder dans le fichier script.js et les messages de la console. 
Expliquez pourquoi "= b = ..." s'affiche au milieu de l'éxecution de la fonction main. Est-ce un problème ?
  -> cette ligne apparait au milieu de l'exécution dans la fonction il y a une Promesse qui bloque l'exécution des lignes suivantes. 
    Donc l'ordinateur met de côté l'exécution de la fonction et passe à la suite avec la ligne "= b = ...
    Une fois la promesse réalisée, l'ordinateur retourne dans la fonction et réalise la suite des instructions.

Refaire toute la section 2 de l'exo 6 (fetch sur API) en utilisant async/await (API :  https://swapi.info/api/)



Écrire une fonction qui fait une requête pour récupérer les caractéristiques de l'espèce avec l'id 1 (les humains).

*/

async function callData (url){
  let response = await fetch(url);
  if (!response.ok){
    throw new Error ("Erreur HTTP : " + response.status);
  }
  return response.json();
    
}


function displayObject(object){
  for (let key in object){
    if (typeof object[key] === "object" && object[key] !== null){
      console.log(` ${key} : `);
      displayObject(object[key]);
    } else {
      console.log(` ${key} :  ${object[key]}`);
    }
  }
  console.log();
}

async function execExercice1(){
  try{
    let result = await callData("https://swapi.info/api/species/1");
  displayObject(result);
  }catch (error){
    console.error(error);
  }
}

//execExercice1();

/*
Écrire une fonction, qui va chaîner l'appel à la fonction précédente pour récupérer les caractéristiques du premier personnage du tableau people.

*/

async function execExercice2() {
  try {
    let data = await callData("https://swapi.info/api/species/1");
    let result = await callData(data.people[0]);
    displayObject(result);
  } catch (error) {
    console.error(error);
  }
}


 //execExercice2();



/*
Écrire une fonction pour récupérer, en parallèle, les fiches de tous les personnages d'une espèce données pour afficher leurs noms. 

*/
 
async function execExercice3(){
  try{
    let result = await callData("https://swapi.info/api/species/1");
    let allPeople = await Promise.all(
      result.people.map(async (url)=>
        callData(url)
      )
    );
    displayObject(allPeople);

  } catch (error){
    console.error(error);
  }
}
//execExercice3();






