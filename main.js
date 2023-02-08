document.getElementById("noteA").value = localStorage.getItem("noteAloc")
document.getElementById("noteB").value = localStorage.getItem("noteBloc")
document.getElementById("noteC").value = localStorage.getItem("noteCloc")
document.getElementById("noteD").value = localStorage.getItem("noteDloc")
document.getElementById("noteE").value = localStorage.getItem("noteEloc")
document.getElementById("noteF").value = localStorage.getItem("noteFloc")
 
 function save() {
            let input = document.getElementById("notebox").value;
            let noteA = document.getElementById("noteA").value;
            let noteB = document.getElementById("noteB").value;
            let noteC = document.getElementById("noteC").value;
            let noteD = document.getElementById("noteD").value;
            let noteE = document.getElementById("noteE").value;
            let noteF = document.getElementById("noteF").value;

               if (noteA == "") {
                document.getElementById("noteA").value = input;
                localStorage.setItem("noteAloc", input);
               } else if (noteB == "") {
                document.getElementById("noteB").value = input;
                localStorage.setItem("noteBloc", input);
               } else if (noteC == "") {
                document.getElementById("noteC").value = input;
                localStorage.setItem("noteCloc", input);
               } else if (noteD == "") {
                document.getElementById("noteD").value = input;
                localStorage.setItem("noteDloc", input);
               } else if (noteE == "") {
                document.getElementById("noteE").value = input;
                localStorage.setItem("noteEloc", input);
               } else if (noteF == "") {
                document.getElementById("noteF").value = input;
                localStorage.setItem("noteFloc", input);
               } else {
                alert("There's no space left to save!");
               }
                
           }

           function clearAll() {
            let noteA = document.getElementById("noteA").value = "";
            let noteB = document.getElementById("noteB").value = "";
            let noteC = document.getElementById("noteC").value = "";
            let noteD = document.getElementById("noteD").value = "";
            let noteE = document.getElementById("noteE").value = "";
            let noteF = document.getElementById("noteF").value = "";
            localStorage.setItem("noteAloc", "");
            localStorage.setItem("noteBloc", "");
            localStorage.setItem("noteCloc", "");
            localStorage.setItem("noteDloc", "");
            localStorage.setItem("noteEloc", "");
            localStorage.setItem("noteFloc", "");
           }
           function autoSave() {
            let noteA = document.getElementById("noteA").value;
            let noteB = document.getElementById("noteB").value;
            let noteC = document.getElementById("noteC").value;
            let noteD = document.getElementById("noteD").value;
            let noteE = document.getElementById("noteE").value;
            let noteF = document.getElementById("noteF").value;

            localStorage.setItem("noteAloc", noteA);
            localStorage.setItem("noteBloc", noteB);
            localStorage.setItem("noteCloc", noteC);
            localStorage.setItem("noteDloc", noteD);
            localStorage.setItem("noteEloc", noteE);
            localStorage.setItem("noteFloc", noteF);
           }