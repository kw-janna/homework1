        //1.Если а – четное посчитать а*б, иначе а+б

var a = 120;
var b = 15;

if (a % 2 == 0 ) {
	alert(a * b);
} else {
	alert(a + b);
}
           // 2.Определить какой четверти принадлежит точка с координатами (х,у)

var x = 1;
var y = 3;


if(x > 0 && y > 0) {
 res = "точка находится в первой четверти"; 
} 
if(x < 0 && y > 0) {
 res = "точка находится во второй четверти";
}
if(x < 0 && y < 0) {
 res = "точка находится в третьей четверти";
}
if(x > 0 && y < 0) {
 res = "точка находится в четвертой четверти";
}

alert(res);

            //3.Найти суммы только положительных из трех чисел
var a = -5;
var b = 10;
var c = 8;
var result=0;

if ( a > 0 ) {
	result = result + a;
} 

if ( b > 0 ) {
	result = result + b;
} 

if ( c > 0 ) {
	result = result + c;
} 

alert(result);


        //4.Посчитать выражение макс(а*б*с, а+б+с)+3

var a = 2;
var b = 3;
var c = 4;
if ( a * b * c > a + b + c ) {
		alert (a * b * c + 3 );
} else {
	alert (a + b + c + 3 );
}


            //5.Написать программу определения оценки студента по его рейтингу,ан основе следующих правил


var Rating = 50;   

if ( Rating >= 0 && Rating < 20 ) {
		alert ('F');
}

if ( Rating > 19 && Rating < 40 ) {
		alert ('E');
}

if ( Rating > 39 && Rating < 60 ) {
		alert ('D');
}

if ( Rating > 59 && Rating < 75 ) {
		alert ('C');
}

if ( Rating > 74 && Rating < 90 ) {
		alert ('B');
}
if ( Rating > 89 && Rating <= 100 ) {
		alert ('A');
}