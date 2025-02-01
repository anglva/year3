document.getElementById("bDate").onclick = checkDate;

let answers = new Map([["12/13/21", "walmart"], ["2/4/22", "pottery bayou"], ["2/14/22", "craft urban"],
    ["2/18/22", "panera"], ["3/4/22","poor boy"], ["3/18/22", "cheescake factory"], ["4/21/22", "reed"],
    ["6/30/22", "olive garden"], ["7/21/22", "where the crawdads sing"], ["7/25/22", "arby's"],
    ["7/28/22", "shedd aquarium"], ["8/4/22", "nope"], ["10/27/22", "cookies"], ["11/2/22", "target"],
    ["2/4/23", "barnes and noble"], ["2/9/23", "five below"], ["2/18/23", "quince"], 
    ["3/3/23", "north central college"], ["5/18/23", "casino"], ["7/19/23", "anderson japanese gardens"], 
    ["7/25/23", "cinema 18"], ["8/2/23", "marcus theater"], ["9/8/23", "cosley zoo"], 
    ["9/13/23", "planetarium"], ["10/5/23", "mockingbird"], ["10/25/23", "ihop"], ["11/4/23", "monster purge"],
    ["11/8/23", "gingerbread"], ["1/4/24", "petco"]
]);
let dates = ["12/13/21", "2/4/22", "2/14/22", "2/18/22", "3/4/22", "3/18/22", "4/21/22","6/30/22", "7/21/22",
     "7/25/22", "7/28/22", "8/4/22", "10/27/22", "11/2/22", "2/4/23", "2/9/23", "2/18/23", "3/3/23", 
     "5/18/23", "7/19/23", "7/25/23", "8/2/23", "9/8/23", "9/13/23", "10/5/23", "10/25/23", "11/4/23",
     "11/8/23", "1/4/24"];

let label = document.getElementById("label");
let tDate = document.getElementById("tDate");

function checkDate(){
    if (answers.has(tDate.value)){
        label.innerHTML = tDate.value + label.textContent;
        display();
        checkAnswer(tDate.value, dates.indexOf(tDate.value));
    }
    else{
        document.getElementById("wDate").style.display = "block";
    }
}

function checkAnswer(date, element){
    display();
    document.getElementById("bAnswer").onclick =function(){
        if (answers.get(date) == document.getElementById("tAnswer").value.toLowerCase()){          
            flash("green", "cAnswer");
            if (element != dates.length - 1){
                label.textContent = dates[element + 1] + " Answer: ";
                date = dates[element + 1];
                document.getElementById("tAnswer").value = "";
                tDate.value = "";
                checkAnswer(date, element + 1);
            }
            else{
                //flash("green", "cAnswer");
                document.getElementById("click").textContent = "Winner Winner!!";
                eyebrows();
            }
            
        }
        else{
            //console.log(document.getElementById("tAnswer").value);
            flash("red", "wAnswer");
            document.getElementById("wAnswer").style.display = "block";
            document.getElementById("tAnswer").value = "";
            checkAnswer(date,element);
        }
    };
    
}

function display(){
    document.getElementById("wDate").style.display = "none";
    document.getElementById("wAnswer").style.display = "none";
    document.getElementById("cAnswer").style.display = "none";

    document.getElementById("answer").style.display = "block";
}

function flash(color, answer){
    let a = setInterval(() => {
       // document.getElementById(answer).style.display = "block";
        if ((document.getElementById("body").style.backgroundColor == color))
            document.getElementById("body").style.backgroundColor = "#58375A";
        else
            document.getElementById("body").style.backgroundColor = color;
    }, 100);
    
    setTimeout(() => {
       clearInterval(a);
       document.getElementById("body").style.backgroundColor = "#58375A";
       //document.getElementById(answer).style.display = "none";
    }, 1000);
}

function eyebrows(){
    let a = setInterval(() => {
        document.getElementById("eye").style.display = "block";
    }, 100);
    
    setTimeout(() => {
       clearInterval(a);
       document.getElementById("eye").style.display = "none";
       console.log("eye");
    }, 2000);
}


Menu.style.display = "none";
function ShowHide(x) {
  x.classList.toggle("change");
  var Menu = document.getElementById("Menu");
  if (Menu.style.display === "none") {
    Menu.style.display = "block";
  } else {
    Menu.style.display = "none";
  }
}