function getInput(inputValue) {
    const inputBox = document.getElementById(inputValue);
    const inputValueText = inputBox.value;
    const inputAmountValue = parseFloat(inputValueText);
    return inputAmountValue;
}
function totalCost(food, rent, clothes) {
    const totalBalance = document.getElementById('total-expenses');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceText) + food + rent + clothes;
    totalBalance.innerText = totalBalanceValue;
    return totalBalanceValue;
}
function balanceCost(income, cost) {
    const totalBalance = document.getElementById('balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceText);
    totalBalance.innerText = totalBalanceValue + income - cost;
    return totalBalance.innerText;
}

function savingAmount(percent, income) {
    const savingTotal = document.getElementById('savings');
    const savingTotalText = savingTotal.innerText;
    const savingTotalValue = parseFloat(savingTotalText);
    savingTotal.innerText = savingTotalValue + ((income * percent) / 100);
    return savingTotal.innerText;
}

function remainingBalance(savingTotal, totalBalance) {
    const remainTotal = document.getElementById('remain-balance');
    const remainTotalText = remainTotal.innerText;
    const remainTotalValue = parseFloat(remainTotalText);
    remainTotal.innerText = remainTotalValue + totalBalance - savingTotal;
    console.log(remainTotal.innerText);

}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = getInput('income');
    const foodCost = getInput('food');
    const rentCost = getInput('rent');
    const clothesCost = getInput('clothes');

    if (incomeAmount > 0 && foodCost > 0 && rentCost > 0 && clothesCost > 0) {
        const cost = totalCost(foodCost, rentCost, clothesCost);
        balanceCost(incomeAmount, cost);


    }
})
document.getElementById('save-btn').addEventListener('click', function () {
    const incomeAmount = getInput('income');
    const savePercent = getInput('save');
    const balance = document.getElementById('balance').innerText;
    if (savePercent > 0 && savePercent < 100) {
        const save = savingAmount(savePercent, incomeAmount);

        remainingBalance(save, balance);
    }


})