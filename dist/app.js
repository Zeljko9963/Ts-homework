"use strict";
function validate(validateInput) {
    let isValid = true;
    if (validateInput.required) {
        isValid = isValid && validateInput.value.toString().trim().length !== 0;
    }
    if (validateInput.minLength != null && validateInput.value === "string") {
        isValid = isValid && validateInput.value.length > validateInput.minLength;
    }
    if (validateInput.maxLength != null && validateInput.value === "string") {
        isValid = isValid && validateInput.value.length < validateInput.maxLength;
    }
    if (validateInput.min != null && typeof validateInput.value === "number") {
        isValid = isValid && validateInput.value > validateInput.min;
    }
    if (validateInput.max != null && typeof validateInput.value === "number") {
        isValid = isValid && validateInput.value < validateInput.max;
    }
    return isValid;
}
class ProjectInput {
    //pozvali te elemente
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        //prosledili content tj formu koja se nalazila u templetu
        const importedNode = document.importNode(this.templateElement.content, true);
        //definisali formm el u html-u
        this.element = importedNode.firstElementChild;
        //pozvali css pravilo
        this.element.id = "user-input";
        //pozvali ostale input elemente
        this.titleInputelement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        //pozvali objekte
        this.configure();
        this.attach();
    }
    //validacija 
    getterUserInputs() {
        const enteredTitle = this.titleInputelement.value;
        const destricptionTitle = this.descriptionInputElement.value;
        const peopleTitle = this.peopleInputElement.value;
        const titleValidation = {
            value: enteredTitle,
            required: true,
        };
        const destricptionValidation = {
            value: destricptionTitle,
            required: true,
            minLength: 5,
        };
        const peopleValidation = {
            value: +peopleTitle,
            required: true,
            min: 1,
            max: 5
        };
        if ( /*enteredTitle.trim().length===0 ||  destricptionTitle.trim().length===0 || peopleTitle.trim().length===0 */!validate(titleValidation) ||
            !validate(destricptionValidation) ||
            !validate(peopleValidation)) {
            alert("Invalid validation , please try agin!");
        }
        else {
            return [enteredTitle, destricptionTitle, +peopleTitle];
        }
    }
    //brisanj input polja nakon unosa
    clearInputsElements() {
        this.titleInputelement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    //dodali evente
    sumbitHendler(event) {
        event.preventDefault();
        const UserInput = this.getterUserInputs();
        if (Array.isArray(UserInput)) {
            const [title, description, people] = UserInput;
            console.log(title, description, people);
            this.clearInputsElements();
        }
    }
    //dodali event listener na button
    configure() {
        this.element.addEventListener("submit", this.sumbitHendler.bind(this));
    }
    // da ispisujemo elemente iz forme
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();
