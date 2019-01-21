var tree = prompt('Enter color of plate at home', '');

switch (tree) {
	case'green':
	case'orange':
    case 'red':
    case 'blue':
		document.open();
		document.write('Yees, you have it!');
	break;


default: 
{
		document.open();
		document.write("No, we don't have it");
};	
break;
	
};

var rainbow = prompt("Enter the number from 1-7.");

switch(rainbow) {

	case"1": {
		document.open();
		document.write("Red");
		};
	break;

	case "2": {
		document.open();
		document.write("Orange.");
	
	};
	break;

	case"3": {
		document.open();
		document.write("Yellow");

		};
	break;

	case'4': {
		document.open();
		document.write("Green");
		};
	break;

	case'5': {
		document.open();
		document.write("Blue");
    }
	break;

	case'6': {
		document.open();
		document.write("Dark blue.");
		
};
	break;

	case'7': {
		document.open();
		document.write("Purple.");

	
};
	break;
		
};

var dog = prompt("Enter dog or cat");

switch(dog) {

    case "dog":
        {
		
			document.write("Dog");
		};
		break;

    case "cat": {
			document.write("Cat");
};
		break;

    default: {
			document.write("You did wrong.");
};	


}

