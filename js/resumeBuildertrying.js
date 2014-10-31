var name = "Aaron Johnson";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);


var bio = {
	"name": "Aaron Johnson",
	"role": "Web Developer",
	"contacts": {
		"mobile": "718-541-6751",
		"email": "aj65461@gmail.com",
		"github": "aj65461",
		"twitter": "@WhereTrumpAt",
		"location": "Jonesville, NC"
	},
	"welcomeMessage": "Hey Everybody!",
	"skills": [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/me.jpg"
}

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

var education = {
	"schools": [
		{
			"name" : "Appalachian State University",
			"location" : "Boone, NC",
			"degree" : "BS",
			"majors" : ["Business Administration, Economics"],
			"dates" : "August 2004 - May 2008",
			"url": "http://www.appstate.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Development Nanodegree",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/nd001"
		},
		{
			"title": "Intro to Computer Science",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/cs101"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/ud304"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/ud804"
		}
	]
}


var work = {
	"jobs": [
		{
			"employer" : "Patent Illustration Studios",
			"title" : "President, Drafting Manager",
			"location" : "Jonesville, NC",
			"dates" : "October 2013 - Present",
			"description" : "Coordinated with clients to provide patent applicants with the necessary illustrations to show design and functionality of intellectual property."
		},
		{
			"employer" : "Global Patent Graphics",
			"title" : "Illustrator",
			"location" : "Charlotte, NC",
			"dates" : "December 2008 - October 2013",
			"description" : "Coordinated with clients to provide patent applicants with the necessary illustrations to show design and functionality of intellectual property."

		}
	]
}

function displayWork () {
	for (job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}

displayWork();


var projects = {
	"projects": [
		{
			"title": "Project 1",
			"dates": "Present",
			"description": "Making a Resume",
			"images": [
				"images/me.jpg",
				"images/me.jpg"
			]
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$("project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$("project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$("project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			};
		};
	}
}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);






