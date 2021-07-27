const Kindergarden = require('./Kindergarden');

const barsukai = new Kindergarden('Barsukai');

barsukai.intro();
// "Barsukai" can accept 3 kids.

barsukai.updateKidsLimit(5);
// "Barsukai" can accept 5 kids now.

barsukai.addKid('Maryte');
// Maryte has entered "Barsukai" kindergarden.
barsukai.addKid('Jonukas');
// Jonukas has entered "Barsukai" kindergarden.
barsukai.addKid('Stasyte');
// Stasyte has entered "Barsukai" kindergarden.
barsukai.addKid('Kaziukas');
// Kaziukas has entered "Barsukai" kindergarden.
barsukai.addKid('Snaige');
// Snaige has entered "Barsukai" kindergarden.
barsukai.addKid('Marsietis');
// Marsietis can not enter "Barsukai" kindergarden - it's at a full capacity of 5 kids.

barsukai.updateKidsLimit(3);
// "Barsukai" can not update kids limit right now.

barsukai.sayHi();
// "Barsukai" is visited by: Maryte, Jonukas, Stasyte, Kaziukas, and Snaige.

barsukai.removeKid('Stasyte');
// Stasyte has left "Barsukai" kindergarden.
barsukai.removeKid('Jonukas');
// Jonukas has left "Barsukai" kindergarden.

barsukai.updateKidsLimit(3);
// "Barsukai" can accept 3 kids now.

barsukai.addKid('Marsietis');
// Marsietis can not enter "Barsukai" kindergarden - it's at a full capacity of 3 kids.

barsukai.sayHi();
// "Barsukai" is visited by: Maryte, Kaziukas and Snaige.
// Stasyte has left "Barsukai" kindergarden.

barsukai.removeKid('Kaziukas');
// Kaziukas has left "Barsukai" kindergarden.

barsukai.sayHi();
// "Barsukai" is visited by: Maryte and Snaige.

barsukai.removeKid('Maryte');
// Maryte has left "Barsukai" kindergarden.

barsukai.sayHi();
// "Barsukai" is visited by: Snaige.