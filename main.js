const monday = document.querySelector('.container-monday');
const tuesday = document.querySelector('.container-tuesday');
const wednesday = document.querySelector('.container-wednesday');
const thursday = document.querySelector('.container-thursday');
const friday = document.querySelector('.container-friday');
const saturday = document.querySelector('.container-saturday');

const menu = document.querySelector('.menu');
const act2d = document.querySelector('.act2d');
const act2f = document.querySelector('.act2f');
const scheduleList1 =document.querySelector('.act2d-list');
const scheduleList2 =document.querySelector('.act2f-list');
const both=document.querySelector('.both');
const bothList=document.querySelector('.both-list');
const back=document.querySelector('.back');
let a= 0;
let scrollinY;


  window.addEventListener('scroll', () =>{
if (scrollinY < window.scrollY) {
   menu.style.display ="none";
  }else{
   menu.style.display ="flex";
  }

scrollinY = window.scrollY;
  });
act2d.addEventListener('click', ()=>{

	if (a==0) {
		  scheduleList1.style.display = "block";
		  return a=1;
	}else{
		  scheduleList1.style.display = "none";
		  return a=0;
	}
 
});

/** MENU BUTTON **/
const burger=document.querySelector('.menu');
burger.addEventListener('click', () =>{
  document.querySelector('ul').classList.toggle('active');
  document.querySelector('.nav-content').classList.toggle('active');

});
document.querySelector('.nav-content').addEventListener('click', ()=>{
document.querySelector('ul').classList.toggle('active');
document.querySelector('.nav-content').classList.toggle('active');
});


/** NAVBAR **/
document.getElementById('Schedule-comp').
addEventListener('click', function(){
	if (a==1) {
		  document.querySelector('.inside-list').style.display = "block";
		  document.querySelector('.inside-list-2d').style.display ="none";
		  return a=0;
	}else{
		  document.querySelector('.inside-list').style.display = "none";
		  return a=1;
	}
});

document.getElementById('Schedule-act2d').
addEventListener('click', function(){
	if (a==1) {
		  document.querySelector('.inside-list-2d').style.display = "block";
		  document.querySelector('.inside-list').style.display = "none";
		  return a=0;
	}else{
		  document.querySelector('.inside-list-2d').style.display = "none";
		  return a=1;
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
document.querySelector('.bothMonday').
addEventListener('click', bothfunction);
function bothfunction(){
	monday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "MONDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list').style.display ="block";
}
document.querySelector('#bothMonday').
addEventListener('click', bothfunctionA);
function bothfunctionA(){
	monday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "MONDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
    tuesday.style.display="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
    tuesdayschedAct2d .style.display = "none";
}



document.querySelector('.bothTuesday').
addEventListener('click', bothfunction2);
function bothfunction2(){
	tuesday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "TUESDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list').style.display ="block";
}
document.querySelector('#bothTuesday').
addEventListener('click', bothfunctionB);
function bothfunctionB(){
	tuesday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "TUESDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
    monday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
    tuesdayschedAct2d .style.display = "none";
}



document.querySelector('.bothWednesday').
addEventListener('click', bothfunction3);
function bothfunction3(){
	wednesday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "WEDNESDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list').style.display ="block";
}
document.querySelector('#bothWednesday').
addEventListener('click', bothfunctionC);
function bothfunctionC(){
	wednesday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "WEDNESDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
    monday.style.display ="none";
    tuesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
    tuesdayschedAct2d .style.display = "none";
}



document.querySelector('.bothThursday').
addEventListener('click', bothfunction4);
function bothfunction4(){
	thursday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "THURSDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list').style.display ="block";
}
document.querySelector('#bothThursday').
addEventListener('click', bothfunctionD);
function bothfunctionD(){
	thursday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "THURSDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
    monday.style.display ="none";
    tuesday.style.display="none";
    wednesday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
    tuesdayschedAct2d .style.display = "none";
}



document.querySelector('.bothFriday').
addEventListener('click', bothfunction5);
function bothfunction5(){
	friday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";;
	title.innerHTML = "FRIDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list').style.display ="block";
}
document.querySelector('#bothFriday').
addEventListener('click', bothfunctionE);
function bothfunctionE(){
	friday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";;
	title.innerHTML = "FRIDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
    monday.style.display ="none";
    tuesday.style.display="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    saturday.style.display="none";

    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
    tuesdayschedAct2d .style.display = "none";
}



document.querySelector('.bothSaturday')
.addEventListener('click', bothfunction6);
function bothfunction6(){
	saturday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "SATURDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list').style.display ="block";
}
document.querySelector('#bothSaturday')
.addEventListener('click', bothfunctionF);
function bothfunctionF(){
	saturday.style.display = "grid";
	home.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "SATURDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
    monday.style.display ="none";
    tuesday.style.display="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";

    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
    tuesdayschedAct2d .style.display = "none";
}





const home = document.querySelector('.home');
/*monday*/
const mondayAct2d = document.querySelector('.monday-act2d-list');
const mondayschedAct2d = document.querySelector('.monday-act2d');
/*tuesday*/
const tuesdayAct2d = document.querySelector('.tuesday-act2d-list');
const tuesdayschedAct2d = document.querySelector('.tuesday-act2d');
/*wednesday*/
const wednesdayAct2d = document.querySelector('.wednesday-act2d-list');
const wednesdayschedAct2d = document.querySelector('.wednesday-act2d');
/*thursday*/
const thursdayAct2d = document.querySelector('.thursday-act2d-list');
const thursdayschedAct2d = document.querySelector('.thursday-act2d');
/*friday*/
const fridayAct2d = document.querySelector('.friday-act2d-list');
const fridayschedAct2d = document.querySelector('.friday-act2d');
/*saturday*/
const saturdayAct2d = document.querySelector('.saturday-act2d-list');
const saturdayschedAct2d = document.querySelector('.saturday-act2d');
const title = document.querySelector('.title');
/*monday*/
mondayAct2d.addEventListener('click', ()=>{
	home.style.display="none";
	mondayschedAct2d.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "MONDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2d').style.display ="block";
});
document.getElementById('monday-act2d-list').
addEventListener('click', ()=>{
    home.style.display="none";
	mondayschedAct2d.style.display = "flex";
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "MONDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
});

/*tuesday*/
tuesdayAct2d.addEventListener('click', ()=>{
	home.style.display="none";
	tuesdayschedAct2d.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "TUESDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2d').style.display ="block";
});
document.getElementById('tuesday-act2d-list').
addEventListener('click', ()=>{
    home.style.display="none";
    mondayschedAct2d.style.display = "none";
	tuesdayschedAct2d.style.display = "flex";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "TUESDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
});

/*wednesday*/
wednesdayAct2d.addEventListener('click', ()=>{
	home.style.display="none";
	wednesdayschedAct2d.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "WEDNESDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2d').style.display ="block";
});
document.getElementById('wednesday-act2d-list').
addEventListener('click', ()=>{
    home.style.display="none";
    mondayschedAct2d.style.display = "none";
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "flex";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "WEDESDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
});

/*thursday*/
thursdayAct2d.addEventListener('click', ()=>{
	home.style.display="none";
	thursdayschedAct2d.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "THURSDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2d').style.display ="block";
});
document.getElementById('thursday-act2d-list').
addEventListener('click', ()=>{
    home.style.display="none";
    mondayschedAct2d.style.display = "none";
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "flex";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "THURSDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
});
/*friday*/
fridayAct2d.addEventListener('click', ()=>{
	home.style.display="none";
	fridayschedAct2d.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "FRIDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2d').style.display ="block";
});
document.getElementById('friday-act2d-list').
addEventListener('click', ()=>{
    home.style.display="none";
    mondayschedAct2d.style.display = "none";
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "flex";
	saturdayschedAct2d.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "FRIDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
});
/*saturday*/
saturdayAct2d.addEventListener('click', ()=>{
	home.style.display="none";
	saturdayschedAct2d.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "SATURDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2d').style.display ="block";
});
document.getElementById('saturday-act2d-list').
addEventListener('click', ()=>{
    home.style.display="none";
    mondayschedAct2d.style.display = "none";
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "SATURDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
});
/** BACK BUTTON **/
document.querySelector('.back').addEventListener('click', ()=>{
	document.querySelector('.home').style.display ="flex";
	monday.style.display ="none";
    tuesday.style.display="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";
	back.style.display = "none";
	title.innerHTML = "SCHEDULE";
	menu.style.display = "none";

	/* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
    tuesdayschedAct2d.style.display = "none";
    wednesdayschedAct2d.style.display = "none";
    thursdayschedAct2d.style.display = "none";
    fridayschedAct2d.style.display = "none";
    saturdayschedAct2d.style.display = "none";




});

const body = document.body;
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});