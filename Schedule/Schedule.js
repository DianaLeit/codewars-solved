const tbody = document.getElementById("tbody");
times = ["8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00"];
for (let index = 0; index < times.length; index++) {
  const time = times[index];
  let tr = document.createElement("tr");
  let cellWithTime = document.createElement("td");
  cellWithTime.innerHTML = time;
  tr.appendChild(cellWithTime);
  for (let itd = 0; itd < 7; itd++) {
    let td = document.createElement("td");
    let doings = 
    td.innerHTML = "ghkfh";
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
