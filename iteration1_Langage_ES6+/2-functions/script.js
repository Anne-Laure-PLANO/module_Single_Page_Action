//2.1 Fonctions simples
const sayHello = () => {
    console.log('Hello')
};

const sayMyName = (first, last) => {
    console.log(first, last)
};

const sayMyAge = (age) => {
    console.log('You are ' + age + ' years old')
};

sayHello();
sayMyName('Odile', 'Crok');
sayMyAge(23);

/* -------Exercices ------------
Section 1
Convertissez les 3 fonctions avec la notation "Arrow function" et vérifiez que le code fonctionne comme avant la conversion.

*/



//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis(){
        console.log(this)
    }
};
// showthis est une méthode relative à l'objet dont elle dépend.
object.showThis();


/* -------Exercices ------------
Section 2
Avant toute modification : assurez-vous de comprendre le code déjà écrit ! Au besoin commentez-le.
Convertissez la fonction showThis en notation "Arrow function".
Observez le résultat. Que pouvez-vous en conclure ?
    La fonction d'une méthode ne peut pas s'écrire de manière flêchée comme généralement, car dans ce cas elle pointe vers le contexte global.
    deux façons de les écrire dans un objet : 
        titreMethode : function(){        } 
        ou :
        titreMethode(){}

*/




//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 25,
    sayHello : () =>{
        console.log('Hello')
    },
    sayMyName () {
        console.log(this.name.first, this.name.last)
    },

    sayMyAge() {
        console.log('You are ' + this.age + ' years old')
    }

};

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()


/* -------Exercices ------------
Section 3
Complétez le code pour reproduire le comportement de la section 1 mais cette fois-ci grâce à l'objet odile. 
Vous utiliserez dès que possible des "Arrow functions".
    Les arrow functions ne peuvent pas s'utiliser dans un objet lors de l'appel de "this".


*/