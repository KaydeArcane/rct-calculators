import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-footer',
  templateUrl: './delete-footer.component.html',
  styleUrls: ['./delete-footer.component.scss']
})
export class DeleteFooterComponent implements OnInit {
  @Output() delete = new EventEmitter();

  public confirm = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Toggles confirmation message for clearing park
  showConfirm = (state: boolean) => {
    this.confirm = state;
  }

  // Emit clear trigger and reset header
  emitDelete = () => {
    this.delete.emit();
    this.showConfirm(false);
  }

}
