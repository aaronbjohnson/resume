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

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

$("#header").append(HTMLskillsStart);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkills);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedBioPic);

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

$("#workExperience").append(HTMLworkStart);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
$(".work-entry:last").append(formattedEmployer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
$(".work-entry:last").append(formattedTitle);
var formattedDates = HTMLworkDates.replace("%data%", work.dates);
$(".work-entry:last").append(formattedDates);
var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
$(".work-entry:last").append(formattedLocation);
var formattedDescription =HTMLworkDescription.replace("%data%", work.description);
$(".work-entry:last").append(formattedDescription);

var projects = {
	"projects": [
		{
			"title": "",
			"dates": "",
			"description": "",
			"images": ""
		}
	]
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
	]
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

$("#education").append(HTMLschoolStart);

var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
$(".education-entry:last").append(formattedSchoolName);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.dates);
$(".education-entry:last").append(formattedSchoolDates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.location);
$(".education-entry:last").append(formattedSchoolLocation);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




