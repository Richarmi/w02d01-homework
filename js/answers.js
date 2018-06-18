// 1. a boolean variable.
// 2. a string
// 3. an object containing strings for
// 4. representing the hull, laser blasers,
// tractor beam, and the warp drive.
// 5. an array of objects, where each object contains a string for the student name and that student's location.
// 6. an array of objects each containing
// the corresponding name, location, and
// array containing that student's favorite
// TV shows.

let rainbow = [red, blue, green, yellow, orange, white, black, purple, pink, grey];

let thisBlue = rainbow[1];

let Michael = {
  favoriteTown: "Westminster"
  favoriteFood: "Pizza",
  favoriteDataStructure: "Object",
  favoriteHobby: "Fencing"
}

console.log(Michael.favoriteHobby);

const crazyObject = {
  taco: [{
          meat: 'steak',
          cheese: ['panela', 'queso', 'chihuahua']
         },

         {
           meat: 'chicken',
           salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
         }, ],

  larry:
  {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
                  {
                    name: "Jeff",
                    occupation: "manager"
                   },

                   {
                    name: "funkhauser",
                    occupation: "tv dude"
                   },

                   {
                    name: "susie",
                    occupation: "jeffs wife",
                    favourtieHobby: "Swearing at Larry and Jeff"
                  },
                ]
  }
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);
