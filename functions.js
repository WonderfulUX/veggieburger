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