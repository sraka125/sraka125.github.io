export const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export function newElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    parent: string | HTMLElement = document.body
): HTMLElementTagNameMap[K] {
    const container = typeof parent === 'string' ? document.querySelector(parent) : parent;
    const el = document.createElement(type);
    return ((container || document.body) as HTMLElement).appendChild(el);
}

export function addStyle(cssText: string): HTMLStyleElement {
    const style = document.createElement('style');
    style.textContent = cssText;
    return document.head.appendChild(style);
}