let card;
let loc1;
let loc2;
let loc3;
let loc4;
// save and delete note
let saveNote;
let deleteNote;
// display already saved notes
let notesSaved;


// the movement will be composed of three actions (clicking, moving and releasing)
function clickToMove(e){

    // the card will be moved by clicking on the header
    if(e.target.className.indexOf('card-header') === -1){
        return;
    }
        card = this;
        //finding the coordinates of the element with reference to the browser window
        boundedElement = card.getBoundingClientRect();
        // getting the coordinates within the application viewport (starting point)
        loc3 = boundedElement.left - e.clientX;
        loc4 = boundedElement.top - e.clientY;
        // call function to release and move a card
        document.onmouseup = releaseToStop;
        document.onmousemove = cardDrag;

}
function cardDrag(e){

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

// getting the content of single note
function getSingleNote(el){
    var textArea = el.querySelector('textarea');
    return {
        content: textArea.value,
        id: el.id,
        newCardAnywhere: el.style.transform
    }
}

// function creating a new note
document.getElementById('addNewNote').addEventListener('click', function addNote(options){
    
    // creating a div element containing future note
    let div = document.createElement('div');
    // creating a note content template within HTML doc (as new items are added append child is required)
    let header = document.createElement('div');
    let pin = document.createElement('img');
    let cardBody = document.createElement('div');
    let textArea = document.createElement('textarea');
    // create footer to contain save and delete btns
    let footer = document.createElement('div');
    let saveBtn = document.createElement('span');
    let deleteBtn = document.createElement('span');
    let noteSetUp = options || {
        body: '',
        id: new Date().getTime,
        newCardAnywhere: "translateX(" + Math.random() * 100 + "px) translateY(" + Math.random() * 500 + "px)"
    }
    
    // card will appear in various places within the browser
    div.style.transform = noteSetUp.newCardAnywhere;
    
        div.classList.add('card');
        // adding a class to the header
        header.classList.add('card-header');
        // inserting a pin img
        pin.classList.add('pushPin')
        pin.src = './img/pushpin-147918_640.png';
        pin.alt = "push pin";

        // card body
        cardBody.classList.add('card-body');

        //footer
        footer.classList.add('footer');
        saveBtn.classList.add('saveNote');
        deleteBtn.classList.add('deleteNote');
        saveBtn.innerHTML = '<i class="far fa-save fa-lg"></i>';
        deleteBtn.innerHTML = '<i class="far fa-trash-alt fa-lg"></i>';
    

    // defining events to save and delete notes
    function clickSave(){
        let item = {};
        
        saveNote(getSingleNote(card));
    }
    function clickDelete(){
        deleteNote(item);
    }
    // adding event listeners to the btns
    saveBtn.addEventListener('click', clickSave);
    deleteBtn.addEventListener('click', clickDelete);

    // appending elements 
    header.appendChild(pin);
    div.appendChild(header);
    cardBody.appendChild(textArea);
    div.appendChild(cardBody);
    footer.appendChild(saveBtn);
    footer.appendChild(deleteBtn);
    div.appendChild(footer);
    // // enabling card movement
    // div.onmousedown = clickToMove;
    div.addEventListener('mousedown', clickToMove);
    
    // add card element to the doc body
    document.body.appendChild(div);     
});

function localStorage(){
    saveNote = function (item){
        //save note
        localStorage.setItem(note.id, note)
    };
    deleteNote = function (item){

    };
    notesSaved();
}


