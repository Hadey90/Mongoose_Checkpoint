import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connect.js";
import Person from "./models/person.model.js";

dotenv.config();

const app = express();

const newPerson = new Person({
  name: "John",
  age: 30,
  favoriteFoods: ["bread", "oat", "beans"],
});

try {
  newPerson.save();
} catch (err) {
  console.log("Error saving user.");
}

Person.create([
  {
    name: "Peter",
    age: 20,
    favoriteFoods: ["pie", "rune", "beans"],
  },
  {
    name: "John",
    age: 20,
    favoriteFoods: ["rice", "garri", "beans"],
  },
  {
    name: "luke",
    age: 20,
    favoriteFoods: ["pie", "rune", "beans"],
  },
  {
    name: "Mark",
    age: 20,
    favoriteFoods: ["puff", "chin chin", "beans"],
  },
]).then((result) => {
  console.log(result);
});

connectDB().then(() => {
  try {
    console.log("Database connected successfully");
    app.listen(process.env.PORT, () => {
      console.log(`app running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error(`Error in connecting database ${err}`);
  }
});

// Use the `find` method to search for people with a specific name
// Person.find({ name: "John" }, (err, people) => {
//   if (err) {
//     console.error("Error finding people:", err);
//   } else {
//     console.log("People with the name 'John':", people);
//   }
// });

// Define a function to find a person by their favorite food
// function findPersonByFavoriteFood(food) {
//   Person.findOne({ favoriteFoods: food }, (err, person) => {
//     if (err) {
//       console.error("Error finding person:", err);
//     } else {
//       if (person) {
//         console.log(`Person with ${food} in their favorite foods:`, person);
//       } else {
//         console.log(`No person found with ${food} in their favorite foods.`);
//       }
//     }
//   });
// }
// // Call the function and pass the food you want to search for
// findPersonByFavoriteFood("pizza"); // Replace "pizza" with the desired food

// Define a function to find a person by their _id
// function findPersonById(personId) {
//   Person.findById(personId, (err, person) => {
//     if (err) {
//       console.error("Error finding person:", err);
//     } else {
//       if (person) {
//         console.log(`Person with _id ${personId}:`, person);
//       } else {
//         console.log(`No person found with _id ${personId}.`);
//       }
//     }
//   });
// }

// Call the function and pass the _id you want to search for
// findPersonById("your-person-id"); // Replace "your-person-id" with the desired _id

// Define a function to update a person's favorite foods by _id
// function updateFavoriteFoodsById(personId) {
//   Person.findById(personId, (err, person) => {
//     if (err) {
//       console.error("Error finding person:", err);
//       return;
//     }

//     if (!person) {
//       console.log(`No person found with _id ${personId}.`);
//       return;
//     }

//     // Add "hamburger" to the person's favoriteFoods
//     person.favoriteFoods.push("hamburger");

//     // Save the updated person
//     person.save((err, updatedPerson) => {
//       if (err) {
//         console.error("Error saving updated person:", err);
//         return;
//       }

//       console.log(`Updated person with _id ${personId}:`, updatedPerson);
//     });
//   });
// }

// // Call the function and pass the _id you want to search for and update
// updateFavoriteFoodsById("your-person-id"); // Replace "your-person-id" with the desired _id

// Define a function to update a person's favorite foods by _id
// function updateFavoriteFoodsById(personId) {
//   Person.findById(personId, (err, person) => {
//     if (err) {
//       console.error("Error finding person:", err);
//       return;
//     }

//     if (!person) {
//       console.log(`No person found with _id ${personId}.`);
//       return;
//     }

//     // Add "hamburger" to the person's favoriteFoods
//     person.favoriteFoods.push("hamburger");

//     // Save the updated person
//     person.save((err, updatedPerson) => {
//       if (err) {
//         console.error("Error saving updated person:", err);
//         return;
//       }

//       console.log(`Updated person with _id ${personId}:`, updatedPerson);
//     });
//   });
// }

// // Call the function and pass the _id you want to search for and update
// updateFavoriteFoodsById("your-person-id"); // Replace "your-person-id" with the desired _id

// Define a function to delete a person by their _id
// function deletePersonById(personId) {
//   Person.findByIdAndRemove(personId, (err, removedPerson) => {
//     if (err) {
//       console.error("Error deleting person:", err);
//       return;
//     }

//     if (!removedPerson) {
//       console.log(`No person found with _id ${personId}.`);
//       return;
//     }

//     console.log(`Deleted person with _id ${personId}:`, removedPerson);
//   });
// }

// // Call the function and pass the _id you want to search for and delete
// deletePersonById("your-person-id"); // Replace "your-person-id" with the desired _id

// Define a function to delete all people with the name "Mary"
//

// Define a function to perform the query
// function findPeopleWhoLikeBurritos(done) {
//   Person.find({ favoriteFoods: "burritos" }) // Find people who like burritos
//     .sort("name") // Sort the results by name
//     .limit(2) // Limit the results to two documents
//     .select("-age") // Hide the age field
//     .exec((err, data) => {
//       if (err) {
//         console.error("Error finding people:", err);
//         done(err, null);
//       } else {
//         done(null, data);
//       }
//     });
// }

// // Call the function and pass the callback to exec()
// findPeopleWhoLikeBurritos((err, data) => {
//   if (err) {
//     console.error("Query error:", err);
//   } else {
//     console.log("People who like burritos:", data);
//   }
// });

// import Person from "./models/person.model.js";

// const newPerson = new Person({
//   name: "John",
//   age: 30,
//   favoriteFoods: ["bread", "oat", "beans"],
// });

// newPerson.save();
