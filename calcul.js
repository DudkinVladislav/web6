function proizvedenie() {
    const chek =/^\d+$/
    let num1 = document.getElementsByName("number1");
    let num2 = document.getElementsByName("number2");
	
    if (chek.test(num1[0].value) == false|| chek.test(num2[0].value) == false) {
        document.getElementById('out').innerHTML='Введённые данные неверны.';
	return false;
    }
    else{
        let num3 = document.getElementById("out");
        num1[0] = Number.parseInt(num1[0]);
        num2[0] = Number.parseInt(num2[0]);
	var result = num1[0].value * num2[0].value;
        num3.innerHTML = Math.abs(result);
	return false;   
    }
}

window.addEventListener('DOMContentLoaded',function(event) {
    console.log("DOM finaly loaded and parsed");
	
    let knopka = document.getElementById("my-button");
    knopka.addEventListener("Click", proizvedenie);
})
