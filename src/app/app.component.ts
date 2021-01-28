import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'splitter';
  customers: any[];

  constructor() { }

  ngOnInit(): void {
    this.customers = [
      {
        id: 1255,
        name: "James McAdams",
        country: {
          name: "United States",
          code: "us"
        },
        company: "McAdams Consulting Ltd",
        date: "2014-02-13",
        status: "qualified",
        activity: 23,
        representative: {
          name: "Ioni Bowcher",
          image: "ionibowcher.png"
        }
      },
      {
        id: 5135,
        name: "Geraldine Bisset",
        country: {
          name: "France",
          code: "fr"
        },
        company: "Bisset Group",
        status: "proposal",
        date: "2019-05-05",
        activity: 0,
        representative: {
          name: "Amy Elsner",
          image: "amyelsner.png"
        }
      }
    ];
  }
}
