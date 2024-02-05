const skills = document.getElementById('skills');
const skillSet = document.getElementById('skillSet');
const experience = document.getElementById('experience');
const education = document.getElementById('education');
const skill = document.getElementById('skill');
const skillText = document.getElementById('skill-text');
const skillOne = document.getElementById('skill 1');
const skillTextOne = document.getElementById('skill-text 1');
const skillTwo = document.getElementById('skill 2');
const skillTextTwo = document.getElementById('skill-text 2');
const sidemenu = document.getElementById('sidemenu');


skills.onclick = () => {
    skill.textContent = 'Html';
    skillText.textContent = 'Build Structure Of Web page';
    skillOne.textContent = 'Css';
    skillTextOne.textContent = 'Describe How Element Should be Rendered on Screen';
    skillTwo.textContent = 'JavaScript'
    skillTextTwo.textContent = 'It is a Programming language that allows the implementation of Features on Web page';
}

experience.onclick = () => {
   skill.textContent = '2023';
   skillText.textContent = 'Unemployed';
   skillOne.textContent = '2020-2021';
   skillTextOne.textContent = 'Unemployed';
   skillTwo.textContent = '2018-2019';
   skillTextTwo.textContent = 'Unemployed';
}


education.onclick = () => {
   skill.textContent = '2023';
   skillText.textContent = 'No Degree Yet';
   skillOne.textContent = '2020';
   skillTextOne.textContent = 'Waec Certificate at Moyi Comprehensive High School';
   skillTwo.textContent = '2013';
   skillTextTwo.textContent = 'Common Entrance at Kings College';
}



function openmenu() {
   sidemenu.style.right = '0'
}

function closemenu() {
   sidemenu.style.right = '-220px'
}




