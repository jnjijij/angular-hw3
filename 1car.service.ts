// car.service.ts
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CarService implements InMemoryDbService {
    private cars = [
        { id: 1, make: 'Toyota', year: 2022, price: 30000 },
        { id: 2, make: 'Honda', year: 2021, price: 25000 },
        // Додайте інші автомобілі за потребою
    ];

    createDb() {
        return { cars: [...this.cars] };
    }

    getAllCars(): Observable<any[]> {
        return new Observable((observer) => {
            observer.next([...this.cars]);
            observer.complete();
        });
    }

    addCar(car: any): Observable<any> {
        const newCar = { id: this.cars.length + 1, ...car };
        this.cars.push(newCar);
        return new Observable((observer) => {
            observer.next(newCar);
            observer.complete();
        });
    }
}
