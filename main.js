let mySelectOptions = document.getElementById("cars");
let newOption = document.createElement("option");
newOption.value = "dacia";
newOption.innerHTML = "Dacia";
mySelectOptions.appendChild(newOption);

function go() {
    let myInput = document.getElementById("input");
    let mySelect = document.getElementById("cars");
    let myNewOption = document.createElement("option");
    myNewOption.value = myInput.value;
    myNewOption.innerHTML = myInput.value;
    mySelect.appendChild(myNewOption);
}