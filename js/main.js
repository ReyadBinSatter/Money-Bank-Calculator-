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
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = getInput('income');
    const foodCost = getInput('food');
    const rentCost = getInput('rent');
    const clothesCost = getInput('clothes');
    const success = document.getElementById('success');
    const error1 = document.getElementById('error1');
    const error2 = document.getElementById('error2');
    const error3 = document.getElementById('error3');
    if (incomeAmount >= 0 && foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
        const cost = totalCost(foodCost, rentCost, clothesCost);
        if (incomeAmount>=cost) {
            balanceCost(incomeAmount, cost);
        success.style.display = 'block';
        error1.style.display = 'none';
        error2.style.display = 'none';
        }
        else{
            error3.style.display = 'block';
        }

    }

    else if (incomeAmount < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0) {

        error1.style.display = 'block';

        success.style.display = 'none';
        error2.style.display = 'none';

    }

    else {

        error2.style.display = 'block';

        success.style.display = 'none';
        error1.style.display = 'none';


    }

})
document.getElementById('save-btn').addEventListener('click', function () {
    const incomeAmount = getInput('income');
    const savePercent = getInput('save');
    const error4 = document.getElementById('error4');
    const balance = document.getElementById('balance').innerText;
    if (savePercent > 0 && savePercent < 100) {
        const save = savingAmount(savePercent, incomeAmount);
        if(save < balance){
            remainingBalance(save, balance);
        }
        else{
            error4.style.display = 'block';
        }
    }


})