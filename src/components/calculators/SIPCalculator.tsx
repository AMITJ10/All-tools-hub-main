import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, PiggyBank, Target, Calculator } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('10000');
  const [expectedReturn, setExpectedReturn] = useState('12');
  const [timePeriod, setTimePeriod] = useState('10');
  const [targetAmount, setTargetAmount] = useState('1000000');
  const [results, setResults] = useState({
    maturityAmount: 0,
    totalInvestment: 0,
    totalGains: 0,
    requiredSIP: 0
  });
  const { toast } = useToast();

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = parseFloat(timePeriod) * 12;

    if (P <= 0 || r < 0 || n <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    const maturityAmount = P * (((1 + r) ** n - 1) / r) * (1 + r);
    const totalInvestment = P * n;
    const totalGains = maturityAmount - totalInvestment;

    setResults({
      maturityAmount,
      totalInvestment,
      totalGains,
      requiredSIP: 0
    });
  };

  const calculateRequiredSIP = () => {
    const FV = parseFloat(targetAmount);
    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = parseFloat(timePeriod) * 12;

    if (FV <= 0 || r < 0 || n <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    const requiredSIP = FV * r / (((1 + r) ** n - 1) * (1 + r));

    setResults(prev => ({
      ...prev,
      requiredSIP
    }));
  };

  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  const formatNumber = (num: number) => {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
    return `₹${num.toLocaleString('en-IN')}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Tabs defaultValue="sip-calculator" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sip-calculator">SIP Calculator</TabsTrigger>
          <TabsTrigger value="target-calculator">Target Calculator</TabsTrigger>
        </TabsList>

        <TabsContent value="sip-calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PiggyBank className="w-5 h-5 text-primary" />
                  Investment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="monthly-investment">Monthly Investment (₹)</Label>
                  <Input
                    id="monthly-investment"
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                    placeholder="Enter monthly SIP amount"
                    className="text-lg border-input-border focus:border-input-focus"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expected-return">Expected Annual Return (%)</Label>
                  <Input
                    id="expected-return"
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(e.target.value)}
                    placeholder="Expected return percentage"
                    className="text-lg border-input-border focus:border-input-focus"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time-period">Investment Period (Years)</Label>
                  <Input
                    id="time-period"
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    placeholder="Investment duration"
                    className="text-lg border-input-border focus:border-input-focus"
                  />
                </div>

                <Button 
                  onClick={calculateSIP}
                  className="w-full gradient-primary text-primary-foreground font-semibold"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate SIP
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="bg-accent-health/10 border-accent-health/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Maturity Amount</div>
                    <div className="text-3xl font-bold text-accent-health">
                      {formatNumber(results.maturityAmount)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Total Investment</div>
                    <div className="text-2xl font-bold text-primary">
                      {formatNumber(results.totalInvestment)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent-currency/10 border-accent-currency/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Total Gains</div>
                    <div className="text-2xl font-bold text-accent-currency">
                      {formatNumber(results.totalGains)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="target-calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent-currency" />
                  Target Goal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="target-amount">Target Amount (₹)</Label>
                  <Input
                    id="target-amount"
                    type="number"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    placeholder="Enter target amount"
                    className="text-lg border-input-border focus:border-input-focus"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="target-return">Expected Annual Return (%)</Label>
                  <Input
                    id="target-return"
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(e.target.value)}
                    placeholder="Expected return percentage"
                    className="text-lg border-input-border focus:border-input-focus"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="target-period">Investment Period (Years)</Label>
                  <Input
                    id="target-period"
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    placeholder="Investment duration"
                    className="text-lg border-input-border focus:border-input-focus"
                  />
                </div>

                <Button 
                  onClick={calculateRequiredSIP}
                  className="w-full bg-accent-currency hover:bg-accent-currency/90 text-white font-semibold"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Calculate Required SIP
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-accent-currency/10 border-accent-currency/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Required Monthly SIP</div>
                  <div className="text-4xl font-bold text-accent-currency mb-4">
                    {formatNumber(results.requiredSIP)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    To achieve {formatNumber(parseFloat(targetAmount))} in {timePeriod} years
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* SIP Benefits */}
      <Card className="glass border-2">
        <CardHeader>
          <CardTitle>Why SIP Investment?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Rupee Cost Averaging</h3>
              <p className="text-sm text-muted-foreground">
                Reduces impact of market volatility through systematic investing
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent-health/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <PiggyBank className="w-6 h-6 text-accent-health" />
              </div>
              <h3 className="font-semibold mb-2">Disciplined Investing</h3>
              <p className="text-sm text-muted-foreground">
                Builds investing habit with regular monthly contributions
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent-currency/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-accent-currency" />
              </div>
              <h3 className="font-semibold mb-2">Goal Achievement</h3>
              <p className="text-sm text-muted-foreground">
                Helps achieve long-term financial goals systematically
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};