function getCen(){
	return{
		Grupp:[3000,4000,5000],
		mesta:[500,1500,1000],
		afish:500
	};
}
		
function newprice()
{
	let s=document.getElementById("myselect");
	let cena=0;
	let ceni=getCen();
	let radiot=document.getElementById("radios");
	if(s.value == "1"){
		radiot.style.display ="block";
	}
	else{
		radiot.style.display = "none";
	}
	let checkf =document.getElementById("checkbox");
	if (s.value == "2"){
		checkf.style.display = "block";
	}
	else
		checkf.style.display = "none";
	let Cenabill = document.getElementById("out");
	let k = document.getElementsByName("number1");
	
	if (s.value =="0"){
		cena=ceni.Grupp[Number.parseInt(s.value)];
		k[0] = Number.parseInt(k[0]);
		var rec=cena*k[0].value;
		Cenabill.innerHTML = Math.abs(rec);
	}
	
	if (s.value=="1")
	{
		cena=ceni.Grupp[Number.parseInt(s.value)];
		let radios = document.getElementsByName("myradio");
	radios.forEach(function(radio)
	{
		if (radio.checked)
		{
			let radioCena = ceni.mesta[radio.value];
			if (radioCena !== undefined)
			{
				cena += radioCena;
			}
		}
	}
		k[0]=Number.parseInt(k[0]);
		var rec1=cena*k[0].value;
		Cenabill.innnerHTML = Math.abs(rec1);
	}
	if (s.value=="2")
	{
		cena=ceni.Grupp[Number.parseInt(s.value)];
		let checkboxes = document.getElementsByName("afish");
		checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
          let afishCena = ceni.afish;
          cena += afishCena;
      }
		}
		k[0]=Number.parseInt(k[0]);
		var rec2=cena*k[0].value;
		Cenabill.innnerHTML = Math.abs(rec2);	   
	}
		let radios = document.getElementsByName("myradio");
	radios.forEach(function(radio)
	{
		if (radio.checked)
		{
			let radioCena = ceni.mesta[radio.value];
			if (radioCena !== undefined)
			{
				cena += radioCena;
			}
		}
	}
		k[0]=Number.parseInt(k[0]);
		var rec1=cena*k[0].value;
		Cenabill.innnerHTML = Math.abs(rec1);
	}
	
		
	const chek =/^\d+$/;
	const pr= /[0-9/.]+/;
	
	if  (chek.test(Number.parseInt(k[0].value))==false){
		Cenabill.innerHTML='Введённые данные неверны';
	}
	
}

window.addEventListener('DOMContentLoaded',function(event) {
    console.log("DOM finaly loaded and parsed");
    const chek =/^\d+$/;
    let radiof = document.getElementById("radios");
	radiof.style.display="none";
	
    let select1 = document.getElementById("myselect");

    
	select1.addEventListener("change",function(event){
	    let select = event.target;
	    newprice();
	});
	 let kolvo = document.getElementsByName("number1");
	let kol= kolvo[0];
	kol.addEventListener("input",function(event){
		let p = event.target;
		newprice();
	});
    let radios = document.getElementsByName("myradio");
	radios.forEach(function(radio){
		radio.addEventListener("change",function(event){
			let r = event.target;
			newprice();
		});
	});
	
    let checkboxes = document.getElementsByName("afish");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
          let g = event.target;
          newprice();
      });
    });
   
	newprice();
});
	   
