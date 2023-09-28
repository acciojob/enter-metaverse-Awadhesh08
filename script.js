//your JS code here. If required.
const button = document.getElementById("enterBtn");


button.addEventListener("click", ()=>{
	const para = document.getElementById("status");
	let h1 = document.createElement("h1");
	// h1.id = "status";
	h1.innerText = "Entered Metaverse";
	document.body.insertBefore(h1,para);
	para.remove();
})