//lvl ยาน
var shiplvl = 1;
var price = 20;
document.getElementById("price").innerHTML =  price ;
var gameover = 0;
var minigame_timer = 10;
var minigame;
var samegame = -1;

// เงิน (total rn = 540)
var money = 10;
var bonus = 0;
var minute = 2;
var sec = 15;
var alart_timer = -1;
var quiz = 0;
var quiz_drop = 0;
var num = 0;
var multiplier = 1; //Normally 1, For presentation 2

window.setInterval(function () {
   document.getElementById("close").addEventListener("click", test);
  document.getElementById("price").innerHTML =  price ;
  if (shiplvl == 2){
    bonus = 2;
  }
  if (shiplvl == 3){
    bonus = 3;
  }
  if (shiplvl == 4){
    bonus = 4;
  }
  if (shiplvl == 5){
    bonus = 5;
  }
  if (shiplvl == 6){
    bonus = 6;
  }
  if (shiplvl == 7){
    bonus = 7;
  }
  if (shiplvl == 8){
    bonus = 8;
  }
  if (shiplvl == 9){
    bonus = 9;
  }
  //ถึง lvl 10 = จบเกม
  if (shiplvl == 10){
    bonus = 0;
    sec = sec + 1;
    alart_start = alart_start - 1;
  }
  money = money + (bonus*multiplier);

  document.getElementById("money").innerHTML =  money ;

  // timer เกมหลัก (ให้มันอยู่ "tick" เดียวกับเงิน)
  if (minute == 0 && sec == 1){
    location.href = "../game/gameover.html";
    bonus = 0;
    if (sec <= 0){
      sec = sec + 1;
    }
  }
    if (sec == 0){
      minute = minute - 1;
      sec = sec + 60;
    }
    sec = sec - num;
    if (sec <= 9){
      sec = "0" + sec;
    }
  
    document.getElementById("timer").innerHTML = minute + ":" + sec ;
  
  //timer การเกิด alart
  alart_timer = alart_timer + num
  if (alart_timer == 10){
    document.getElementById("warning").style.zIndex="9"
    soundalert();
  }
  if (alart_timer == 12){
    document.getElementById("warning").style.zIndex="-1"
    stopalert();
   
    minigame = Math.floor(Math.random() * 3);

    while (minigame == samegame) {
      minigame = Math.floor(Math.random() * 3);
    }
    samegame = minigame;

    // random 4 number
    if (minigame==0){
      document.getElementById("game1").style.zIndex="20"
      quiz = game1();
    }
    // choice
    if (minigame==1){
      document.getElementById("game2").style.zIndex="20"
      var y = Math.floor(Math.random() * 5);
      game2(y);
    }
    // drag
    if (minigame==2){
      document.getElementById("game3").style.zIndex="20"

    }
   
  }
  if (alart_timer >= 12){
    minigame_timer = minigame_timer - 1;
    document.getElementById("minigame_timer1").innerHTML = "Time Left : " + minigame_timer ;
    document.getElementById("minigame_timer2").innerHTML = "Time Left : " + minigame_timer ;
    document.getElementById("minigame_timer3").innerHTML = "Time Left : " + minigame_timer ;
    if (minigame_timer == -1){
      document.getElementById("number_ans").value = "";
      document.getElementById("game1").style.zIndex="-2";
      document.getElementById("game2").style.zIndex="-2";
      document.getElementById("game3").style.zIndex="-2";
      resetdrag()
      soundincor();
      money = money - 50;
      alart_timer = 0;
      minigame_timer = 10;
    }
  }
  
}, 1000);


//เกม พิพม์ตัวเลข (game 1)
function game1(){
  var quiz;
  quiz = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("number").innerHTML = "Type this number : " + quiz ;
  return quiz;
}

 // ------------เชคเลข-----------

      function isnum(num){
        return !isNaN(parseFloat(num))&&isFinite(num);
      }
function delay(){
  document.getElementById("number_ans").value = "";
}

// เชคคำตอบเกมใส่เลข
function check_num(num1){
  let cnum1 = isnum(num1);
  if (cnum1 == false){

    document.getElementById("number_ans").value = "นั่นไม่ใช่ตัวเลขนะ";
    setTimeout(delay,1000);
  }
  else{
  var rnum1 = parseInt(num1);

  if (rnum1 == quiz){
    soundcor();
    document.getElementById("number_ans").value = "";
    document.getElementById("game1").style.zIndex="-2";
    money = money + 50;
    alart_timer = 0;
    minigame_timer = 10; 
  }
  else{
    soundincor();
    document.getElementById("number_ans").value = "";
    document.getElementById("game1").style.zIndex="-2";
    money = money - 50;
    alart_timer = 0;
    minigame_timer = 10;
    }
  }
}

// game 2
function game2(y){
  if (y==0){
  document.getElementById("number2").innerHTML = "มนุษย์คนเเรกที่ได้เหยียบดวงจันทร์" ;
  document.getElementById("number_ans2_1").innerHTML = "<br>Neil Alden Armstrong" ;
  document.getElementById("number_ans2_2").innerHTML = "<br>Yuri Alekseyevich Gagarin" ;
  document.getElementById("number_ans2_3").innerHTML = "<br>Elon Musk" ;
  document.getElementById("number_ans2_1").addEventListener("click", cor);
  document.getElementById("number_ans2_2").addEventListener("click", incor);
  document.getElementById("number_ans2_3").addEventListener("click", incor);
  }
  if(y==1){
  document.getElementById("number2").innerHTML = "ในระบบสุริยะของเรา มีดาวเคราะห์ทั้งหมดกี่ดวง" ;
  document.getElementById("number_ans2_1").innerHTML = "<br>8" ;
  document.getElementById("number_ans2_2").innerHTML = "<br>9" ;
  document.getElementById("number_ans2_3").innerHTML = "<br>10" ;
  document.getElementById("number_ans2_1").addEventListener("click", cor);
  document.getElementById("number_ans2_2").addEventListener("click", incor);
  document.getElementById("number_ans2_3").addEventListener("click", incor);
 
  }
  if(y==2){
  document.getElementById("number2").innerHTML = "ในระบบสุริยะของเรา ดาวเคราะห์ดวงใดเล็กที่สุด" ;
  document.getElementById("number_ans2_1").innerHTML = "<br>Pluto" ;
  document.getElementById("number_ans2_2").innerHTML = "<br>Venus" ;
  document.getElementById("number_ans2_3").innerHTML = "<br>Mercury" ;
  document.getElementById("number_ans2_1").addEventListener("click", incor);
  document.getElementById("number_ans2_2").addEventListener("click", incor);
  document.getElementById("number_ans2_3").addEventListener("click", cor);
 
  }
  if(y==3){
  document.getElementById("number2").innerHTML = "ในระบบสุริยะของเรา ดาวเคราะห์ดวงใดใหญ่ที่สุด" 
    ;
  document.getElementById("number_ans2_1").innerHTML = "<br>Saturn" ;
  document.getElementById("number_ans2_2").innerHTML = "<br>Jupiter" ;
  document.getElementById("number_ans2_3").innerHTML = "<br>Uranus" ;
  document.getElementById("number_ans2_1").addEventListener("click", incor);
  document.getElementById("number_ans2_2").addEventListener("click", cor);
  document.getElementById("number_ans2_3").addEventListener("click", incor);
  }
  if(y==4){
  document.getElementById("number2").innerHTML = "ดาวดวงใดต่อไปนี้ ไม่เป็นชื่อของดวงจันทร์ในระบบสุริยะ" ;
  document.getElementById("number_ans2_1").innerHTML = "<br>Io" ;
  document.getElementById("number_ans2_2").innerHTML = "<br>Phobos" ;
  document.getElementById("number_ans2_3").innerHTML = "<br>Pluto" ;
  document.getElementById("number_ans2_1").addEventListener("click", incor);
  document.getElementById("number_ans2_2").addEventListener("click", incor);
  document.getElementById("number_ans2_3").addEventListener("click", cor);
  }
}

// check choice
function cor(){
  money += 50;
  document.getElementById("game2").style.zIndex="-2";
  alart_timer = 0;
  minigame_timer = 10;
  document.getElementById("number_ans2_1").removeEventListener("click", incor);
  document.getElementById("number_ans2_2").removeEventListener("click", incor);
  document.getElementById("number_ans2_3").removeEventListener("click", incor);
  document.getElementById("number_ans2_1").removeEventListener("click", cor);
  document.getElementById("number_ans2_2").removeEventListener("click", cor);
  document.getElementById("number_ans2_3").removeEventListener("click", cor);
  soundcor();
}

function incor(){
  money -= 50;
  document.getElementById("game2").style.zIndex="-2";
  alart_timer = 0;
  minigame_timer = 10;
  document.getElementById("number_ans2_1").removeEventListener("click", incor);
  document.getElementById("number_ans2_2").removeEventListener("click", incor);
  document.getElementById("number_ans2_3").removeEventListener("click", incor);
  document.getElementById("number_ans2_1").removeEventListener("click", cor);
  document.getElementById("number_ans2_2").removeEventListener("click", cor);
  document.getElementById("number_ans2_3").removeEventListener("click", cor);
  soundincor();
}

// Game 3
function allowDrop(ev) {
  ev.preventDefault();
}
function drop(ev,img) {
event.preventDefault(); 
 
  
  const draggableElementData = event.dataTransfer.getData("text"); 
  const droppableElementData = event.target.getAttribute("data-draggable-id");
  const isCorrectMatching = draggableElementData === droppableElementData;

  if(minigame_timer <= -1){
    document.getElementById("game3").style.zIndex="-2";
    money -= 50;
    soundincor();
  }
  
  if(isCorrectMatching) {
   if(img==1){
 document.getElementById('bat1drop').style.opacity="0%";
     quiz_drop += 1;
   }
    if(img==2){
 document.getElementById("bat2drop").style.opacity="0%";
      quiz_drop += 1;
   }
    if(img==3){
 document.getElementById("bat3drop").style.opacity="0%";
      quiz_drop += 1;
   }
    if(img==4){
 document.getElementById("bat4drop").style.opacity="0%";
      quiz_drop += 1;
   }
    if (quiz_drop==4){
      soundcor();
      money += 50;
      resetdrag()
      document.getElementById("game3").style.zIndex="-2";
      alart_timer = 0;
      minigame_timer = 10;
      quiz_drop = 0;
    }
  }
}
function resetdrag(){
  document.getElementById("bat1drop").style.opacity="100%";
  document.getElementById("bat2drop").style.opacity="100%";
  document.getElementById("bat3drop").style.opacity="100%";
  document.getElementById("bat4drop").style.opacity="100%";
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  
}

// เงินไม่พอ
function poor(){
  document.getElementById("money").style.color = "white" ;
}

//ซื้อชิ้นส่วน
function get(){
  if (money < price){
    document.getElementById("money").style.color = "red" ;
    setTimeout(poor,1000);
  }
  else{
    if (shiplvl == 1){
    shiplvl = shiplvl + 1;
    money = money - price;
    document.getElementById("lvl2").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-16vw)";
    document.getElementById("info").src = "https://cdn.discordapp.com/attachments/957340274709917716/977254723566587914/module2.png";  
    }
    else if (shiplvl == 2){
    shiplvl = shiplvl + 1;
    money = money - price;
    document.getElementById("lvl3").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-24vw)";
    document.getElementById("info").src = "https://cdn.discordapp.com/attachments/957340274709917716/977254723822419978/module3.png";  
    }
    else if (shiplvl == 3){
    shiplvl = shiplvl + 1;
    money = money - price;
    document.getElementById("lvl4").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-32vw)";
    document.getElementById("info").src = "https://cdn.discordapp.com/attachments/957340274709917716/977254724124414023/module4.png";  
    }
    else if (shiplvl == 4){
    shiplvl = shiplvl + 1;
    money = money - price;
    document.getElementById("lvl5").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-40vw)";
    document.getElementById("info").src = "https://cdn.discordapp.com/attachments/957340274709917716/977254724371906570/module5.png";  
    }
    else if (shiplvl == 5){
    shiplvl = shiplvl + 1;
    money = money - price;
    document.getElementById("lvl6").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-48vw)";
    document.getElementById("info").src = "https://cdn.discordapp.com/attachments/957340274709917716/977290155541037076/module6.png";  
    }
    else if (shiplvl == 6){
    shiplvl = shiplvl + 1;
    money = money - price;
    document.getElementById("lvl7").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-56vw)";
    document.getElementById("info").src = "https://cdn.discordapp.com/attachments/957340274709917716/977290155817828362/module7.png";  
    }
    else if (shiplvl == 7){
    shiplvl = shiplvl + 1;
    money = money - price;
    document.getElementById("lvl8").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-64vw)";
    document.getElementById("info").src = "https://cdn.discordapp.com/attachments/957340274709917716/977290156052729856/module8.png";  
    }
    else if (shiplvl == 8){
    shiplvl = shiplvl + 1;
    money = money - price;
    document.getElementById("lvl9").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-72vw)";
    document.getElementById("info").src = "https://cdn.discordapp.com/attachments/957340274709917716/977290156400861274/module9.png";  
    }
    else if (shiplvl == 9){
    shiplvl = shiplvl + 1;
    money = money - price;
    document.getElementById("lvl10").style.zIndex="1" ;
    document.getElementById("win").style.zIndex="1" ;
    document.getElementById("invicon").style.transform = "translateX(-80vw)";
    document.getElementById("info").src = "https://cdn.discordapp.com/attachments/957340274709917716/977290156690272376/module10.png";  
    victory();
    stopbgm();
    }
  }
}
// เล่นเสียง
function stopbgm() {
        var bgm = document.getElementById("bgm");
        bgm.volume = 0;
}
function victory() {
        var audio = document.getElementById("audio");
        audio.volume = 0.1; //Don't Touch IT!!!!!!!
        audio.play();
}
function soundalert() {
        var audio = document.getElementById("alert");
        audio.volume = 0.1; //Don't Touch IT!!!!!!!
        // audio.volume = 0;
        audio.play();
}
function stopalert() {
        var audio = document.getElementById("alert");
        audio.volume = 0;
}
function soundcor() {
        var audio = document.getElementById("correct");
        audio.volume = 0.1; //Don't Touch IT!!!!!!!
        audio.play();
}
function soundincor() {
        var audio = document.getElementById("incorrect");
        audio.volume = 0.1; //Don't Touch IT!!!!!!!
        audio.play();
}

// tutorial
function test(){
  bonus += 1;
  num++;
  document.getElementById("tutorial").style.display="none" ;
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}