//lvl ยาน
var shiplvl = 1;
var price = 20;
document.getElementById("price").innerHTML =  price ;
var gameover = 0;
var minigame_timer = 8;

// เงิน (total rn = 540)
var money = 20;
var bonus = 01;
var minute = 5
var sec = 1
var alart_timer = -1
var quiz = 0;
window.setInterval(function () {
  document.getElementById("price").innerHTML =  price ;
  if (shiplvl == 2){
    bonus = bonus + 2
  }
  if (shiplvl == 3){
    bonus = 3
  }
  if (shiplvl == 4){
    bonus = 5
  }
  if (shiplvl == 5){
    bonus = 7
  }
  if (shiplvl == 6){
    bonus = 10
  }
  if (shiplvl == 7){
    bonus = 13
  }
  if (shiplvl == 8){
    bonus = 16
  }
  if (shiplvl == 9){
    bonus = 16
  }
  //ถึง lvl 10 = จบเกม
  if (shiplvl == 10){
    bonus = 0
    sec = sec + 1
    alart_start = alart_start - 1
  }
  money = money + bonus;

  document.getElementById("money").innerHTML =  money ;

  // timer เกมหลัก (ให้มันอยู่ "tick" เดียวกับเงิน)
  if ((minute == 0 && sec == 0) || shiplvl == 0){
    bonus = 0;
    sec = sec + 1;
    location.href = "./gameover.html";
  }
    if (sec == 0){
      minute = minute - 1;
      sec = sec + 60;
    }
    sec = sec - 1;
    if (sec <= 9){
      sec = "0" + sec;
    }
  
    document.getElementById("timer").innerHTML = minute + ":" + sec ;
  
  //timer การเกิด alart
  alart_timer = alart_timer + 1
  if (alart_timer == 20){
    document.getElementById("warning").style.zIndex="9" ;
  }
  if (alart_timer == 22){
    document.getElementById("warning").style.zIndex="-1"
    document.getElementById("game1").style.zIndex="20"
    // random เลข 4 ตัว
    quiz = game1()
  }
  if (alart_timer >= 22){
    minigame_timer = minigame_timer - 1;
    document.getElementById("minigame_timer").innerHTML = "Time Left : " + minigame_timer ;
    if (minigame_timer == -1){
      document.getElementById("number_ans").value = "";
      document.getElementById("game1").style.zIndex="-2"
      money = money - 20;
      alart_timer = 0;
      minigame_timer = 8;
  }
    
  }

  // document.getElementById("lvl").innerHTML =  shiplvl ;
  
}, 1000);


//เกม พิพม์ตัวเลข
function game1(){
  var quiz;
  quiz = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("number").innerHTML = "Type this number : " + quiz ;
  return quiz;
}

 // ------------เชคเลข-----------

      function isnum(num){
        return !isNaN(parseFloat(num))&&isFinite(num)
      }
function delay(){
  document.getElementById("number_ans").value = "";
}
// เชคคำตอบเกมใส่เลข
function check_num(num1){
  let cnum1 = isnum(num1)
  if (cnum1 == false){

    document.getElementById("number_ans").value = "นั่นไม่ใช่ตัวเลขนะ";
    setTimeout(delay,1000);
    
  }
  else{
  var rnum1 = parseInt(num1);

  if (rnum1 == quiz){
    document.getElementById("number_ans").value = "";
    document.getElementById("game1").style.zIndex="-2"
    money = money + (3*shiplvl);
    alart_timer = 0;
    minigame_timer = 8;
  }
  else{
    document.getElementById("number_ans").value = "";
    document.getElementById("game1").style.zIndex="-2"
    money = money - 20;
    alart_timer = 0;
    minigame_timer = 8;
    }
  }
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
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl2").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-16vw)";
    }
    else if (shiplvl == 2){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl3").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-24vw)";
    }
    else if (shiplvl == 3){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl4").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-32vw)";
    }
    else if (shiplvl == 4){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl5").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-40vw)";
    }
    else if (shiplvl == 5){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl6").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-48vw)";
    }
    else if (shiplvl == 6){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl7").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-56vw)";
    }
    else if (shiplvl == 7){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl8").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-64vw)";
    }
    else if (shiplvl == 8){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl9").style.zIndex="1" ;
    price = price + 10;
    document.getElementById("invicon").style.transform = "translateX(-72vw)";
    }
    else if (shiplvl == 9){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl10").style.zIndex="1" ;
    document.getElementById("win").style.zIndex="1" ;
    document.getElementById("invicon").style.transform = "translateX(-80vw)";
    }
  }
}



// choice

 function checkq1( value ) {
       if( value == 1) alert('Correct'); 
       if( value == 2) alert('Wrong'); 
       if( value == 3) alert('Wrong'); 
       if( value == 4) alert('Wrong'); 
    return true;
}