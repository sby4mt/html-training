function calc() {
  // HTMLInputElemntでキャストしないとvalueプロパティがエラーになる
  const weight = <HTMLInputElement>document.getElementById("weight");
  const height = <HTMLInputElement>document.getElementById("height");
  if (weight && height) {
    const w = Number(weight.value);
    const h = Number(height.value);
    const bmi = w/(h*h);
    const result = document.getElementById("result");
    if (result) {
      result.textContent = "あなたのBMIは" + bmi + "です";
    }
  }
}

function keydown(e: KeyboardEvent) {
  let s = "";console.log(e);
  if (!e) return;
  switch (e.key) {
    case "ArrowLeft": s = "←"; break;
    case "ArrowUp": s = "↑"; break;
    case "ArrowRight": s = "→"; break;
    case "ArrowDown": s = "↓"; break;
    case "Enter": s = "enter"; break;
    default: s = "それ以外"; console.log(e.keyCode); break;
  }
  const text = document.getElementById("info");
  if (text) text.textContent = s;
}
window.addEventListener("keydown", keydown);
