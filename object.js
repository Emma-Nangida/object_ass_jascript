
//Given an array of objects, each object representing 
//a person with a name and age property, 
//write a function that returns a new array containing 
//the names of all people who are 18 years old or older.
//const people = [
 // { name: 'Alice', age: 17 },
  //{ name: 'Eunice', age: 22 },
  //{ name: 'Charlie', age: 14 },
  //{ name: 'Max', age: 19 },
//];
// const people = [
//  { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ]; 
// const maxAge = people.MIN_VALUE;  
// for(var i=0; i<people.length; i++) { 
// 	var obj = people[i]; 
// 	if(obj["age"] > maxAge) {  
// 		people.push(obj); 
// 		maxAge = obj["age"]; 
// 	} 
// 	else if(obj["age"] === maxAge) {  
// 		people.push(obj); 
// 	} 
// } 
 
// return people; 
    const people = [{
        name: 'Alice',
        age: 17,
      },
      {
        name: 'Eunice',
        age:22,
      },
      {
        name: 'Charlie',
        age:14,
      },
    ]
    const oldestPeople = people.sort(function(a,b) {
  const lastPerson = a.age 
  const nextPerson = b.age
  if (lastPerson > nextPerson) {
    return -1;
  } else {
    return 1;
  }
});

console.log(people[0]);

//Write a function that takes an array of objects, where 
//each object represents a product with a name, price,
 //and category property. The function should return an 
 //object that groups the products by their categories, 
 //with the category names as keys and the arrays of
 // products as values.

const products = [
 { name: 'Laptop', price: 1200, category: 'Electronics' },
 { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
 { name: 'Shoes', price: 60, category: 'Clothing' },
];
  const groupByCategory = products.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
  }, {});
  console.log(groupByCategory);





//Given an array of objects, where each object represents
 //a student with a name and an array of scores, write a 
 //function that returns a new array containing the names of
 // all students whose average score is greater than or 
 // equal to 85.
const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];
function bestStudent() {
    var bestScores = 0;
    var student;
    for(i=0; i < studentArr.length; i++) {
        var student = studentArr[i];
        scores = student.scores;
        for(g = 85; g >=scores.length; g++){
            if(grades[g] > bestScores) {
                bestScores = scores[g];
                console.log(bestStudent);     
            }
        }

    }    
}
//Given an object representing a car, with properties for 
//the make, model, year, and a method to display the
 //car's information, write a function that takes the car 
 //object and adds a new method to the object called age.
 // The age method should return the current age of the car based 
  //on the current year and the car's year property.


const car = {
 make: 'Ford',
 model: 'Ranger',
  year: 2023,
  displayInfo: function() {
   console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};
car.displayInfo();
car.age=function(){
    console.log('4 years');
}
console.log({car});
car.age();
console.log({car});
car.displayInfo();




