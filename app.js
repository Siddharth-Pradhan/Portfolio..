const vid1=document.getElementById("pro1");
const vid2=document.getElementById("pro2");
const vid3=document.getElementById("pro3");
const hs=document.querySelector(".hover-sign");

const vidlist=[vid1,vid2,vid3];

vidlist.forEach(function(video){
  video.addEventListener('mouseover',function(){
    video.play();
    hs.classList.add("active");
  })

  video.addEventListener('mouseout',function(){
    video.pause();
     hs.classList.remove("active");
  })
})

const sidebar=document.querySelector(".sidebar");
const menu=document.querySelector(".menu-icon");
const close=document.querySelector(".close");

menu.addEventListener("click",function(){
    sidebar.classList.remove("close-sidebar") ;
    sidebar.classList.add("open-sidebar");

})

close.addEventListener("click",function(){
  
    sidebar.classList.remove("open-sidebar");
    sidebar.classList.add("close-sidebar") ;
})






document.querySelectorAll(".sideli a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); 

    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
    sidebar.classList.remove("open-sidebar");
    sidebar.classList.remove("close-sidebar");
  });
});

