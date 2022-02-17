function getInput(inputValue){
    const inputBox = document.getElementById(inputValue);
    const inputValueText = inputBox.value;
    const inputAmountValue = parseFloat(inputValueText);
    inputBox.value = '';
    return inputAmountValue;

}
function totalCost(food, rent, clothes){
    const totalBalance = document.getElementById('total-expenses');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceText) +food+rent+clothes;
    totalBalance.innerText = totalBalanceValue;
    return totalBalanceValue;
}
function balanceCost(income, cost){
    const totalBalance = document.getElementById('balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceText);
    totalBalance.innerText = totalBalanceValue + income -cost;
   
}



document.getElementById('calculate-btn').addEventListener('click', function (){
    const incomeAmount = getInput('income');
    const foodCost = getInput('food');
    const rentCost = getInput('rent');
    const clothesCost = getInput('clothes');
   
    if (incomeAmount > 0 && foodCost >0 && rentCost >0 && clothesCost>0) {
        const cost = totalCost(foodCost, rentCost, clothesCost);
        balanceCost(incomeAmount,cost);
    }
})