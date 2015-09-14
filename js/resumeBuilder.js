var website = '<a class="inText" href="http://aaronjohnsonartist.com" target="_blank">website</a>';

var bio = {
    "name": "Aaron Johnson",
    "role": "WEB DEVELOPER",
    "contacts": {
        //"mobile": "718-555-5555",
        "email": "aj65461@gmail.com",
        "github": "aj65461",
        /*"twitter": "@WhereTrumpAt",*/
        "linkedin": "abrittjohnson",
        "location": "Jonesville, NC",
        "otherPlacesLived": [
            {
                "location": "Brooklyn, NY"
            }
        ]
    },
    "welcomeMessage": "I became fascinated with web development while creating my own " + website + " using Wordpress. Wanting to build my skills around a solid foundation of best practices and up-to-date technology, I enrolled in the Udacity Front-End Web Developer Nanodegree program. Having graduated, I am excited about applying these skills to bring value to the world of web development.",
    "skills": [
        {
            "label": "HTML",
            "color": "#F7464A",
            "highlight": "#FF5A5E",
            "value": 9
        },
        {
            "label": "CSS",
            "color": "#46BFBD",
            "highlight": "#5AD3D1",
            "value": 9
        },
        {
            "label": "JavaScript",
            "color": "#FDB45C",
            "highlight": "#FFC870",
            "value": 7
        },
        {
            "label": "Bootstrap",
            "color": "#999999",
            "highlight": "#A8B3C5",
            "value": 8
        },
        {
            "label": "jQuery",
            "color": "#E7B892",
            "highlight": "#FFDBBE",
            "value": 6
        },
        {
            "label": "Photoshop",
            "color": "#40CA39",
            "highlight": "#70E46A",
            "value": 10
        },
        {
            "label": "Illustrator",
            "color": "#055C59",
            "highlight": "#018E89",
            "value": 10
        },
        {
            "label": "Python",
            "color": "#974708",
            "highlight": "#EB6902",
            "value": 4
        }
    ],
    "hobbies": [
        {
            "label": "Illustration",
            "value": 90
        },
        {
            "label": "Playing Guitar",
            "value": 60
        },
        {
            "label": "Reading",
            "value": 80
        },
        {
            "label": "Gaming",
            "value": 25
        },
        {
            "label": "Golfing",
            "value": 15
        }
    ],
    "bioPic": "images/me.jpg",

    display : function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        //var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        //$("#topContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        //var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        //$("#topContacts").append(formattedTwitter);
        var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
        $("#topContacts").append(formattedLinkedin);
        //var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        //$("#topContacts").append(formattedLocation);
        var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#summary").append(formattedWelcomeMessage);
        //Adding the footer contacts
        //$("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLinkedin);
        //$("#footerContacts").append(formattedTwitter);
        /*
        if (bio.skills.length > 0) {
            $("#skillStart").append(HTMLskillsStart);
            for (var skill in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill].label);
                $("#skills").append(formattedSkill);
            }
        }
        */
        //var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        //$("#header").prepend(formattedBioPic);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
    }
};

var work = {
    "jobs": [
        {
            "employer" : "Patent Illustration Studios",
            "title" : "Member, Drafting Manager",
            "location" : "Jonesville, NC",
            "dates" : "October 2013 - Present",
            "description" : "Employing the most up-to-date technology to establish a more streamlined and efficient patent illustration process, leading to faster turnaround times without sacrificing quality. Utilizing an algorithmic approach to planning and executing patent illustration packages. Researching and learning new technologies and software in order to further increase speed, adaptability, and accuracy of the patent illustration process.",
            "url" : "http://www.patentillustrationstudios.com/"
        },
        {
            "employer" : "Global Patent Graphics",
            "title" : "Illustrator",
            "location" : "Charlotte, NC",
            "dates" : "December 2008 - October 2013",
            "description" : "Produced and delivered clear and concise drawing packages that included multiple methodologies for a wide range of inventions. Responsible for end-to-end case management. Worked in a team environment to develop long-lasting client relationships by maintaining the highest level of service, quality, and accuracy while meeting tight deadlines."
        }
    ],

    display : function () {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace('#', work.jobs[job].url);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedworkLocation);
            var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedworkDates);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedworkDescription);
        }
    }
};

var projects = {
    "projects": [
        {
            "title" : "Feed Reader",
            "dates" : "2015",
            "description": "In this project I was given a web-based application that read RSS feeds. The goal was to use Jasmine to write test suites that would test the functionality of the application.",
            "links": [
                "https://github.com/aj65461/frontend-nanodegree-feedreader",
                "http://aj65461.github.io/frontend-nanodegree-feedreader/"
            ],
            "images": []
        },
        {
            "title" : "Neighborhood Map",
            "dates" : "2015",
            "description": "The goal of this project was to develop a single page application centered around one of my favorite neighborhoods. The map shows markers for my favorite locations in that neighborhood as well as a list view of those locations that can control the display of information about each place. Third-party APIs were used to asynchronously deliver current information about each location. A search and filter function was implemented to display or hide the markers and list items based on matching letters entered into a search bar above the map. I used the Knockout.js framework to keep the UI updated whenever the data model is changed and to connect the Google map markers to their respective list items. I used the Bootstrap framework to make the overall layout responsive on both larger screens and on mobile screens.",
            "links": [
                "https://github.com/aj65461/frontend-nanodegree-neighborhood-map",
                "http://aj65461.github.io/frontend-nanodegree-neighborhood-map/"
            ],
            "images": []
        },
        {
            "title" : "Mobile Portfolio",
            "dates" : "2015",
            "description": "The goal of this project was to analyze the Critical Rendering Path of a provided portfolio page and to make optimizations that would achieve a PageSpeed score of 90 on index.html, ensure a consistent frame rate at 60fps when when scrolling on a page that has a parallax animation in the background, impact content efficiency, and improve time to resize interactive objects on the page to less than 5ms.",
            "links": [
                "https://github.com/aj65461/frontend-nanodegree-mobile-portfolio",
                "http://aj65461.github.io/frontend-nanodegree-mobile-portfolio/"
            ],
            "images": []
        },
        {
            "title" : "Classic Arcade Game",
            "dates" : "2015",
            "description": "This was my third project in the Udacity Front-End Web Development Nanodegree. Using the provided game loop engine and my own visual assets, I added a number of entities to the game including the player character, lasers, and health pack to recreate a classic Frogger-style game.",
            "links": [
                "https://github.com/aj65461/frontend-nanodegree-arcade-game",
                "http://aj65461.github.io/frontend-nanodegree-arcade-game/"
            ],
            "images": [
            //"images/arcade.jpg"
            ]
        },
        {
            "title" : "Interactive Resume",
            "dates" : "2014",
            "description": "This was my second project in the Udacity Front-End Web Development Nanodegree. Here I developed an interactive resume application that would read resume content from a JSON file and would dynamically display that content within a provided template. I made use of objects, functions, conditionals, and control structures to compose the content that would display on the resume.",
            "links": [
                "https://github.com/aj65461/resume",
                "http://aj65461.github.io/resume"
            ],
            "images": []
        },
        {
            "title" : "HTML and CSS Portfolio",
            "dates" : "2014",
            "description": "This was my first project in the Udacity Front-End Web Development Nanodegree. The requirement was to develop a responsive website based on a mockup that would display images, descriptions and links to projects I would be completing during the course of the degree.",
            "links": [
                "https://github.com/aj65461/portfolio",
                "http://aj65461.github.io/portfolio"
            ],
            "images": []
        }
    ],

    display : function() {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace('#', projects.projects[project].links[1]);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            // Adding the buttons...
            var formattedCode = HTMLprojectCode.replace("%data%", projects.projects[project].links[0]);
            $(".project-entry:last").append(formattedCode);
            var formattedDemo = HTMLprojectDemo.replace("%data%", projects.projects[project].links[1]);
            $(".project-entry:last").append(formattedDemo);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                  $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

var education = {
    "schools": [
        {
            "name" : "Appalachian State University",
            "location" : "Boone, NC",
            "degree" : "BS",
            "majors" : ["Business Administration, Economics"],
            "dates" : "August 2004 - May 2008",
            "url": "http://www.appstate.edu/"
        },
        {
            "name" : "Udacity",
            "location" : "",
            "degree" : "Front-End Web Developer Nanodegree",
            "majors" : [""],
            "dates" : "October 2014 - May 2015",
            "url": "http://www.udacity.com/"
        }
    ],
    "onlineCourses": [
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
        },
        {
            "title": "Object-Oriented JavaScript",
            "school": "Udacity",
            "dates": 2014,
            "url": "https://www.udacity.com/course/ud015"
        },
        {
            "title": "Website Performance Optimization",
            "school": "Udacity",
            "dates": 2014,
            "url": "https://www.udacity.com/course/ud884"
        }
    ],

    display : function() {
        $("#education").append(HTMLschoolStart);
            for (var school in education.schools) {
                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace('#', education.schools[school].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

                var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;
                $(".education-entry:last").append(formattedSchoolTitle);
                
                if (education.schools[school].location.length > 0) {
                    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                    $(".education-entry:last").append(formattedSchoolLocation);
                }
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                $(".education-entry:last").append(formattedSchoolDates);

                if (education.schools[school].majors.length > 0) {
                    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
                    $(".education-entry:last").append(formattedMajor);
                }
            }

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLonlineschoolStart);
        for (var onlineCourse in education.onlineCourses) {
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace('#', education.onlineCourses[onlineCourse].url);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
            $(".online-entry:last").append(formattedonlineTitleSchool);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
            $(".online-entry:last").append(formattedonlineDates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url).replace('#', education.onlineCourses[onlineCourse].url);
            $(".online-entry:last").append(formattedonlineURL);
        }
    }
};

/**
 * Creating skill constructor function
 */

function Skill(value, color, highlight, label) {
    this.value = value;
    this.color = color;
    this.highlight = highlight;
    this.label = label;
}

/**
 * Adding the chart.js stuff here
 */

var skillData = [];
for (var skill in bio.skills) {
    var chartEntry = new Skill(bio.skills[skill].value, bio.skills[skill].color, bio.skills[skill].highlight, bio.skills[skill].label);
    skillData.push(chartEntry);
}


var skillOptions = {

    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop : true,

    //String - The colour of the label backdrop
    scaleBackdropColor : "rgba(255,255,255,0.75)",

    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero : true,

    //Number - The backdrop padding above & below the label in pixels
    scaleBackdropPaddingY : 2,

    //Number - The backdrop padding to the side of the label in pixels
    scaleBackdropPaddingX : 2,

    //Boolean - Show line for each value in the scale
    scaleShowLine : true,

    //Boolean - Stroke a line around each segment in the chart
    segmentShowStroke : true,

    //String - The colour of the stroke on each segement.
    segmentStrokeColor : "#fff",

    //Number - The width of the stroke value in pixels
    segmentStrokeWidth : 2,

    //Number - Amount of animation steps
    animationSteps : 10,

    //String - Animation easing effect.
    animationEasing : "easeOutBounce",

    //Boolean - Whether to animate the rotation of the chart
    animateRotate : true,

    //Boolean - Whether to animate scaling the chart from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};

var ctxSkill = document.getElementById("skillsChart").getContext("2d");
var mySkillChart = new Chart(ctxSkill).PolarArea(skillData);

// Draw a polar area chart
new Chart(ctxSkill).PolarArea(skillData, skillOptions);


// Radar Chart Here:

var hobbyData = {
    labels: [],
    datasets: [
        {
            label: "Hobbies",
            fillColor: "rgba(90,211,209,0.2)",
            strokeColor: "#46BFBD",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#46BFBD",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
        }
    ]
};

for (var hobby in bio.hobbies) {
    hobbyData.labels.push(bio.hobbies[hobby].label);
    hobbyData.datasets[0].data.push(bio.hobbies[hobby].value);
}

var hobbyOptions = {
    //Boolean - Whether to show lines for each scale point
    scaleShowLine : true,

    //Boolean - Whether we show the angle lines out of the radar
    angleShowLineOut : true,

    //Boolean - Whether to show labels on the scale
    scaleShowLabels : false,

    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero : true,

    //String - Colour of the angle line
    angleLineColor : "rgba(0,0,0,.1)",

    //Number - Pixel width of the angle line
    angleLineWidth : 1,

    //String - Point label font declaration
    pointLabelFontFamily : "'Arial'",

    //String - Point label font weight
    pointLabelFontStyle : "normal",

    //Number - Point label font size in pixels
    pointLabelFontSize : 10,

    //String - Point label font colour
    pointLabelFontColor : "#666",

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 3,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

var ctxHobby = document.getElementById("hobbyChart").getContext("2d");

var myRadarChart = new Chart(ctxHobby).Radar(hobbyData, hobbyOptions);





$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});


function inName() {

    var name_var = bio.name.trim().split(" ");
    name_var[0] = name_var[0].slice(0,1).toUpperCase() + name_var[0].slice(1).toLowerCase();
    name_var[1] = name_var[1].toUpperCase();

    return name_var[0] + " " + name_var[1];
}

inName(name);

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);