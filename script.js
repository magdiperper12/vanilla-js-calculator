let nums = document.querySelectorAll('.myButton');
let outbut = document.getElementById('out');
nums.forEach(function (num) {
	num.addEventListener('click', function () {
		if (num.value == '=') {
			outbut.value = eval(outbut.value);
		} else if (num.value == 'c') {
			outbut.value = '';
		} else {
			outbut.value += num.value;
		}
	});
});
