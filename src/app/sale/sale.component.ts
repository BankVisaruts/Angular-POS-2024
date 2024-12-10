import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import config from '../../config';

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {
  constructor(private http: HttpClient) {}

  foods: any[] = [];
  apiPath: string = '';

  ngOnInit() {
    this.fetchData();
    this.apiPath = config.apiServer;
  }

  fetchData() {
    try {
      this.http.get(config.apiServer + '/api/food/list')
      .subscribe((res: any) => {
        this.foods = res.results;
      })
    } catch (e: any) {
      Swal.fire({
        title: 'error',
        text: e.message,
        icon: 'error'
      })
    }
  }
}
