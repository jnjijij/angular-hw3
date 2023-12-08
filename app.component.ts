// app.component.ts
import { Component } from '@angular/core';
import { CarService } from './car.service';

@Component({
    selector: 'app-root',
    template: `
    <h1>Car Information</h1>
    <div>
      <label for="make">Make: </label>
      <input [(ngModel)]="newCar.make" id="make" />
    </div>
    <div>
      <label for="year">Year: </label>
      <input [(ngModel)]="newCar.year" type="number" id="year" />
    </div>
    <div>
      <label for="price">Price: </label>
      <input [(ngModel)]="newCar.price" type="number" id="price" />
    </div>
    <div>
      <button (click)="addCar()">Add Car</button>
    </div>
    <hr />
    <div *ngFor="let car of cars">
      <p>{{ car.make }} - {{ car.year }} - ${{ carprice }}</p>
    </div>
  `,
    styles: [],
})
export class AppComponent {
    newCar = { make: '', year: 0, price: 0 };
    cars: any[] = [];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.carService.getAllCars().subscribe((cars) => (this.cars = cars));
    }

    addCar() {
        this.carService.addCar(this.newCar).subscribe((car) => {
            this.cars.push(car);
            this.newCar = { make: '', year: 0, price: 0 };
        });
    }
}

