import { getCssFromElement } from './utils';

export class SkeletonItem {
  element: HTMLElement;
  oldStyles: HTMLElementStyleObj = {};
  childrenList: SkeletonChildItem[] = [];

  constructor(el: HTMLElement) {
    this.element = el;
    this.oldStyles = getCssFromElement(el);
    this.childrenList = this.getChildrenList();
  }

  getChildrenList() {
    const childElementList = Array.from(this.element.childNodes) as HTMLElement[];
    return childElementList.map((el) => new SkeletonChildItem(el));
  }
}

export class SkeletonChildItem extends SkeletonItem {
  constructor(el: HTMLElement) {
    super(el);
  }
}

export type HTMLElementStyleObj = { [key: string]: any };
