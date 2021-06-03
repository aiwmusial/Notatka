// call a function on the card element
moveCard(document.getElementById('note2'));
moveCard(document.getElementById('note1'));

// create a function changing a position of a single note
function moveCard(item){
    // initial coordinates set to 0
    let loc1 = 0, loc2 = 0, loc3 = 0, loc4 = 0;

// the card will be moved by clicking on the header
    if(document.getElementById(item.id + 'header')){
        document.getElementById(item.id + 'header').onmousedown = clickToMove;
    }else{
        // in case no card header is defined in HTML accept a movement anywhere within a note
        item.onmousedown = clickToMove;
    }
    // the movement will be composed of three actions (clicking, moving and releasing)
    function clickToMove(e){
        // preventing the default action
        e = e || window.event;
        e.preventDefault();
        // getting the coordinates within the application viewport (starting point)
        loc3 = e.clientX;
        loc4 = e.clientY;
        // call function to release and move a card
        document.onmouseup = releaseToStop;
        document.onmousemove = cardDrag;
    }
    
    function cardDrag(e){
        // preventing the default action
        e = e || window.event;
        e.preventDefault();
        // calculating updated coordinates
        loc1 = loc3 - e.clientX;
        loc2 = loc4 - e.clientY;
        loc3 = e.clientX;
        loc4 = e.clientY;
        // returning calculated coordinates - position of a card 
        item.style.top = (item.offsetTop - loc2)+'px';
        item.style.left = (item.offsetLeft - loc1)+'px';
    }
    // stop the movement on mouse up
    function releaseToStop(){
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
