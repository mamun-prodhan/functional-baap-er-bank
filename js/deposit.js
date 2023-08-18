
document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const newDepositAmount = getInputValueById('deposit-field');
    
    // get previous deposit total
    const previousDepositTotal = getTextElementValueById('deposit-total');
    
    // get previous Balance Total
    const previousBalanceTotal = getTextElementValueById('balance-total');

    // set deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    // set balance total
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
    
    // // get previous withdraw total
    // const previousWithdrawTotal = getTextElementValueById('withdraw-total');

})