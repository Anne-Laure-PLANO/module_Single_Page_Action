//1.1 Types simples

const name = 'Jacques';
let age = 80;
let useless = 'something';

console.log(name, age, useless);

age += 1;
useless = 14;

console.log(name, age, useless);

/* ------Exercices ---------------
Section 1

Remplacez toutes les occurences de var par let.
Constatez que le code s'exécute toujours sans erreur. Expliquez pourquoi.
    Le code s'exécute car var signifie Variable et a été remplacé par let qui identifie la même chose. 
    La seule différence entre ces deux qualificatifs est la portée : var ne tient pas compte du scope contrairement à let.

Remplacez toutes les occurences de let par const.
Expliquez l'erreur.
    Const représente les constantes, donc des valeurs immuables. Si on essaie de changer leur valeur, une erreur nous est retournée.

Corrigez le code en conservant le maximum de valeurs constantes.


*/



//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry'];
const vegetables = ['potato', 'curlyflower', 'tomato'];

console.log(fruits, vegetables);
fruits.push('banana');
vegetables.pop();

console.log(fruits, vegetables);

/* ------Exercices ---------------
Section 2

Remplacez toutes les occurences de let par const.
Expliquez l'absence d'erreur.
    Ce changement n'engendre pas d'erreur car les variables ont pour valeur des tableaux : 
    le tableau restera un tableau, peu importe son contenu ; c'est donc bien une constante.
    Une erreur ressortira si on transforme la valeur de cette constante (en String ou int par exemple) 


*/




//----------------------//
//1.3 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
};

const savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
};

console.log(settings, savedGame);

savedGame = {};
settings.music = true;
settings.resolution = [3840, 2160];

console.log(settings, savedGame);


/* ------Exercices ---------------
Section 3

Remplacez toutes les occurences de let par const.
Expliquez l'erreur.
    Comme pour les tableaux, les objets peuvent être des constantes. 
    Par contre leur affecter le type const signifie qu'on ne peut pas enlever leur clés. *
    C'est pourquoi lorsqu'on remplace tous les let par des const, la variable "savedGame" ressort en erreur car l'objet est réinitialisé par la suite.

Corrigez le code en conservant le maximum de valeurs constantes

*/
