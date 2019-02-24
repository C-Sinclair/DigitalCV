import * as _ from 'lodash';

// Language Icons
import html5svg from '../img/icons/html5.svg';
import css3svg from '../img/icons/css3.svg';
import jssvg from '../img/icons/js.svg';
import jqsvg from '../img/icons/jquery.svg';
import jsonsvg from '../img/icons/json.png';
import mysqlsvg from '../img/icons/mysql.svg';
import phpsvg from '../img/icons/php.svg';
import swiftsvg from '../img/icons/swift.svg';
import kotlinsvg from '../img/icons/kotlin.svg';

// Styles
import '../styles/main.sass';

import returnCode from './snippets';

var openDraw = false;
var size = 200;

var codeDrawer = document.getElementById('codeDrawer');
var codeText = document.querySelector('#codeDrawer p.code');
var headerImg = document.querySelectorAll('header img');
var upArrow = document.querySelector('.up-arrow');
var profileName = document.getElementById('#profileName');
var pic = document.getElementById('#conor');

var htmlIcon = document.getElementById('html');
htmlIcon.src = html5svg;

var cssIcon = document.getElementById('css');
cssIcon.src = css3svg;

var jsIcon = document.getElementById('js');
jsIcon.src = jssvg;

var jqueryIcon = document.getElementById('jquery');
jqueryIcon.src = jqsvg;

var jsonIcon = document.getElementById('json');
jsonIcon.src = jsonsvg;

var sqlIcon = document.getElementById('mysql');
sqlIcon.src = mysqlsvg;

var phpIcon = document.getElementById('php');
phpIcon.src = phpsvg;

var swiftIcon = document.getElementById('swift');
swiftIcon.src = swiftsvg;

var kotlinIcon = document.getElementById('kotlin');
kotlinIcon.src = kotlinsvg;

var langIcons = [
  htmlIcon,
  cssIcon,
  jsIcon,
  jqueryIcon,
  jsonIcon,
  sqlIcon,
  phpIcon,
  swiftIcon,
  kotlinIcon,
];

_.each(langIcons, el => {
  el.addEventListener(
    'click',
    () => {
      langClick(el);
    },
    false
  );
});

upArrow.addEventListener('click', () => {
  codeDrawer.classList.remove('show');
  openDraw = false;
});

function langClick(element) {
  openDraw = true;
  let code = element.getAttribute('id');
  codeText.innerHTML = returnCode(code);
  codeDrawer.classList.add('show');
}

window.onscroll = (e) => {
    if (document.documentElement.scrollTop >= 100 && !openDraw) {
        profileName.classList.add('stuck');
        pic.classList.add('stuck');
    } else
    if (document.documentElement.scrollTop >= 400 && openDraw) {
        profileName.classList.add('stuck');
        pic.classList.add('stuck');
    } else {
        profileName.classList.remove('stuck');
        pic.classList.remove('stuck');
    }   
}
