/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Jenniffer Lockwood";
var role = "Front End Developer"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*
var awesomeThoughts = "I am " + firstName
+ " and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN.");
console.log(awesomeThoughts);

$("#main").append(funThoughts);
*/

var skills =
["programming", "CAD drafting", "web development"];

var bio = {
	"name" : name,
	"role" : role,
	"contacts" : {
		"mobile" : "650-555-5555",
		"email" : "jennifferlockwood@gmail.com",
		"github" : "jennifferlockwood",
		"location" : "Sacramento"
	},
	"welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc.",
	"skills" : skills,
	"bioPic" : "images/fry.jpg"
};

bio["city"] = "Mountain View";
bio["email"] = "james.williams@udacity.com"

$("#main").append(bio.welcomeMessage);
$("#main").append(bio["city"]);

/*
 Practice with Objects Quiz. Lesson 1 - Data Types
*/

var work = {};
work.position = "CAD Drafter";
work.employer = "Vossloh Signaling";
work.yearsWorked = 1;

var education = {};
education["name"] = "Udacity";
education["years"] = 1;
education["city"] = "Sacramento";

$("#main").append(work["position"]);
$("#main").append(education.name);

// Lesson 2 - Flow Control (While Loops)
/*
var cameron = {};
cameron.job = "course dev";

var makeCourse = function() {
	// make a course
	console.log("Made a course");
}

var courses = 0;
while(cameron.job === "course dev") {
	makeCourse();
	courses = courses + 1;
	if (courses === 10) {
		cameron.job = "learning specialist";
	}
}

console.log(cameron.job);
*/

// Lesson 2 - Flow Control (For Loops)
/*
for (var i = 0; i < 9; i++) {
	console.log(i);
}
*/

// Lesson 2 - Flow Control (For-In Loops)
/*
var countries = ["Germany", "Argentina", "Brazil", "Netherlands"];

for (country in countries) {
	console.log(country);
}
*/