let ctx: CanvasRenderingContext2D | null;
let h: number, m: number, s: number;
function gobj(id: string) { 
  return <HTMLCanvasElement>document.getElementById(id); 
}
function init() {
  const obj = gobj("clock");
  if (obj) {
    ctx = obj.getContext("2d");
    setInterval(tick, 1000);
  }
}
function tick() {
  const now = new Date();
  h = now.getHours() % 12;
  m = now.getMinutes();
  s = now.getSeconds();
  gobj("time").textContent = now.toTimeString();
  paint();
}
function drawHand(rotation: number, length: number, width: number, color: string) {
  if (ctx) {
    ctx.save();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.translate(150, 150);
    ctx.rotate(rotation);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.restore();
  }
}
function paint() {
  if (ctx) {
    ctx.clearRect(0,0,300,300);
    ctx.save();
    ctx.translate(150,150);
    ctx.strokeStyle="black";
    let pitch = Math.PI * 2 / 60;
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.lineWidth = (i % 5) === 0 ? 3 : 1;
      ctx.moveTo(0, -120);
      ctx.lineTo(0, -140);
      ctx.stroke();
      ctx.rotate(pitch);
    }
    ctx.restore();
    let radH = (Math.PI * 2) / 12 * h + (Math.PI * 2) / 12 * (m / 60);
    let radM = (Math.PI * 2) / 60 * m;
    let radS = (Math.PI * 2) / 60 * s;
    drawHand(radH, 80, 6, "blue");
    drawHand(radM, 120, 4, "blue");
    drawHand(radS, 140, 2, "red");
  }
}