var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59)
{
	console.log('Время указано неверно');
}
else
{
	timeRoman = numberToRoman(hours) + ':' + numberToRoman(minutes);
	printASCII(timeRoman);
}

function numberToRoman(number)
{
	numberRoman = '';
	reverseListOfRomanNumber = [50, 40, 10, 9, 5, 4, 1];
	dictOfRomanNumber = {
		1: 'I',
		4: 'IV',
		5: 'V',
		9: 'IX',
		10: 'X',
		40: 'XL',
		50: 'L'
	};
	
	while (number != 0)
	{
		for (var i = 0; i < reverseListOfRomanNumber.length; i++)
		{
			if (number >= reverseListOfRomanNumber[i])
			{
				numberRoman += dictOfRomanNumber[reverseListOfRomanNumber[i]];
				number -= reverseListOfRomanNumber[i];
				break;
			}
		}
	}
	
	if (numberRoman == '')
	{
		return '-';
	}
	
	return numberRoman;
}

function printASCII(time)
{
	var symbolASCII = {
		'I' : [ ' _  _  _  _  _ ',
				'(_)(_)(_)(_)(_)',
				'      (_)      ',
				'      (_)      ',
				'      (_)      ',
				'      (_)      ',
				' _  _ (_) _  _ ',
				'(_)(_)(_)(_)(_)'],
				
		'V' : [	' _           _ ',
				'(_)         (_)',
				'(_)         (_)',
				'(_)_       _(_)',
				'  (_)     (_)  ',
				'   (_)   (_)   ',
				'    (_)_(_)    ',
				'      (_)      '],
				
		'X' : [	' _           _ ',
				'(_)_       _(_)',
				'  (_)_   _(_)  ',
				'    (_)_(_)    ',
				'     _(_)_     ',
				'   _(_) (_)_   ',
				' _(_)     (_)_ ',
				'(_)         (_)'],
			
		'L' : [	' _             ',
				'(_)            ',
				'(_)            ',
				'(_)            ',
				'(_)            ',
				'(_)            ',
				'(_)            ',
				'(_)(_)(_)(_)(_)'],
				
		':' : [ '     _  _      ',
				'    (_)(_)     ',
				'    (_)(_)     ',
				'               ',
				'     _  _      ',
				'    (_)(_)     ',
				'    (_)(_)     ',
				'               '], 
		
		'-' : [ '               ',
				'               ',
				'               ',
				'(_)(_)(_)(_)(_)',
				'(_)(_)(_)(_)(_)',
				'               ',
				'               ',
				'               ']
		}
		
		str = '';
		
		for (var j = 0; j < 8; j++)
		{
			for (var i = 0; i < time.length; i++)
			{
				str += symbolASCII[time[i]][j] + ' ';
			}
			console.log(str);
			str = '';
		}
}
