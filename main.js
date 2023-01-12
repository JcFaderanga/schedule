const monday = document.querySelector('.container-monday');
const tuesday = document.querySelector('.container-tuesday');
const wednesday = document.querySelector('.container-wednesday');

const act2d = document.querySelector('.act2d');
const act2f = document.querySelector('.act2f');
const scheduleList1 =document.querySelector('.act2d-list');
const scheduleList2 =document.querySelector('.act2f-list');
const both=document.querySelector('.both');
const bothList=document.querySelector('.both-list');
const back=document.querySelector('.back');
 let a= 0;
act2d.addEventListener('click', ()=>{

	if (a==0) {
		  scheduleList1.style.display = "block";
		  return a=1;
	}else{
		  scheduleList1.style.display = "none";
		  return a=0;
	}
 
});

act2f.addEventListener('click', ()=>{
   
   if (a==0) {
		  scheduleList2.style.display = "block";
		  return a=1;
	}else{
		  scheduleList2.style.display = "none";
		  return a=0;
	}
});

both.addEventListener('click', ()=>{

	if (a==0) {
		  bothList.style.display = "block";
		  return a=1;
	}else{
		  bothList.style.display = "none";
		  return a=0;
	}
 
});
document.querySelector('.bothMonday').addEventListener('click', bothfunction);
function bothfunction(){
	monday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "block";
	title.innerHTML = "MONDAY";
}
document.querySelector('.bothTuesday').addEventListener('click', bothfunction2);
function bothfunction2(){
	tuesday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "block";
	title.innerHTML = "TUESDAY";
}
document.querySelector('.bothWednesday').addEventListener('click', bothfunction3);
function bothfunction3(){
	wednesday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "block";
	title.innerHTML = "WEDNESDAY";
}

const home = document.querySelector('.home');
const mondayAct2d = document.querySelector('.monday-act2d-list');
const mondaypage = document.querySelector('.monday-act2d');
const title = document.querySelector('.title');


mondayAct2d.addEventListener('click', ()=>{
	home.style.display="none";
	mondaypage.style.display = "flex";
	back.style.display = "block";

});

document.querySelector('.back').addEventListener('click', ()=>{
	document.querySelector('.home').style.display ="flex";
	monday.style.display ="none";
    tuesday.style.display="none";
    wednesday.style.display="none";
	back.style.display = "none";
	mondaypage.style.display = "none";
	title.innerHTML = "SCHEDULE";


});