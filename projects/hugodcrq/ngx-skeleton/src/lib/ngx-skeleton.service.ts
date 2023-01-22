import { Injectable } from '@angular/core';
import { SkeletonItem } from './ngx-skeleton-ref';

@Injectable({
  providedIn: 'root',
})
export class NgxSkeletonService {
  skeletonItems: SkeletonItem[] = [];

  /**
   * Show skeleton items inside parent container element
   *
   * @param containerElId The parent container element id
   */
  show(containerElId?: string) {
    this.skeletonItems = this.getSkeletonItems(containerElId);
    this.skeletonItems.forEach((skeleton: SkeletonItem) => {
      skeleton.childrenList.forEach((skeletonChild, index) => {
        skeletonChild.element.style.opacity = '0';
      });
    });
  }

  /**
   * Hide showed skeleton items
   */
  hide() {
    this.skeletonItems.forEach((item: SkeletonItem) => {
      const childrenList = Array.from(item.childrenList);
      if (childrenList) childrenList.forEach((child) => (child.element.style.opacity = '100'));
      item.element.classList.remove('hd-skeleton');
    });
  }

  /**
   * Get all .skeleton elements
   *
   * @param parentElId The parent HTMLElement id
   */
  getSkeletonItems(parentElId?: string): SkeletonItem[] {
    if (parentElId) {
      const parentEl = document.getElementById(parentElId);
      if (parentEl) return this.getFromParentSkeletonItems(parentEl);
    }
    return this.getDocumentSkeletonItems();
  }

  /**
   * Get skeleton items from parent HTMLElement
   *
   * @private
   */
  private getDocumentSkeletonItems() {
    return this.adaptSkeletonListItem(document.querySelectorAll('[hdSkeleton]'));
  }

  /**
   * Get all skeleton items from document
   *
   * @param parentEl HTMLElement The parent element
   * @private
   */
  private getFromParentSkeletonItems(parentEl: HTMLElement) {
    return this.adaptSkeletonListItem(parentEl.querySelectorAll('[hdSkeleton]'));
  }

  adaptSkeletonListItem(items: NodeListOf<HTMLElement>) {
    return (Array.from(items) as HTMLElement[]).map((el) => new SkeletonItem(el));
  }
}
