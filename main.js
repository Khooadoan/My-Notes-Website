const mainContainer = document.getElementById("container");
const noteboxContainer = document.getElementById("notebox");

let listNote = [];

 function save() {
            const note = noteboxContainer.value;
            noteboxContainer.value = "";
            if(note) {

            const divContainer = document.createElement("div");
            const textareaContainer = document.createElement("textarea");
            const delBtn = document.createElement("button");
            const editBtn = document.createElement("button");
            const notestoSave = JSON.parse(localStorage.getItem("notes") || "[]");

            divContainer.className = "grid-item";
            textareaContainer.className = "textarea";
            delBtn.className = "del-btn";
            editBtn.className = "edit-btn";
            
            textareaContainer.value = note;
            textareaContainer.disabled = true;

            delBtn.innerHTML = "X";
            editBtn.innerHTML = "Edit";

            function deleteNote() {
                const indexDelete = listNote.findIndex(item => item == divContainer);
                const notestoUpdate = JSON.parse(localStorage.getItem("notes") || "[]");
                console.log(indexDelete);
                listNote.splice(indexDelete, 1);
                notestoUpdate.splice(indexDelete, 1);
                console.log(listNote);
                console.log(notestoUpdate);
                renderListNote();
                localStorage.setItem("notes", JSON.stringify(notestoUpdate));
            }

            delBtn.addEventListener("click", function() {
                deleteNote();
            })

            editBtn.addEventListener("click", function() {
                console.log("click");

                noteboxContainer.value = note;
                deleteNote();
            })

            divContainer.appendChild(editBtn);
            divContainer.appendChild(delBtn);
            divContainer.appendChild(textareaContainer);

            listNote.unshift(divContainer);
            renderListNote();

            console.log(listNote);
            notestoSave.unshift(note);
            localStorage.setItem("notes", JSON.stringify(notestoSave));
            };
        };

function restoreTest() {
    const notestoRestore = localStorage.getItem("notes");
    const arr = notestoRestore.slice(1, -1).split(',');
    for(let i = (arr.length - 1); i > -1; i--) {
   
         console.log(arr[i]);
         const divContainer = document.createElement("div");
         const textareaContainer = document.createElement("textarea");
         const delBtn = document.createElement("button");
         const editBtn = document.createElement("button")

         divContainer.className = "grid-item";
         textareaContainer.className = "textarea";
         delBtn.className = "del-btn";
         editBtn.className = "edit-btn";
         
         textareaContainer.value = arr[i].slice(1, -1);
         textareaContainer.disabled = true;
         
         delBtn.innerHTML = "X";
         editBtn.innerHTML = "Edit";
     
         function deleteNote() {
            const indexDelete = listNote.findIndex(item => item == divContainer);
            const notestoUpdate = JSON.parse(localStorage.getItem("notes") || "[]");
            console.log(indexDelete);
            listNote.splice(indexDelete, 1);
            notestoUpdate.splice(indexDelete, 1);
            console.log(listNote);
            console.log(notestoUpdate);
            renderListNote();
            localStorage.setItem("notes", JSON.stringify(notestoUpdate));
        }
     
         delBtn.addEventListener("click", function() {
             deleteNote();
         });
     
         editBtn.addEventListener("click", function() {
             console.log("click");
     
             noteboxContainer.value = textareaContainer.value;
             deleteNote();
});     
     
     
         divContainer.appendChild(delBtn);
         divContainer.appendChild(editBtn);
         divContainer.appendChild(textareaContainer);
         
         listNote.unshift(divContainer);
         renderListNote();
         }
}     

function restoreNote() {
    const notestoRestore = localStorage.getItem("notes");
    console.log(notestoRestore)
    const divContainer = document.createElement("div");
    const textareaContainer = document.createElement("textarea");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    
    divContainer.className = "grid-item";
    textareaContainer.className = "textarea";
    delBtn.className = "del-btn";
    editBtn.className = "edit-btn";
    
    textareaContainer.value = note;
    textareaContainer.disabled = true;
    
    delBtn.innerHTML = "X";
    editBtn.innerHTML = "Edit";

    function deleteNote() {
        const indexDelete = listNote.findIndex(item => item == divContainer);
        console.log(indexDelete);
        listNote.splice(indexDelete, 1);
        console.log(listNote);
        renderListNote();
    }

    delBtn.addEventListener("click", function() {
        deleteNote();
    });

    editBtn.addEventListener("click", function() {
        console.log("click");

        noteboxContainer.value = note;
        deleteNote();
});


    divContainer.appendChild(delBtn);
    divContainer.appendChild(editBtn);
    divContainer.appendChild(textareaContainer);
    
    listNote.unshift(divContainer);
    renderListNote();

}


 function renderListNote() {
    mainContainer.innerHTML = "";

    for(const note of listNote) {
        mainContainer.appendChild(note);
    }
 };

restoreTest();