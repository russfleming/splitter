import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-growing-table',
  templateUrl: './growing-table.component.html',
  styleUrls: ['./growing-table.component.scss']
})
export class GrowingTableComponent implements OnInit {
  customers: any[];

  constructor() { }

  ngOnInit(): void {
    this.customers = [
      {
        id: 1255,
        name: 'James McAdams',
        country: 'US',
        company: 'McAdams Consulting Ltd',
        representative: 'Ioni Bowcher'
      }
    ];

    let index = 1;

    const id = setInterval(() => {
      const temp: any[] = [];
      this.customers.forEach((item: any) => temp.push(item));
      temp.push({
        id: 1255 + index,
        name: 'Inserted row ' + index,
        country: 'US',
        company: 'McAdams Consulting Ltd',
        representative: 'Ioni Bowcher'
      });
      this.customers = [...temp];
      index++;
      if (index > 50) {
        clearInterval(id);
      }
    }, 1500);
  }

}
