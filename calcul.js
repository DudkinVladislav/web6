function proizvedenie() {
    const chek =/^\d+$/
    let num1 = document.getElementsByName("number1");	
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
    let sel = document.getElementByName("myselect");
    sel[0].addEventListener("change",function(event){
	    let select = event.target;
	    let radios = document.getElementById("radios");
	    let checkbox = document.getElementByClassName("checkbox"); 
	    console.log(select.value);
	    if(select.value=="2"){
		    radios.style.display="block";
	    }
	    else{
		    radios.style.display="none";
	    }
	    if(select.value=="3"){
		    checkbox.style.display="block";
	    }
	    else{
		    checkbox.style.display="none";
	    }
    knopka.addEventListener("Click", proizvedenie);
})
