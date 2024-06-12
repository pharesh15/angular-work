import { Injectable, signal } from '@angular/core';
import { ICalculator, IInvestmentResults } from './models/CalculatorModel';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  investmentResults = signal<IInvestmentResults[] | undefined>(undefined);

  handleCalculateInvestmentResults(data: ICalculator) {
    const { initial_investment, annual_investment, expected_return, duration } =
      data;

    const annualData = [];
    let investmentValue = initial_investment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expected_return / 100);
      investmentValue += interestEarnedInYear + annual_investment;
      const totalInterest = investmentValue * year - initial_investment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annual_investment,
        totalInterest: totalInterest,
        totalAmountInvested: initial_investment + annual_investment * year,
      });
    }

    this.investmentResults.set(annualData);
  }
}
