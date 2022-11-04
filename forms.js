// Title

const title = document.createElement("h1");
title.id = "title";
title.innerText = "Survey Form";

title.style.textAlign = "center";

// Description

const desc = document.createElement("p");
desc.id = "description";
desc.innerText =
  "Survey Form to know the Food Choice of people in various states across the country";
desc.style.textAlign = "center";

document.body.append(title, desc);

// Survey Form

const surForm = document.createElement("form");

surForm.id = "form";

surForm.setAttribute("action", "#");
surForm.method = "get";
surForm.className = "survey-form container-md";
surForm.style.backgroundColor = "aqua";

document.body.append(surForm);

//Form Div
const formDiv = document.createElement("div");

formDiv.className = "form-group m-4";

// First Name

const fnameDiv = document.createElement("div");

const fnameInpt = document.createElement("input");
fnameInpt.type = "text";
fnameInpt.name = "firstName";
fnameInpt.className = "form-label ms-4 m-1";
fnameInpt.id = "first-name";
fnameInpt.required = "true";
fnameInpt.placeholder = "First Name";

const fnamelbl = document.createElement("label");
fnamelbl.innerText = "First Name";
fnameDiv.append(fnamelbl, fnameInpt);

formDiv.append(fnameDiv);

// Last Name

const lnameDiv = document.createElement("div");
lnameDiv.id = "lnameDiv";

const lnameInpt = document.createElement("input");
lnameInpt.type = "text";
lnameInpt.id = "last-name";
lnameInpt.name = "lastName";
lnameInpt.className = "ms-4 m-2";
lnameInpt.required = "true";
lnameInpt.placeholder = "Last Name";

const lnamelbl = document.createElement("label");
lnamelbl.innerText = "Last Name";

lnameDiv.append(lnamelbl, lnameInpt);

formDiv.append(lnameDiv);

// Address

const addressDiv = document.createElement("div");

const addresslbl = document.createElement("label");
addresslbl.innerText = "Address";

addresslbl.className = "textAreaLabel";

const addressInpt = document.createElement("textarea");
addressInpt.type = "textarea";
addressInpt.id = "address";
addressInpt.name = "address";
addressInpt.className = "m-2 ms-5 p-2";

addressInpt.placeholder = "Enter your Full Address";

addressDiv.append(addresslbl, addressInpt);
formDiv.append(addressDiv);

// Pincode

const pincodeDiv = document.createElement("div");
pincodeDiv.id = "pincodeDiv";

const pincodeInpt = document.createElement("input");
pincodeInpt.type = "text";
pincodeInpt.id = "pincode";
pincodeInpt.name = "pincode";
pincodeInpt.required = "true";
pincodeInpt.placeholder = "000000";
pincodeInpt.style.marginLeft = "45px";

const pincodelbl = document.createElement("label");
pincodelbl.innerText = "Pincode";

pincodeDiv.append(pincodelbl, pincodeInpt);

formDiv.append(pincodeDiv);

//  Gender

const genderDiv = document.createElement("div");
genderDiv.id = "genderDiv";

const gender = document.createElement("label");
gender.innerText = "Gender:";

genderDiv.append(gender);

genderArray = ["Male", "Female"];

genderArray.forEach((gender) => {
  const genderLabel = document.createElement("label");
  genderLabel.innerText = gender;
  genderLabel.className = "form-check-label m-3 ms-5";

  const genderInput = document.createElement("input");
  genderInput.type = "radio";
  genderInput.className = "form-check-input ms-2";
  genderInput.value = gender;

  genderInput.name = "gender";
  genderLabel.appendChild(genderInput);
  genderDiv.append(genderLabel);
});

formDiv.append(genderDiv);

// Food

const foodDiv = document.createElement("div");
foodDiv.id = "foodDiv";
foodDiv.className = "mb-3";

const foodChoice = document.createElement("label");
foodChoice.innerText = "Food Choice:";

foodDiv.append(foodChoice);

var foodArray = ["Vegetarian", "Non-Vegetarian", "Vegan Diet", "Paleo Diet"];

foodArray.forEach((food) => {
  const foodLabel = document.createElement("label");
  foodLabel.style.marginLeft = "10px";
  foodLabel.innerText = food;
  foodLabel.name = "food";
  const foodInput = document.createElement("input");
  foodInput.type = "checkbox";
  foodInput.id = food;
  foodInput.className = "form-check-input mb-2 ms-2 p-2";

  foodInput.value = food;
  foodInput.name = "food";
  foodLabel.appendChild(foodInput);
  foodDiv.append(foodLabel);
});

formDiv.append(foodDiv);

// State

const stateDiv = document.createElement("div");
stateDiv.id = "addressDiv";

const stateInpt = document.createElement("input");
stateInpt.type = "text";
stateInpt.name = "state";

stateInpt.style.marginLeft = "68px";

const statelbl = document.createElement("label");
statelbl.innerText = "State";

stateDiv.append(statelbl, stateInpt);

formDiv.append(stateDiv);

// Country

const countryDiv = document.createElement("div");
countryDiv.id = "countryDiv";

const countryInpt = document.createElement("input");
countryInpt.type = "text";
countryInpt.name = "country";
countryInpt.className = "ms-5 m-2 ";

const countrylbl = document.createElement("label");
countrylbl.innerText = "Country";

countryDiv.append(countrylbl, countryInpt);

formDiv.append(countryDiv);

// Submit Button

const btnDiv = document.createElement("div");
btnDiv.id = "button";

const subBtn = document.createElement("button");
subBtn.innerText = "Submit";
subBtn.id = "submit";
subBtn.className = "btn btn-primary";

subBtn.setAttribute("type", "submit");
subBtn.setAttribute("value", "Submit");
subBtn.style.marginLeft = "70px";

// Reset Button

const resetBtn = document.createElement("button");
resetBtn.innerText = "Reset";
resetBtn.className = " btn btn-primary ";
resetBtn.style.marginLeft = "80px";

btnDiv.append(subBtn, resetBtn);

reset = () => {
  surForm.reset();
};

resetBtn.addEventListener("click", reset);

surForm.appendChild(btnDiv);

formDiv.append(btnDiv);

surForm.append(formDiv);

// Main Table Div
const tableDiv = document.createElement("div");
tableDiv.id = "tableDiv";
tableDiv.className = "container-md container-sm";

tableDiv.style.marginLeft = "200px";

document.body.append(tableDiv);

// Creating Table

const surveyTable = document.createElement("table");
surveyTable.className = "table container-md container-sm";

tableDiv.appendChild(surveyTable);

// Creating Table Head

const tableHead = document.createElement("thead");

// Creating Tr element of Table Head

const trHead = document.createElement("tr");
tableHead.appendChild(trHead);

// Creating Th elements inside Tr of Table Head

const thHeader = [
  "First Name",
  "Last Name",
  "Address",
  "Pincode",
  "Gender",
  "Food",
  "State",
  "Country",
];

thHeader.forEach((header) => {
  const thEle = document.createElement("th");
  thEle.innerText = header;
  tableHead.append(thEle);
});

// // Creating Table Body

const tableBody = document.createElement("tbody");
tableBody.className = "table-info";

// // // Creating Tr Element of Table Body

surForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = e.target.elements;
  var data = {};
  for (i = 0; i < inputs.length; i++) {
    data[inputs[i].name] = inputs[i].value;
  }

  var genderEle = document.getElementsByName("gender");

  for (var i in genderEle) {
    if (genderEle[i].checked) data["gender"] = genderEle[i].value;
  }

  var foods = [];

  var foodChoice = document.getElementsByName("food");

  for (var i in foodChoice) {
    if (foodChoice[i].checked === true) foods.push(foodChoice[i].value);

    data["food"] = foods;
  }

  if (data.firstName && data.lastName) {
    const trElement = document.createElement("tr", "");

    const tdElements = [
      "firstName",
      "lastName",
      "address",
      "pincode",
      "gender",
      "food",
      "state",
      "country",
    ];

    tdElements.forEach((tdElement) => {
      const tdEle = document.createElement("td");

      tdEle.innerText = data[tdElement];

      trElement.append(tdEle);
    });

    tableBody.appendChild(trElement);
  }
});
surveyTable.append(tableHead, tableBody);
