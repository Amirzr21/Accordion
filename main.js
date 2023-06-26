const items = document.querySelectorAll(".item");

items.forEach((item) =>{
  item.addEventListener("click", (e) =>{
    const currentLyActive = document.querySelectorAll
    (".item.active");
    if(currentLyActive){
      currentLyActive.forEach((active) =>{
        if(active!==item){
          active.lastElementChild.style.
          maxHeight = 0;
          active.classList.toggle("active");
        }
      });
    }
    item.classList.toggle("active");

    const elementBody = item.querySelector(".body");
    if(item.classList.contains("active")){
      elementBody.style.maxHeight = elementBody.
      scrollHeight + "px";
    }else{
      elementBody.style.maxHeight = 0;
    }
  })
})