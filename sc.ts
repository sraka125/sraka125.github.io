import { delay, newElement, addStyle} from "./tools.js";

let isAud:boolean = false;
let clckd:boolean = false;
export const aud = new Audio();
function run() {
    const p = document.getElementById('p') || document.createElement('p');
    p.style.display = 'none';

    aud.style.display = "none";
    aud.src = '/mop.mp3'
    if (!isAud) {aud.play();}
    isAud = true;
    const div = newElement("div");
    div.style.display = "flex";
    div.style.position = "absolute";
    div.style.top = "0px";
    div.style.left = "0px";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    document.body.appendChild(div);

    const img = new Image();
    img.style.userSelect = "none";
    img.src = 'https://pngimg.com/uploads/chocolate/small/chocolate_PNG97203.png';
    img.alt = "чiколатка";
    div.appendChild(img);
    clckd = true;
}
document.addEventListener('keydown', () => {
    if (!clckd) run();
});
document.addEventListener('mousedown', () => {
    if (!clckd) run();
});