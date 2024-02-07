const burger=document.querySelector("#burger");
const menu=document.querySelector("#menu");

burger.addEventListener("click", ()=>{
    if (menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
    }
    else {
        menu.classList.add("hidden");
    }
})

if ($(window).width() < 640){
$(document).click(function() {
     $("#menu").hide(); });
$("#burger").click(function(e){
    e.stopPropagation();
    $("#menu").show();
})};


$('.container-inner').hover(function () { 
    $(this).css("animation-play-state","paused")
  }, function () { 
    $(this).css("animation-play-state","running") 
  })



   