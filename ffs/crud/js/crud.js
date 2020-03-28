/**
 * Created by leandrobarcellos on 26/03/20.
 */

const gbNames = [];
var gbInputName = null;
var gbInputId = null;
const gbNameList = document.querySelector("#nameList");

window.addEventListener("load", start);

function start() {
    preventFormSubmit();
    activateInput();

}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    let form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
}


function activateInput() {
    gbInputName = document.querySelector("#name");
    gbInputName.addEventListener("keyup", handleTyping);
    gbInputId = document.querySelector("#id");
    gbInputName.focus();
    renderList();

    function handleTyping(event) {
        function insertName(name) {
            if (gbInputId.value) {
                gbNames[gbInputId.value] = name;
                gbInputId.value = null;
            } else {
                gbNames.push(name);

            }
            gbInputName.value = "";
            renderList();
        }

        if (event.key === 'Enter') {
            insertName(event.target.value);
        }
    }

    function renderList() {
        while (gbNameList.firstChild) {
            gbNameList.removeChild(gbNameList.firstChild);
        }

        if (gbNames.length === 0) {
            gbNameList.appendChild(document.createTextNode("Nenhum nome cadastrado."));
        }

        for (let pos in gbNames) {
            let li = document.createElement("li");
            li.appendChild(createEditIcon(pos));
            li.appendChild(createDeleteIcon(pos));
            li.appendChild(document.createTextNode(gbNames[pos]));
            gbNameList.appendChild(li);
        }
    }

    function createDeleteIcon(pos) {
        function handleDelete(event) {
            if (confirm("Deseja realmente excluir?")) {
                gbNames.splice(pos, 1);
                renderList();
            }
        }

        let i = document.createElement("i");
        i.classList.add("fa", "fa-trash", "fa-fw", "mr-2");
        i.addEventListener("click", handleDelete);
        return i;
    }

    function createEditIcon(pos) {
        function handleEdit(event) {
            gbInputName.value = gbNames[pos];
            gbInputName.focus();
            gbInputId.value = pos;
        }

        let i = document.createElement("i");
        i.classList.add("fa", "fa-edit", "fa-fw", "mr-2");
        i.addEventListener("click", handleEdit);
        return i;
    }

}
