const burger=document.querySelector(".burger")
const navbar=document.querySelector(".nav-con")
burger.addEventListener('click',()=>{
    navbar.classList.toggle('nav-con-full')
})
