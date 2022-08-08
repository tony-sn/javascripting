const instructors1 = [
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]

const instructors2 = [
   {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]

// use loop to find instructor with longest name
// compare property name of object instructor
// return instructor

let longestName = '';

function findInstructorWithLongestName (instructors = []) {
  for (let instructor of instructors) {
    if (instructor.name.length > longestName.length) {
      longestName = instructor.name;
    } 
    
    return longestName;
  }
}

console.log(findInstructorWithLongestName(instructors1));
console.log(findInstructorWithLongestName(instructors2));