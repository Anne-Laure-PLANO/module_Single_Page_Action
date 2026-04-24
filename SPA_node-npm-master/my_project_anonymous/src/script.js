/*
EXERCICES

PARTIE PREMIERS PAS :

Créez un script en JS qui va charger le fichier villes.json et afficher dans la console la liste des 10 villes les plus peuplées du monde sous la forme Nom de la ville (Nom du pays) : XX millions d'habitants


*/
import * as fs from "fs/promises";



async function loadJsonFile (JsonFile){
    const file = await readFile(JsonFile, "utf-8");
    return JSON.parse(file);
}

function displayObject(object){
    for (let key in object){
        if (typeof object[key] == "object" && object[key] !== null){
            displayObject(object[key]);
        } else {
            console.log(key + " : " + object[key]);
        }
    }
    console.log();
}

function displayPays(object){
    for (let key in object){
        console.log(object[key].nom + " (" + object[key].pays + ") : " + object[key].population + " millions d'habitants.");
    }
}



async function execExercice1(){
    const data = await loadJsonFile("./villes.json");
    displayPays(data.villes);
}

//execExercice1();


/*
En suivant la documentation du module https://github.com/imagemin/imagemin-pngquant#readme, créez un script qui va optimiser les images .png contenues dans un dossier de votre choix. Utilisez la documentation de https://github.com/imagemin/imagemin pour paramétrer votre répertoire de sortie.

*/
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';


async function isFileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}


async function optimizePicture(sourcePath, destinationPath){
    let isAlreadyExists = await isFileExists(destinationPath);
    if (!isAlreadyExists) {
    await imagemin([sourcePath], {
        destination: destinationPath,
        plugins: [
            imageminPngquant()
        ]
    });
    console.log('Images optimized');
    } else {
        console.log("Dossier déjà existant.");
    }
}


optimizePicture('src/images/*.png', 'build/images' );


