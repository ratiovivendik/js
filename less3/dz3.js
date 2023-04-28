let num = prompt("Введите число", 0), iteration=prompt("Введите количество шагов");


for (var i=0; i < iteration; i++) {
    if (i===0) {
        continue
    }
    num=num*i;
    alert(num);
}

if (num % 2 == 0) {
    alert('Ваше число четное ' +num);
}else {
    alert('Ваше число нечетное ' +num);
}



