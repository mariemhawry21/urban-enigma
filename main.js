let right_desc=document.querySelector(".right-desc");
let right_mob=document.querySelector(".right-mob img");
let menu=document.querySelector(".menu");


right_mob.addEventListener('click',function (e){
    if(e.target.classList.contains("opend")){
        e.target.classList.toggle("opend");
        menu.style.display="none";
    }else {
        menu.style.display="block";
        e.target.classList.toggle("opend");
    }
});

