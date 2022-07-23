let addBtn = document.querySelector("#add");
let addInput = document.querySelector("#input");
let tasks = document.querySelector(".tasks");

// localStorage
let arr;
if (localStorage.getItem("txt") !== null) {
  arr = JSON.parse(localStorage.getItem("txt"));
} else {
  arr = [];
}

addBtn.onclick = function () {
  if (addInput.value.length > 0) {
    //local storage
    arr.push(addInput.value);
    localStorage.setItem("txt", JSON.stringify(arr));
    addInput.value = "";
    tasks.innerHTML = "";
    readData();
  }
};

function readData() {
  // created
  for (let i = 0; i < arr.length; i++) {
    let innerD = document.createElement("div");
    innerD.classList.add("inner");
    let span = document.createElement("span");
    span.setAttribute("id", "span");
    let deleteInput = document.createElement("input");
    deleteInput.setAttribute("type", "submit");
    deleteInput.setAttribute("id", "delete");
    deleteInput.setAttribute("value", "delete");
    // append
    tasks.appendChild(innerD);
    innerD.appendChild(span);
    innerD.appendChild(deleteInput);
    //read
    span.innerHTML = arr[i];
    //deleteData
    deleteInput.onclick = function () {
      arr.splice(i, 1);
      localStorage.txt = JSON.stringify(arr);
      tasks.innerHTML = "";
      readData();
    };
  }
}
readData();





