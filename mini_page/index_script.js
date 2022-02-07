var btns = document.querySelectorAll('.btn');

btns.forEach(ele => {
  ele.addEventListener('click', (e)=>{
    e.preventDefault();
    runningAnimation(e);
  })
})

function runningAnimation(e){
  document.querySelector('.preventClick').style.zIndex='3';
  var unactive = document.querySelector('.unactive');
  var areas = document.querySelectorAll('.area');
  areas.forEach(ele =>{
    if(!ele.classList.contains('active')){
      ele.childNodes[1].innerHTML = e.srcElement.innerHTML;
    }
  })
  areas.forEach(ele =>{
    if(ele.classList.contains('active')){
      gsap.to('#rect-clipPath-rect',{duration:1,width:0});
      setTimeout(()=>{
        areas.forEach(ele=>{
          if(ele.classList.contains('active')){
            ele.classList.remove('active');
          }
          else{
            document.querySelector('#rect-clipPath-rect').style.width='100%';
            ele.classList.add('active');
            document.querySelector('.preventClick').style.zIndex='1';
          }
        })
      },1050) 
    }
  })
  console.log(e.srcElement.innerHTML);
  

}