import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, ArrowUpDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const conversionData = {
  length: {
    name: 'Length',
    units: {
      meter: { name: 'Meter', symbol: 'm', toBase: 1 },
      kilometer: { name: 'Kilometer', symbol: 'km', toBase: 1000 },
      centimeter: { name: 'Centimeter', symbol: 'cm', toBase: 0.01 },
      millimeter: { name: 'Millimeter', symbol: 'mm', toBase: 0.001 },
      inch: { name: 'Inch', symbol: 'in', toBase: 0.0254 },
      foot: { name: 'Foot', symbol: 'ft', toBase: 0.3048 },
      yard: { name: 'Yard', symbol: 'yd', toBase: 0.9144 },
      mile: { name: 'Mile', symbol: 'mi', toBase: 1609.34 }
    }
  },
  weight: {
    name: 'Weight',
    units: {
      kilogram: { name: 'Kilogram', symbol: 'kg', toBase: 1 },
      gram: { name: 'Gram', symbol: 'g', toBase: 0.001 },
      pound: { name: 'Pound', symbol: 'lb', toBase: 0.453592 },
      ounce: { name: 'Ounce', symbol: 'oz', toBase: 0.0283495 },
      ton: { name: 'Metric Ton', symbol: 't', toBase: 1000 },
      stone: { name: 'Stone', symbol: 'st', toBase: 6.35029 }
    }
  },
  temperature: {
    name: 'Temperature',
    units: {
      celsius: { name: 'Celsius', symbol: '°C', toBase: 1 },
      fahrenheit: { name: 'Fahrenheit', symbol: '°F', toBase: 1 },
      kelvin: { name: 'Kelvin', symbol: 'K', toBase: 1 }
    }
  },
  volume: {
    name: 'Volume',
    units: {
      liter: { name: 'Liter', symbol: 'L', toBase: 1 },
      milliliter: { name: 'Milliliter', symbol: 'mL', toBase: 0.001 },
      gallon: { name: 'Gallon (US)', symbol: 'gal', toBase: 3.78541 },
      quart: { name: 'Quart (US)', symbol: 'qt', toBase: 0.946353 },
      pint: { name: 'Pint (US)', symbol: 'pt', toBase: 0.473176 },
      cup: { name: 'Cup (US)', symbol: 'cup', toBase: 0.236588 },
      fluid_ounce: { name: 'Fluid Ounce (US)', symbol: 'fl oz', toBase: 0.0295735 }
    }
  },
  speed: {
    name: 'Speed',
    units: {
      mps: { name: 'Meters per Second', symbol: 'm/s', toBase: 1 },
      kmh: { name: 'Kilometers per Hour', symbol: 'km/h', toBase: 0.277778 },
      mph: { name: 'Miles per Hour', symbol: 'mph', toBase: 0.44704 },
      knot: { name: 'Knot', symbol: 'kn', toBase: 0.514444 },
      fps: { name: 'Feet per Second', symbol: 'ft/s', toBase: 0.3048 }
    }
  }
};

export const UnitConverter = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('foot');
  const [inputValue, setInputValue] = useState('1');
  const { toast } = useToast();

  const convertValue = (value: number, from: string, to: string, cat: string): number => {
    if (cat === 'temperature') {
      return convertTemperature(value, from, to);
    }

    const categoryData = conversionData[cat as keyof typeof conversionData];
    const fromData = (categoryData.units as any)[from];
    const toData = (categoryData.units as any)[to];

    // Convert to base unit first, then to target unit
    const baseValue = value * fromData.toBase;
    return baseValue / toData.toBase;
  };

  const convertTemperature = (value: number, from: string, to: string): number => {
    let celsius = value;

    // Convert to Celsius first
    if (from === 'fahrenheit') {
      celsius = (value - 32) * 5/9;
    } else if (from === 'kelvin') {
      celsius = value - 273.15;
    }

    // Convert from Celsius to target
    if (to === 'fahrenheit') {
      return celsius * 9/5 + 32;
    } else if (to === 'kelvin') {
      return celsius + 273.15;
    }

    return celsius;
  };

  const inputNum = parseFloat(inputValue) || 0;
  const result = convertValue(inputNum, fromUnit, toUnit, category);

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const copyResult = async () => {
    const categoryData = conversionData[category as keyof typeof conversionData];
    const fromSymbol = (categoryData.units as any)[fromUnit].symbol;
    const toSymbol = (categoryData.units as any)[toUnit].symbol;
    
    const resultText = `${inputValue} ${fromSymbol} = ${result.toFixed(6)} ${toSymbol}`;
    
    try {
      await navigator.clipboard.writeText(resultText);
      toast({
        title: "Copied!",
        description: "Conversion result copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard",
        variant: "destructive",
      });
    }
  };

  // Set default units when category changes
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    const categoryData = conversionData[newCategory as keyof typeof conversionData];
    const unitKeys = Object.keys(categoryData.units);
    setFromUnit(unitKeys[0]);
    setToUnit(unitKeys[1] || unitKeys[0]);
  };

  const currentCategory = conversionData[category as keyof typeof conversionData];
  const fromData = (currentCategory.units as any)[fromUnit];
  const toData = (currentCategory.units as any)[toUnit];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Category Selection */}
      <Tabs value={category} onValueChange={handleCategoryChange}>
        <TabsList className="grid grid-cols-5 bg-muted p-1 rounded-lg">
          {Object.entries(conversionData).map(([key, data]) => (
            <TabsTrigger
              key={key}
              value={key}
              className="text-sm data-[state=active]:bg-card"
            >
              {data.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(conversionData).map(([key]) => (
          <TabsContent key={key} value={key} className="mt-6">
            {/* Input Value */}
            <div className="space-y-2 mb-6">
              <Label htmlFor="input-value">Enter Value</Label>
              <Input
                id="input-value"
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter value to convert"
                className="text-lg border-input-border focus:border-input-focus"
              />
            </div>

            {/* Unit Selection */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label>From</Label>
                <Select value={fromUnit} onValueChange={setFromUnit}>
                  <SelectTrigger className="border-input-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(currentCategory.units).map(([unitKey, unitData]) => (
                      <SelectItem key={unitKey} value={unitKey}>
                        {(unitData as any).name} ({(unitData as any).symbol})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>To</Label>
                <Select value={toUnit} onValueChange={setToUnit}>
                  <SelectTrigger className="border-input-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(currentCategory.units).map(([unitKey, unitData]) => (
                      <SelectItem key={unitKey} value={unitKey}>
                        {(unitData as any).name} ({(unitData as any).symbol})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={swapUnits}
                className="border-card-border hover:bg-muted"
              >
                <ArrowUpDown className="w-4 h-4" />
              </Button>
            </div>

            {/* Result */}
            <Card className="p-6 bg-accent-conversion/10 border-accent-conversion/20">
              <div className="text-center">
                <div className="text-lg text-muted-foreground mb-2">
                  {inputValue} {fromData.symbol}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {result.toFixed(6)} {toData.symbol}
                </div>
                <div className="text-sm text-muted-foreground">
                  {fromData.name} to {toData.name}
                </div>
              </div>
            </Card>

            {/* Common Conversions */}
            <Card className="p-4 border-card-border mt-6">
              <h4 className="font-semibold mb-3">Quick Conversions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {[1, 10, 100].map((baseValue) => {
                  const converted = convertValue(baseValue, fromUnit, toUnit, category);
                  return (
                    <div key={baseValue} className="flex justify-between">
                      <span>{baseValue} {fromData.symbol}:</span>
                      <span className="font-medium">{converted.toFixed(4)} {toData.symbol}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Action Button */}
      <Button
        onClick={copyResult}
        className="w-full bg-accent-conversion text-white hover:bg-accent-conversion/90"
      >
        <Copy className="w-4 h-4 mr-2" />
        Copy Conversion
      </Button>

      {/* Conversion Formula */}
      <details className="text-sm text-muted-foreground">
        <summary className="cursor-pointer font-medium mb-2">How conversions work</summary>
        <div className="space-y-2 pl-4">
          {category === 'temperature' ? (
            <div>
              <p><strong>Temperature Conversions:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>°C to °F: (°C × 9/5) + 32</li>
                <li>°F to °C: (°F - 32) × 5/9</li>
                <li>°C to K: °C + 273.15</li>
                <li>K to °C: K - 273.15</li>
              </ul>
            </div>
          ) : (
            <div>
              <p><strong>Standard Unit Conversions:</strong></p>
              <p>1. Convert input to base unit (multiply by conversion factor)</p>
              <p>2. Convert base unit to target unit (divide by target conversion factor)</p>
              <p className="mt-2">
                <strong>Example:</strong> 5 feet to meters<br/>
                5 ft × 0.3048 = 1.524 m
              </p>
            </div>
          )}
        </div>
      </details>
    </div>
  );
};