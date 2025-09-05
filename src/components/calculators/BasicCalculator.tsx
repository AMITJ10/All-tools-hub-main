import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Copy, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const BasicCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const { toast } = useToast();

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
      
      // Add to history
      const historyEntry = `${currentValue} ${operation} ${inputValue} = ${newValue}`;
      setHistory(prev => [historyEntry, ...prev.slice(0, 9)]); // Keep last 10 entries
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return secondValue !== 0 ? firstValue / secondValue : 0;
      default:
        return secondValue;
    }
  };

  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(display);
      toast({
        title: "Copied!",
        description: "Result copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const buttonClass = "btn-calculator focus-ring";
  const operatorClass = "btn-calculator btn-operator focus-ring";
  const equalsClass = "btn-calculator btn-equals focus-ring";

  return (
    <div className="max-w-md mx-auto space-y-6">
      {/* Display */}
      <Card className="p-4 bg-muted border-card-border">
        <div className="text-right">
          <div className="text-3xl font-mono font-bold text-foreground break-all">
            {display}
          </div>
          {operation && previousValue !== null && (
            <div className="text-sm text-muted-foreground mt-1">
              {previousValue} {operation}
            </div>
          )}
        </div>
      </Card>

      {/* Calculator Buttons */}
      <div className="grid grid-cols-4 gap-3">
        <Button className={buttonClass} onClick={clear}>C</Button>
        <Button className={buttonClass} onClick={() => setDisplay(display.slice(0, -1) || '0')}>⌫</Button>
        <Button className={operatorClass} onClick={() => performOperation('÷')}>÷</Button>
        <Button className={operatorClass} onClick={() => performOperation('×')}>×</Button>

        <Button className={buttonClass} onClick={() => inputNumber('7')}>7</Button>
        <Button className={buttonClass} onClick={() => inputNumber('8')}>8</Button>
        <Button className={buttonClass} onClick={() => inputNumber('9')}>9</Button>
        <Button className={operatorClass} onClick={() => performOperation('-')}>-</Button>

        <Button className={buttonClass} onClick={() => inputNumber('4')}>4</Button>
        <Button className={buttonClass} onClick={() => inputNumber('5')}>5</Button>
        <Button className={buttonClass} onClick={() => inputNumber('6')}>6</Button>
        <Button className={operatorClass} onClick={() => performOperation('+')}>+</Button>

        <Button className={buttonClass} onClick={() => inputNumber('1')}>1</Button>
        <Button className={buttonClass} onClick={() => inputNumber('2')}>2</Button>
        <Button className={buttonClass} onClick={() => inputNumber('3')}>3</Button>
        <Button className={`${equalsClass} row-span-2`} onClick={() => performOperation('=')}>=</Button>

        <Button className={`${buttonClass} col-span-2`} onClick={() => inputNumber('0')}>0</Button>
        <Button className={buttonClass} onClick={inputDot}>.</Button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={copyResult}
          className="flex-1 border-card-border hover:bg-muted"
        >
          <Copy className="w-4 h-4 mr-2" />
          Copy
        </Button>
        <Button
          variant="outline"
          onClick={() => setHistory([])}
          className="border-card-border hover:bg-muted"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>

      {/* History */}
      {history.length > 0 && (
        <Card className="p-4 border-card-border">
          <h4 className="font-semibold text-sm text-muted-foreground mb-2">History</h4>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {history.map((entry, index) => (
              <div key={index} className="text-sm font-mono text-muted-foreground">
                {entry}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};