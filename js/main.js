
let ul = document.getElementsByClassName('list-group')[0];
let select = document.getElementsByClassName('custom-select')[0];
let nav = document.getElementsByClassName('nav_container')[0];


$('.submit_btn').on('click', function(e){
	e.preventDefault();
	apiCall()

});


let apiCall = () => {
	$('.my_list').remove();
	$('.analysisBtn').remove();
	let selectedValue=select.value;
	$.ajax({
		url : "http://13.232.132.235:8080",
		type : 'POST',
		data : {"value": selectedValue}			
		})
	.done(function(data){
		console.log(data)

		let a=document.createElement("A");		
		a.className="analysisBtn btn btn-warning";
		a.href="analysis.html";
		a.innerHTML="Analysis";
		nav.appendChild(a);

		data.data.forEach(element=>{
			let li=document.createElement("LI");
			li.innerHTML=`${element.state}
		    <span class="badge badge badge-pill">${element.Production}</span>`;
		    li.className="my_list list-group-item d-flex justify-content-between align-items-center";
		 	ul.appendChild(li);
		});


	});
	
}