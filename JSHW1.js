// Task 1 
const getName = prompt ('Введите Ваше имя')
if (getName != null){
    alert(getName)
}else{
    alert("Вы не ввели свое имя")}

// Task 2
const numberone = prompt ('Введите первое число')
    if  (numberone === null){
        alert ("Вы не ввели первое число")
    } else{
        const numbertwo = prompt ('Введите второе число')
        if  (numbertwo === null){
            alert ("Вы не ввели второе число")
        } else{
            alert (+numberone+ +numbertwo)}}

// Task 3
const getN= prompt ('Введите Ваше имя')
if (getN===null){
    alert ("Вы не ввели Ваше имя")
}else{
    const age = prompt ('Введите Ваш возраст');
    if (age===null){
        alert ("Вы не ввели Ваш возраст")
    } else {
        if (+age>=18){
            alert ('Добро пожаловать, ' +  getN +'!')
        } else{
            alert ('Простите, ' + getN +', доступ закрыт.')}}}  


//  Task 4
if (confirm ('Хотите ввести название блока?') === false){
    alert ('Класс не присвоен')
}else{
    const block = prompt ('Введите название блока')
    if (confirm ('Хотите ввести название элемента?')===false){
        alert(block)
    }else{
        const element = prompt ('Введите название элемента')
           if (confirm ('Хотите ввести название модификатора?')===true){
           const modi = prompt ('Введите название модификатора')
            alert(block+element+modi)
        }else{
            alert(block+element)}}}

// Task 5
const numbone = prompt ('Введите первое число')
if  (numbone === null){
    alert ("Вы не ввели первое число")
}else{
    const numbtwo = prompt ('Введите второе число')
    if  (numbtwo === null){
        alert ("Вы не ввели второе число")
    }else{
    if (confirm ('Желаете произвести деление?') === true){
        alert (+numbone / +numbtwo)
    }else{
       const plus = confirm ('Желаете произвести сложение?')
       if (plus === true){
        alert (+numbone + +numbtwo)
    }else{
        const mult = confirm ('Желаете произвести умножение?')
        if (mult === true)
           {alert (+numbone * +numbtwo)}
           else
                {if (confirm ('Желаете произвести вычитание?') === true)
                {alert(+numbone - +numbtwo)}
                else {alert ('Вы не выбрали арифметическое действие')}}}}}}