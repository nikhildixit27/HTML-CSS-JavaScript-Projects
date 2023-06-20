const btnEl = document.querySelector(".btn");
const nameEl = document.querySelector(".name");

const emoji = [];
async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=f4ea3125581bbd267cb28a013ae338deceaaee78");

    data = await response.json();
    
    for(let i=0;i<1500;i++){
        emoji.push({
            name : data[i].character,
            code : data[i].unicodeName
        });
    }
}

getEmoji();

btnEl.addEventListener("click",()=>{
    const randNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerHTML = emoji[randNum].name;
    nameEl.innerHTML = emoji[randNum].code;
})