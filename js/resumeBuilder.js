// bio Object

var bio = {
	"name" : "Jenniffer Lockwood",
	"role" : "Front End Developer",
	"contacts" : {
		"mobile" : "+1(650) 555-5555",
		"email" : "jennifferlockwood@gmail.com",
		"github" : "JennifferLockwood",
		"location" : "Sacramento, CA"
	},
	"welcomeMessage" : "Welcome to my profile!",
	"skills" : ["HTML", "CSS", "CAD Drafting", "jQuery", "JavaScript"],
	"biopic" : "images/profilePhoto.jpg",
	"display" : function() {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(welcomeMessage);

		var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts, #footerContacts").append(myMobile);
		var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts, #footerContacts").append(myEmail);
		var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts, #footerContacts").append(myGithub);
		var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts, #footerContacts").append(myLocation);

		var myPhoto = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(myPhoto);


		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i=0; i < bio.skills.length; i++) {
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkills);			
			}
		}
	}
};


// Education Object
var education = {
	"schools" : [
		{
			"name" : "Institución Tecnológica Colegio Mayor de Bolívar.",
			"location" : "Cartagena, Colombia",
			"degree" : "Three year degree",
			"majors" : ["Architectural and Engineering Drafting"],
			"dates" : "01/1999 - 12/2003",
			"url" : "http://www.colmayorbolivar.edu.co/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer",
			"school" : "Udacity",
			"date" : "03/2016 - Present",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title" : "Intro to Descriptive Statistics",
			"school" : "Udacity",
			"date" : "02/2016",
			"url" : "https://www.udacity.com/course/intro-to-descriptive-statistics--ud827"
		},
		{
			"title" : "Intro to Inferential Statistics",
			"school" : "Udacity",
			"date" : "01/2016",
			"url" : "https://www.udacity.com/course/intro-to-inferential-statistics--ud201"
		}
	],
	"display" : function() {
		if (education.schools.length > 0) {
			$("#education").append(HTMLschoolStart);
			for (var i=0; i < education.schools.length; i++) {
				var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
				var schoolUrl = schoolName.replace("#", education.schools[i].url);
				var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
				var schoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
				var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
				var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);

				$(".education-entry:last").append(schoolUrl + schoolDegree);
				$(".education-entry:last").append(schoolDates);
				$(".education-entry:last").append(schoolLocation);
				$(".education-entry:last").append(schoolMajor);
			}
		}

		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			for (var i=0; i < education.onlineCourses.length; i++) {
				var classTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var courseTitle = classTitle.replace("#", education.onlineCourses[i].url);
				var schl = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var courseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
				var courseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
				var courseUrlLink = courseUrl.replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(courseTitle + schl);
				$(".education-entry:last").append(courseDates);
				$(".education-entry:last").append(courseUrlLink);
			}
		}
	}
};


// Work Object
var work = {
	"jobs" : [
	{
		"employer" : "Vossloh Signaling, Inc.",
		"title" : "Drafter",
		"location" : "Grass Valley, CA, US",
		"dates" : "08/2014 - 10/2015",
		"url" : "http://www.vossloh-signaling.com/",
		"description" : "Transferred both and detailing drawings from Solid Edge to Inventor. Modified and refined drawings as requested by management. Improved the quality of the drawings during the by reporting discrepancies to the Director of Electro-Mechanical Engineering and other stakeholders."
	},
	{
		"employer" : "Macy's",
		"title" : "Retail Support Associate",
		"location" : "Roseville, CA, US",
		"dates" : "08/2013 - 08/2014",
		"url" : "http://l.macys.com/westfield-galleria-at-roseville-in-roseville-ca",
		"description" : "Responsibilities included placement of new merchandise receipts on the selling floor, moving merchandise to prepare for sales events, pulling merchandise for shipping to customers, and completing price changes; assisted with clearing out fitting rooms, recovering the selling floor by folding and rehanging merchandise, and organizing the selling floor and stock areas"
	},
	{
		"employer" : "Gen-Mil S.A.",
		"title" : "Production Drafter",
		"location" : "Bogota, D.C., Colombia",
		"dates" : "04/2009 - 09/2011, 07/2005 - 08/2008",
		"url" : "http://www.paginasamarillas.com.co/empresas/gen-mil-sa/bogota-15670738",
		"description" : "Developing plans for the manufacture of a variety of machine drive parts, including chains, bushings, rollers, sidebars and sprockets; developing Bills of Material appropriate to the plan according to work orders; managing standard procedures within a quality management system, to ensure and document ISO compliance; conducting factory surveys and measurements, to modify and improve plans as needed; taking measurements in the factory, updating digital information accordingly; often called upon to create plans from limited information, having to coordinate with multiple departments to research requirements as needed."
	}
	],
	"display" : function() {
		if (work.jobs.length > 0) {
			$("#workExperience").append(HTMLworkStart);
			for (var i=0; i < work.jobs.length; i++) {
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
				var urlEmployer = formattedEmployer.replace("#", work.jobs[i].url);
				var jobTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
				var jobDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
				var jobLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
				var jobDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

				$(".work-entry:last").append(urlEmployer + jobTitle);
				$(".work-entry:last").append(jobDates);
				$(".work-entry:last").append(jobLocation);
				$(".work-entry:last").append(jobDescription);
			}
		}	
	}
};


// Projects Object
var projects = {
	"projects" : [
	{
		"title" : "Build a Portfolio Site",
		"dates" : "04/2016",
		"url" : "https://github.com/JennifferLockwood/portfolio_project_3",
		"description" : "Develop a responsive website that will display images, descriptions and links to each of the portfolio projects I will complete throughout the course of the Front-End Web Developer Nanodegree, replicating a design mockup.",
		"images" : "images/portfolioSite250x185px.jpg"
	},
	{
		"title" : "Animal Trading Cards",
		"dates" : "04/2016",
		"url" : "https://github.com/JennifferLockwood",
		"description" : "Applying what I've learned in the CSS course, I recreated a web page from a design prototype.",
		"images" : "images/animalCard250x185px.jpg"
	}
	],
	"display" : function() {
		if (projects.projects.length > 0) {
			$("#projects").append(HTMLprojectStart);
			for (var i=0; i < projects.projects.length; i++) {
				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
				var myProject = formattedTitle.replace("#", projects.projects[i].url);
				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
				var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);

				$(".project-entry:last").append(myProject);
				$(".project-entry:last").append(formattedDates);
				$(".project-entry:last").append(formattedDescription);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};


// display methods for above declared objects
bio.display();
education.display();
work.display();
projects.display();


// Here's a map.
$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});