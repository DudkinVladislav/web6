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
var rez1=[2000,3000,3000];
var rez2=[0,1000,500];
var rez3=500;
let rezult=0;
window.addEventListener('DOMContentLoaded',function(event) {
    console.log("DOM finaly loaded and parsed");
    const chek =/^\d+$/
    let num1 = document.getElementsByName("number1");
	if(chek.test(num1[0].value==false)
	   {document.getElementById('out').innerHTML='Введённые данные неверны.';}
    let num3 = document.getElementById("out");
    let sel = document.getElementByName("myselect");
    sel[0].addEventListener("change",function(event){
	    let select = event.target;
	    let radios = document.getElementById("radios");
	    let checkbox = document.getElementByClassName("checkbox"); 
	    console.log(select.value);
	    if(select.value=="1"){let rezult+=rez1[0];
				  let num3.innerHTML = Math.abs(result);
				 }
	    if(select.value=="2"){
		    radios.style.display="block";
		   let rezult+=rez1[1];
		   let num3.innerHTML = Math.abs(result);
	    }
	    else{
		    radios.style.display="none";
	    }
	    if(select.value=="3"){
		    checkbox.style.display="block";
		    let rezult+=rez1[2];
		    let num3.innerHTML = Math.abs(result); 
	    }
	    else{
		    checkbox.style.display="none";
	    }
    });
	let r = document.querySelectorAll(".radios input[type=radio]");

  r.forEach(function(radio) {

    radio.addEventListener("change", function(event) {

      let r = event.target;

      console.log(r.value);
	    if (r.value=="r1"){
		    let rezult=rez1[1]+rez2[0];
		    let num3.innerHTML = Math.abs(result);
			      }
	    if (r.value=="r2"){
		    let rezult=rez1[1]+rez2[1];
		    let num3.innerHTML = Math.abs(result);
			      }
	    if (r.value=="r3"){
		    let rezult=rez1[1]+rez2[2];
		    let num3.innerHTML = Math.abs(result);
			      }

    });
    
  });
    
	    
    
})
