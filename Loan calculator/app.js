
document.querySelector('.btn').addEventListener('click', function(e){
   e.preventDefault()
   hide();
   
        //define UI variables
        const amount = document.getElementById('loan-amount');
        const interest = document.getElementById('loan-interest');
        const years = document.getElementById('loan-duration');
        const monthlyPayment = document.getElementById('monthly-payment');
        const totalPayment = document.getElementById('total-payment');
        const totalInterest = document.getElementById('total-interest');
        
        const principal = parseFloat(amount.value);
        const calculatedInterest = parseFloat(interest.value) / 100 / 12;
        const calculatedPayments= parseFloat(years.value);

        //calculate monthly payment
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const month = (principal * x * calculatedInterest)/(x-1);
        if(isFinite(month)){
            monthlyPayment.textContent = ` ₦${month.toFixed(2)}`;
            totalPayment.textContent = ` ₦${(month * calculatedPayments).toFixed(2)}`;
            totalInterest.textContent = ` ₦${((month * calculatedPayments)- principal).toFixed(2)}`;
            document.querySelector('.container').style.height = '700px';
            document.querySelector('.container').style.marginTop = '0px'
            setTimeout(show, 3000)
            spin.classList.remove('hidden');
            
        } else{
           setTimeout(showError, 3000);
           setTimeout(spinner);
           document.querySelector('.container').style.height = '540px'
           hide();
        }
})
   //show error function
   function showError() {
    const html = `<div class ="error"><h3>Please check your inputs<h3></div>`
    document.querySelector('.loan').insertAdjacentHTML('beforebegin', html);
    setTimeout(clearError, 3000);
    document.querySelector('.--spinner').classList.add('hidden');
   }
   //clear error
   function clearError(){
      document.querySelector('.error').remove();
   }
    //spinner
   function spinner(){
      document.querySelector('.--spinner').classList.remove('hidden');
   }
   const monthlypayment = document.querySelector('.monthly-payment');
   const monthlymoney = document.querySelector('.monthly-money');
   const totalpayment = document.querySelector('.total-payment');
   const totalinterest = document.querySelector('.total-interest');
   const spin = document.querySelector('.--spinner');
   function hide(){
      monthlypayment.classList.add('hidden');
      monthlymoney.classList.add('hidden');
      totalpayment.classList.add('hidden');
      totalinterest.classList.add('hidden');
   }

   function show(){
      monthlypayment.classList.remove('hidden');
      monthlymoney.classList.remove('hidden');
      totalpayment.classList.remove('hidden');
      totalinterest.classList.remove('hidden')
      spin.classList.add('hidden');
   }
   hide();
   spin.classList.add('hidden');