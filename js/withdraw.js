
document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const newWithdrawAmount = getInputValueById('withdraw-field');
    
    // get previous withdraw total
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    
    // get previous Balance Total
    const previousBalanceTotal = getTextElementValueById('balance-total');

    // set withdraw total
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    // set balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
    
    // // get previous withdraw total
    // const previousWithdrawTotal = getTextElementValueById('withdraw-total');

})