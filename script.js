if (window.localStorage.getItem('user') != null) {
  var ContactFooter = document.querySelector(".contact")
  ContactFooter.style.display = "none";
  var registeredUser = document.querySelector(".registered")
  registeredUser.style.display = "block";
}

(function ($) {
  "use strict";

  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 60
  });


  $('#topNav').affix({
    offset: {
      top: 200
    }
  });



  new WOW().init();

  $('a.page-scroll').bind('click', function (event) {
    var $ele = $(this);
    $('html, body').stop().animate({
        scrollTop: $($ele.attr('href')).offset().top - 60
      },
      1450, 'easeInOutExpo');
    event.preventDefault();
  });

  $('.navbar-collapse ul li a').click(function () {
    /* always close responsive nav after click */
    $('.navbar-toggle:visible').click();
  });

  $('#galleryModal').on('show.bs.modal', function (e) {
    $('#galleryImage').attr("src", $(e.relatedTarget).data("src"));
  });

})(jQuery);


var lightButton = document.querySelector('.light-m-button');
var darkButton = document.querySelector('.dark-m-button');
var introBox = document.querySelector('.intro-box')
var header = document.querySelector("header");
var introButton = document.querySelector(".intro-button");
var sectionAbout = document.querySelector(".about-section");
var body = document.querySelector("body");
var aboutSection = document.querySelector("#one");
var sectionBox = document.querySelector("#about-text");
var skillsBox = document.querySelector('#skills');
var threeBox = document.querySelector('#threee');
var three_Box = document.querySelectorAll('#three-box');

function lightMode() {
  const person = {
    theme: "l"
  }
  window.localStorage.setItem('theme', JSON.stringify(person));
  lightButton.style.display = "none";
  darkButton.style.display = "block";
  introBox.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  introBox.style.border = "2px solid black";
  header.style.backgroundImage = "url('https://img1.akspic.ru/crops/3/7/2/0/7/170273/170273-krasivye_plyazhnye_volny-plyazh-okean-more-priroda-3840x2160.jpg')"
  introBox.style.color = "black";
  introButton.style.color = "black";
  introButton.style.border = "1px solid black";
  sectionAbout.backgroundColor = "white";
  body.style.backgroundColor = "white"
  aboutSection.style.backgroundColor = "white";
  sectionBox.style.color = "black";
  skillsBox.style.backgroundColor = "gray";
  threeBox.style.backgroundColor = "gray";
  three_Box.style.border = "10px solid gray";
}

function autoLightMode() {
  lightButton.style.display = "none";
  darkButton.style.display = "block";
  introBox.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  introBox.style.border = "2px solid black";
  header.style.backgroundImage = "url('https://img1.akspic.ru/crops/3/7/2/0/7/170273/170273-krasivye_plyazhnye_volny-plyazh-okean-more-priroda-3840x2160.jpg')"
  introBox.style.color = "black";
  introButton.style.color = "black";
  introButton.style.border = "1px solid black";
  sectionAbout.backgroundColor = "white";
  body.style.backgroundColor = "white"
  aboutSection.style.backgroundColor = "white";
  sectionBox.style.color = "black";
  skillsBox.style.backgroundColor = "gray";
  threeBox.style.backgroundColor = "gray";
  three_Box.style.border = "10px solid gray";
}

function darkMode() {
  const person = {
    theme: "d"
  }
  window.localStorage.setItem('theme', JSON.stringify(person));
  lightButton.style.display = "block";
  darkButton.style.display = "none";
  introBox.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  introBox.style.border = "2px solid white";
  header.style.backgroundImage = "url('https://img2.akspic.ru/crops/5/1/4/9/6/169415/169415-rastenie-atmosfera-oblako-prirodnyj_landshaft-okruzhayushchaya_sreda-3840x2160.jpg')"
  introBox.style.color = "white"
  introButton.style.color = "white";
  introButton.style.border = "1px solid white";
  aboutSection.style.backgroundColor = "#333";
  sectionBox.style.color = 'rgba(245,245,245,0.7)';
  skillsBox.style.backgroundColor = "#222";
  threeBox.style.backgroundColor = "#222222";
  body.style.backgroundColor = "#333";
  three_Box.style.border = "10px solid gray";
}

function autoDarkMode() {
  lightButton.style.display = "block";
  darkButton.style.display = "none";
  introBox.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  introBox.style.border = "2px solid white";
  header.style.backgroundImage = "url('https://img2.akspic.ru/crops/5/1/4/9/6/169415/169415-rastenie-atmosfera-oblako-prirodnyj_landshaft-okruzhayushchaya_sreda-3840x2160.jpg')"
  introBox.style.color = "white"
  introButton.style.color = "white";
  introButton.style.border = "1px solid white";
  aboutSection.style.backgroundColor = "#333";
  sectionBox.style.color = 'rgba(245,245,245,0.7)';
  skillsBox.style.backgroundColor = "#222";
  threeBox.style.backgroundColor = "#222222";
  body.style.backgroundColor = "#333";
  three_Box.style.border = "10px solid gray";
}

var ruButton = document.querySelector('.ru-button')
var enButton = document.querySelector('.en-button')
var intro_text = document.querySelector('#intro-text')
var intro_title = document.querySelector('#intro-title')

var nav_intro = document.querySelector('.nav-intro')
var nav_about = document.querySelector('.nav-about')
var nav_skills = document.querySelector('.nav-skills')
var nav_projects = document.querySelector('.nav-projects')
var nav_features = document.querySelector('.nav-features')
var nav_tools = document.querySelector('.nav-tools')
var nav_contact = document.querySelector('.nav-contact')
var nav_brand = document.querySelector('.navbar-brand')
var about_text = document.querySelector('#about-text')
var about_title = document.querySelector(".about-title")
var about_btn = document.querySelector(".about-btn")

function toRU() {
  const person = {
    language: "r"
  }
  window.localStorage.setItem('language', JSON.stringify(person));
  ruButton.style.display = "none";
  enButton.style.display = "block";
  intro_text.textContent = "Будущее уже здесь! Открой глаза, И посмотри!";
  introButton.textContent = "Про меня";
  nav_intro.textContent = "Вступление";
  nav_about.textContent = "Про меня";
  nav_skills.textContent = "Навыки";
  nav_projects.textContent = "Проэкты";
  nav_features.textContent = "Особенности";
  nav_tools.textContent = "Инструменты";
  nav_contact.textContent = "Контакт";
  nav_brand.textContent = "Хасанов Иброхим";
  about_text.textContent = "Меня зовут... Иброхим. Мне несколько лет, я интересуюсь программированием более 3 лет, в настоящее время я Full-Stack разработчик. Я знаю такие языки, как JavaScript, NodeJS. Я студент..."
  about_title.textContent = "Привет!";
  about_btn.textContent = "Посмотри мои проэкты"
}

function autoRu() {
  ruButton.style.display = "none";
  enButton.style.display = "block";
  intro_text.textContent = "Будущее уже здесь! Открой глаза, И посмотри!";
  introButton.textContent = "Про меня";
  nav_intro.textContent = "Вступление";
  nav_about.textContent = "Про меня";
  nav_skills.textContent = "Навыки";
  nav_projects.textContent = "Проэкты";
  nav_features.textContent = "Особенности";
  nav_tools.textContent = "Инструменты";
  nav_contact.textContent = "Контакт";
  nav_brand.textContent = "Хасанов Иброхим";
  about_text.textContent = "Меня зовут... Иброхим. Мне несколько лет, я интересуюсь программированием более 3 лет, в настоящее время я Full-Stack разработчик. Я знаю такие языки, как JavaScript, NodeJS. Я студент..."
  about_title.textContent = "Привет!";
  about_btn.textContent = "Посмотри мои проэкты"
}

function toENG() {
  const person = {
    language: "e"
  }
  window.localStorage.setItem('language', JSON.stringify(person));
  ruButton.style.display = "block";
  enButton.style.display = "none";
  intro_text.textContent = "Future is alredy here! Open your eyes, And look!";
  introButton.textContent = "About Me"
  nav_intro.textContent = "Intro";
  nav_about.textContent = "About";
  nav_skills.textContent = "Skills";
  nav_projects.textContent = "Projects";
  nav_features.textContent = "Features";
  nav_tools.textContent = "My tools";
  nav_contact.textContent = "Contact";
  nav_brand.textContent = "Khasanov Ibrohim";
  about_text.textContent = "My name is... Ibrohim I am a few years old, I have been interested in programming for over 3 years and I am currently a Full-Stack developer I know languages like JavaScript, NodeJS And Im a Student ..."
  about_title.textContent = "Hi!"
  about_btn.textContent = "Watch my projects";
}

function autoENG() {
  ruButton.style.display = "block";
  enButton.style.display = "none";
  intro_text.textContent = "Future is alredy here! Open your eyes, And look!";
  introButton.textContent = "About Me"
  nav_intro.textContent = "Intro";
  nav_about.textContent = "About";
  nav_skills.textContent = "Skills";
  nav_projects.textContent = "Projects";
  nav_features.textContent = "Features";
  nav_tools.textContent = "My tools";
  nav_contact.textContent = "Contact";
  nav_brand.textContent = "Khasanov Ibrohim";
  about_text.textContent = "My name is... Ibrohim I am a few years old, I have been interested in programming for over 3 years and I am currently a Full-Stack developer I know languages like JavaScript, NodeJS And Im a Student ..."
  about_title.textContent = "Hi!"
  about_btn.textContent = "Watch my projects";
}


// const person = {
//   name: "Obaseki Nosa",
//   email: "Lagos",
//   phone: ""
// }

// window.localStorage.setItem('user', JSON.stringify(person));
var obj = [];
// obj.push(JSON.parse(window.localStorage.getItem('user')))


async function postData(url) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(obj[0])
  });
  return response.json();
}


function contactWithMe() {
  var name = document.getElementById("nameInp").value;
  var email = document.getElementById("emailInp").value;
  var phone = document.getElementById("phoneInp").value;
  var description = document.getElementById("descInp").value;
  const person = {
    name: name,
    email: email,
    phone: phone,
    description: description
  }
  obj.push(person)
  // postData('http://localhost:5000/post');
  window.localStorage.setItem('user', JSON.stringify(person));
  window.location.reload();
}

if (window.localStorage.getItem('language').charAt(13) == "e") {
  autoENG()
}
if (window.localStorage.getItem('language').charAt(13) == "r") {
  autoRu()
}
if (window.localStorage.getItem('theme').charAt(10) == "d") {
  autoDarkMode()
}
if (window.localStorage.getItem('theme').charAt(10) == "l") {
  autoLightMode()
}