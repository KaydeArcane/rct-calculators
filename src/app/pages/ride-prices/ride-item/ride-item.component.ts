import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { AgeValue } from '@models/age-value.model';
import { RidePrice } from '@models/ride-price.model';
import { ageValues } from '@assets/ageValues';
import { CommonUtils } from '@common/common.utils';

@Component({
  selector: 'app-ride-item',
  templateUrl: './ride-item.component.html',
  styleUrls: ['./ride-item.component.scss']
})
export class RideItemComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() ride: RidePrice;
  @Output() rideUpdate = new EventEmitter<RidePrice>();
  @Output() rideDelete = new EventEmitter();

  public ridePriceForm;
  private ridePriceFormSubscription;

  public ageList: AgeValue[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Create List of Age Values
    const ages = [];
    ageValues.forEach(age => {
      ages.push(new AgeValue(age));
    });
    // Store List
    Object.assign(this.ageList, ages);

    // Initialize price form
    this.ridePriceForm = this.fb.group({
      'nickname': [this.ride.nickname],
      'isDuplicate': [this.ride.isDuplicate],
      'e': [this.ride.e],
      'i': [this.ride.i],
      'n': [this.ride.n],
      'age': [null]
    });

    // Initialize age field
    this.ageList.every(age => {
      if (age.getId() === this.ride.getAgeValue().getId()) {
        this.ridePriceForm.get('age').setValue(age);
        return false;
      } 
      return true;
    });
    
    this.ridePriceFormSubscription = this.ridePriceForm.valueChanges.pipe(debounceTime(300))
      .subscribe(value => {
        this.ride.nickname = value.nickname;
        this.ride.isDuplicate = value.isDuplicate;
        this.ride.e = value.e;
        this.ride.i = value.i;
        this.ride.n = value.n;
        this.ride.setAgeValue(value.age);
        this.rideUpdate.emit(this.ride);
      }
    );
  }
  
  ngAfterViewInit(): void {
    CommonUtils.flashItem(document.getElementById('ride-item' + this.ride.getUniqueId()));
  }

  ngOnDestroy(): void {
    if (this.ridePriceFormSubscription) {
      this.ridePriceFormSubscription.unsubscribe();
    }
  }

  duplicatesListText = () => {
    let text = '';
    this.ride.duplicatesList.forEach(name => {
      text = text + name + ', ';
    })
    text = text.slice(0, -2);
    return 'Duplicate of: ' + text;
  }

  deleteRide = () => {
    this.rideDelete.emit();
  }
}
