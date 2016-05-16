// bio Object

var name = "Jenniffer Lockwood";
var role = "Front End Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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

var work = {
	"jobs" : [
	{
		"employer" : "Vossloh Signaling, Inc.",
		"title" : "Drafter",
		"location" : "Grass Valley, CA, US",
		"dates" : "08/2014 - 10/2015",
		"description" : "Transferred both and detailing drawings from Solid Edge to Inventor. Modified and refined drawings as requested by management. Improved the quality of the drawings during the by reporting discrepancies to the Director of Electro-Mechanical Engineering and other stakeholders."
	},
	{
		"employer" : "Macy's",
		"title" : "Retail Support Associate",
		"location" : "Roseville, CA, US",
		"dates" : "08/2013 - 08/2014",
		"description" : "Responsibilities included placement of new merchandise receipts on the selling floor, moving merchandise to prepare for sales events, pulling merchandise for shipping to customers, and completing price changes; assisted with clearing out fitting rooms, recovering the selling floor by folding and rehanging merchandise, and organizing the selling floor and stock areas"
	}
	]
};

var projects = {
	"projects" : [
	{
		"title" : "Animal Trading Cards",
		"dates" : "04/2016",
		"description" : "Applying what I've learned in the CSS course, I recreated a web page from a design prototype.",
		"images" : "images/animalCard.jpg"
	},
	{
		"title" : "Build a Portfolio Site",
		"dates" : "04/2016",
		"description" : "Develop a responsive website that will display images, descriptions and links to each of the portfolio projects I will complete throughout the course of the Front-End Web Developer Nanodegree, replicating a design mockup.",
		"images" : "images/portfolioSite.jpg"
	}
	]
}

var education = {
	"schools" : [
		{
			"name" : "Institución Tecnológica Colegio Mayor de Bolívar.",
			"location" : "Cartagena, Colombia",
			"degree" : "Three year degree",
			"Majors" : "Drafting",
			"dates" : "01/1999 - 12/2003"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer",
			"school" : "Udacity",
			"dates" : "03/2016 - Present",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var forrmattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(forrmattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);
	}
};

projects.display();

function inName(name) {
    var finalName = name;
	
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" "); 

    return finalName;
};

$("#main").append(internationalizeButton);

// Do you want to see a map? Here's a map.
$("#mapDiv").append(googleMap);

/*
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});
*/