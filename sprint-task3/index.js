let dollar = 431
let euro = 507
function change(){
	let summa = document.getElementById("inputSum")
	let choice = document.getElementById("currency")
	if(choice.value === "KZT"){
		let kztInput = document.getElementById("kzt")
		let usdInput = document.getElementById("usd")
		let eurInput = document.getElementById("eur")

		kztInput.value = "--"
		usdInput.value = Math.round(summa.value/dollar * 100)/100
		eurInput.value = Math.round(summa.value/euro * 100)/100
	}else if(choice.value === "USD"){
		let kztInput = document.getElementById("kzt")
		let usdInput = document.getElementById("usd")
		let eurInput = document.getElementById("eur")

		kztInput.value = Math.round(summa.value * dollar)
		usdInput.value = "--"
		eurInput.value = Math.round((summa.value * dollar)/euro *100)/100
	}else{
		let kztInput = document.getElementById("kzt")
		let usdInput = document.getElementById("usd")
		let eurInput = document.getElementById("eur")

		kztInput.value = Math.round(summa.value * euro)
		usdInput.value = Math.round((summa.value * euro)/dollar *100)/100
		eurInput.value = "--"
	}
}