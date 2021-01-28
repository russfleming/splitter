import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'splitter';
  customers: any[];
  dialogVisible: boolean;

  constructor() { }

  ngOnInit(): void {
    this.customers = [
      {
        id: 1255,
        name: "James McAdams",
        country: "US",
        company: "McAdams Consulting Ltd",
        representative: "Ioni Bowcher"
      }
    ];

    let index = 1;

    const id = setInterval(() => {
      const temp: any[] = [];
      this.customers.forEach((item: any) => temp.push(item));
      temp.push({
        id: 1255 + index,
        name: "Inserted row " + index,
        country: "US",
        company: "McAdams Consulting Ltd",
        representative: "Ioni Bowcher"
      });
      this.customers = [...temp];
      index++;
      if (index > 50) {
        clearInterval(id);
      }
    }, 1000);
  }

  showDialog() {
    this.dialogVisible = true;
  }
}
