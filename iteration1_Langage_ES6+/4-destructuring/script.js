//4.1 Découverte

const [a, b, c] = [1, 2, 3, 4];
// 2 clés ont été créées et attribuées chacune d'elles aux deux premières valeurs du tableau.

console.log(a);
console.log(b);
console.log("3ème élément du tableau :" + c);

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35};
// idem ici.
console.log(first);
console.log(last);
console.log("affichage de l'âge : " + age);


//4.2 Application

console.log(data);


/* ----- Exercices --------

Section 1
Prenez le temps de bien comprendre le code de la première partie, en le commentant.
Afficher le 3e élément du tableau ainsi que la propriété age de l'objet.


Section 2
Le fichier data.js comporte un tableau des perturbations du réseau de transport Grenoblois. 
Pour chacune des perturbations, récupérez leur texte, date de début et date de fin dans des variables puis affichez-les.

*/

for (let key in data){
    const { dateDebut, dateFin, texte } = data[key];
    console.log(`du ${dateDebut} au ${dateFin} :\n ${texte}\n\n`); // ` : alt + 7
}



/*

Après ce premier exercice, prenez connaissance du guide MDN sur le destructuring : 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition
Vérifiez que le code réalisé dans cet exercice est bien optimal compte-tenu des exemples fournis par MDN. 
Optimisez-le si nécessaire.

Section 3
Il est possible de destructurer le(s) paramètre(s) d'une fonction, cela permet d'émuler les paramètres nommés de certains langages.
Créer une fonction qui prend en paramètre une un objet perturbation et l'ajoute dans le l'objet data précédent. 
Cette fonction devra destructurer le paramètre et fournir des valeurs par défaut pour les champs non essentiels 
(type, heureDebut, heureFin, latitude, ....).
Faites des appels à votre fonction et vérifier que le résultat est cohérent.

*/
function addPerturbation ({
    type = "inconnu",
    id = 0,
    dateDebut = "inconnu",
    dateFin  = "inconnu",
    heureDebut  = "inconnu",
    heureFin  = "inconnu",
    latitude = -1,
    longitude = -1,
    weekEnd  = "inconnu",
    listeLigneArret  = "inconnu",
    texte = "inconnu",
    plan = "inconnu",
    visibleTC = true,
    visibleVoiture = false,
    visibleVelo = false,
    visibleVenteTitres = false,
    visibleBandeauSite = false,
    visibleBandeauAppli= false
}){
let newPerturbation = {
    type,
    id,
    dateDebut,
    dateFin,
    heureDebut,
    heureFin,
    latitude,
    longitude,
    weekEnd,
    listeLigneArret,
    texte,
    plan,
    visibleTC,
    visibleVoiture,
    visibleVelo,
    visibleVenteTitres,
    visibleBandeauSite,
    visibleBandeauAppli
}
data.push(newPerturbation);
}

/*
Section 4
Avec l'opérateur rest (...), on peut mettre tous ou certains des paramètres dans un tableau, 
cela permet de gérer un nombre variable de paramètres.
Ecrire une fonction qui prend un nombre indéfini de paramètre et les affiche dans la console.
*/
function keepRest(...rest ){
    for (let key in rest){
        console.log(rest[key]);
    }
}

keepRest(5, 6, 12);