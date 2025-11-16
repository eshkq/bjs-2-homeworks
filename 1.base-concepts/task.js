"use strict";

function solveEquation(a, b, c) {
  let result = [];

  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return result;
  }

  if (discriminant === 0) {
    let root = -b / (2 * a);
    result.push(root);
    return result;
  }

  if (discriminant > 0) {
    let sqrtDiscriminant = Math.sqrt(discriminant);
    let root1 = (-b + sqrtDiscriminant) / (2 * a);
    let root2 = (-b - sqrtDiscriminant) / (2 * a);

    result.push(root1, root2);
  }

  return result;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentPerMonth = (percent / 100) / 12;
  let creditBody = amount - contribution;

  if (creditBody <= 0) {
    return 0;
  }

  let monthlyPayment =
    creditBody *
    (percentPerMonth +
      (percentPerMonth / ((1 + percentPerMonth) ** countMonths - 1)));

  let totalPayment = monthlyPayment * countMonths;

  return Number(totalPayment.toFixed(2));
}