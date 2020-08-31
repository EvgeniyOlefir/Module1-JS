/*
Задание 4
На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). 
Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. 
Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:

Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
Проверяет сможет ли пользователь оплатить заказ:
если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
 */

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCES_DENIED = "Недостаточно средств на счету";

const orderPieces = prompt("Какое количество дроидов вы хотите купить?");
let totalPrice = orderPieces * pricePerDroid;
let balanceCredit = credits - totalPrice;
let message;

// console.log(totalPrice);
// console.log(balanceCredit);

if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (totalPrice > balanceCredit) {
  message = ACCES_DENIED;
} else {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов.`;
}

console.log(message);

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// const password = prompt("Пожалуйста, введите пароль");

// if (ADMIN_PASSWORD === password) {
//   message = "Добро пожаловать!";
// } else if (password === null) {
//   message = "CANCELED_BY_USER";
// } else {
//   message = "Доступ запрещен, неверный пароль!";
// }

// alert(message);
