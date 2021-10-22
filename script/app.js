const images = document.querySelector('header')
images.addEventListener("click",()=>{
    images.style.backgroundImage = "url(https://picsum.photos/id/1045/2500/400)";
    images.style.color = "black";
     });



const projectColor = document.querySelector('.projects')
projectColor.addEventListener("click",()=>{
    projectColor.setAttribute("style", "-webkit-filter: none")
 });

const edColor = document.querySelector('.education')
edColor.addEventListener("click",()=>{
    edColor.setAttribute("style", "-webkit-filter: none")
});





    
