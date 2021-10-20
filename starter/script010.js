/*****************************
 * 10 - Opérateurs de base
 */

// 1. Déclarer les variables now, ageJohn, ageMark, yearJohn et yearMark
// puis affecter aux trois premières les valeurs 2019, 28 et 33
let iNow = new Date ();
iNow = iNow.getFullYear();
let iAgeJohn = 28;
let iAgeMark = 33;
let iYearJohn;
let iYearMark;
console.log(iNow);

// Opérateurs mathématiques

// 2. Affecter à yearJohn sa date de naissance
// (en la calculant à partir de l'année courante et de son âge)
// idem pour yearMark
// puis afficher la date de naissance de John
// et "Mark est né en …"
iYearJohn = iNow - iAgeJohn;
console.log(iYearJohn);
iYearMark = iNow - iAgeMark;
console.log(iYearMark);
alert("John est né en " + iYearJohn + " , et Mark est né en " + iYearMark);

// 3. Afficher l'année à laquelle nous serons dans deux ans
// le double de l'année
// le dixième de l'année
alert("Dans deux ans : " + [iNow + 2]); //afficher dans la console
alert("Le double de l'année : " + [iNow * 2]); //afficher dans la console
alert("Le dixième de l'année : " + [iNow / 10]); //afficher dans la console

// iNow = iNow + 2;
// iNow = iNow * 2;
// iNow = iNow / 10;
// console.log(iNow);


// Opérateurs logiques

// 4. …



// Opérateur typeof
