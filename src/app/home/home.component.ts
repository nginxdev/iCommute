import {Component, OnInit} from '@angular/core';
import {VehicleProviderService} from "../services/vechicle-provider/vehicle-provider.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    public vehicles = [];

    constructor(
        private vehicleProviderService: VehicleProviderService,
    ) {
    }

    ngOnInit() {
        this.vehicleProviderService.getVehicles('').subscribe(value => {
            this.vehicles = value['journeys'];
            console.log(this.vehicles);
        });
    }
}
