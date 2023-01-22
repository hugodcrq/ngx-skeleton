import { HTMLElementStyleObj } from './ngx-skeleton-ref';

export const addCssToElement = (element: HTMLElement, style: { [key: string]: any }) => {
  for (let property in style) {
    element.style[property as any] = style[property];
  }
};

export const getCssFromElement = (element: HTMLElement): HTMLElementStyleObj => {
  let style: HTMLElementStyleObj = {};
  if (element.style) {
    for (const [property, value] of Object.entries(element.style)) {
      style[property] = value;
    }
  }
  return style;
};
