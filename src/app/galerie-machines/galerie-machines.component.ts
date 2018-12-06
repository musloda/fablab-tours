import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-galerie-machines',
  templateUrl: './galerie-machines.component.html',
  styleUrls: ['./galerie-machines.component.css']
})
export class GalerieMachinesComponent implements OnInit {

  machines: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // récuperer les données concernant les machines de la base de données.
    this.http.get<any>(`http://localhost:3000/api/machines`).subscribe(res => {
      this.machines = res;
      // console.log(this.machines[0].photo);
    });
  }

}
