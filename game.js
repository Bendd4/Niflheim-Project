//lvl ยาน
var shiplvl = 1;
var price = 20
document.getElementById("price").innerHTML =  price ;
var gameover = 0

// เงิน
var money = 10000;
var bonus = 01;

var minute = 5
var sec = 1
var alart_start = -1
window.setInterval(function () {
  if (shiplvl == 2){
    bonus = 2
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
  //ถึง lvl 10 = จบเกม
  if (shiplvl >= 10){
    bonus = 0
    sec = sec + 1
    alart_start = alart_start - 1
  }
  money = money + bonus;

  document.getElementById("money").innerHTML =  money ;
  document.getElementById("price").innerHTML =  price ;

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
    document.getElementById("minute").innerHTML =  minute ;
    document.getElementById("second").innerHTML =  sec ;
  
  //timer การเกิด alart
  alart_start = alart_start + 1
  if (alart_start == 20){
    document.getElementById("warning").style.zIndex="9" ;
  }
  if (alart_start == 22){
    document.getElementById("warning").style.zIndex="-1"
    alart_start = 0
  }

  document.getElementById("lvl").innerHTML =  shiplvl ;
  
}, 1000);



// เงินไม่พอ
function poor(){
  document.getElementById("money").style.color = "white" ;
}

//ซื้อชิ้นส่วน
function get(){
  if (money < price){
    document.getElementById("money").style.color="red" ;
    setTimeout(poor,1000);
  }
  else{    
    if (shiplvl == 1){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl2").style.zIndex="1" ;
    document.getElementByClassName("invicon").style.Left="10%" ;
    price = 30;

    }
    if (shiplvl == 2){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl3").style.zIndex="1" ;
    document.getElementByClassName("invicon").style.left="50%" ;
    price = 40;

    }
    if (shiplvl == 3){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl4").style.zIndex="1" ;
    price = 50;
    }
    if (shiplvl == 4){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl5").style.zIndex="1" ;
    price = 60;
    }
    if (shiplvl == 5){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl6").style.zIndex="1" ;
    price = 70;
    }
    else if (shiplvl == 6){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl7").style.zIndex="1" ;
    price = 80;
    }
    if (shiplvl == 7){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl8").style.zIndex="1" ;
    price = 90;
    }
    if (shiplvl == 8){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl9").style.zIndex="1" ;
    price = 100;
    }
    if (shiplvl == 9){
    shiplvl = shiplvl + 1
    money = money - price;
    document.getElementById("lvl10").style.zIndex="1" ;
    document.getElementById("win").style.zIndex="1" ;
    }
  
    
  }
}


// ขึ้น alart
