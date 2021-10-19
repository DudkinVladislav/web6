function getCen(){
	return{
		Grupp:[3000,4000,5000],
		mesta:{
			mesto1:500,
			mesto2:1500,
			mesto3:1000,
		},
		afish:500
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
	if(select.value == "2"){
		radiot.style.display ="block";
	}
	else
		radiot.style.display = "none";
	let radios = document.getElementsByName("myradio");
	radios.forEach(function(radio){
		if (radio.checked){
			let radioCena = ceni.mesta[radio.value];
			if (radioCena !== undefined){
				cena += radioCena;
			}
		}
	});
	let checkboxes = document.querySelectorAll("#checkboxes input");
	checkboxes.forEach(function(checkbox){
		if (checkbox.checked){
			let afishCena =ceni.afish;
			cena += afishCena;
		}
	});
	let checkf =document.getElementById("checkbox");
	if (select.value == "3"){
		checkf.style.display = "block";
	}
	else
		checkf.style.display = "none";
	let Cenabill = document.getElementById("out");
	let k = document.getElementsByName("number1");
	if (select.value =="1"){
		cena=ceni.Grupp[0];
		k[0] = Number.parseInt(k[0]);
		var rec=cena*k[0].value;
		Cenabill.innerHTML = Math.abs(rec);
	}
	const chek =/^\d+$/;
	const pr= /[0-9/.]+/;
	
	if  (chek.test(k.value)==false){
		Cenabill.innerHTML='Введённые данные неверны';
	}
	else
	{
		k[0] = Number.parseInt(k[0]);
		var res=cena*k[0].value;
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
	let kol= kolvo[0];
	kol.addEventListener("input",function(event){
		let p =event.target;
		newprice();
	});
    let radios = document.getElementsByName("myradio");
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
	   
