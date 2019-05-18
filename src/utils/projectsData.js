import awesomePic from '../images/awesome-profile-cards.jpg';
import inheriredPic from '../images/inherited-code.jpg';
import triplanPic from '../images/triplan.jpg';
import siscodePic from '../images/siscode.jpg';
import weatherPic from '../images/weather-chat.png';

const projectsArr = [
  {
    id: 1,
    classStyle: 'project__one',
    title: 'a case of inherited code',
    url: 'http://beta.adalab.es/fairfax-m3-reactvengers/',
    description: 'Migration of a JS project to React (Awesome profile cards).',
    tools: 'Tools: React, Scss, JavaScript, Responsive.',
    background: inheriredPic,
    github: 'https://github.com/Adalab/fairfax-m3-reactvengers'
  },
  {
    id: 2,
    classStyle: 'project__two',
    title: 'siscode',
    url: 'http://beta.adalab.es/f-m1-siscode/',
    description: 'A group website that contains information about the group and each member.',
    tools: 'Tools: HTML5, Scss, Responsive, Gulp.',
    background: siscodePic,
    github: 'https://github.com/Adalab/f-m1-siscode'
  },
  {
    id: 3,
    classStyle: 'project__three',
    title: 'awesome profile cards',
    url: 'http://beta.adalab.es/fairfax-m2-wildcards/',
    description: 'Online generator of professional cards to share on Twitter.',
    tools: ' Tools: HTML5, Scss, JavaScript, Responsive, APIs.',
    background: awesomePic,
    github: 'https://github.com/Adalab/fairfax-m2-wildcards'
  },
  {
    id: 4,
    classStyle: 'project__four',
    title: 'triplan',
    url: 'https://triplan.herokuapp.com/Login',
    description: 'An app for planning a trip that includes attractions and events.',
    tools: 'Tools: React, JavaScript, MongoDB, Express.',
    background: triplanPic,
    github: 'https://github.com/AiaRup/triplan'
  },
  {
    id: 5,
    classStyle: 'project__five',
    title: 'final project',
    url: '',
    tools: '',
    description: '',
    background: 'https://via.placeholder.com/150'
  },
  {
    id: 6,
    classStyle: 'project__six',
    title: 'weather chat',
    url: 'https://weather-chat-aia.herokuapp.com',
    description: 'Chat where you can search a weather in a particular city, comment and pin favorite posts.',
    tools: 'Tools: HTML5, CSS3, JavaScript, jquery, bootstrap, Responsive, APIs',
    background: weatherPic,
    github: 'https://github.com/AiaRup/weather-chat'
  }
];

export { projectsArr };
