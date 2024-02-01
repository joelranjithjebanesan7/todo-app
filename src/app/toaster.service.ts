import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  toasts: { message: string }[] = [];

  show(message: string) {
    const toast = { message };
    this.toasts.push(toast);

    // Automatically close the toast after the specified duration
    setTimeout(() => {
      this.remove(toast);
    }, 1000);
  }

  remove(toast: { message: string }) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}
