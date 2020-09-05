import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Ride } from '@models/ride.model';
import { ridesList } from '@assets/ridesList';

@Component({
  selector: 'app-ride-dropdown',
  templateUrl: './ride-dropdown.component.html',
  styleUrls: ['./ride-dropdown.component.scss']
})
export class RideDropdownComponent implements OnInit, OnDestroy {
  @Input() rideType = undefined;
  @Output() rideSelected = new EventEmitter<Ride>();

  public rides: Ride[] = [];
  public ridesDropdown = this.fb.group({
    ride: ['']
  });

  private dropdownSubscription;
  
  constructor(
    private fb: FormBuilder,
  ) { }
  
  ngOnInit(): void {
    // Create List of Rides/Stalls
    const tempRides = [];
    ridesList.forEach(ride => {
      if (!this.rideType || (this.rideType && ride['type'] === this.rideType)) {
        tempRides.push(new Ride(ride));
      }
    });
    // Store List
    Object.assign(this.rides, tempRides);
    // Sort by Name
    this.rides.sort((a, b) => (a.getName() > b.getName()) ? 1 : -1);

    this.dropdownSubscription = this.ridesDropdown.controls['ride'].valueChanges.subscribe(value => {
      // Emit Selected Ride when Dropdown Changes
      this.rideSelected.emit(value);
      this.ridesDropdown.reset('', {emitEvent: false});
    })
  }

  ngOnDestroy(): void {
    if (this.dropdownSubscription) {
      this.dropdownSubscription.unsubscribe();
    }
  }

}
