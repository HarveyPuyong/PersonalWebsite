export function skillSectionFunctionality(){
  
  const skills = [
    // add and delete skills here
    {
      icon: 'icons/html.png', 
      name: 'HTML',
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      icon: 'icons/CSS (2).png', 
      name: 'CSS',
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      icon: 'icons/js (1).png', 
      name: 'JavaScript',
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      icon: 'icons/php.png', 
      name: 'PHP',
      mastery: 'Intermediate',
      type: 'tech-stack'
    },
    {
      icon: 'icons/React (2).png', 
      name: 'React',
      mastery: 'Intermediate',
      type: 'tech-stack'
    },
    {
      icon: 'icons/Git.png', 
      name: 'Git',
      mastery: 'Intermediate',
      type: 'tools'
    },
    {
      icon: 'icons/github.png', 
      name: 'GitHub',
      mastery: 'Intermediate',
      type: 'tools'
    },
    {
      icon: 'icons/visual-studio.png', 
      name: 'Visual Studio',
      mastery: 'Intermediate',
      type: 'tools'
    }
  ];
  

  // display skills
  let techstackHTML = '';
  let toolsHTML = '';

  skills.forEach(skill => {
    const skillType =  skill.type;

    if(skillType === 'tech-stack'){
      techstackHTML+= `
        <div class="skill">
            <img class="icon" src="${skill.icon}" alt="html icon" />
            <p>${skill.name}<br/><span class="mastery">${skill.mastery}</span></p>
        </div>
      `
    }

    if(skillType === 'tools'){
      toolsHTML+=`
        <div class="skill">
            <img class="icon" src="${skill.icon}" alt="html icon" />
            <p>${skill.name}<br/><span class="mastery">${skill.mastery}</span></p>
        </div>
      `
    }
  });
  
  document.querySelector('.skills.tech-stack').innerHTML = techstackHTML;
  document.querySelector('.skills.tools').innerHTML = toolsHTML


//  buttons functionality
  const techStackBtn = document.querySelector('.select-skill-type #tech-stack');
  const toolsBtn = document.querySelector('.select-skill-type #tools-skill');
  const techSkills = document.querySelector(".skills.tech-stack");
  const toolSkills= document.querySelector(".skills.tools");
  
  
  techStackBtn.addEventListener('click', ()=>{
    techStackBtn.classList.add('selected');
    toolsBtn.classList.remove('selected');
    techSkills.style.display = 'grid';
    toolSkills.style.display = 'none'
  });
  
  toolsBtn.addEventListener('click', ()=>{
    techStackBtn.classList.remove('selected');
    toolsBtn.classList.add('selected');
    techSkills.style.display = 'none';
    toolSkills.style.display = 'grid'
  });
}

