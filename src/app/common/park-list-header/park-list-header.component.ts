import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-park-list-header',
  templateUrl: './park-list-header.component.html',
  styleUrls: ['./park-list-header.component.scss']
})
export class ParkListHeaderComponent implements OnInit {
  @Input() disabled = false;
  @Output() clear = new EventEmitter();

  public confirm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Toggles confirmation message for clearing park
  showConfirm = (state: boolean) => {
    this.confirm = state;
  }

  // Emit clear trigger and reset header
  emitClear = () => {
    this.clear.emit();
    this.showConfirm(false);
  }
}
