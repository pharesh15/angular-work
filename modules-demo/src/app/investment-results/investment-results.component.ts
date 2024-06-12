import { Component, computed, input } from '@angular/core';
import { IInvestmentResults } from '../models/CalculatorModel';
import { InvestmentService } from '../Investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}

  // There are these three ways to get the signal result from the service

  // get results() {
  //   console.log(this.investmentService.investmentResults);
  //   return this.investmentService.investmentResults;
  // }

  results = computed(() => this.investmentService.investmentResults()); // mostly used

  // results = this.investmentService.investmentResults.asReadonly();
}
