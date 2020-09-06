import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonUtils } from '@common/common.utils';

@Component({
  selector: 'app-park-list-header',
  templateUrl: './park-list-header.component.html',
  styleUrls: ['./park-list-header.component.scss']
})
export class ParkListHeaderComponent implements OnInit {
  @Input() types: String = null;
  @Input() disabled: Boolean = false;
  @Output() clear = new EventEmitter();

  public confirm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  capitalize = () => {
    return CommonUtils.capitalize(this.types);
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
