let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2 - с это а, увеличенное на 1

d = b++;
alert(d);; //ответ: 1 - d равно b до приращения, т.е. 1 (но в переменную b уже записывается 2)

c = 2 + ++a;
alert(c);  //ответ: 5 - переменная а после приращения равна 2, сейчас ее еще раз увеличили на 1 и прибавили 2

d = 2 + b++;
alert(d); //ответ: 4 - переменная b после приращения стала равно 2 и прибавляем еще на 2

alert(a); //3 - переменная а уже равна 3 на этапе второго приращения
alert(b); //3 - переменная b после последней операции стала равна 3. 

