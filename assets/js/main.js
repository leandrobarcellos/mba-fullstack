/**
 * Created by leandrobarcellos on 28/03/20.
 */

function toggle(element) {
    var parentElement = element.parentElement;
    var dropdown = parentElement.querySelector(".dropdown-menu");
    var showClass = "show";
    var classList = dropdown.classList;
    dropdown.style.width = parentElement.offsetWidth + "px";
    if (classList.contains(showClass) && !classList.contains("keepFocus")) {
        classList.remove(showClass);
    } else {
        classList.add(showClass);
    }
}

function keepFocus(element) {
    element.classList.add("keepFocus");
}

function loseFocus(element) {
    element.classList.remove("keepFocus");
}

function addInputEvent(inputQuery, eventName, callback) {
    var input = document.querySelector(inputQuery);
    if(input === undefined) {
        throw Error("Input não encontrado para: " + inputQuery);
    }
    input.addEventListener(eventName, callback);
}