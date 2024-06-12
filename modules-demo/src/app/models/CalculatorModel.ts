export interface ICalculator {
  initial_investment: number;
  annual_investment: number;
  expected_return: number;
  duration: number;
}

export interface IInvestmentResults {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
