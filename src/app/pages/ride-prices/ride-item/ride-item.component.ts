import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  public showDupes: boolean = false;
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
      'e': [this.ride.e, [Validators.required, Validators.min(0)]],
      'i': [this.ride.i, [Validators.required, Validators.min(0)]],
      'n': [this.ride.n, [Validators.required, Validators.min(0)]],
      'age': [null, [Validators.required]]
    });

    // Initialize age field
    this.ageList.every(age => {
      if (age.getId() === this.ride.getAgeValue().getId()) {
        this.ridePriceForm.get('age').setValue(age);
        return false;
      }
      return true;
    });

    // Update values of the ride any time form input changes
    this.ridePriceFormSubscription = this.ridePriceForm.valueChanges.pipe(debounceTime(300))
      .subscribe(value => {
        this.ride.nickname = value.nickname;
        this.ride.isDuplicate = value.isDuplicate;
        if (this.ridePriceForm.get('e').valid) {
          // If new excitement is a valid value, set ride excitement
          this.ride.e = value.e;
        } else {
          // Otherwise, set ride excitement to null
          this.ride.e = null;
        }
        if (this.ridePriceForm.get('i').valid) {
          // If new intensity is a valid value, set ride intensity
          this.ride.i = value.i;
        } else {
          // Otherwise, set ride intensity to null
          this.ride.i = null;
        }
        if (this.ridePriceForm.get('n').valid) {
          // If new nausea is a valid value, set ride nausea
          this.ride.n = value.n;
        } else {
          // Otherwise, set ride nausea to null
          this.ride.n = null;
        }
        if (this.ridePriceForm.get('age').valid) {
          this.ride.setAgeValue(value.age);
        }
        this.rideUpdate.emit(this.ride);
      });
  }

  // Runs flash animation on item whenever card is initialized by outside changes
  ngAfterViewInit(): void {
    CommonUtils.flashItem(document.getElementById('ride-item' + this.ride.getUniqueId()));
  }

  // Unsubscribe from form value changes when leaving page
  ngOnDestroy(): void {
    if (this.ridePriceFormSubscription) {
      this.ridePriceFormSubscription.unsubscribe();
    }
  }

  // Checks to see if ride has unique case duplicates to display info tooltip
  checkForUniqueCases = () => {
    let unique = false;
    this.ride.duplicatesList.every(dupe => {
      if (dupe.getUniqueCase()) {
        unique = true;
      }
      return !unique;
    })

    return unique;
  }

  // Toggle to open/close duplicates list
  toggleDupes = () => {
    this.showDupes = !this.showDupes;
    document.getElementById('ride-item-dupes-toggle' + this.ride.getUniqueId()).setAttribute('aria-pressed', this.showDupes.toString());
  }

  // Returns true if a form field is invalid and touched
  fieldError = (name) => {
    return this.ridePriceForm.get(name).invalid && this.ridePriceForm.get(name).touched;
  }
  
  // Emits delete action to parent
  deleteRide = () => {
    this.rideDelete.emit();
  }
}
