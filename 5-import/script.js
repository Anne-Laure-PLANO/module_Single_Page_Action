//5-1 Import

// importe la fonction se nommant "hello" et provenant du fichier functions.js.
import {hello} from './functions.js';


// exécute la fonction appelée précédemment
hello();

// 5-2 Export
const [a, b] = [7, 9];


/* ---- Exercices ------------
⚠ Cet exercice est à exécuter soit sous Firefox soit sous Chrome avec un serveur de développement (via WebStorm, ou WAMP, http-server...)
(Live Server convient parfaitement)
Rappel - Avant de réaliser cet exercice, prenez connaissance du guide MDN sur le sujet : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules

Section 1
Lire et comprendre le code déjà écrit dans la première partie.
Importer et utiliser la fonction showError.
*/
import { showError } from './functions.js';

console.log(showError("oups"));

/*

Importer et utiliser la fonction anonyme définie à la fin du fichier.
    -> La fonction est anonyme mais définie par défaut. Donc pour l'import on peut donner le nom qu'on veut à la fonction importée (sans accolades) 
    et c'est cette fonction anonyme qui sera appelée.
*/
import joliDessin from './functions.js';
//joliDessin();

/*

Section 2
Exporter les fonctions du fichier math.js pour pouvoir les utiliser dans le script principal (script.js).
    -> les fonctions à exporter doivent être précédées du mot "export". Pour toute les récupérer d'un coup, on utilise * comme ci-dessous.
*/
import * as math from './math.js';
console.log(math.sum(2,9));
console.log(math.pow(10,2));