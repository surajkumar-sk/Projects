// ---------------Loading site code -------------

var cursor = true;
var speed = 500;
setInterval(() => {
  if(cursor) {
    document.getElementById('cursor').style.opacity = 0;
    cursor = false;
  }else {
    document.getElementById('cursor').style.opacity = 1;
    cursor = true;
  }
}, speed);

window.onload = () =>{
  document.getElementsByClassName('loading-msg1')[0].style.display = 'block'
}

//waiting for images to get loaded
// cloning all images then after all images are loaded
// run the rest
var img_cont = document.getElementById('test_images');

var imgList = ['/assets/Profile_pic.jpg',
               '/assets/neon_1-min.png',
               '/assets/neon_2-min.png',
               '/assets/neon_2-min.png',
               '/assets/neon_3-min.png',
               '/assets/twit.png',
               '/assets/git.jpg',
               '/assets/insta.png',
               '/assets/linkd.png',
              ]
for(var i=0;i<6;i++){
  var img = document.createElement('img');
  img.src=imgList[i];
  img.addEventListener('load',()=>{CheckImageLoaded()});
  img_cont.appendChild(img);
}


var imgCount = 6;
var imgloaded = 0;
function CheckImageLoaded(){
    imgloaded=imgloaded+1;
    if(imgloaded == imgCount){
      document.getElementsByClassName('loading-msg2')[0].style.display = 'block';
      document.getElementsByClassName('loading-welcome')[0].style.display = 'block';
      setTimeout(()=>{
        document.getElementsByClassName('loading_screen')[0].style.top = '150%'
        setTimeout(()=>{
         
          sk_ani();
          display_header();
          setTimeout(()=>{
            activateScroll();
          },3000)
        },1000)
      },500)
    }
}

// ---------------actual site code ------------------




function sk_ani(){
  document.querySelector('.sk').querySelector('svg').style.opacity = '100%';
  //2.1seconds
  setTimeout(()=>{
    document.querySelector('#blue_effect').style.opacity = '0%';
    setTimeout(()=>{
      document.querySelector('#blue_effect').style.opacity = '100%';
      setTimeout(()=>{
        document.querySelector('#blue_effect').style.opacity = '0%';
        setTimeout(()=>{
          document.querySelector('#blue_effect').style.opacity = '100%';
          setTimeout(()=>{
            document.querySelector('#blue_effect').style.opacity = '0%';
            setTimeout(()=>{
              document.querySelector('#blue_effect').style.opacity = '100%';
              setTimeout(()=>{
                document.querySelector('#blue_effect').style.opacity = '0%';
                setTimeout(()=>{
                  document.querySelector('#blue_effect').style.opacity = '100%';
                  setTimeout(()=>{
                    document.querySelector('#blue_effect').style.opacity = '0%';
                    setTimeout(()=>{
                      document.querySelector('#blue_effect').style.opacity = '100%';
                      
                    },100)
                  },100)
                },100)
              },200)
            },200)
          },200)
        },400)
      },400)
    },300)
  },100)
}


function display_header(){
  setTimeout(()=>{
    document.querySelector('header').style.pointerEvents='auto';
    document.querySelector('header').style.opacity='100%';
  },2200)
  
}

function activateScroll(){
  document.querySelector('.main').style.overflowY='scroll';
}

function listAni(){
  let li = document.querySelector('.list').querySelectorAll('li');
  li.forEach((ele) =>{
    scroll = document.querySelector('.main').scrollTop ;
    if(ele.offsetTop < scroll){
      if(ele.classList.contains('right')){
        ele.style.transform='translateX(-100%)';
      } else{
        ele.style.transform='translateX(0%)';
      }
    } else{
      if(ele.classList.contains('right')){
        ele.style.transform='translateX(-75%)';
      } else{
        ele.style.transform='translateX(-25%)';
      }
    }
  })
}

var msg_button = document.querySelector('.msg_button');
msg_button.addEventListener('click' , (event) => {
  event.preventDefault();
  msg_button.value = 'Sent';
  setTimeout( () => {document.querySelector('#card').checked = false;msg_button.value = 'Send';} ,1001)
  
})

document.querySelector('.my_card').style.top=window.innerHeight+document.querySelector('.list').clientHeight +100 +'px';
document.querySelector('.footer').style.top=window.innerHeight+document.querySelector('.list').clientHeight +document.querySelector('.my_card').clientHeight +100 +'px';

window.addEventListener('resize',()=>{
  document.querySelector('.my_card').style.top=window.innerHeight+document.querySelector('.list').clientHeight +100 +'px';
  document.querySelector('.footer').style.top=window.innerHeight+document.querySelector('.list').clientHeight +document.querySelector('.my_card').clientHeight +100 +'px';
})
document.querySelector('.main').addEventListener('scroll', ()=>{
  listAni();
})
