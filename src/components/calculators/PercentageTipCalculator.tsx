import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Copy, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const PercentageTipCalculator = () => {
  const [billAmount, setBillAmount] = useState('100');
  const [tipPercentage, setTipPercentage] = useState('15');
  const [numberOfPeople, setNumberOfPeople] = useState('1');
  const { toast } = useToast();

  const billValue = parseFloat(billAmount) || 0;
  const tipPercent = parseFloat(tipPercentage) || 0;
  const peopleCount = parseInt(numberOfPeople) || 1;

  const tipAmount = (billValue * tipPercent) / 100;
  const totalAmount = billValue + tipAmount;
  const perPersonAmount = totalAmount / peopleCount;
  const tipPerPerson = tipAmount / peopleCount;

  const commonTipPercentages = [10, 15, 18, 20, 25];

  const copyResult = async () => {
    const result = `Bill: $${billValue.toFixed(2)}\nTip (${tipPercent}%): $${tipAmount.toFixed(2)}\nTotal: $${totalAmount.toFixed(2)}\nPer person: $${perPersonAmount.toFixed(2)}`;
    try {
      await navigator.clipboard.writeText(result);
      toast({
        title: "Copied!",
        description: "Tip calculation copied to clipboard",
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
    <div className="max-w-md mx-auto space-y-6">
      {/* Bill Amount */}
      <div className="space-y-2">
        <Label htmlFor="bill-amount">Bill Amount ($)</Label>
        <Input
          id="bill-amount"
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          placeholder="Enter bill amount"
          className="text-lg border-input-border focus:border-input-focus"
        />
      </div>

      {/* Tip Percentage */}
      <div className="space-y-3">
        <Label htmlFor="tip-percentage">Tip Percentage (%)</Label>
        <Input
          id="tip-percentage"
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
          placeholder="Enter tip percentage"
          className="border-input-border focus:border-input-focus"
        />
        
        {/* Quick Tip Buttons */}
        <div className="flex flex-wrap gap-2">
          {commonTipPercentages.map((percent) => (
            <Button
              key={percent}
              variant={tipPercentage === percent.toString() ? "default" : "outline"}
              size="sm"
              onClick={() => setTipPercentage(percent.toString())}
              className={
                tipPercentage === percent.toString()
                  ? "bg-accent-conversion text-white"
                  : "border-card-border hover:bg-muted"
              }
            >
              {percent}%
            </Button>
          ))}
        </div>
      </div>

      {/* Number of People */}
      <div className="space-y-2">
        <Label htmlFor="number-of-people" className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          Number of People
        </Label>
        <Input
          id="number-of-people"
          type="number"
          min="1"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
          className="border-input-border focus:border-input-focus"
        />
      </div>

      {/* Results */}
      <Card className="p-4 bg-accent-conversion/10 border-accent-conversion/20">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Tip Amount:</span>
            <span className="font-semibold text-lg">${tipAmount.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Amount:</span>
            <span className="font-bold text-xl text-foreground">${totalAmount.toFixed(2)}</span>
          </div>

          {peopleCount > 1 && (
            <>
              <hr className="border-accent-conversion/30" />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Per Person Total:</span>
                <span className="font-semibold text-lg">${perPersonAmount.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Tip Per Person:</span>
                <span className="font-medium">${tipPerPerson.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>
      </Card>

      {/* Percentage Calculator Section */}
      <Card className="p-4 border-card-border">
        <h4 className="font-semibold mb-3">Quick Percentage Calculator</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>10% of ${billValue.toFixed(2)}:</span>
            <span>${(billValue * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>15% of ${billValue.toFixed(2)}:</span>
            <span>${(billValue * 0.15).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>20% of ${billValue.toFixed(2)}:</span>
            <span>${(billValue * 0.2).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>25% of ${billValue.toFixed(2)}:</span>
            <span>${(billValue * 0.25).toFixed(2)}</span>
          </div>
        </div>
      </Card>

      {/* Copy Button */}
      <Button
        onClick={copyResult}
        className="w-full bg-accent-conversion text-white hover:bg-accent-conversion/90"
      >
        <Copy className="w-4 h-4 mr-2" />
        Copy Calculation
      </Button>

      {/* How it works */}
      <details className="text-sm text-muted-foreground">
        <summary className="cursor-pointer font-medium mb-2">How tip calculation works</summary>
        <div className="space-y-2 pl-4">
          <p>Tip Amount = Bill Amount × (Tip Percentage ÷ 100)</p>
          <p>Total = Bill Amount + Tip Amount</p>
          <p>Per Person = Total ÷ Number of People</p>
          <p className="mt-3 text-xs">
            <strong>Example:</strong> $100 bill, 18% tip, 4 people<br/>
            Tip: $100 × 0.18 = $18<br/>
            Total: $100 + $18 = $118<br/>
            Per person: $118 ÷ 4 = $29.50
          </p>
        </div>
      </details>
    </div>
  );
};