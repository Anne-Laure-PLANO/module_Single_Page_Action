//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
};

//3.2 Object.values

console.log(data);

/* ------ Exercices ------
Section 1
Afficher les caractéristiques du véhicule sours la forme clé : valeur (Ex: id: 3221).

*/
for (let key in bus){
console.log(key +":"+ bus[key])
}

/*
Section 2
Le fichier data.js comporte un tableau des perturbations du réseau de transport Grenoblois. Pour chacune des perturbations, afficher le champ texte.

*/
for (let key in data){
    console.log("résultat : " + data[key].texte);
}   
;
