let buttonStart = document.getElementById("start")[0],
    budget = document.getElementsByClassName("budget-value")[0],
    dayBudget = document.getElementsByClassName("daybudget-value")[0],
    level = document.getElementsByClassName("level-value")[0],
    expenses = document.getElementsByClassName("expenses")[0],
    optionalExpenses = document.getElementsByClassName("optionalexpenses-value")[0],
    income = document.getElementsByClassName("income-value")[0],
    monthSavings = document.getElementsByClassName("monthsavings-value")[0],
    yearsavings = document.getElementsByClassName("yearsavings-value")[0],
    expensesInput = document.getElementsByClassName("expenses-item")[0],
    optionalInput = document.querySelectorAll('optionalexpenses-item')[0],
    checkBox = document.querySelectorAll("#savings"),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;

function start(){
   money = +prompt("Ваш бюждет?",'');
   time = prompt("Введите дату в формате YYYY-MM-DD",'');

   while(isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюждет?",'');
   }
}
start();

let appData = {
    budget:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData:time,
    savings:true,
    chooseExpenses: function(){
      for (let i = 0; i < 2; i++) {
         let a = prompt("Введите обязательную статью расходов в этом месяце","");
             b = prompt("Во сколько обойдется?","");
         if ((typeof(a)) === 'string' && (typeof(a)) != null 
            && a != '' && b !='' && a.length <50) {
            console.log("done");
            appData.expenses[a] = b;
         } else { 
            console.log("error");
         }
      }
    },
    detectDayBudget: function (){
      appData.moneyPerDay = (appData.budget/30).toFixed(1);
      alert("Daily budget:" + appData.moneyPerDay);
    },
    detectLevel: function () {
      if(appData.moneyPerDay < 100) {
         console.log ("Minimum wage");}
         else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
         console.log("average wage");}
         else if (appData.moneyPerDay > 20000) {
            console.log("high wage");}
         else {
            console.log("Mistake!");
         }
    },
    checkSavings: function () {
      if (appData.savings == true) {
         let save = +prompt("какова сумма накоплений?"),
             percent = +prompt("под какой процент?");
          appData.monthIncome = save/100/12*percent;
          alert("Доход в месяц: " + appData.monthIncome);
       }
    },
    chooseExpenses: function () {
      for (let i = 0; i < 2; i++) {
         let a = prompt("Введите дополнительную статью расходов в этом месяце","");
             b = prompt("Во сколько обойдутся развлечения?","");
         if ((typeof(a)) === 'string' && (typeof(a)) != null 
            && a != '' && b !='' && a.length <50) {
            console.log("done");
            appData.optionalExpenses[a] = b;
         } else { 
            console.log("error");
         }
      }

    },
    chooseIncome: function () {
       let items = prompt ("Что принесет доп доход?(перечислите через запятую)",'');
       if (typeof(items) !='string' || items == ''|| typeof(items) == null){
         console.log("данные введены неверно");
         } else {
            appData.income.push(prompt ("что-нибудь еще?"));
            appData.income = items.split(', ');
            appData.income.sort();
            console.log("done");
       }
       appData.income.forEach (function (i){

          alert("Способы зароботка " + i);
          
       });
      }
   };
for (let key in appData){
   console.log("appdata contains " + key);

}





    





