import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Copy, Heart, Droplets } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const BMICalculator = () => {
  const [height, setHeight] = useState('170');
  const [weight, setWeight] = useState('70');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('moderately_active');
  const [units, setUnits] = useState('metric');
  const { toast } = useToast();

  // Convert to metric if needed
  const getMetricValues = () => {
    let heightCm = parseFloat(height) || 0;
    let weightKg = parseFloat(weight) || 0;

    if (units === 'imperial') {
      // Convert feet.inches to cm (assuming height is in inches)
      heightCm = heightCm * 2.54;
      // Convert pounds to kg
      weightKg = weightKg * 0.453592;
    }

    return { heightCm, weightKg };
  };

  const { heightCm, weightKg } = getMetricValues();
  const ageValue = parseInt(age) || 0;

  // BMI Calculation
  const bmi = heightCm > 0 && weightKg > 0 ? weightKg / Math.pow(heightCm / 100, 2) : 0;

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-600' };
    if (bmi < 25) return { category: 'Normal weight', color: 'text-green-600' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-orange-600' };
    return { category: 'Obese', color: 'text-red-600' };
  };

  const bmiCategory = getBMICategory(bmi);

  // Daily Calorie Needs (Mifflin-St Jeor Equation)
  const calculateCalories = () => {
    if (weightKg === 0 || heightCm === 0 || ageValue === 0) return 0;

    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * ageValue);
    } else {
      bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * ageValue);
    }

    const activityMultipliers = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
      extremely_active: 1.9
    };

    return bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers];
  };

  const dailyCalories = calculateCalories();

  // Water Intake Recommendation (simple rule: 30-35ml per kg)
  const waterIntake = weightKg * 35; // ml per day
  const waterIntakeLiters = waterIntake / 1000;

  // Ideal Weight Range (BMI 18.5-24.9)
  const heightM = heightCm / 100;
  const minIdealWeight = 18.5 * heightM * heightM;
  const maxIdealWeight = 24.9 * heightM * heightM;

  const copyResults = async () => {
    const result = `Health Calculator Results:
BMI: ${bmi.toFixed(1)} (${bmiCategory.category})
Height: ${units === 'metric' ? `${heightCm.toFixed(0)}cm` : `${height}"`}
Weight: ${units === 'metric' ? `${weightKg.toFixed(1)}kg` : `${weight}lbs`}
Daily Calories: ${dailyCalories.toFixed(0)} kcal
Water Intake: ${waterIntakeLiters.toFixed(1)}L per day
Ideal Weight Range: ${minIdealWeight.toFixed(1)}-${maxIdealWeight.toFixed(1)}kg`;

    try {
      await navigator.clipboard.writeText(result);
      toast({
        title: "Copied!",
        description: "Health metrics copied to clipboard",
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
      {/* Units Toggle */}
      <div className="flex justify-center">
        <Select value={units} onValueChange={setUnits}>
          <SelectTrigger className="w-48 border-input-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="metric">Metric (cm, kg)</SelectItem>
            <SelectItem value="imperial">Imperial (in, lbs)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Input Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="height">
            Height ({units === 'metric' ? 'cm' : 'inches'})
          </Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={units === 'metric' ? 'Height in cm' : 'Height in inches'}
            className="border-input-border focus:border-input-focus"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight">
            Weight ({units === 'metric' ? 'kg' : 'lbs'})
          </Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={units === 'metric' ? 'Weight in kg' : 'Weight in lbs'}
            className="border-input-border focus:border-input-focus"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Age (years)</Label>
          <Input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Your age"
            className="border-input-border focus:border-input-focus"
          />
        </div>

        <div className="space-y-2">
          <Label>Gender</Label>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="border-input-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Activity Level */}
      <div className="space-y-2">
        <Label>Activity Level</Label>
        <Select value={activityLevel} onValueChange={setActivityLevel}>
          <SelectTrigger className="border-input-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
            <SelectItem value="lightly_active">Lightly Active (light exercise 1-3 days/week)</SelectItem>
            <SelectItem value="moderately_active">Moderately Active (moderate exercise 3-5 days/week)</SelectItem>
            <SelectItem value="very_active">Very Active (hard exercise 6-7 days/week)</SelectItem>
            <SelectItem value="extremely_active">Extremely Active (very hard exercise, physical job)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* BMI Results */}
      <Card className="p-6 bg-accent-health/10 border-accent-health/20">
        <div className="text-center">
          <div className="text-3xl font-bold text-foreground mb-2">
            {bmi.toFixed(1)}
          </div>
          <div className={`text-lg font-semibold ${bmiCategory.color} mb-4`}>
            {bmiCategory.category}
          </div>
          <div className="text-sm text-muted-foreground">Body Mass Index</div>
        </div>
      </Card>

      {/* Health Metrics */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4 border-card-border">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-accent-health" />
            <h4 className="font-semibold">Daily Calories</h4>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {dailyCalories.toFixed(0)} kcal
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Based on Mifflin-St Jeor equation
          </div>
        </Card>

        <Card className="p-4 border-card-border">
          <div className="flex items-center gap-2 mb-3">
            <Droplets className="w-5 h-5 text-blue-500" />
            <h4 className="font-semibold">Water Intake</h4>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {waterIntakeLiters.toFixed(1)}L
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Recommended daily intake
          </div>
        </Card>
      </div>

      {/* Ideal Weight Range */}
      <Card className="p-4 border-card-border">
        <h4 className="font-semibold mb-3">Ideal Weight Range</h4>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Healthy BMI Range (18.5-24.9):</span>
          <span className="font-semibold">
            {minIdealWeight.toFixed(1)} - {maxIdealWeight.toFixed(1)} kg
          </span>
        </div>
        {units === 'imperial' && (
          <div className="flex justify-between items-center mt-2">
            <span className="text-muted-foreground">In pounds:</span>
            <span className="font-semibold">
              {(minIdealWeight * 2.20462).toFixed(0)} - {(maxIdealWeight * 2.20462).toFixed(0)} lbs
            </span>
          </div>
        )}
      </Card>

      {/* Action Button */}
      <Button
        onClick={copyResults}
        className="w-full bg-accent-health text-white hover:bg-accent-health/90"
      >
        <Copy className="w-4 h-4 mr-2" />
        Copy Health Metrics
      </Button>

      {/* Disclaimers and Information */}
      <div className="space-y-4 text-sm text-muted-foreground">
        <Card className="p-3 border-accent-health/20 bg-accent-health/5">
          <p className="text-xs">
            <strong>Disclaimer:</strong> These calculations are for informational purposes only. 
            BMI may not accurately reflect health for athletes, elderly, or certain populations. 
            Consult healthcare professionals for personalized advice.
          </p>
        </Card>

        <details>
          <summary className="cursor-pointer font-medium mb-2">How calculations work</summary>
          <div className="space-y-2 pl-4">
            <p><strong>BMI Formula:</strong> Weight (kg) ÷ Height² (m²)</p>
            <p><strong>Daily Calories (Mifflin-St Jeor):</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Men: 88.362 + (13.397 × weight) + (4.799 × height) - (5.677 × age)</li>
              <li>Women: 447.593 + (9.247 × weight) + (3.098 × height) - (4.330 × age)</li>
              <li>Then multiplied by activity factor (1.2-1.9)</li>
            </ul>
            <p><strong>Water Intake:</strong> Simple rule of 30-35ml per kg body weight</p>
          </div>
        </details>
      </div>
    </div>
  );
};