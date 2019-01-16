
var bio={
    "name": "GANGESH RAJ SHARMA",
    "role": "SOFTWARE & ME(A+R)N stack developer",
    "contacts": {
        "mobile": "8340450653",
        "email": "gangeshraj1@gmail.com",
        "github":"https://github.com/gangeshraj",
        "location": "Bangalore"
    },
    "welcomeMessage": "Welcome I hope you have a great day!",
    "skills": ["Angular 6 , React 16 ,Redux, Redux -saga,Redux-thunk" ,"jQuery , Html, Css ,Bootstrap,Javascript Typesctipt","Node , Express,MongoDb",
    "Python , Java , C","Oracle , MySql"],
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
         {"employer": "Air Asia",
          "title": "Software Engineer" ,
          "location": "Bangalore" ,
          "dates": "03-09-18",
          "description": "Developed Home page of AirAsia.com. Our objective was to have faster loading time within 3 seconds with beautiful designs. . Developed Components are robust, independent and reusable. We developed Home page with minimalistic usage of third-party libraries other than base framework Angular 7. I worked on calendar component of homepage which was completely developed without usage of any libraries. It was developed with only typescript and its inbuilt functions.This calendar is having different perspective in terms of UI and functionality for different views. According to source,destination,flight availability the fares are fetched and shown on the dates.Also for two way and one way journey the range of the dates are shown in continious colurful pattern.Contributed to each project delivery phase (analysis, development, test, ops) in different roles."
         },
         {"employer": "Infosys Limited",
          "title": "System Engineer" ,
          "location": "Bangalore" ,
          "dates": "06-11-17",
          "description": "During training, developed a digital wallet where people have a user interface as well as safe and secure transactional capabilities. Worked on Movie booking platform which we developed in Angular 4 with Node,Express.js as backend where people could book the tickets. After training, I worked with my client American Express via Infosys to develop UI designs using React Redux. The design was highly scalable with redux as the central state to manage all the Client and banking data across the web app."
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
            "description": "Developed a Digital Wallet that provides user all the options which a digital wallet would offer. Using this user can recharge mobile number, add money in wallet from bank account, transfer money to other or own bank account, book tickets etc. The whole details of all operations were stored in oracle database. Includes coding in Python, Oracle as backend.",
            "images": []
           },
           {
            "title": " Movie Booking Platform (Infosys Training) ",
            "dates": "10-01-2018",
            "description": "Built a movie booking platform. Once the users have registered into the project, they can now log-in using login credentials (mobile number &amp; password). Or else, they may also choose to log-in via social links, like Facebook &amp; email. The user can now view the ongoing and upcoming movies and choose show time under a particular cinema, can pick seat quantity to be booked, choose a seat (by viewing it in graphic seat map, ifselecting movie) and then book. After confirming the tickets user could back end side. Includes coding in Angular, TypeScript, HTML, CSS, bootstrap, jQuery for frontend and JavaScript, Node, Express, MySQL for backend.",
            "images": []
            }
            ,
            {
            "title": " A BURGER BUILDER SINGLE PAGE APP (click to see) ",
            "hosted":"https://burger-app-react-gangesh.firebaseapp.com/",
            "dates": "27-04-18",
            "description": `Developed single page project which creates a burger with some ingredients with an attractive UI .A user chooses the ingredients which is shown on screen.\n 
            project is simple to navigate and easy to customize as per the user need.User need to first register themselves to login into the project to order a burger.
            Axios api is used for RESTful calls .Account authentication is done from firebase.User can also see his past orders with all the other details.
            User log in status is also maintained in the browser by the token received from Firebase.
            \nIncludes coding
            in React, Redux, Redux-Saga, Redux-Thunk, RESTful calls using - Axios
            API for frontend and Firebase for backend.`,
            "images": ['./images/burger1.png','./images/burger2.png','./images/burger3.png','./images/burger4.png',
            './images/burger5.png','./images/burger6.png','./images/burger7.png'
            ,'./images/burger8.png','./images/burger9.png','./images/burger10.png']
            }
            ,
           {
            "title": "SINGLE MEMORY GAME PAGE project(click to see)",
            "hosted":"https://gangeshraj.github.io/Memorygame/",
            "dates": "05-10-2017",
            "description": "Developed Memory game project where player has to verify the cards in pairs consecutively to get all the card displayed.\nPlayer will be shown the rule of game once clicked on start game button.The rule shown will be in modal box.All the cards will be shown momentarily and than hidden.Than timer will start which tells user how much time is passed.There is a reset button which resets the game and shuffle the card.After game completion user will be shown time taken and star won.Includes coding: JavaScript, jQuery, HTML, CSS",
            "images": ['./images/memory1.png','./images/memory2.png','./images/memory3.png','./images/memory4.png']
            },
            {
            "title": "A SIMPLE NEIGHBOURHOOD SINGLE PAGE APP(click to see)",
            "hosted": "https://gangeshraj.github.io/neighbourhood/",
            "dates": "18-10-2017",
            "description": "Developed a single page web application. This app shows you some places on google map with markers.You can filter locations on map based on the input, where all data binding is happening using knockout framework.The places when clicked on list shown as well as on map gives some details.These details are fetched from Foursquare API. Includes Coding:  JavaScript, jQuery,Knockout.js organisational framework ,Google Map API, Bootstrap, Foursquare API ",
            "images": ['./images/neighbour1.png','./images/neighbour2.png','./images/neighbour3.png','./images/neighbour4.png']
            },
            {
            "title": "CLASSIC ARCADE SINGLE PAGE GAME(click to see) ",
            "hosted": "https://gangeshraj.github.io/Gamearcade/",
            "dates": "21-09-2017",
            "description": "Developed Classic arcade game application where character is to cross the path without conflicting the enemies. This project uses JavaScript object oriented programming.After crossing each path level increases as well as enemies. Technologies used:  JavaScript, jQuery, HTML, CSS  ",
            "images": ['./images/classic1.png','./images/classic2.png']
            }
            ,
            {
            "title": "ONLINE RESUME(click to see)",
            "dates": "15-09-2017",
            "description": "Created Personal online Resume where each detail is stored in JavaScript object. The Objects stored is inserted into HTML template using jQuery.This project also uses Google Map API to shows places where I have worked and lived.  Includes coding:  JavaScript, jQuery, HTML, CSS ",
            "images": ['./images/resume1.png','./images/resume2.png','./images/resume3.png']
            },
            ,
            {
            "title": "DRAWING CANVAS(click to see)",
            "hosted": "https://gangeshraj.github.io/2-D-canvas/",
            "dates": "1-09-2017",
            "description": "Created canvas where you can draw graphics with your wish of colours and size. Includes coding in JavaScript, jQuery, HTML, CSS.",
            "images": ['./images/canvas1.png','./images/canvas2.png','./images/canvas3.png']
            }
            ,
            {
            "title": "JASMINE TESTING(click to see)",
            "hosted": "https://gangeshraj.github.io/Jasmine-testing/",
            "dates": "10-09-2017",
            "description": "Worked for Project on jasmine testing. Testing framework used is Jasmine.",
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
                        a='<h3 class="project-container" >'+a+"</h3>";
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

