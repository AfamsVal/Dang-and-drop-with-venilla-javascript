const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

//Fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//LOOP THROUGH
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.classList.add("hold");
  setTimeout(() => (this.className = "invisible"), 0);
  console.log(1);
}

function dragEnd() {
  // console.log("dragEnd");
  this.className = "fill";
}

function dragOver(e) {
  //console.log("dragOver");
  e.preventDefault();
}

function dragEnter(e) {
  //console.log("dragEnter");
  e.preventDefault();
  this.classList.add("hovered");
}

function dragLeave() {
  //we need to remove the style in our hover
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
