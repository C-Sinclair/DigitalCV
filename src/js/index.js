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

// Profile Pic
import conorsvg from '../img/icons/conor.svg'

// Programs Icons
import illustsvg from '../img/icons/illustrator.svg'
import vssvg from '../img/icons/vscode.png'
import androidsvg from '../img/icons/androidstudio.png'
import krakensvg from '../img/icons/gitkraken.png'
import xcodesvg from '../img/icons/xcode.png'
import ablesvg from '../img/icons/ableton.png'

// Tech Icons
import webpsvg from '../img/icons/webpack.svg'
import sasssvg from '../img/icons/sass.png'
import gitsvg from '../img/icons/git.png'
import gulpsvg from '../img/icons/gulp.svg'

// Generic Icons
import phonesvg from '../img/icons/phone.svg'
import sendsvg from '../img/icons/send.svg'

// Projects
const pformImgs = importAll(require.context('../img/screenshots/pform', false, /\.(png|jpe?g|svg)$/))
const dcpImgs = importAll(require.context('../img/screenshots/dcpfm', false, /\.(png|jpe?g|svg)$/))

// Styles
import '../styles/main.sass';

import returnCode from './snippets';

var openDraw = false;
var size = 200;

var codeDrawer = document.getElementById('codeDrawer');
var codeText = document.querySelector('#codeDrawer p.code');
var upArrow = document.querySelector('.up-arrow');
var profileName = document.getElementById('profileName');
var pic = document.getElementById('conor');

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

var conor = document.getElementById('conor')
conor.src = conorsvg

var phoneIcon = document.getElementById('phone')
phoneIcon.src = phonesvg

var sendIcon = document.getElementById('mail')
sendIcon.src = sendsvg

// Programs 
var illustIcon = document.getElementById('illustrator')
illustIcon.src = illustsvg

var vsIcon = document.getElementById('vscode')
vsIcon.src = vssvg

var androidIcon = document.getElementById('androidstudio')
androidIcon.src = androidsvg

var krakenIcon = document.getElementById('gitkraken')
krakenIcon.src = krakensvg

var xcIcon = document.getElementById('xcode')
xcIcon.src = xcodesvg

// Tools
var gitIcon = document.getElementById('git')
gitIcon.src = gitsvg

var sassIcon = document.getElementById('sass')
sassIcon.src = sasssvg

var webpIcon = document.getElementById('webpack')
webpIcon.src = webpsvg

var gulpIcon = document.getElementById('gulp')
gulpIcon.src = gulpsvg

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

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}