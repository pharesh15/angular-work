import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { ICalculator } from '../models/CalculatorModel';
import { InvestmentService } from '../Investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  investmentData = output<ICalculator>();

  initial_investment = signal('10000');
  annual_investment = signal('2000');
  expected_return = signal('5');
  duration = signal('10');

  constructor(private investmetService: InvestmentService) {}

  onSubmit() {
    this.investmetService.handleCalculateInvestmentResults({
      initial_investment: +this.initial_investment(), // convert string to number
      annual_investment: +this.annual_investment(), // (add + sign before the variable to typecast from string to number)
      expected_return: +this.expected_return(),
      duration: +this.duration(),
    });

    this.initial_investment.set('0');
    this.annual_investment.set('0');
    this.expected_return.set('5');
    this.duration.set('10');
  }
}
