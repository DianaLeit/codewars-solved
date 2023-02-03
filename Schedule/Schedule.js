/**
 * @param {Event} ev event
 */
function saveInput(ev) {
  // .inputData is a key of object localStorage, here we create object "obj"
  console.log(localStorage);
  let obj = JSON.parse(localStorage.inputData); // parses data in lSt on key inputData into object
  obj[ev.target.id] = ev.target.value; // assign a value to each id of a object, ev.target - element <input>, .id - attribute
  localStorage.inputData = JSON.stringify(obj); // store
}

if (localStorage.inputData === undefined) {
  localStorage.inputData = JSON.stringify({});
}

function clearInput() {
  let DoingInputs = document.getElementsByClassName("doingInput");
  for (let index = 0; index < DoingInputs.length; index++) {
    let element = DoingInputs[index];
    element.value = "";
  }
  localStorage.inputData = JSON.stringify({}); //save in ls
}
function addInput() {
  let changedDoingsList = document.getElementById("doingslist");
  let doingInputs = document.getElementsByClassName("doingInput");

  const doingsList = []; // [yoga, draw, walk]
  let options = document.getElementsByTagName("option");
  for (let ind = 0; ind < options.length; ind++) {
    const element = options[ind];
    doingsList.push(element.value);
  }

  for (let index = 0; index < doingInputs.length; index++) {
    let element = doingInputs[index];
    // element.value is one of: yoga, draw, walk, "", custom...
    if (element.value && !doingsList.includes(element.value)) {
      const option = document.createElement("option");
      option.setAttribute("value", `${element.value}`);
      changedDoingsList.appendChild(option);
    }
  }
}

function init() {
  const body = document.body;
  const datalist = document.createElement("datalist");
  datalist.id = "doingslist";
  body.appendChild(datalist);
  const doingsList = ["yoga", "walk", "drawing"];
  doingsList.forEach((doing) => {
    const option = document.createElement("option");
    option.setAttribute("value", `${doing}`);
    datalist.appendChild(option);
  });

  const tbody = document.getElementById("tbody");
  const times = [
    "8.00",
    "9.00",
    "10.00",
    "11.00",
    "12.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
    "17.00",
    "18.00",
    "19.00",
  ];

  // inpValues is an object that maps element (<input/>) id to element value
  const inpValues = JSON.parse(localStorage.inputData);

  for (let index = 0; index < times.length; index++) {
    const time = times[index];
    let tr = document.createElement("tr");
    let cellWithTime = document.createElement("td");
    cellWithTime.innerHTML = time;
    tr.appendChild(cellWithTime);
    for (let itd = 0; itd < 7; itd++) {
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.id = `doings ${itd} ${index}`;
      input.setAttribute("list", "doingslist");
      input.setAttribute("class", "doingInput");
      const inpValue = inpValues[input.id];
      if (inpValue !== undefined) {
        input.setAttribute("value", `${inpValue}`);
      }
      input.onchange = saveInput;
      td.appendChild(input);

      // for (let doingIndex = 0; doingIndex < doingsList.length; doingIndex++) {
      //   const doing = doingsList[doingIndex];
      //   const option = document.createElement("option");
      //   option.setAttribute("value", `${doing}`);
      //   datalist.appendChild(option);
      // }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

init();

// function forEach(array, func) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     func(element);
//   }
// }
