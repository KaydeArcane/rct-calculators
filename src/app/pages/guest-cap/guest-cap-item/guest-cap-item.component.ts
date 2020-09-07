import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { GuestCap } from '@models/guest-cap.model';
import { CommonUtils } from '@common/common.utils';

@Component({
  selector: 'app-guest-cap-item',
  templateUrl: './guest-cap-item.component.html',
  styleUrls: ['./guest-cap-item.component.scss']
})
export class GuestCapItemComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() item: GuestCap;
  @Input() isHGG: boolean;
  @Output() itemUpdate = new EventEmitter<GuestCap>();
  @Output() itemDelete = new EventEmitter();

  @ViewChild('itemOverlay') flashDiv;

  public guestCapForm;
  private guestCapFormSubscription;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize price form
    this.guestCapForm = this.fb.group({
      'nickname': [this.item.nickname],
      'passesHarderGen': [this.item.passesHarderGen],
      'quantity': [this.item.quantity]
    });

    this.guestCapFormSubscription = this.guestCapForm.valueChanges.pipe(debounceTime(100))
      .subscribe(value => {
        this.item.nickname = value.nickname;
        this.item.passesHarderGen = value.passesHarderGen;
        this.item.quantity = value.quantity;
        this.itemUpdate.emit(this.item);
      }
    );
  }
  
  ngAfterViewInit(): void {
    CommonUtils.flashItem(this.flashDiv.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.guestCapFormSubscription) {
      this.guestCapFormSubscription.unsubscribe();
    }
  }

  deleteItem = () => {
    this.itemDelete.emit();
  }
}
