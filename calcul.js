function getCen(){
	return{
		Grupp:[3000,4000,5000],
		mesta:{
			mesto1:500,
			mesto2:1500,
			mesto3:1000,
		},
		afish:{500}
	};
}
		
function newprice()
{
	let s=document.getElementById("myselect");
	let select =s[0];
	let cena=0;
	let ceni=getCen();
	let CenaNumber =parseInt(select.value);
	cena=ceni.Grupp[CenaNumber];
	
	let radiot=document.getElementById("radios");
	if(select.value == "1"){
		radiot.style.display ="block";
	}
	else
		radiot.style.display = "none";
	let radios = document.getElementByName("myradio");
	radios.forEach(function(radio){
		if (radio.checked){
			let radioCena = ceni.mesta[radio.value];
			if (radioCena !== underfined){
				price += radioCena;
			}
		}
	});
	let checkboxes = document.querySelectorAll("#checkboxes input");
	checkboxes.forEach(function(checkbox){
		if (checkbox.checked){
			let afishCena =Ceni.afish[0];
			cena += afishCena;
		}
	});
	let checkf =document.getElementById("checkbox");
	if (select.value == "2"){
		checkf.style.display = "block";
	}
	else
		checkf.style.display = "none";
	let Cenabill = document.getElementById("out");
	let k = document.getElementsByName("number1");
	const chek =/^\d+$/;
	const pr= /[0-9/.]+/;
	let first = Cenabill.match(pr);
	if (chek.test(first)==false || chek.test(k.value)==false){
		Cenabill.innerHTML='Введённые данные неверны';
	}
	else
	{
		first[0] = Number.parseInt(first[0]);
		k[0] = Number.parseInt(k[0]);
		var res=first*k[0].value;
		Cenabill.innerHTML = Math.abs(res);
		return false;
	}
}

window.addEventListener('DOMContentLoaded',function(event) {
    console.log("DOM finaly loaded and parsed");
    const chek =/^\d+$/;
    let radiof = document.getElementById("radios");
	radiof.style.display="none";
	
    let sel = document.getElementById("myselect");

    let select1=sel[0];
	select1.addEventListener("change",function(event){
	    let select = event.target;
	    newprise();
	});
	 let kolvo = document.getElementsByName("number1");
	kolvo.addEventListener("input",function(event){
		let target =event.target;
		newprice();
	});
    let radios = document.getElementByName("myradio");
	radios.forEach(function(radio){
		radio.addEventListener("change",function(event){
			let r = event.target;
			newprise();
		});
	});
	
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
          let g = event.target;
          newprice();
      });
    });
   
	newprice();
});
	   
