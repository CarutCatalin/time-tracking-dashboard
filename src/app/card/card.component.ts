import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Activities } from '../activities-model/activities-model';
import { Subject, takeUntil, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() selectedTimeframe!: string;
  @Input() additionalText!: string;

  act!: any[];

  constructor( private dataService: DataService ) {}

  ngOnInit() {

    return this.dataService.getActData().subscribe(data => {
      this.act = data;
      console.log(data)
    })
  }

}
