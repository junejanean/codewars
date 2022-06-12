//Write function bmi that calculates body mass index (bmi = weight / height2).

// Parameters
// given two numbers (weight and height)
// calculate the bmi by dividing the weight by the height (squared)

// Return
//if bmi <= 18.5 return "Underweight"
//if bmi <= 25.0 return "Normal"
//if bmi <= 30.0 return "Overweight"
//if bmi > 30 return "Obese"

// Examples
// bmi(80, 1.80), "Normal"

// Pseudo Code

function bmi(weight, height) {
	bmiCalc = weight / height ** 2;
	if (bmiCalc <= 18.5) {
		return 'Underweight';
	}
	if (bmiCalc <= 25.0) {
		return 'Normal';
	}
	if (bmiCalc <= 30.0) {
		return 'Overweight';
	}
	if (bmiCalc > 30) {
		return 'Obese';
	}
}
bmi(80, 1.8);
