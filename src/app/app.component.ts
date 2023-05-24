import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'time-tracking-dashboard';

  dailySelected: boolean = false;
  weeklySelected: boolean = false;
  mounthlySelected: boolean = false;

  selectedTimeframe: 'daily' | 'weekly' | 'monthly' = 'daily';

  selectTimeframe(timeframe: 'daily' | 'weekly' | 'monthly'): void {
    this.selectedTimeframe = timeframe;
  }

  getAdditionalText(): 'Yesterday' | 'Last Week' | 'Last Month' {
    if (this.selectedTimeframe === 'weekly') {
      return 'Last Week';
    } else if (this.selectedTimeframe === 'monthly') {
      return 'Last Month';
    }
    return 'Yesterday';
  }

  handleClick(buttonId: number) {
    this.dailySelected = false;
    this.weeklySelected = false;
    this.mounthlySelected = false;

    if (buttonId === 1) {
      this.dailySelected = true;
    }  if (buttonId === 2) {
      this.weeklySelected = true;
    }  if (buttonId === 3) {
      this.mounthlySelected = true;
    }

  }

  // handleClick(event: Event) {
  //   const button: HTMLButtonElement = event.target as HTMLButtonElement;
  //   button.classList.add('clicked') ;
  // }
}
