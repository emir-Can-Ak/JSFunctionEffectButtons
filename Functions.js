function NumberCompare(){
    let x = parseInt(prompt('Please enter a number:'));
    let y = parseInt(prompt('Please enter a number:'));

    if(x > y){
        alert("First number is bigger");
    }
    else if(x < y){
        alert("Second number is bigger");
    }
    else{
        alert(0);
    }
}

function Factorial(){
    let x = parseInt(prompt('Please enter a number:'));
    let result = 1;
    for(let i = 1; i <= x;i++){
        result *= i;
    }
    alert(result);
}

function Sum(){
    let arr = [];
    for(let i = 0; i < 3; i++){
        let x = parseInt(prompt('Enter a number:'));
        arr.push(x);
    }
    window.alert(arr.join(","));
}

function Field(){
    let x = prompt('Please enter a value for side');
    let y = prompt('Please enter a value for side');
    let result = 1;

    if(x == '' || x == null){
        result = y * y;
    }
    else if(y == '' || y == null){
        result = x * x;
    }
    else{
        result = x * y;
    }
    alert(result);
}

function PerfectNumber(){
    let x = parseInt(prompt('Please enter a number: '));
    let arr = [];

    for(let i = 1; i < x; i++){
        if(x % i == 0){
            arr += i;
        }
    }
    let result = 0;
    for(let i = 0; i < arr.length ;i++){
        result += parseInt(arr[i]);
    }
    
    if(result == x){
        alert(+ x +' is a perfect number divisors: '+ arr.split(''));
    }
    else{
        alert(+ x +' is not a perfect number divisors: '+ arr.split(''));
    }
}

function PerfectNumberMinMax(){
    //First Perfect number between numbers
    let x = parseInt(prompt('Please enter min value'));
    let y = parseInt(prompt('Please enter max value'));

    if(x > y){
        return alert('Please enter valid numbers:');
    }
    for(let i = x; i <= y; i++){
        let result = 0;
        for(let j = 1; j < i; j++){
            if(i % j == 0){
                result += j;
            }
        }
    if(result == i){
        console.log(+ i +' is a Perfect Number');
    }
    }
}

function time(){
    let x = new Date().getHours();
    let y = new Date().getMinutes();
    let z = new Date().getSeconds();

    alert(x + ':' + y + ':' + z);
}
function time2(){
    let x = parseInt(prompt('Enter Hour value'));
    if(x > 24){
        return alert('Please enter a valid number:');
    }
    let y = parseInt(prompt('Enter Minute value'));
    if(y > 60){
        return alert('Please enter a valid number:');
    }
    let z = parseInt(prompt('Enter Seconds value'));
    if(z > 60){
        return alert('Please enter a valid number:');
    }

    
    if(isNaN(x) || x === null){   // isNaN checks if value is NaN
        x = '00';
    }
    
    if(isNaN(y) || y === null){
        y = '00';
    }
    
    if(isNaN(z) || z === null){
        z = '00';
    }

    alert(x + ':' + y + ':' + z);
}

function ChangeToSec(){
    let x = parseInt(prompt('Enter Hour value'));
    if(x > 24){
        return alert('Please enter a valid number:');
    }
    let y = parseInt(prompt('Enter Minute value'));
    if(y > 60){
        return alert('Please enter a valid number:');
    }
    let z = parseInt(prompt('Enter Seconds value'));
    if(z > 60){
        return alert('Please enter a valid number:');
    }

    let sec = 0;
    sec += (x * 3600) + (y * 60) + z;
    alert('Total Second is: ' + sec);

}

function ChangeToTime(){
    let x = parseInt(prompt('Please enter a valid quantity of seconds'));

    let hour = Math.floor(x / 3600);
    let minute = Math.floor((x % 3600) / 60);
    let sec = Math.floor((x % 3600) % 60); 

    alert(hour+':' + minute +':'+ sec);
    
}

function TimeDifference(){
    let x = parseInt(prompt('Enter Hour value'));
    if(x > 24){
        return alert('Please enter a valid number:');
    }
    let y = parseInt(prompt('Enter Minute value'));
    if(y > 60){
        return alert('Please enter a valid number:');
    }
    let z = parseInt(prompt('Enter Seconds value'));
    if(z > 60){
        return alert('Please enter a valid number:');
    }

    let x2 = parseInt(prompt('Enter Hour value'));
    if(x2 > 24){
        return alert('Please enter a valid number:');
    }
    let y2 = parseInt(prompt('Enter Minute value'));
    if(y2 > 60){
        return alert('Please enter a valid number:');
    }
    let z2 = parseInt(prompt('Enter Seconds value'));
    if(z2 > 60){
        return alert('Please enter a valid number:');
    }

    sec1 = (x * 3600) + (y * 60) + z;
    sec2 = (x2 * 3600) + (y2 * 60) + z2;
    result = sec1 - sec2;

    if(result < 0){
        result *= -1;
    }

    let hour = Math.floor(result / 3600);
    let minute = Math.floor((result % 3600) / 60);
    let sec = Math.floor((result % 3600) % 60);

    alert(hour+':' + minute +':'+ sec);
}