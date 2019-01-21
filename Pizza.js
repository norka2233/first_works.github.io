var pizza = prompt('Enter type of pizza 1 = Margarita, 2 = Peperoni, 3 = Neapolitana');

var cost = 0;

switch (pizza) {

	case'1': {

	cost += 60;
	document.open();
	document.write("<Margarita");
		}
		break;

    case '2': {
	
	cost += 65;
	document.open();
	document.write("Peperoni");
		}
		break;

		


	case'3': {

	document.open();
	document.write("Neapoliatana");
}
	break;
}
deafault: {
	document.open();
	document.write("Incorrect answer");
}

if(cost != 0) {
	document.open();
	document.write('Enter ' + cost + " dollar(s). Thank you");
};