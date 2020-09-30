import {Component, OnInit} from '@angular/core';
import {VehicleProviderService} from "../services/vechicle-provider/vehicle-provider.service";
import {interval} from "rxjs";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    public vehicles = [];
    public currentTime: string;
    public stopName: string;

    constructor(
        private vehicleProviderService: VehicleProviderService,
    ) {
    }

    ngOnInit() {
        this.updateVehicles();
        interval(10000).subscribe(() => {
            this.updateVehicles();
        })
    }

    public updateVehicles() {
        this.vehicleProviderService.getTime().subscribe(value => {
            console.log(this.stopName);
            this.currentTime = value['datetime'].split('T', 2)[1].slice(0, 5);
            this.vehicleProviderService.getVehicles('').subscribe(value => {
                this.vehicles = value['journeys'];
            });
        })
    }

}
