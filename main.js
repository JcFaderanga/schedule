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
let a= true;

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

	if (a==true) {
		  scheduleList1.style.display = "block";
		  return a=false;
	}else{
		  scheduleList1.style.display = "none";
		  return a=true;
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


/** NAVBAR BUTTONS **/
document.getElementById('Schedule-comp').
addEventListener('click', function(){
	if (a == true ) {
		  document.querySelector('.inside-list').style.display = "block";
		  document.querySelector('.inside-list-2d').style.display ="none";
		  document.querySelector('.inside-list-2f').style.display = "none";
		  return a=false;
	}else{
		  document.querySelector('.inside-list').style.display = "none";
		  return a=true;
	}
});

document.getElementById('Schedule-act2d').
addEventListener('click', function(){
	if (a == true) {
		  document.querySelector('.inside-list-2d').style.display = "block";
		  document.querySelector('.inside-list-2f').style.display = "none";
		  document.querySelector('.inside-list').style.display = "none";
		  return a=false;
	}else{
		  document.querySelector('.inside-list-2d').style.display = "none";
		  return a=true;
	}
});

document.getElementById('Schedule-act2f').
addEventListener('click', function(){
	if (a == true) {
		  document.querySelector('.inside-list-2f').style.display = "block";
		  document.querySelector('.inside-list-2d').style.display = "none";
		  document.querySelector('.inside-list').style.display = "none";
		  return a=false;
	}else{
		  document.querySelector('.inside-list-2d').style.display = "none";
		  return a=true;
	}
});

act2f.addEventListener('click', ()=>{
   
   if (a==true) {
		  scheduleList2.style.display = "block";
		  return a=false;
	}else{
		  scheduleList2.style.display = "none";
		  return a=true;
	}
});

both.addEventListener('click', ()=>{

	if (a==true) {
		  bothList.style.display = "block";
		  return a=false;
	}else{
		  bothList.style.display = "none";
		  return a=true;
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
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";

	/* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";

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
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";

	/* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";

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
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";

	/* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";

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
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";

	/* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";

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
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";

	/* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";

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
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";

	/* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";

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


     /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";
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

    /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";
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

    /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";
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

    /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";
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

    /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";
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

    /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";
});

/*monday*/
const mondayAct2f = document.querySelector('.monday-act2f-list');
const mondayschedAct2f = document.querySelector('.monday-act2f');
/*tuesday*/
const tuesdayAct2f = document.querySelector('.tuesday-act2f-list');
const tuesdayschedAct2f = document.querySelector('.tuesday-act2f');
/*wednesday*/
const wednesdayAct2f = document.querySelector('.wednesday-act2f-list');
const wednesdayschedAct2f = document.querySelector('.wednesday-act2f');
/*thursday*/
const thursdayAct2f = document.querySelector('.thursday-act2f-list');
const thursdayschedAct2f = document.querySelector('.thursday-act2f');
/*friday*/
const fridayAct2f = document.querySelector('.friday-act2f-list');
const fridayschedAct2f = document.querySelector('.friday-act2f');
/*saturday*/
const saturdayAct2f = document.querySelector('.saturday-act2f-list');
const saturdayschedAct2f = document.querySelector('.saturday-act2f');


/*monday*/
mondayAct2f.addEventListener('click', ()=>{
	home.style.display="none";
	mondayschedAct2f.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "MONDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2f').style.display ="block";
});
document.getElementById('monday-act2f-list').
addEventListener('click', ()=>{
    home.style.display="none";
	mondayschedAct2f.style.display = "flex";
	tuesdayschedAct2f.style.display = "none";
	wednesdayschedAct2f.style.display = "none";
	thursdayschedAct2f.style.display = "none";
	fridayschedAct2f.style.display = "none";
	saturdayschedAct2f.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "MONDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');

    /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";
 });

/*tuesday*/
tuesdayAct2f.addEventListener('click', ()=>{
	home.style.display="none";
	tuesdayschedAct2f.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "TUESDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2f').style.display ="block";
});
document.getElementById('tuesday-act2f-list').
addEventListener('click', ()=>{
    home.style.display="none";
    mondayschedAct2f.style.display = "none";
	tuesdayschedAct2f.style.display = "flex";
	wednesdayschedAct2f.style.display = "none";
	thursdayschedAct2f.style.display = "none";
	fridayschedAct2f.style.display = "none";
	saturdayschedAct2f.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "TUESDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');

    /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";
});

/*wednesday*/
wednesdayAct2f.addEventListener('click', ()=>{
	home.style.display="none";
	wednesdayschedAct2f.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "WEDNESDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2f').style.display ="block";
});
document.getElementById('wednesday-act2f-list').
addEventListener('click', ()=>{
    home.style.display="none";
    mondayschedAct2f.style.display = "none";
	tuesdayschedAct2f.style.display = "none";
	wednesdayschedAct2f.style.display = "flex";
	thursdayschedAct2f.style.display = "none";
	fridayschedAct2f.style.display = "none";
	saturdayschedAct2f.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "WEDESDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');

    /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";
});
/*thursday*/
thursdayAct2f.addEventListener('click', ()=>{
	home.style.display="none";
	thursdayschedAct2f.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "THURSDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2f').style.display ="block";
});
document.getElementById('thursday-act2f-list').
addEventListener('click', ()=>{
    home.style.display="none";
    mondayschedAct2f.style.display = "none";
	tuesdayschedAct2f.style.display = "none";
	wednesdayschedAct2f.style.display = "none";
	thursdayschedAct2f.style.display = "flex";
	fridayschedAct2f.style.display = "none";
	saturdayschedAct2f.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "THURSDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');

    /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";
    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";
});
/*friday*/
fridayAct2f.addEventListener('click', ()=>{
	home.style.display="none";
	fridayschedAct2f.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "FRIDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2f').style.display ="block";
});
document.getElementById('friday-act2f-list').
addEventListener('click', ()=>{
    home.style.display="none";
    mondayschedAct2f.style.display = "none";
	tuesdayschedAct2f.style.display = "none";
	wednesdayschedAct2f.style.display = "none";
	thursdayschedAct2f.style.display = "none";
	fridayschedAct2f.style.display = "flex";
	saturdayschedAct2f.style.display = "none";
	back.style.display = "flex";
	title.innerHTML = "FRIDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');

    /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";
});

/*saturday*/
saturdayAct2f.addEventListener('click', ()=>{
	home.style.display="none";
	saturdayschedAct2f.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "FRIDAY";
	menu.style.display = "flex";
	document.querySelector('.inside-list-2f').style.display ="block";
});
document.getElementById('saturday-act2f-list').
addEventListener('click', ()=>{
    home.style.display="none";
    mondayschedAct2f.style.display = "none";
	tuesdayschedAct2f.style.display = "none";
	wednesdayschedAct2f.style.display = "none";
	thursdayschedAct2f.style.display = "none";
	fridayschedAct2f.style.display = "none";
	saturdayschedAct2f.style.display = "flex";
	back.style.display = "flex";
	title.innerHTML = "SATURDAY";
	menu.style.display = "flex";
	document.querySelector('ul').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');

    /** comparison **/
     monday.style.display ="none";
     tuesday.style.display ="none";
    wednesday.style.display="none";
    thursday.style.display="none";
    friday.style.display="none";
    saturday.style.display="none";

    /* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
	tuesdayschedAct2d.style.display = "none";
	wednesdayschedAct2d.style.display = "none";
	thursdayschedAct2d.style.display = "none";
	fridayschedAct2d.style.display = "none";
	saturdayschedAct2d.style.display = "none";
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


    /* NAVBARS BUTTON */
	document.querySelector('.inside-list-2d').style.display = "none";
	document.querySelector('.inside-list-2f').style.display = "none";
	document.querySelector('.inside-list').style.display = "none";

	/* ACT 2D PAGE */
    mondayschedAct2d.style.display = "none";
    tuesdayschedAct2d.style.display = "none";
    wednesdayschedAct2d.style.display = "none";
    thursdayschedAct2d.style.display = "none";
    fridayschedAct2d.style.display = "none";
    saturdayschedAct2d.style.display = "none";

    /* ACT 2F PAGE */
    mondayschedAct2f.style.display = "none";
    tuesdayschedAct2f.style.display = "none";
    wednesdayschedAct2f.style.display = "none";
    thursdayschedAct2f.style.display = "none";
    fridayschedAct2f.style.display = "none";
    saturdayschedAct2f.style.display = "none";
});
