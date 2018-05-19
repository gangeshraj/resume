
var bio={
    "name": "GANGESH RAJ SHARMA",
    "role": "ME(A+R)N stack developer",
    "contacts": {
        "mobile": "834045053",
        "email": "gangeshraj1@gmail.com",
        "github":"https://github.com/gangeshraj",
        "location": "Bangalore"
    },
    "welcomeMessage": "Welcome I hope you have a great day!",
    "skills": ["Angular 6 , React 16 ,Redux, Redux -saga,Redux-thunk" ,"jQuery , Html, css ,Bootstrap javascript ES->6","Node , Express , spring",
    "python , java , c","Oracle , MySql"],
    "biopic": "images/logo.jpg",
    "display": function() {
        var mname= HTMLheaderRole.replace("%data%",bio.name);
        var mrole=HTMLheaderName.replace("%data%",bio.role);
        $('#header').append(mrole);
        $("#header").append(mname);
        var mobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
        $('#header').append(mobile);
        var mail=HTMLemail.replace("%data%",bio.contacts.email);
        $('#header').append(mail);
        var github=HTMLgithub.replace("%data%",bio.contacts.github);
        $('#header').append(github);
         var location=HTMLlocation.replace("%data%",bio.contacts.location);
        $('#header').append(location);
        var pic=HTMLbioPic.replace("%data%",'images/logo.jpg');
       $('#header').append(pic);
       var msg=HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
       $('#header').append(msg);
       $('#header').append(HTMLskillsStart);
       var skillsdescription;
       bio.skills.forEach(function(item){
              skillsdescription=HTMLskills.replace('%data%',item);
              $('#header').append(skillsdescription);
       });

       mobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
       $('#downContacts').append(mobile);
       var email=HTMLemail.replace("%data%",bio.contacts.email);
       $('#downContacts').append(email);
       github=HTMLgithub.replace("%data%",bio.contacts.github);
       $('#downContacts').append(github);
       var locationx=HTMLlocation.replace("%data%",bio.contacts.location);
       $('#downContacts').append(locationx);
       $('#kmapDiv').append(googleMap);
    }
};
bio.display();

var work={
        "jobs":
         [
         {"employer": "Infosys Limited",
          "title": "System Engineer" ,
          "location": "Bangalore" ,
          "dates": "06-11-17",
          "description": "Working on lot of technologies Angular , react developed front end pages ,used Node , Express  for backend. Database used was my sql and oracle. Recently Now moving to Spring 5 coding is fun!"
         }
          ],
        "display": function() {
              var a,b,c;
              $('#workExp').append(HTMLworkStart);
              work.jobs.forEach(function(jobs){

                    a=HTMLworkEmployer.replace("%data%",jobs.employer);
                    b=HTMLworkTitle.replace('%data%',jobs.title);
                    c=a+b;
                    $('#workExp').append(c);
                    a=HTMLworkDates.replace('%data%',jobs.dates);
                    b=HTMLworkLocation.replace("%data%",jobs.location);
                    $('#workExp').append(a);
                    $('#workExp').append('<b>'+b+'</b>');
                    a=HTMLworkDescription.replace('%data%',jobs.description);
                    $('#workExp').append(a);
              });
       }
};
work.display();

var projects={
        "projects" :[
           {
            "title": " Digital Wallet (Infosys Training) ",
            "dates": "06-11-17",
            "description": "Developed a Digital Wallet in module where we tested the code using pytest.Front – End: - Python,Back – End: –Oracle",
            "images": []
           },
           {
            "title": " Movie Booking Platform (Infosys Training) ",
            "dates": "10-01-2018",
            "description": "Developed a movie booking platform.Front – End: Angular, typescript. HTML, CSS, bootstrap, jQuery. Back – End: JavaScript, Node, Express MySQL.",
            "images": []
            }
            ,
            {
            "title": " A BURGER BUILDER SINGLE PAGE APP (click to see) ",
            "hosted":"https://burger-app-react-gangesh.firebaseapp.com/",
            "dates": "27-04-18",
            "description": `Developed single page application which creates a burger with some ingredients where user chooses its ingredients.\n 
                            A user to order a burger needs to sign up if signed up needs to login can order its burger by filling contact details\n
                        Technologies used : FRONT END:- React ,Redux ,Redux-saga,Redux thunk,REstfull calls using - AXIOS API  BACK END:- FIREBASE`,
            "images": ['./images/burger1.png','./images/burger2.png','./images/burger3.png','./images/burger4.png',
            './images/burger5.png','./images/burger6.png','./images/burger7.png'
            ,'./images/burger8.png','./images/burger9.png','./images/burger10.png']
            }
            ,
           {
            "title": "SINGLE MEMORY GAME PAGE APPLICATION(click to see)",
            "hosted":"https://gangeshraj.github.io/Memorygame/",
            "dates": "05-10-2017",
            "description": "Memory game projects where user has to verify the cards in pairs consecutively to get all the card displayed.Technologies used:  JavaScript, jQuery, HTML, CSS ",
            "images": ['./images/memory1.png','./images/memory2.png','./images/memory3.png','./images/memory4.png']
            },
            {
            "title": "A SIMPLE NEIGHBOURHOOD SINGLE PAGE APP(click to see)",
            "hosted": "https://gangeshraj.github.io/neighbourhood/",
            "dates": "18-10-2017",
            "description": "Developed a single page web application, where you can get the location on Google Map  using google map API and location’s details using foursquare API. Technologies used:  JavaScript, jQuery,Knockout.js organisational framework Google Map API, Bootstrap, foursquare API ",
            "images": ['./images/neighbour1.png','./images/neighbour2.png','./images/neighbour3.png','./images/neighbour4.png']
            },
            {
            "title": "CLASSIC ARCADE SINGLE PAGE GAME(click to see) ",
            "hosted": "https://gangeshraj.github.io/Gamearcade/",
            "dates": "21-09-2017",
            "description": "Developed Classic arcade game project where character is to cross the path without conflicting the enemies using JavaScript object.            Technologies used:  JavaScript, jQuery, HTML, CSS  ",
            "images": ['./images/classic1.png','./images/classic2.png']
            }
            ,
            {
            "title": "ONLINE RESUME(click to see)",
            "dates": "15-09-2017",
            "description": "Personal online Resume where each detail is stored in JavaScript object and DOM is manipulated using jQuery And Google Map API shows places where I have worked.       Technologies used:  JavaScript, jQuery, HTML, CSS ",
            "images": ['./images/resume1.png','./images/resume2.png','./images/resume3.png']
            },
            ,
            {
            "title": "DRAWING CANVAS(click to see)",
            "hosted": "https://gangeshraj.github.io/2-D-canvas/",
            "dates": "1-09-2017",
            "description": "A canvas where you can draw with your wish of colors and size of canvas.  Technologies used:  JavaScript, jQuery, HTML, CSS",
            "images": ['./images/canvas1.png','./images/canvas2.png','./images/canvas3.png']
            }
            ,
            {
            "title": "JASMINE TESTING(click to see)",
            "hosted": "https://gangeshraj.github.io/Jasmine-testing/",
            "dates": "10-09-2017",
            "description": "Project on jasmine testing.Testing framework used is jasmine ",
            "images": []
            }    

          ],
          "display": function() {
              var a,b,c;
              $('#project').append(HTMLprojectStart);
              projects.projects.forEach(function(project){
                        a=HTMLprojectTitle.replace("%data%",project.title);
                        if(project.hosted){
                            a="<a href='"+project.hosted+"'>"+project.title+"</a>";
                            console.log(a);
                        }
                        a='<h3 style="margin-left:-70px">'+a+"</h3>";
                        $('.project-entry').append(a);
                        a=HTMLprojectDates.replace("%data%",project.dates);
                        $('.project-entry').append(a);
                        a=HTMLprojectDescription.replace("%data%",project.description);
                        $('.project-entry').append(a);
                        if(project.images.length>0)
                        project.images.forEach(function(image){
                                        // $('.project-entry').append( projects.projects[index].images[nestedindex]);
                                        a=HTMLprojectImage.replace('%data%', image);
                                        $('.project-entry').append(a);
                        });

            });
          }
};
projects.display();

var education={
    "schools": [{
            "name": "HALDIA INSTITUTE OF TEchonology",
            "location": "HALDIA",
            "degree": "Regular",
            "majors": ["Graduation","Btech in Computer Science"],
            "dates": "12-5-2017"
        }
        ,
        {
            "name": "GBSSS shakti nagar no 1",
            "location": "New Delhi",
            "degree": "Regular",
            "majors": ["12th","CBSE"],
            "dates": "12-3-2012"
        }
        ,
        {
            "name": "Infant jesus school",
            "location": "Patna",
            "degree": "Regular",
            "majors": ["10th","CBSE"],
            "dates": "12-3-2009"
        }
    ],
    "onlineCourses": [{
            "title": "UDACITY NANODEGREE FOR FRONT END DEVELOPMENT(click to see certificate)    ",
            "school": "Udacity",
            "dates": "23-10-2017",
            "url": "https://in.udacity.com/"
        }
    ],
    "display": function() {
        var a,b,c;
       $("#Education").append(HTMLschoolStart);
       education.schools.forEach(function(item,index){
              a=HTMLschoolName.replace('%data%',education.schools[index].name);
              b=HTMLschoolDegree.replace('%data%',education.schools[index].degree);
              a=a+b;
              $('.education-entry').append(a);
              a=HTMLschoolDates.replace('%data%',education.schools[index].dates);
              $('.education-entry').append(a);
              a=HTMLschoolMajor.replace('%data%',education.schools[index].majors[0]+","+education.schools[index].majors[1]);
              $('.education-entry').append(a);
       });

        $("#Education").append(HTMLonlineClasses);
       education.onlineCourses.forEach(function(item,index){
              a=HTMLonlineTitle.replace('%data%',education.onlineCourses[index].title);
              b=HTMLschoolDegree.replace('%data%',education.onlineCourses[index].school);
              c=a+b;
              $('#Education').append(c);
              a=HTMLonlineDates.replace('%data%',education.schools[index].dates);
              $('#Education').append(a);
              a=HTMLonlineURL.replace('%data%',education.onlineCourses[index].url);
              $('#Education').append(a);
       });
    }
};
education.display();

