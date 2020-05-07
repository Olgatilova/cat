"use strict" 
let catImage = document.querySelector(".cat-sort img");//картинки кота
let displayText = document.querySelector(".display-text");//текст на дисплее
let progressBar = document.querySelector(".progress-bar");//% отражение в прогресс-баре
let catMessage = document.querySelector(".cat-speak");// надписи сказанного котом
let catStatus = "waiting"; // статус для ПБ ожидания 


let correctCare ="";
let catSound = new Audio("sound/Soundtrack.mp3");
let beginBtn = document.querySelector(".btn");
  beginBtn.onclick = () => {
    start();
    catSound.play();
    beginBtn.classList.add("d-none");
  }


let catCare = document.querySelectorAll(".care-item img");// виды ухода за котом
for(let i = 0; i < catCare.length; i++) { // для 
  catCare[i].onmousedown = choiceCare;
}


function start() {

 let objCatHi = {
  catMessage: "Привет! Меня зовут кот Гарфилд",
  catImage: 'img/cat6-r.png',
  }
  
  let objWantSlip = {
    catMessage: "Хорошо провели время, Гарфилд устал и хочет спать",
    catImage: 'img/cat19-r.png',
  }
  
  let objWantFish = {
    catMessage: "Гарфилд хочет ест",
    catImage: 'img/cat5-r.png',
    correctCare: 'img/fish-r.png',
  }
  
  let objWantMilk = {
    catMessage: "Гарфилд хочет молока",
    catImage: 'img/cat12-r.png',
    correctCare: 'img/milk-r.png',
  }
  
  let objWantHand = {
    catMessage: "Почеши пузико Гарфилду",
    catImage: 'img/cat20-r.png',
    correctCare: 'img/hand-r.png',
  }
  
  let objWantPlay = {
    catMessage: "поиграй с Гарфилдом",
    catImage: 'img/cat8-r.png',
    correctCare: 'img/play-r.png',
  }
  
  
  let arrey = [objWantFish, objWantMilk, objWantHand, objWantPlay];

  
  let randObj = arrey[Math.floor(Math.random() * arrey.length)];
  
   catMessage.innerHTML = "<span>"+randObj.catMessage+"</span>";
   catImage.setAttribute('src',randObj.catImage);
   correctCare = randObj.correctCare;

}

function changeDisplayText(text) { 
  displayText.innerHTML = "<span>"+text+"</span>";
}

function choiceCare(event) {
  event.preventDefault();// сброс браузетных настроек
  
  let care = this.cloneNode(true); //клон рыбки и др.
  document.body.append(care); //создаем в конце body, для накладывания на кота
  care.style.height = "100px"; // высота клона

  care.style.position = "absolute";
  
  let careCoords = care.getBoundingClientRect(); // координаты рыбы
  let careWidth = careCoords.width; //переменная выводит ширину 
  let careHeight = careCoords.height; //переменная выводит высоту
  
  care.style.top = event.clientY - careHeight/2 + "px"; 
  care.style.left = event.clientX - careWidth/2 + "px";
  window.onmousemove = (event) => {
    care.style.top = event.clientY - careHeight/2 + "px"; 
    care.style.left = event.clientX - careWidth/2 + "px";
  };
  care.onmouseup = dropCare;
}

let readyPercent = 0;

function dropCare() {
 changeDisplayText("Уровень удовлетворенности Гарфилдa");
 window.onmousemove = null; //отключаю движение рыбки при отпуске мыши
  let care = this;
  
  if (inCat(care) && care.getAttribute('src') == correctCare) {
    start() ;
    readyPercent += 25;
    catStatus = "process";
    progressBar.style.width = readyPercent + "%";
    
  } else {
      catMessage.innerHTML = "<span>"+"Упс) не зли меня))"+"</span>";  
      catImage.setAttribute('src','img/cat18-r.png');
      beginBtn.classList.remove("d-none");
      catStatus = "waiting";
      readyPercent = 0;
      readyPercent--
      progressBar.style.width = "0%";
    }
    if (readyPercent >= 100) {
      catStatus = "ready";
      catMessage.innerHTML = "<span>"+"Ты молодец! Хорошо провели время, заходи еще!"+"</span>";  
      catImage.setAttribute('src','img/cat11-r.png');
      beginBtn.classList.remove("d-none");
      readyPercent = 0;
      readyPercent--
      progressBar.style.width = "0%";
      catStatus = "waiting";
    }
    care.remove();
  }



function inCat(care) {
  let careCoord = care.getBoundingClientRect();// определение координат рыбки на коте
  let catImg = document.querySelector(".cat-sort img");//картинки кота
  let catImgCoord = catImg.getBoundingClientRect();
  //координаты кота
  
  let careLeftTopCornerX = careCoord.x; //координаты верхнего левого угла рыбки
  let careLeftTopCornerY = careCoord.y;  
  
  let careRightTopCornerX = careCoord.x + careCoord.width; 
  let careRightTopCornerY = careCoord.y; 
  
  
  let catImgLeftTopCornerX = catImgCoord.x; //координаты кота
  let catImgLeftTopCornerY = catImgCoord.y;
  
  let catImgRightTopCornerX = catImgCoord.x + catImgCoord.width;
  let catImgRightTopCornerY = catImgCoord.y;
  
  let catImgLeftBottomCornerX = catImgCoord.x; 
  let catImgLeftBottomCornerY = catImgCoord.y + catImgCoord.height;

  let catImgRightBottomCornerX = catImgCoord.x + catImgCoord.width; 
  let catImgRightBottomCornerY = catImgCoord.y + catImgCoord.height;

  //console.log([careCoord, catImgCoord]);
  
  if (
    careLeftTopCornerX >= catImgLeftTopCornerX 
    && careLeftTopCornerY >= catImgLeftTopCornerY 
    && careRightTopCornerX <= catImgRightTopCornerX 
    && careRightTopCornerY >= catImgRightTopCornerY 
    && careLeftTopCornerX >= catImgLeftBottomCornerX
    && careLeftTopCornerY <= catImgLeftBottomCornerY
    ) {
      return true;
    } else {
      return false;
   }
}



