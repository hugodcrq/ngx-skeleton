import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxSkeletonService {
  skeletonItems: HTMLElement[] = [];

  /**
   * Show skeleton items inside parent container element
   *
   * @param containerElId The parent container element id
   */
  show(containerElId?: string) {
    this.skeletonItems = this.getSkeletonItems(containerElId);
    this.skeletonItems.forEach((el: HTMLElement) => {
      const child = el.firstElementChild as HTMLElement;
      if (child) child.style.opacity = '0';
    });
  }

  /**
   * Hide showed skeleton items
   */
  hide() {
    this.skeletonItems.forEach((el: HTMLElement) => {
      const child = el.firstElementChild as HTMLElement;
      if (child) child.style.opacity = '100';
      el.classList.remove('skeleton');
    });
  }

  /**
   * Get all .skeleton elements
   *
   * @param parentElId The parent HTMLElement id
   */
  getSkeletonItems(parentElId?: string): HTMLElement[] {
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
    return Array.from(document.querySelectorAll('[skeleton]')) as HTMLElement[];
  }

  /**
   * Get all skeleton items from document
   *
   * @param parentEl HTMLElement The parent element
   * @private
   */
  private getFromParentSkeletonItems(parentEl: HTMLElement) {
    return Array.from(parentEl.querySelectorAll('[skeleton]')) as HTMLElement[];
  }
}
