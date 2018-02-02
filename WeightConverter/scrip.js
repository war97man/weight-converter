//Set cards initially hidden
document.getElementById('output').style.visibility = 'hidden';
//disable input
document.getElementById('lbsInput').setAttribute('disabled', "true");
var lock = document.getElementById('lock')
lock.innerHTML = '&#xf023';


//check if user selecter a measure
document.getElementById('selectt').addEventListener('change', function(e) {
	//enable input
	document.getElementById('lbsInput').removeAttribute('disabled');
	//each time we select hide card elements
	document.getElementById('output').style.visibility = 'hidden';
	//each time we select remove input
	document.getElementById('lbsInput').value = '';
	//Change lock icon
	lock.innerHTML = '&#xf13e';
	//check select cases
	switch(e.target.value) {
		case 'Kilograms':
			document.getElementById('lbsInput').addEventListener('input', function(e) {
			//make cards visible(same for next cases)
			document.getElementById('output').style.visibility = 'visible';
			let kg = e.target.value;
			console.log(e.target);
			document.getElementById('poundsOutput').innerHTML = kg*2.2046;
			document.getElementById('kgOutput').innerHTML = kg;
			document.getElementById('ozOutput').innerHTML = kg*35.274;
		});
			break;
		case 'Pounds':
			document.getElementById('lbsInput').addEventListener('input', function(e) {
			document.getElementById('output').style.visibility = 'visible';
			let pound = e.target.value;
			console.log(e.target);
			document.getElementById('poundsOutput').innerHTML = pound;
			document.getElementById('kgOutput').innerHTML = pound/2.2046 ;
			document.getElementById('ozOutput').innerHTML = pound*16;
		});
			break;
		case 'Ounces':
			document.getElementById('lbsInput').addEventListener('input', function(e) {
			document.getElementById('output').style.visibility = 'visible';
			let oz = e.target.value;
			console.log(e.target);
			document.getElementById('poundsOutput').innerHTML = oz*0.0625;
			document.getElementById('kgOutput').innerHTML = oz/35.274;
			document.getElementById('ozOutput').innerHTML = oz;
		});
			break;
	}
	
});
