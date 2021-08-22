setTimeout( function(){
let div = document.getElementById('a');
div.style.display = 'block';
let j = document.getElementById('prog');
j.style.display = 'none';
let sub = document.getElementById('sub');
let x= Math.random() * 5;
x = Math.ceil(x);
let k = document.getElementById('tg');
k.addEventListener('click', function(){
	window.open('https://t.me/hackingfamilYy');
});
console.log(x);
let fd = document.getElementById('f');
fd.addEventListener('click', function(){
	window.open('https://t.me/ProgManIn');
});
sub.addEventListener('click', function(){
	let inp = document.getElementById('em').value;

	let h1 = document.getElementById('result');
		h1.style.color = 'black';
	h1.innerHTML = 'LOADING.';
		if (inp === '') {
		h1.innerHTML = 'Write email!';
	}
	else {
		setTimeout( function(){
		h1.innerHTML = 'LOADING..';
	}, 500);
	setTimeout( function(){
		h1.innerHTML = 'LOADING...';
	}, 1000);
	setTimeout( function(){
		h1.innerHTML = 'LOADING.';
	}, 1500);
	setTimeout( function(){
		h1.innerHTML = 'LOADING..';
	}, 2000);
	setTimeout( function(){
		h1.innerHTML = 'LOADING...';
	}, 2500);
	setTimeout( function(){
		if (x > 2) {
			h1.innerHTML = 'PASSWORD SAFE';
			h1.style.color = 'green';
		}
		if (x < 2) {
			h1.innerHTML = 'PASSWORD DON`T SAFE';
			h1.style.color = 'red';
		}
		if (x == 5) {
			h1.innerHTML = 'ERROR 512';
			h1.style.color = 'red';
		}
	}, 3400);
	}

});
}, 5000);
