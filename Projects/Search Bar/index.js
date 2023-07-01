const searchBarEl = document.querySelector(".search-bar-container");

const magniferEl = document.querySelector(".magnifer");

magniferEl.addEventListener("click",()=>{
    searchBarEl.classList.toggle("active");
})