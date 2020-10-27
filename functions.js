var actualLocation = document.getElementById('actualLoc');

function changeLoc(newLoc) {
    let newLocValue = newLoc.innerText;
    actualLocation.innerText=newLocValue;
}

function activeSubMenu(item) {
    let y = document.querySelectorAll('#laCarte li');
    y=y.length+1;
    for (i=1; i<y; i++){
        let x = "eleMenu"+i;
        let ele = document.getElementById(x);
        ele.style.color = "#373737";
        ele.style.fontWeight = "normal";
    }
    item.style.color= " #d68538";
    item.style.fontWeight= "bold";
}

function closeRemove(button){
    let block = button.parentNode;
    console.log(block);
    block.style.display="none";
}

/*
function displayChoiceDetails(radioButton){
    let id = radioButton.getAttribute("id");
    id = id + "Block";
    let vector = document.querySelectorAll(deliveryDetails);
    for (i=0; i< vector.lenght; i++){
        let block = document.getElementById(vector[i]);
        block.style.display="none;"
    }
    document.getElementById(id).style.display="none";
}
*/