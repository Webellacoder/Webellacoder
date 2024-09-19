

function changeStyle(){

    var paragraph = document.getElementsByClassName('para');
    
    var firstparaText = paragraph[0].innerHTML;
    var secondparaText = paragraph[1].innerHTML;
    var addThem = paragraph[2].innerHTML = firstparaText + secondparaText;
    
    var firstparaText = paragraph [0].innerHTML = " ";
    var secondparaText = paragraph [1]. innerHTML = " ";
    
    }

function changeStyle(){

    var paragraph = document.getElementsByTagName("p");

    for (var i = 0; i < paragraph.length; i++){
        paragraph[i].style.fontStyle = "italic";
    }
}
function changeStyle(){
    var paragraph = document.getElementsByClassName('para');
    var changeText =paragraph [0].style.color="red";
    var changeText =paragraph [1].style.color="red";
}


function changeStyle(){

    var paragraph = document.getElementsByClassName('para');

    var changeText = paragraph [0].innerHTML = "New Hellow 1";
    var changeText = paragraph [1].innerHTML = "New Hellow 2";
}
function changeStyle (){
    document.getElementById("image").src="shoe.jpg";
}
function changeBackground(){
    var text = document.getElementById("para1").style.backgroundColor="yellow";
}
function backToNomal(){
    var text = document.getElementById("para").style.backgroundColor ="";
}
function namePicture(){
    document.getElementById("image").src="ama.jpg";

    }
    function oldPicture(){
document.getElementById("image").src="ana.jpg";
    }
function changeText(){
    var parent = document.getElementById('main');
    var child= parent.childNodes[3];
    child.style.color="blue";
}

function validateTextbox(){
    var box = document.getElementById("name");
    if (box.value =""){
        alert("The field marked in red cannot be blank")
    }
}










