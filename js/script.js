window.addEventListener("load", main);

function costoRecibo(){
	var a1 = document.getElementById("c1000").value;
	var b1 = document.getElementById("1000").innerHTML;
	var c1 = (parseInt(a1) * parseInt(b1));
	document.getElementById("m1000").innerHTML = c1;	

	var a2 = document.getElementsByClassName("c500")[0].value;
	var b2 = document.getElementsByClassName("500")[0].innerHTML;
	var c2 = eval(a2 * b2);
	document.getElementsByClassName("m500")[0].innerHTML = c2;

	var a3 = document.getElementsByClassName("c350")[0].value;
	var b3 = document.getElementsByClassName("350")[0].innerHTML;
	var c3 = eval(a3 * b3);
	document.getElementsByClassName("m350")[0].innerHTML = c3;

	document.getElementsByClassName("ctotal")[0].innerHTML = parseInt(a1) + parseInt(a2) + parseInt(a3);
	document.getElementsByClassName("mtotal")[0].innerHTML = c1 + c2 + c3;

}

function recargaVnet(){
	var a = document.getElementsByClassName("salant")[0].value;
	var b = document.getElementsByClassName("trasdia")[0].value;  
	var c = document.getElementsByClassName("comtrans")[0].value;
	var d = document.getElementsByClassName("toredia")[0].value;

	var e = (parseInt(a) + parseInt(b) + parseInt(c)) - parseInt(d);

	document.getElementsByClassName("salfinal")[0].innerHTML = e;

}

function saldosBN(){
	var a = document.getElementsByClassName("salini")[0].value;
	var b = document.getElementsByClassName("comdiant")[0].value;
	var c = document.getElementsByClassName("adebandia")[0].value;
	var d = document.getElementsByClassName("depoante")[0].value;
	var e = document.getElementsByClassName("pagodia")[0].value;

	var f = (parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d)) - parseInt(e);

	document.getElementsByClassName("salfinal2")[0].innerHTML = f;

	document.getElementsByClassName("transvnet")[0].innerHTML = document.getElementsByClassName("trasdia")[0].value;

	document.getElementsByClassName("total2")[0].innerHTML = eval(e - document.getElementsByClassName("transvnet")[0].innerHTML); 


}

function entradaDia(){
	var tarjeta = document.getElementsByClassName("tarjetas")[0].value;
	var pago = document.getElementsByClassName("pagobn")[0].innerHTML = document.getElementsByClassName("total2")[0].innerHTML;
	var recibo = document.getElementsByClassName("monrebn")[0].innerHTML = document.getElementsByClassName("mtotal")[0].innerHTML;
	var recarga = document.getElementsByClassName("revnet")[0].innerHTML = document.getElementsByClassName("toredia")[0].value;

	var totalIngreso = (parseInt(tarjeta) + parseInt(pago) + parseInt(recibo) + parseInt(recarga));
	document.getElementsByClassName("totalingreso")[0].innerHTML = totalIngreso;

	var pagoCaja = document.getElementsByClassName("pagocaja")[0].innerHTML = document.getElementsByClassName("total4")[0].innerHTML;

	var total = totalIngreso - parseInt(pagoCaja);

	var adelanto = document.getElementsByClassName("adedepo")[0].innerHTML = document.getElementsByClassName("adebandia")[0].value;

	document.getElementsByClassName("total3")[0].innerHTML = total;
	document.getElementsByClassName("totefecaja")[0].innerHTML = total - parseInt(adelanto);


}

function pagosCaja(){
	var a = document.getElementsByClassName("tax1")[0].value;
	var b = document.getElementsByClassName("tax2")[0].value;
	var c = document.getElementsByClassName("gastodia")[0].value;

	var totalPago = parseInt(a) + parseInt(b) + parseInt(c);

	document.getElementsByClassName("total4")[0].innerHTML = totalPago;

}


function limpiar(){
	document.getElementById("c1000").value = 0;
	document.getElementsByClassName("c500")[0].value = 0;
	document.getElementsByClassName("c350")[0].value = 0;
	document.getElementsByClassName("salant")[0].value = 0;
	document.getElementsByClassName("trasdia")[0].value = 0; 
	document.getElementsByClassName("comtrans")[0].value = 0;
	document.getElementsByClassName("toredia")[0].value = 0;
	document.getElementsByClassName("salini")[0].value = 0;
	document.getElementsByClassName("comdiant")[0].value = 0;
	document.getElementsByClassName("adebandia")[0].value = 0;
	document.getElementsByClassName("depoante")[0].value = 0;
	document.getElementsByClassName("pagodia")[0].value = 0;
	document.getElementsByClassName("tarjetas")[0].value = 0;
	document.getElementsByClassName("pagocredito")[0].value = 0;
	document.getElementsByClassName("tax1")[0].value = 0;
	document.getElementsByClassName("tax2")[0].value = 0;
	document.getElementsByClassName("gastodia")[0].value = 0;

}

function main(){
	limpiar();
	var a = document.getElementsByClassName("limpiar")[0];
	a.addEventListener("click", limpiar);

	setInterval(costoRecibo, 2000);
	setInterval(recargaVnet, 2000);
	setInterval(saldosBN, 2000);
	setInterval(pagosCaja, 2000);
	setInterval(entradaDia, 2000);
	
}








