import * as _ from "lodash";
import popper from "popper.js";
import Prism from "prismjs";

// Language Icons
import html5svg from "../img/icons/html5.svg";
import css3svg from "../img/icons/css3.svg";
import jssvg from "../img/icons/js.svg";
import jqsvg from "../img/icons/jquery.svg";
import jsonsvg from "../img/icons/json.png";
import mysqlsvg from "../img/icons/mysql.svg";
import phpsvg from "../img/icons/php.svg";
import swiftsvg from "../img/icons/swift.svg";
import kotlinsvg from "../img/icons/kotlin.svg";

// Profile Pic
import conorsvg from "../img/icons/conor.svg";

// Programs Icons
import illustsvg from "../img/icons/illustrator.svg";
import vssvg from "../img/icons/vscode.png";
import androidsvg from "../img/icons/androidstudio.png";
import krakensvg from "../img/icons/gitkraken.png";
import xcodesvg from "../img/icons/xcode.png";
import ablesvg from "../img/icons/ableton.png";

// Tech Icons
import webpsvg from "../img/icons/webpack.svg";
import sasssvg from "../img/icons/sass.png";
import gitsvg from "../img/icons/git.png";
import gulpsvg from "../img/icons/gulp.svg";

// Generic Icons
import phonesvg from "../img/icons/phone.svg";
import sendsvg from "../img/icons/send.svg";

// History Icons
import wilxitesvg from "../img/icons/wilxite.png";
import radiussvg from "../img/icons/radius.jpg";
import foppsvg from "../img/icons/fopp.png";
import uobsvg from "../img/icons/uob.png";
import stbrnsvg from "../img/icons/stbrn.png";
import trfsvg from "../img/icons/trfwia.png";
import githubsvg from "../img/icons/github.svg";
import stacksvg from "../img/icons/stackoverflow.svg";
import linkedsvg from "../img/icons/linkedin.svg";

// Projects
// // Pform
import home from "../img/screenshots/pform/home.png";
import objectives from "../img/screenshots/pform/objectives.png";
import feedback from "../img/screenshots/pform/feedback.png";
import reportsopen from "../img/screenshots/pform/reports-open.png";
// // DCPFM
import arrived from "../img/screenshots/dcpfm/arrived.png";
import camera from "../img/screenshots/dcpfm/camera.png";
import splash from "../img/screenshots/dcpfm/splash.png";
import claimlist from "../img/screenshots/dcpfm/claimlist.png";

// Styles
import "../styles/main.sass";

import returnCode from "./snippets";

let openDraw = false;
let size = 200;

const codeDrawer = document.getElementById("codeDrawer");
const codeText = document.querySelector("#codeDrawer p.code");
const upArrow = document.querySelector(".up-arrow");
const profileName = document.getElementById("profileName");
const pic = document.getElementById("conor");
const gallery = document.getElementById("gallery");

const htmlIcon = document.getElementById("html");
htmlIcon.src = html5svg;

const cssIcon = document.getElementById("css");
cssIcon.src = css3svg;

const jsIcon = document.getElementById("js");
jsIcon.src = jssvg;

const jqueryIcon = document.getElementById("jquery");
jqueryIcon.src = jqsvg;

const jsonIcon = document.getElementById("json");
jsonIcon.src = jsonsvg;

const sqlIcon = document.getElementById("mysql");
sqlIcon.src = mysqlsvg;

const phpIcon = document.getElementById("php");
phpIcon.src = phpsvg;

const swiftIcon = document.getElementById("swift");
swiftIcon.src = swiftsvg;

const kotlinIcon = document.getElementById("kotlin");
kotlinIcon.src = kotlinsvg;

const langIcons = [
  htmlIcon,
  cssIcon,
  jsIcon,
  jqueryIcon,
  jsonIcon,
  sqlIcon,
  phpIcon,
  swiftIcon,
  kotlinIcon
];

_.each(langIcons, el => {
  el.addEventListener(
    "click",
    () => {
      langClick(el);
    },
    false
  );
});

upArrow.addEventListener("click", () => {
  codeDrawer.classList.remove("show");
  openDraw = false;
});

const prismLang = code => {
  switch (code) {
    case "js":
    case "jquery":
      return Prism.languages.js;
    case "html":
      return Prism.languages.html;
    case "css":
      return Prism.languages.css;
    case "json":
      return Prism.languages.json;
    case "sql":
      return Prism.languages.sql;
    case "php":
      return Prism.languages.php;
    case "swift":
      return Prism.languages.swift;
    case "kotlin":
      return Prism.languages.kotlin;
  }
};

const langClick = element => {
  openDraw = true;
  let code = element.getAttribute("id");
  let html = Prism.highlight(returnCode(code), prismLang(code), code);
  codeText.innerHTML = html;
  codeDrawer.classList.add("show");
};

// Profile
const conor = document.getElementById("conor");
conor.src = conorsvg;

// const phoneIcon = document.getElementById("phone");
// phoneIcon.src = phonesvg;

// const sendIcon = document.getElementById("mail");
// sendIcon.src = sendsvg;

// Programs
const illustIcon = document.getElementById("illustrator");
illustIcon.src = illustsvg;

const vsIcon = document.getElementById("vscode");
vsIcon.src = vssvg;

const androidIcon = document.getElementById("androidstudio");
androidIcon.src = androidsvg;

const krakenIcon = document.getElementById("gitkraken");
krakenIcon.src = krakensvg;

const xcIcon = document.getElementById("xcode");
xcIcon.src = xcodesvg;

// Tools
const gitIcon = document.getElementById("git");
gitIcon.src = gitsvg;

const sassIcon = document.getElementById("sass");
sassIcon.src = sasssvg;

const webpIcon = document.getElementById("webpack");
webpIcon.src = webpsvg;

const gulpIcon = document.getElementById("gulp");
gulpIcon.src = gulpsvg;

// Projects
const homeImg = document.createElement("img");
homeImg.src = home;

const objImg = document.createElement("img");
objImg.src = objectives;

const feedbackImg = document.createElement("img");
feedbackImg.src = feedback;

const reportsImg = document.createElement("img");
reportsImg.src = reportsopen;

gallery.appendChild(homeImg);
gallery.appendChild(objImg);
gallery.appendChild(feedbackImg);
gallery.appendChild(reportsImg);

const arrivedImg = document.createElement("img");
arrivedImg.src = arrived;

const cameraImg = document.createElement("img");
cameraImg.src = camera;

const splashImg = document.createElement("img");
splashImg.src = splash;

const claimlistImg = document.createElement("img");
claimlistImg.src = claimlist;

gallery.appendChild(splashImg);
gallery.appendChild(arrivedImg);
gallery.appendChild(cameraImg);
gallery.appendChild(claimlistImg);

let n = 0;
let m = 0;
let r = 0;
let animationID;
let selected;
let projectClicked = false;

function scrollGallery() {
  gallery.style.marginLeft = n + "px";
  let child = gallery.children[r];
  n--;
  m++;
  if (m > child.width) {
    let newImg = child.cloneNode(true);
    gallery.appendChild(newImg);
    r++;
    m = 0;
  }
  animationID = requestAnimationFrame(scrollGallery);
}
animationID = requestAnimationFrame(scrollGallery);

gallery.addEventListener("mouseover", () => {
  cancelAnimationFrame(animationID);
});

gallery.addEventListener("mouseout", () => {
  animationID = requestAnimationFrame(scrollGallery);
  // if (projectClicked) {
  //   setTimeout(() => {
  //     selected.classList.remove("selected")
  //   }, 1000)
  // }
});

// History
const wilxIcon = document.getElementById("wilxite");
wilxIcon.src = wilxitesvg;

const radIcon = document.getElementById("radius");
radIcon.src = radiussvg;

const uobIcon = document.getElementById("uob");
uobIcon.src = uobsvg;

const stbrnIcon = document.getElementById("stbrn");
stbrnIcon.src = stbrnsvg;

const trfIcon = document.getElementById("trfwia");
trfIcon.src = trfsvg;

// External
const githubIcon = document.getElementById("github");
githubIcon.src = githubsvg;
githubIcon.addEventListener("click", () => {
  window.location.href = "https://github.com/c-sinclair";
});

const stackIcon = document.getElementById("stackOverflow");
stackIcon.src = stacksvg;
stackIcon.addEventListener("click", () => {
  window.location.href = "https://stackoverflow.com/users/10590986/c-sinclair";
});

const linkIcon = document.getElementById("linkedIn");
linkIcon.src = linkedsvg;
linkIcon.addEventListener("click", () => {
  window.location.href =
    "https://www.linkedin.com/in/conor-sinclair-22444a158/";
});

window.onscroll = e => {
  if (document.documentElement.scrollTop >= 100 && !openDraw) {
    profileName.classList.add("stuck");
    pic.classList.add("stuck");
  } else if (document.documentElement.scrollTop >= 400 && openDraw) {
    profileName.classList.add("stuck");
    pic.classList.add("stuck");
  } else {
    profileName.classList.remove("stuck");
    pic.classList.remove("stuck");
  }
};
