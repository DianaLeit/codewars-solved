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
function saveInput(ev) {
  console.log(ev.target.id);
  let obj = JSON.parse(localStorage.inputData); // <-
  obj[ev.target.id] = ev.target.value;
  localStorage.inputData = JSON.stringify(obj);
}

if (localStorage.inputData === undefined) {
  localStorage.inputData = JSON.stringify({});
}

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
    inpValue = inpValues[input.id];
    if (inpValue !== undefined) {
      input.setAttribute("value", `${inpValue}`);
    }

    input.onchange = saveInput;
    td.appendChild(input);
    const datalist = document.createElement("datalist");
    datalist.id = "doingslist";
    td.appendChild(datalist);
    const doingsList = ["yoga", "walk", "drawing"];
    doingsList.forEach((doing) => {
      const option = document.createElement("option");
      option.setAttribute("value", `${doing}`);
      datalist.appendChild(option);
    });
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

// function forEach(array, func) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     func(element);
//   }
// }
