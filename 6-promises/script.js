// Fonction utilisées par les fonctions de l'exercice - Ne pas modifier ou appeler directement
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Note : les fonctions ci-dessous sont prêtes à l'emploi, vous n'avez pas à les modifier, juste à les appeler.
// Elles retournent toutes des promesses et peuvent donc être chaînées via la fonction "then".
function first() {
  return (sleep(300).then(() => {console.log('message 1');}));
}

function second() {
  return (sleep(100).then(() => {console.log('message 2');}));
}

function third() {
  return (sleep(200).then(() => {console.log('message 3');}));
}

function secondWithError() {
  return sleep(100).then(() => {throw new Error("catch me if you can");})
}




  




/* --------- Exercices -----------------
Section 1
Observer et expliquer l'ordre des messages affichés dans la console.
    -> Les messages s'affichent en fonction du délai d'exécution programmé (sleep()). 
    C'est pourquoi le premier message à s'afficher est "message 2", puis "message 3" etenfin "message 1".

Utiliser les promises afin que les messages s'enchaînent dans le bon ordre (1, 2, 3).
*/

// first()
//   .then(() => second())
//   .then(() => third())
//   .catch(error => console.error(error.message));


/*

Remplacer l'appel à la fonction second() par secondWithError() afin de simuler une erreur lors de l'exécution.

*/


// first()
//   .then(() => secondWithError())
//   .then(() => third())
//   .catch(error => console.error(error.message));


/*

Modifier le code afin de ne pas briser la chaîne des appels malgré tout.
Modifier le code afin d'afficher le message d'erreur entre les messages 1 et 3.
*/


// first()
//   .then(() => secondWithError())
//   .catch (error => console.error(error.message))
//   .then(() => third())
//   .catch (error => console.error(error.message));


/*



Section 2
Regarder l'API fetch (https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch), qui fait une requête http 
et retourne la réponse sous la forme d'une promise.

Vous allez ensuite utiliser fetch pour faire des appels à l'API Star Wars (https://swapi.info/).

Écrire une fonction qui fait une requête pour récupérer les caractéristiques de l'espèce avec l'id 1 (les humains).

*/

// fetch("https://swapi.info/api/species/1")
//   .then((response)=>{
//     if (!response.ok){
//       throw new Error ("Erreur HTTP : " + response.status);
//     }
//     return response.json();
//   })
//   .then((data)=>{
//     for (key in data){
//       console.log(key + " : " + data[key]);
//     }
//   })
//   .catch((error)=>{
//     console.Error("Erreur : " + error);
//   })
//   .then(()=>{
//     console.log("\n\n Exercice 2 : \n\n");
//   });


/*

Écrire une fonction, qui va chaîner l'appel à la fonction précédente pour récupérer les caractéristiques du premier personnage du tableau people.

*/

// fetch("https://swapi.info/api/people/1")
//   .then(function(response) {
//     if (!response.ok) {
//       throw new Error("Erreur HTTP : " + response.status);
//     }
//     return response.json();
//   })
//   .then(function(data) {
//     for (key in data){
//       console.log(key + " : " + data[key])
//     }
//   })
//   .catch(function(error) {
//     console.error("Erreur : ", error);
//   })
/*


Écrire une fonction pour récupérer, en parallèle, les fiches de tous les personnages d'une espèce données pour afficher leurs noms. 
Pour que l'exécution ait lieu en parallèle, une fois que vous avez les urls de vos personnages, il faut appeler fetch sur chacune des urls 
sans attendre que celles-ci soient résolues. Pour cela, vous aurez besoin de Array.map pour convertir un tableau d'urls en 
tableau de promises (avec fetch) et un Promise.all pour attendre la résolution de toutes vos promesses (l’exécution de vos requêtes).

*/

// fetch("https://swapi.info/api/species/1")
//   .then((response) =>{
//     if (!response.ok){
//       throw new Error ("Erreur : " + response.status);
//     }
//     return response.json();
//   })
//   .then((data) =>{
//       const people = data.people.map((url)=>{
//         return fetch(url).then((result)=> result.json());
//       })
//       return Promise.all(people);
//   })
//   .then((data)=>{
//     data.forEach((person) =>{
//       console.log("\n\n New people : \n")
//       for (let item in person){   // choix personnel : je voulais afficher toutes les informations des personnages. Au lieu de refaire une boucle, pour n'obtenir que les noms, j'aurais pu faire : console.log(person.name);
//         console.log(item + " : " + person[item]);
//       }
//     })
//   });

/*

Section 3
Modifier votre code pour ajouter deux boutons dans la page : 'OK' et 'Cancel'
Créer une fonction qui retourne une promise qui se résoudra (resolve) quand le bouton 'OK' est cliqué 
et échouera (reject) quand le bouton 'Cancel' est cliqué.
Utiliser cette fonction pour afficher "Ok clicked" ou "Cancel clicked" dans la console

*/

function waitForUserChoice(){
  return new Promise((resolve, reject) =>{
    const okButton = document.getElementById("okClick");
    const cancelButton = document.getElementById("cancelClick");
    
    // obligé de définir la fonction à l'extérieur de l'EventListener pour pouvoir la rappeler pour la suppression.
    const okClic = () =>{
      cleanUp();
      resolve("OK clicked");
    }
    
    const cancelClick = () =>{
      cleanUp();
      reject("Cancel clicked");
    }

    okButton.addEventListener("click", okClic);
    cancelButton.addEventListener("click", cancelClick);
    
    function cleanUp(){
      okButton.removeEventListener("click", okClic);
      cancelButton.removeEventListener("click", cancelClick);

    }
  })
}



waitForUserChoice()
  .then(()=>{
    console.log("OK clicked !");
    return fetch("https://swapi.info/api/films/1");
  })
  .then((response)=>{
    if (!response.ok){
      throw new Error("Erreur HTTP : " + response.status);
    }
    return response.json();
  })
  .then((data)=>{
    for (key in data) {
      console.log(key + " : " + data[key]);
    }
  })
  .catch(function(error){
    console.error( error);
  });
