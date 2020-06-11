let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');  
    
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

const appData = {
    budget: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses: {
    },
    income: [],
    savings: true,
    chooseExpenses: function() {
        for( let i = 0; i < 2; i++ ) {
            const a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                  b = prompt('Во сколько обойдется?', '');
            if( (typeof(a)) === "string" 
                && (typeof(a)) != null 
                && (typeof(b)) != null 
                && a != "" 
                && b != ""
                && a.length < 50){
                console.log("done");
                appData.expenses[a] = b;
            }
            else {
                i--;
            }
        }    
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if( appData.moneyPerDay < 100 ) {
            console.log('Минимальный уровень достатка');
        }
        else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            console.log('Средний уровень достатка');
        }
        else if( appData.moneyPerDay > 2000 ) {
            console.log('Высокий уровень достатка');
        }
        else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?',''),
            percent = +prompt('Под какой процент?','');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего дипозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for ( let i = 1; i <= 3; i++ ){
            let c = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = c;
        }
    },
    chooseIncome: function() {
        let items;
        do {
        items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)",'');
        }
        while((typeof(items)) !== 'string' || items === null || items === '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?',''));
        appData.income.sort();
        let str = ;
        appData.income.forEach((item, i) => {
            alert('Способы доп. заработка: ' + (i + 1) + " - " + item);
        });
    },
};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: "+ key + ' - ' + appData[key] );
};
 

const obj = {
    title: "My Title",
    param: 3
}

const str1 = 'I have param = ' + obj.param + ' and title = ' + obj.title + ' in my obj';
const str2 = `I have param = ${obj.param} and title = ${obj.title} in my obj`;