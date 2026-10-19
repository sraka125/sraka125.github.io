import {newElement, delay} from "./tools.js";
import {aud} from "./sc.js";

let a:boolean = true;
let clicks:number = 0;

let clck = document.getElementById("clck") || document.createElement("p");
let dv = (document.getElementById("someof") || document.createElement("div")) as HTMLElement & { disabled: boolean };
clck.style.position = 'absolute';
clck.style.top = '320px';
clck.style.userSelect = 'none';
dv.disabled = true;
document.addEventListener('click', () => {
	console.log(a);
	a = !a;
	dv.disabled = false;
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
