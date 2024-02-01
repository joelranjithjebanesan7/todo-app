import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
    <div class="toast">
      {{ message }}
      
    </div>
  `,
  styles: [
    `
      .toast {
        background-color: #f0f0f0; /* Light background color */
        color: #333; /* Dark text color */
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        transition: opacity 0.3s ease-in-out;
      }

      .toast[aria-hidden='true'] {
        opacity: 0;
      }

      button {
        background-color: #fff;
        color: #333;
        border: none;
        cursor: pointer;
      }
    `,
  ],
})
export class ToastComponent {
  @Input() message: string = '';
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  close() {
    this.onClose.emit();
  }
}
