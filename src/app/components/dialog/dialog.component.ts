import { Component, computed, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  exportAs: 'dialogComp',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  dialogRef = viewChild.required<ElementRef>('dialogRef');
  dialogEl = computed(() => {
    return this.dialogRef().nativeElement as HTMLDialogElement;
  })

  close() {
    this.dialogEl().close();
  }

  open() {
    this.dialogEl().showModal();
  }

}
