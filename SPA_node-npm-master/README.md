# Node.js et NPM

## Préambule - le format JSON

### Découverte du format
En introduction, prenez un moment pour (re)découvrir le format de données JSON, qui sera très largement utilisé dans ce module et dans de nombreux projets par la suite.
Quelques ressources utiles : 
* https://la-cascade.io/json-pour-les-debutants/
* https://www.alsacreations.com/article/lire/1675-json-stockage-leger-pratique-donnees-multitypes.html


### Mise en pratique
* Pour chaque jeu de données qui suit, créez un fichier .json (elections.json et singles.json par exemple) et remplissez-le avec une représentation des données au format JSON qui permettrait de répondre au mieux aux cas d'usage :
  * On souhaite représenter dans le temps les dates des élections des Présidents de la 5ème République, avec leur nom et leur durée de mandat
  * On souhaite représenter le classement des 3 singles (titre + artiste) ayant fait le plus de ventes en France, chaque année entre 2010 et 2019 (source Wikipedia) 
* Trouvez des exemples de données publiques disponibles sur le web au format JSON
* À partir d'une chaîne de caractère au format JSON, écrivez le code Javascript permettant de récupérer un objet Javascript, puis de regénérer la chaîne de caractère initiale. La documentation suivante pourra vous être utile : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON
 

## Node.js

### Installation
Installez Node.js sur votre poste. Vérifiez que la commande "node -v" est bien accessible depuis votre invite de commandes, et que la version affichée est bien 12 ou ultérieure.

### Premiers pas
1. Prenez connaissance de l'article suivant et notez les avantages et les inconvénients de NodeJS https://apprendre-a-coder.com/apprendre-node-js/
2. Exécutez le script `nyan.js` dans votre invite de commandes
3. Créez un script en JS qui va charger le fichier `villes.json` et afficher dans la console la liste des 10 villes les plus peuplées du monde sous la forme `Nom de la ville (Nom du pays) : XX millions d'habitants`

## NPM

### Installation
Vérifiez que NPM a bien été installé en même temps que Node.js sur votre poste. Exécutez la commande "npm -v" dans votre invite de commandes pour vous assurer que la version de NPM est bien 6.12 ou ultérieure.

### Mise en pratique
Vous allez réaliser votre premier mini-projet utilisant Node.js et NPM. Au préalable, prenez un moment pour vous familiariser avec le fonctionnement de NPM, via cet article par exemple : https://oncletom.io/node.js/chapter-05/

L'objectif de l'exercice qui suit va donc être de réaliser un mini-programme dont le but est d'optimiser des images. L'optimisation elle-même va être assurée par une librairie open-source, qui va être importée dans notre projet grâce à NPM.
1. Dans un nouveau dossier, initialisez un projet NPM avec la commande : `npm init -f`
2. Installer les modules NPM `imagemin@8.0.1` et `imagemin-pngquant`. Que signifie le "@8.0.1" ?
3. En suivant la documentation du module https://github.com/imagemin/imagemin-pngquant#readme, créez un script qui va optimiser les images .png contenues dans un dossier de votre choix. Utilisez la documentation de https://github.com/imagemin/imagemin pour paramétrer votre répertoire de sortie.
4. Créez une tâche NPM qui lance l'optimisation des images.
5. Créez une tâche NPM qui nettoie le répertoire de sortie puis lance l'optimisation des images.



