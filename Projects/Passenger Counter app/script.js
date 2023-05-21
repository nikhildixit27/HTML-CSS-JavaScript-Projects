//document.getElementById("count-el").innerText = 5;
// let firstBatch = 5;
// let secondBatch =7;
// let count = firstBatch + secondBatch ;
// console.log(count);

// let myAge = 19;
// let dogRatio = 7;
// myDogAge = myAge * dogRatio;
// console.log(myDogAge); 

// let bonusPoint = 50;
// console.log(bonusPoint);
// bonusPoint = bonusPoint +50;
// console.log(bonusPoint);
// bonusPoint = bonusPoint-75;
// console.log(bonusPoint);
// bonusPoint = bonusPoint + 45;
// console.log(bonusPoint);


// function countDown(){
//     for(let i =5; i>=1; i-- ){
//         console.log(i);
//     }
// }
// countDown();


// let lap1=34;
// let lap2=36;
// let lap3=38;

// function lapSum(){
//     console.log(lap1 + lap2 + lap3);
// }
// lapSum();

// let lapCompleted = 1;
// function incrementLap(){
//     lapCompleted++;
// }
// incrementLap()
// incrementLap();
// incrementLap();
// console.log(lapCompleted);

// let countEl = document.getElementById("count-el");
// let count = 0;

// let saveEl = document.getElementById("save-el");
// console.log(saveEl)
// function increment() {
//     count++;
//     countEl.innerText = count;
// }

// function save(){
//     let countStr = count +" - ";
//     saveEl.innerText += countEl;
    
//     // console.log(countStr);
// }




// let name = "Nikhil";
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name;
// console.log(myGreeting)


let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let countStr = count + " - ";
    saveEl.innerText += countStr;
    countEl.innerText = 0;
    count = 0;
}