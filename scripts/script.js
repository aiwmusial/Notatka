let card;
// the movement will be composed of three actions (clicking, moving and releasing)
function clickToMove(e){
    // preventing the default action
    e = e || window.event;
    e.preventDefault();
    // the card will be moved by clicking on the header (querry selector used to avoid nececity of creating unique ID)
    if(e.target.className.indexOf('card-header') === -1){
        return;
    }

        card = this;
        //finding the coordinates of the element with reference to the browser window
        boundedElement = card.getBoundingClientRect();
        // getting the coordinates within the application viewport (starting point)
        // loc3 = e.clientX;
        // loc4 = e.clientY;
        loc3 = boundedElement.left - e.clientX;
        loc4 = boundedElement.top - e.clientY;
        // call function to release and move a card
        document.onmouseup = releaseToStop;
        document.onmousemove = cardDrag;

}
function cardDrag(e){
    // preventing the default action
    e = e || window.event;
    e.preventDefault();
    // calculating updated coordinates
    loc1 = loc3 + e.clientX;
    loc2 = loc4 + e.clientY;
    // loc3 = e.clientX;
    // loc4 = e.clientY;
    // preventing the card to escape outside the screen
    if(loc1<0){
        loc1 = 0;
    }
    if(loc2<0){
        loc2 = 0;
    }

    // returning calculated coordinates - position of a card 
    card.style.transform = "translateX(" + loc1 + "px) translateY(" + loc2 + "px)"; 
}

// stop the movement on mouse up
function releaseToStop(){
    card = null;
    loc3 = null;
    loc4 = null;
}

// function creating a new note
document.getElementById('addNewNote').addEventListener('click', function addNote(){
    
    // creating a div element containing future note
    let card = document.createElement('div');
    card.classList.add('card');
    // creating a note content template within HTML doc (as new items are added append child is required)
    let header = document.createElement('div');
    header.classList.add('card-header');
    // inserting a pin img
    const pin = document.createElement('img');
    pin.classList.add('pushPin')
    pin.src = './img/pushpin-147918_640.png';
    pin.alt = "push pin";
    // card body
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    // text area
    let textArea = document.createElement('div');
    
    // appending elements 
    header.appendChild(pin);
    card.appendChild(header);
    cardBody.appendChild(textArea);
    card.appendChild(cardBody);
    
    // card will appear in various places within the browser
    let newCardAnywhere =  "translateX(" + Math.random() * 100 + "px) translateY(" + Math.random() * 500 + "px)";
    card.style.transform = newCardAnywhere;

    // div.addEventListener('mousedown', clickToMove);
    document.body.appendChild(card);        
    // enabling card movement
    card.onmousedown = clickToMove;
});



