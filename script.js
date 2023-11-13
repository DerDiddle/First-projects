let titles = [];
let note = [];
let trashTitles = [];
let trashNote = [];
loadNotes();
// hide inputContainer / show input 

function hideInput() {
    document.getElementById("inputContainer").classList.add("d-none")
    document.getElementById('input').classList.remove('d-none');

}

function showInput() {
    document.getElementById('inputContainer').classList.remove('d-none')
    document.getElementById('input').classList.add('d-none');
}

function render() {
    let newNotes = document.getElementById('addedNotes');

    newNotes.innerHTML = '';

    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];
        let notes = note[i];

        newNotes.innerHTML += `
    <div class="noteContent" > 
     ${title}<br>
     ${notes}
    <div class="seperator"></div>
    <img onclick="deletedNotes()" src="./img/icons/trash-solid.svg">
    </div>
    `;
    }
    hideInput();


}

// adding Notes

function addNote() {
    let pinnedNotes = document.getElementById('addedNotes');
    let myTitle = document.getElementById('inputTitle').value;
    let myNote = document.getElementById('inputNote').value;

    pinnedNotes.innerHTML += `
   <div class="noteContent ">
    <b> ${myTitle} </b><br>
    ${myNote}
    <div class="seperator"></div>
    <img onclick="deletedNotes()" src="./img/icons/trash-solid.svg">
   </div>
   `;

    titles.push(myTitle); // push input value into the array
    note.push(myNote)       // same as above
    saveNotes();

}

function deletedNotes(i) {
    trashTitles.push(titles.splice(i, 1));
    trashNote.push(note.splice(i, 1));
    render();
    saveNotes();
}

function saveNotes() {
    let titlesAsText = JSON.stringify(titles);
    let noteAsText = JSON.stringify(note);
    localStorage.setItem('titles', titlesAsText);
    localStorage.setItem('note', noteAsText);
}

function loadNotes() {
    let titlesAsText = localStorage.getItem('titles');
    let noteAsText = localStorage.getItem('note');
    if (titlesAsText && noteAsText) {
        titles = JSON.parse(titlesAsText)
        note = JSON.parse(noteAsText);
    }

}




//delete Notes zum funktionieren bringen
// trash seite erstellen mit icon



