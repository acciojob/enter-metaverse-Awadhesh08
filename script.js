//your JS code here. If required.
const button = document.getElementById("enterBtn");
const para = document.getElementById("status");

button.addEventListener("click", ()=>{
	let h1 = document.createElement("h1");
	h1.id = "status";
	h1.innerText = "Entered Metaverse";
	para.parentNode.replaceChild(h1, para); 
	// document.body.insertBefore(h1,para);
	para.remove();
})