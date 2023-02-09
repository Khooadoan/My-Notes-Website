const mainContainer = document.getElementById("container");
const noteboxContainer = document.getElementById("notebox");

const listNote = [];

 function save() {
            const note = noteboxContainer.value;
            noteboxContainer.value = "";

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

            delBtn.innerHTML = "X"
            editBtn.innerHTML = "Edit"

            function deleteNote() {
                const indexDelete = listNote.findIndex(item => item == divContainer);

                listNote.splice(indexDelete, 1);

                renderListNote();
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

            listNote.unshift
 }

 function renderListNote() {
    mainContainer.innerHTML = "";

    for(const note of listNote) {
        mainContainer.appendChild(note);
    }
 }