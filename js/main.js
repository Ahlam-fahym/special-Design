// local storage color
 let minColor = localStorage.getItem("color-option")
 if ( minColor  !== null){
    // console.log("local storage is not empty you con set in root now")
    // console.log(localStorage.getItem("color-option"))
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color-option"))
    document.querySelectorAll(".colors-list li").forEach(element=>{

        element.classList.remove("active")
    
        if(element.dataset.color === minColor){
            element.classList.add("active")

        }
 });

 }
// random background
let backgroundOption = true;
// control the interval
let backgroundInterval;

// local storage background
let backgroundLocalItem = localStorage.getItem("background-option")
if(backgroundLocalItem !== null){

if(backgroundLocalItem === "true"){  

backgroundOption = true;

} else {
    backgroundOption = false;
}
// REMOVE ACTIVE CLASS FOR all span
document.querySelectorAll(".Random-Background span").forEach(element =>{

element.classList.remove('active')
})
if(backgroundLocalItem === "true") {

    document.querySelector(".Random-Background .yes").classList.add("active")

} else {
    document.querySelector(".Random-Background .no").classList.add("active")
 
}
}
// toggle setting
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
    // toggle علي نفس العنصر
    this.classList.toggle("fa-spin")  
    // toggle علي setting box  
    document.querySelector(".setting-box").classList.toggle("open")    
}

// switch color
const colorsLi = document.querySelectorAll(".colors-list li")
// loopon all list
colorsLi.forEach(li => {

// click on every list icons
li.addEventListener('click' , (e) => {

    // set color on root
    document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
    // set color in local storage
    localStorage.setItem("color-option",e.target.dataset.color)
// remove active class from all
handleActive(e);

});
});


const randomBackEl = document.querySelectorAll(".Random-Background span")
// loopon all list
randomBackEl.forEach(span => {

// click on every list icons
span.addEventListener('click' , (e) => {

// remove active class from all
handleActive(e);

if(e.target.dataset.background ==="yes") {
 backgroundOption = true;
 randomizeImgs();
 localStorage.setItem("background-option", true)

}else{
backgroundOption =false;
clearInterval(backgroundInterval);
localStorage.setItem("background-option" , false)

}
});
});



let landingPage = document.querySelector(".landing-page")
let imagesArray = ["photo1.jpg" , 'photo2.jpg' , 'photo3.jpg' , 'photo4.jpg' , 'photo5.jpg']
// landingPage.style.backgroundImage ='url("../images/photo1.jpg")'

function randomizeImgs() {

    if(backgroundOption === true ){

        backgroundInterval=setInterval(()=> {

            let rondomNumber = Math.floor(Math.random() * imagesArray.length)
        
        // let rondomNumber = Math.floor(Math.random() * imagesArray.length)
        landingPage.style.backgroundImage = 'url("../images/' + imagesArray[rondomNumber]+'")'
        
         },1000)
    }
}
randomizeImgs();
// select skills
let ourSkills = document.querySelector(".skills")
window.onscroll = function(){
    // skills of set top
    let skillsOffSetTop = ourSkills.offsetTop;
    // outer height
  let skillsOuterHeight = ourSkills.offsetHeight;
// //     // windowHeight
  let windowHeight = this.innerHeight;

// //     // window scroll
    let windowScrollTop = this.pageYOffset;

 if (windowScrollTop >= (skillsOffSetTop + skillsOuterHeight - windowHeight)) {

let allSkills = document.querySelectorAll(".skill-box .skill-progress span")

 allSkills.forEach(skill => {

    skill.style.width  = skill.dataset.progress;
     
   })
   }
 };
 //create popup
 let ourGollery = document.querySelectorAll('.gollery img')
 ourGollery.forEach(img =>{

    img.addEventListener("click",(e)=>{

        let overlay = document.createElement('div')
        overlay.className = 'popup-overlay';

        document.body.appendChild(overlay)

        let popupBox = document.createElement('div');
        popupBox.className = 'popup-box';
// create heading in img
        if (img.alt !== null){
            let imgHeading = document.createElement('h3');
            
            let imgText = document.createTextNode('img.alt');
            
            imgHeading.appendChild(imgText);
            popupBox.appendChild(imgHeading)
                 }

        let popupImg = document.createElement('img')
         popupImg.src = img.src

        //  add img to popup
        popupBox.appendChild(popupImg)
      // append the popup box to body
      document.body.appendChild(popupBox)

// create the close span
let closeSpan = document.createElement('span');

let closeBotton = document.createTextNode('x');

closeSpan.appendChild(closeBotton)

closeSpan.className = 'close-span';

popupBox.appendChild(closeSpan);

    
    })
 });
 document.addEventListener('click',function(e){
    if(e.target.className == "close-span"){
        e.target.parentNode.remove();
        document.querySelector('.popup-overlay').remove();
    }
 })
//  move bullet in our section 
let navBullet = document.querySelectorAll('.nav-bollets .bollet')
navBullet.forEach(bollet =>{
    bollet.addEventListener('click' , (e) => {
    document.querySelector( e.target.dataset.section).scrollIntoView({
        behavior: "smooth"
    })
    })
})
function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{

        element.classList.remove("active") 
     });
        ev.target.classList.add("active")   
}
let settBullet = document.querySelectorAll('.setting-bullets span')
let bullet = document.querySelector('.nav-bollets')
settBullet.forEach(span => {
    span.addEventListener('click', (e) =>{
        if (span.dataset.display === 'yes'){
            bullet.style.display='block';
        }else{
            bullet.style.display='none';
        }
        handleActive(e);
    })
    
})