import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class VehicleProviderService {
    hafasID: string =
        'A%3D1@O%3DMagdeburg,%20Askanischer%20Platz@X%3D11650955@Y%3D52137903@U%3D80@L%3D000005254@B%3D1@p%3D1601025199@';
    time: string = '2020-09-30 18:30';
    constructor(private httpClient: HttpClient) {
    }

    getVehicles(stopId: string) {
        let params = new HttpParams();
        params = params.append('hafasID', this.hafasID);
        params = params.append('time', String(this.time));
        return this.httpClient.get(environment.vechileURL, {params: params});
    }

}
