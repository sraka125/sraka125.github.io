export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export function newElement(type, parent = document.body) {
    const container = typeof parent === 'string' ? document.querySelector(parent) : parent;
    const el = document.createElement(type);
    return (container || document.body).appendChild(el);
}
export function addStyle(cssText) {
    const style = document.createElement('style');
    style.textContent = cssText;
    return document.head.appendChild(style);
}
