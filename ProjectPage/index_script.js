var data = {
  "frontend":{
    "id":"frontend",
    "name":"Front End",
    "color_1":"#2193b0",
    "color_2":"#6dd5ed",
    "def_image":"assets/default",
    "data":[
      {
        "image":"./assets/Mystery_island.png",
        "heading":"Mysterious Land",
        "paragraph":"This page is themed as a mysterious island floating in an unknow multiverse displaying components of its world.",
        "demo":1,
        "demo_link":"",
        "code_link":""
      },{
        "image":"./assets/Scrollable_story.png",
        "heading":"Scrollable Story",
        "paragraph":"This page is themed to display images and motions based on user scroll, Keep scrolling to finish the story.",
        "demo":1,
        "demo_link":"",
        "code_link":""
      },
      {
        "image":"./assets/Swipe_n_slide.png",
        "heading":"Swipe and Slide",
        "paragraph":"This page is themed to show swiping and sliding effects for displaying set of information on different sections",
        "demo":1,
        "demo_link":"",
        "code_link":""
      }
      ]
  },
  "backend":{
    "id":"backend",
    "name":"Back End",
    "color_1":"#4f54da",
    "color_2":"#7420b9",
    "def_image":"./assets/maya.gif",
    "data":[
      {
        "image":"./assets/code.gif",
        "heading":"Authentication Code",
        "paragraph":"I made it easy for developers to impliment Authentication to there website by just importing few modules which reduces the lines of code they need to write",
        "demo":0,
        "code_link":""
      }
    ]
  },
  "python":{
    "id":"python",
    "name":"Python",
    "color_1":"#000428",
    "color_2":"#004e92",
    "def_image":"./assets/default",
    "data":[
      {
        "image":"./assets/android.gif",
        "heading":"test project",
        "paragraph":"I made it easy for developers to test a python page",
        "demo":0,
        "code_link":""
      }
    ]
  }
}
console.log(data)
// GLobal variables

var index=0;
var section='frontend';
//counter for resizebgs()
let i = 1;


//-----------------------------------------Defining some utils-------------------------------------------------

//resizing background elements if the width of the image is 
// less than window width along with maintaining the aspect ratio
function resizeBgs(){
  let full_bg= document.querySelectorAll('.bg_svg');
  full_bg.forEach(ele =>{
    while(ele.clientWidth < window.innerWidth){
      ele.style.height = 100 +i +'%';
      i=i+1;
    }
  });
  
  console.log('here')
}


// /**
//  * @public
//  * @param {string} category - Name of the category for which the image is to b displayed 
//  * @description - checks which category is to be displayed and writes the image or svg to img div
//  */
// function insertImg(){
//   let img_div = document.querySelector('.center_container_img_container');
//   if(category == 'frontend'){
//     img_div.innerHTML=comp_raw_svg;
//   }
// }


//function for manupulatin the menu
function togglemenu(){
  document.querySelector('.menu_icon_cont').classList.toggle('on');
  document.querySelector('.menu').classList.toggle('menu_on');
  if(document.querySelector('.menu').classList.contains('menu_on')){
    document.querySelector('.menu').style.transition = "none";
    document.querySelector('.menu').style.transform = "translateX(0px)";
    document.querySelector('.menu').style.transition = "none";
    document.querySelector('.menu').style.transform = "translateX(-100px)";
    document.querySelector('.menu').style.transition = "all 0.5s ease-out";
    document.querySelector('.menu').style.transform = "translateX(0px)";
    
    document.querySelector('#menu_hide_show_cir1').style.transition = "none";
    document.querySelector('#menu_hide_show_cir1').style.r = 0;
    document.querySelector('#menu_hide_show_cir1').style.transition = "all 1s ease-in";
    document.querySelector('#menu_hide_show_cir1').style.r = 3/2* window.innerHeight ;
  }
  else{
    document.querySelector('.menu').style.transition = "all 0.5s ease-out";
    document.querySelector('.menu').style.transform = "translateX(-240px)";
    document.querySelector('#menu_hide_show_cir1').style.transition = "all 0.5s ease-out";
    document.querySelector('#menu_hide_show_cir1').style.r = 0;
  }
  
}

function changeSector(item){
  togglemenu()
  index=0;
  section=item;
  
  document.querySelector('.menu').style.pointerEvents = 'none';

  setTimeout(() => {
    let active_div = document.querySelectorAll('.front');
    active_div.forEach(ele => {
      
      if(!(ele.classList.contains('active'))){
        changingvalues(ele,item)
      }
    })
    document.querySelector('#rect-clipPath-rect').style.transition = "all 1.2s ease-in-out";
    document.querySelector('#rect-clipPath-rect').style.width = 0;
    setTimeout(()=>{
      let inside = false;
      active_div.forEach(ele => {
        if(!(ele.classList.contains('active')) && !inside){
          active_div.forEach(eleIn => {
            eleIn.querySelector('.center_div_cont').style.transform = `none`;
            if(eleIn.classList.contains('active')){
              eleIn.classList.remove('active');
            }
          });
          
          document.querySelector('#rect-clipPath-rect').style.transition = "none";
          document.querySelector('#rect-clipPath-rect').style.width = window.innerWidth;
          
          
          ele.classList.add('active');
          document.querySelector('.menu').style.pointerEvents = 'auto';
          inside=true;

        } 
        
      });
    },1550)
  },505)
  
}


function changingvalues(ele,id){
  //changing gradient
  console.log(ele,id);
  ele.querySelector('.cls-1-bg-svg').style.fill=`url(#linear-gradient-${id})`;
  let info_text = ele.querySelector('.info_text')
  let center_div_content='';
  data[id].data.forEach(e =>{
    center_div_content +=`<div class="center_div_cont_c">
    <div class="center_div">
      <div class="info_cont">
        <div class="info_text">
          <h2>${data[id].name}</h2>
          <div class="info_p">
            <h3>${e.heading}</h3>
            <p>${e.paragraph}</p>
          </div>
          <div class="info_button">
            <button onclick="location.href = '${e.code_link}';">View Code</button>
            ${e.demo ? `<button onclick="location.href = '${e.demo_link}';">View Project</button>` : ''}
          </div>
        </div>
        <div class="info_image">
          ${id=='frontend' ? `<img class="info_image_screens" src="${e.image}" alt="image of project" />` : `<img class="info_image_img" src="${e.image}" alt="image of project" />`}
        </div>
      </div>
    </div>
  </div>`
  });
  ele.querySelector('.center_div_cont').innerHTML = center_div_content;

}

function previous(){
  if(index>0 && index<data[section].data.length){
    index= index-1;
    document.querySelector('.active').querySelector('.center_div_cont').style.transform = `translateX(-${index*100}%)`;
  }
}
function next(){
  if(index>=0 && index<data[section].data.length-1){
    index= index+1;
    document.querySelector('.active').querySelector('.center_div_cont').style.transform = `translateX(-${index*100}%)`;
  }
}

function adding_gradient(){
  let bg_svgs = document.querySelectorAll('.bg_svg')
  let gradient = '';
  for(let i in data){
    gradient+=`<linearGradient id="linear-gradient-${data[i].id}" y1="384.25" x2="1366.5" y2="384.25" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="${data[i].color_1}" class="linear-gradient-bg-svg-1"/>
    <stop offset="1" stop-color="${data[i].color_2}" class="linear-gradient-bg-svg-2"/>
  </linearGradient>`
  }

  bg_svgs.forEach(ele =>{
    defs = ele.querySelector('defs');
    defs.innerHTML+=gradient;
  })
}
function adding_menuItems(){
  let menu_cont = document.querySelector('.menu').querySelector('ul');
  let items = '';
  for(let i in data){
    items+=`<li onclick="changeSector('${data[i].id}')">${data[i].name}</li>`
  }
  menu_cont.innerHTML+=items;
}
function addSwipe(){
  swipe_div=document.querySelectorAll('.center_div_cont');
  swipe_div.forEach(ele =>{
    ele.addEventListener('touchmove', function(event) { handleTouchMove(event,ele); } , false);
    ele.addEventListener('touchstart', function(event) { handleTouchStart(event); } , false);
  });

  var xDown = null;                                                        
  var yDown = null;

  function getTouches(evt) {
    return evt.touches ||             // browser API
          evt.originalEvent.touches; // jQuery
  }                                                     

  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];                                      
      xDown = firstTouch.clientX;                                      
      yDown = firstTouch.clientY;                                      
  };

  function handleTouchMove(evt ,element) {
    if ( ! xDown  ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
          //next
          next();
        }
        else {
          //previous
          previous();
        }
    }

    else if(Math.abs( xDiff ) < Math.abs( yDiff )){
      // evt.preventDefault();
    }

    /* reset values */
    xDown = null;
    yDown = null;
  }
}

//----------------------------------------Code that controls the page----------------------------------------------
adding_gradient();
adding_menuItems();
resizeBgs();
addSwipe();
// insertImg('frontend');  
changingvalues(document.querySelector('.front'),'frontend')               

window.addEventListener('resize',()=>{
  location.reload();
})

