var arrName = [
	{
		x: 0,
		y: 0
	}
];

var arrFood = [];
var man = {
	canWalk: true,
	hands: 2
};

var Elem = function (x, y) {
	this.name = name;
	this.x = x;
	this.y = y;
}

var arrlength;
var arrFoodLength ;
arrlength = arrName.length;
arrFoodLength = arrFood.length;

Elem.prototype = man;					//наследуем сущность от man

var makeName = function () {			//создание объектов
	for ( var i = 0; i<arrlength; i++) {
			console.log(arrlength);
		var arrX = arrName[i].x;
		var arrY = arrName[i].y;
		var almostName = new Elem(arrX, arrY);	
		almostName.name = "X=" + arrX + ", Y=" + arrY;
		arrName[i] = almostName;
		};
			console.log('Выполнилось makeName');
	};

var makeNext = function () {  //Добавление нового элемента
	arrName[arrlength] = 
		{
			x : arrName[arrlength - 1].x,
			y: arrName[arrlength - 1].y
		};
	makeName();
	arrlength = arrName.length;
			console.log('Выполнилось makeNext');
};

var food = function (c, d) {					//Создание объекта Food с координатами
	var FoodElem = new Elem(c,d);
	FoodElem.name = "X=" + c + ", Y=" + d;
	arrFood[arrFoodLength] = FoodElem;
	arrFoodLength = arrFood.length;
			console.log('Создался Food');
};

var eat = function () {							//"голова" змеи "съела едy"
	for ( var j = 0; j<arrFoodLength; j++) {
		if ((arrFood[j].x == arrName[0].x) && (arrFood[j].y == arrName[0].y)) {
			makeNext();
			arrFood[j].x = undefined;
			arrFood[j].y = undefined;
			console.log('Выполнилось eat');
		} break;
	};
};

var step = function (h) {						//Шаги 
	var i = arrlength - 1;
	switch (h) {
		case "down" : {
			eat();
			console.log('Выполнилось step');
			for (i; i > 0; i--) { 
			arrName[i].y = arrName[i-1].y;
			arrName[i].x = arrName[i-1].x;
			};
			arrName[0].y = arrName[0].y - 1;
		} break;
		case "right" : {
			eat();
			console.log('Выполнилось step');
			for (i; i > 0; i--) { 
			arrName[i].x = arrName[i-1].x;
			arrName[i].y = arrName[i-1].y;
			};
			arrName[0].x = arrName[0].x + 1;
		} break;
		case "top" : {
			eat();
			console.log('Выполнилось step');
			for (i; i > 0; i--) { 
			arrName[i].x = arrName[i-1].x;
			arrName[i].y = arrName[i-1].y;
			};
			arrName[0].y = arrName[0].y + 1;
		} break;
		case "left" : {
			eat();
			console.log('Выполнилось step');
			for (i; i > 0; i--) { 
			arrName[i].x = arrName[i-1].x;
			arrName[i].y = arrName[i-1].y;
			};
			arrName[0].x = arrName[0].x - 1;
		} break;
	};
	makeName();
};