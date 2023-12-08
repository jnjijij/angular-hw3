// car.service.ts
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root',
})
export class CarService implements InMemoryDbService {
    createDb() {
        const cars = [
            { id: 1, make: 'Toyota', year: 2022, price: 30000 },
            { id: 2, make: 'Honda', year: 2021, price: 25000 },
         
        ];
        return { cars };
    }
}
