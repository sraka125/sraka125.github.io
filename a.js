let a = true;
let clicks = 0;
let clck = document.getElementById("clck") || document.createElement("p");
let dv = (document.getElementById("someof") || document.createElement("div"));
clck.style.position = 'absolute';
clck.style.top = '320px';
clck.style.userSelect = 'none';
dv.remove();
document.addEventListener('click', () => {
    console.log(a);
    a = !a;
    document.body.appendChild(dv);
    clicks = clicks + 1;
    console.log(clicks);
    clck.textContent = clicks.toString();
});
document.addEventListener('contextmenu', (e) => {
    console.log(a);
    a = !a;
    clicks = clicks + 1;
    console.log(clicks);
    clck.textContent = clicks.toString();
    e.preventDefault();
});
export {};
