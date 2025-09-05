import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Copy, Calculator } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const LoanEMICalculator = () => {
  const [principal, setPrincipal] = useState('500000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [tenure, setTenure] = useState('20');
  const { toast } = useToast();

  const principalAmount = parseFloat(principal) || 0;
  const monthlyRate = (parseFloat(interestRate) || 0) / 100 / 12;
  const tenureMonths = (parseFloat(tenure) || 0) * 12;

  // EMI calculation formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const calculateEMI = () => {
    if (principalAmount === 0 || monthlyRate === 0 || tenureMonths === 0) {
      return 0;
    }
    
    const emi = (principalAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / 
                (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    return emi;
  };

  const emi = calculateEMI();
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principalAmount;

  // Sample amortization schedule (first 12 months)
  const generateAmortization = () => {
    const schedule = [];
    let remainingPrincipal = principalAmount;
    
    for (let month = 1; month <= Math.min(12, tenureMonths); month++) {
      const interestPayment = remainingPrincipal * monthlyRate;
      const principalPayment = emi - interestPayment;
      remainingPrincipal -= principalPayment;
      
      schedule.push({
        month,
        emi: emi,
        principal: principalPayment,
        interest: interestPayment,
        balance: remainingPrincipal
      });
    }
    
    return schedule;
  };

  const amortizationSchedule = generateAmortization();

  const copyResult = async () => {
    const result = `Loan EMI Calculation:
Principal: $${principalAmount.toLocaleString()}
Interest Rate: ${interestRate}% per annum
Tenure: ${tenure} years
Monthly EMI: $${emi.toFixed(2)}
Total Payment: $${totalPayment.toFixed(2)}
Total Interest: $${totalInterest.toFixed(2)}`;
    
    try {
      await navigator.clipboard.writeText(result);
      toast({
        title: "Copied!",
        description: "EMI calculation copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Input Fields */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="principal">Principal Amount ($)</Label>
          <Input
            id="principal"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Loan amount"
            className="border-input-border focus:border-input-focus"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest-rate">Interest Rate (% per annum)</Label>
          <Input
            id="interest-rate"
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Annual interest rate"
            className="border-input-border focus:border-input-focus"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tenure">Tenure (Years)</Label>
          <Input
            id="tenure"
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="Loan tenure"
            className="border-input-border focus:border-input-focus"
          />
        </div>
      </div>

      {/* EMI Results */}
      <Card className="p-6 bg-accent-loan/10 border-accent-loan/20">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Monthly EMI</div>
            <div className="text-2xl font-bold text-foreground">
              ${emi.toFixed(2)}
            </div>
          </div>
          
          <div>
            <div className="text-sm text-muted-foreground mb-1">Total Interest</div>
            <div className="text-2xl font-bold text-accent-loan">
              ${totalInterest.toFixed(2)}
            </div>
          </div>
          
          <div>
            <div className="text-sm text-muted-foreground mb-1">Total Payment</div>
            <div className="text-2xl font-bold text-foreground">
              ${totalPayment.toFixed(2)}
            </div>
          </div>
        </div>
      </Card>

      {/* Loan Breakdown */}
      <Card className="p-4 border-card-border">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Calculator className="w-4 h-4" />
          Loan Breakdown
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Principal Amount:</span>
            <span className="font-medium">${principalAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Interest Component:</span>
            <span className="font-medium text-accent-loan">${totalInterest.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Interest Percentage:</span>
            <span className="font-medium">
              {((totalInterest / totalPayment) * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      </Card>

      {/* Amortization Schedule Preview */}
      {amortizationSchedule.length > 0 && (
        <Card className="p-4 border-card-border">
          <h4 className="font-semibold mb-3">Amortization Schedule (First Year)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left py-2">Month</th>
                  <th className="text-right py-2">EMI</th>
                  <th className="text-right py-2">Principal</th>
                  <th className="text-right py-2">Interest</th>
                  <th className="text-right py-2">Balance</th>
                </tr>
              </thead>
              <tbody>
                {amortizationSchedule.map((row) => (
                  <tr key={row.month} className="border-b border-card-border/50">
                    <td className="py-2">{row.month}</td>
                    <td className="text-right py-2">${row.emi.toFixed(2)}</td>
                    <td className="text-right py-2">${row.principal.toFixed(2)}</td>
                    <td className="text-right py-2">${row.interest.toFixed(2)}</td>
                    <td className="text-right py-2">${row.balance.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Action Button */}
      <Button
        onClick={copyResult}
        className="w-full bg-accent-loan text-white hover:bg-accent-loan/90"
      >
        <Copy className="w-4 h-4 mr-2" />
        Copy EMI Details
      </Button>

      {/* Formula Explanation */}
      <details className="text-sm text-muted-foreground">
        <summary className="cursor-pointer font-medium mb-2">EMI Formula & How it works</summary>
        <div className="space-y-2 pl-4">
          <p><strong>EMI Formula:</strong></p>
          <p>EMI = P × r × (1 + r)^n ÷ ((1 + r)^n - 1)</p>
          <p>Where:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>P = Principal loan amount</li>
            <li>r = Monthly interest rate (Annual rate ÷ 12 ÷ 100)</li>
            <li>n = Total number of months (Years × 12)</li>
          </ul>
          <p className="mt-3">
            <strong>Example:</strong> $500,000 loan at 8.5% for 20 years<br/>
            Monthly rate = 8.5 ÷ 12 ÷ 100 = 0.00708<br/>
            Months = 20 × 12 = 240<br/>
            EMI = $4,393.44
          </p>
        </div>
      </details>
    </div>
  );
};