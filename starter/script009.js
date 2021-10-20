/*****************************
 * 009 - Mutation de variable et conversion de type
 */

// 1. Initialiser les variables firstName à John et age à 28
let sFirstName = 'John';
let iAge = 28;

// Conversion de type

// 2. Ecrire l'instruction qui affiche "John a 28 ans"
// et afficher le type de cette expression
alert(sFirstName + " a " + iAge + " ans ");
console.log(typeof'John a 28 ans');

// 3. Déclarer en une seule instruction les varaibles job et isMarried
// puis affecter la valeur professeur à job et false à isMarried
// enfin, écrire l'instruction qui affiche
// "John est un professeur de 28 ans. Est-il marié ? false"
let sJob, fIsMarried;
sJob = 'professeur';
fIsMarried = false;

alert (sFirstName + " est un " + sJob + " de " + iAge + " ans. Est-il marié ? " + fIsMarried);

console.log(sJob);
console.log(fIsMarried);

// Variable mutation

// 4. Affecter la valeur 'vingt-huit' à la variable age
// et la valeur 'conducteur' à la variable job.
// Afficher ensuite la phrase précédente dans une boîet de dialogue
iAge = 'vingt-huit';
sJob = 'conducteur';
alert (sFirstName + " est un " + sJob + " de " + iAge + " ans. Est-il marié ? " + fIsMarried);

// 5. Afficher une boîte de dialogue 'Quel est son nom de famille ?'
// qui permet à l'utilisateur d'entrer le nom de famille de John
// et stocker ce nom dans une variable lastName
// puis afficher "Le nom de famille de John est … (le nom entré)"
let sLastName = prompt('Quel est son nom de famille ?');
console.log(sLastName);

alert ("Le nom de famille de John est " + sLastName);
