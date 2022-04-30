let count = 0;
function clickMe(e: HTMLElement) {
  if (count % 2 === 0) {
    e.textContent = "o";
  } else {
    e.textContent = "x";
  }
  count += 1;
  console.log(count);
  console.log(e.textContent);
}

function reset() {
  const max = 9;
  for (let index=0; index<max; index++) {
    const cell = document.getElementById(index.toString());
    if (cell) {
      cell.textContent = "";
      count = 0;
    }
  }
}