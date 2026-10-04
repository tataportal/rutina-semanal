'use strict';
const calendarStart=new Date(2026,9,3),calendarEnd=new Date(2026,11,31);
const calendarToday=new Date();calendarToday.setHours(0,0,0,0);
const calendarKey=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const calendarChecks=read('rutina-calendar-2026',{});
let calendarMonth=Math.max(9,Math.min(11,calendarToday.getFullYear()===2026?calendarToday.getMonth():9));
let decemberGoal=read('rutina-goal-2026','Hasta diciembre: ganar músculo, progresar en cargas y mejorar mi resistencia.');
const oldDefault='Llegar a diciembre con una rutina constante de hipertrofia: progresar en peso o repeticiones con buena técnica, mejorar mi resistencia y respetar la recuperación.';if(decemberGoal===oldDefault){decemberGoal='Hasta diciembre: ganar músculo, progresar en cargas y mejorar mi resistencia.';save('rutina-goal-2026',decemberGoal)}
function renderCalendar(){
 $('goal-text').textContent=decemberGoal;
 $('calendar-month').textContent=new Date(2026,calendarMonth,1).toLocaleDateString('es-PE',{month:'long',year:'numeric'});
 $('calendar-prev').disabled=calendarMonth===9;$('calendar-next').disabled=calendarMonth===11;
 const completed=Object.entries(calendarChecks).filter(([key,done])=>done&&key>='2026-10-03'&&key<='2026-12-31'&&key<=calendarKey(calendarToday)).length;
 $('calendar-progress').textContent=`${completed} ${completed===1?'día cumplido':'días cumplidos'}`;
 const grid=$('goal-calendar');grid.replaceChildren();
 for(const weekday of ['L','M','M','J','V','S','D']){const label=document.createElement('span');label.className='calendar-weekday';label.textContent=weekday;grid.append(label)}
 const first=new Date(2026,calendarMonth,1);for(let i=0;i<(first.getDay()+6)%7;i++){const blank=document.createElement('span');grid.append(blank)}
 const count=new Date(2026,calendarMonth+1,0).getDate();
 for(let number=1;number<=count;number++){
  const date=new Date(2026,calendarMonth,number),key=calendarKey(date),checked=!!calendarChecks[key];
  const button=document.createElement('button');button.className='calendar-day';button.classList.toggle('completed',checked);button.classList.toggle('today',key===calendarKey(calendarToday));button.disabled=date<calendarStart||date>calendarEnd||date>calendarToday;
  button.setAttribute('aria-pressed',String(checked));button.setAttribute('aria-label',`${date.toLocaleDateString('es-PE',{day:'numeric',month:'long'})}: ${checked?'cumplido':'sin marcar'}`);if(key===calendarKey(calendarToday))button.setAttribute('aria-current','date');
  const numeral=document.createElement('span');numeral.textContent=number;const mark=document.createElement('span');mark.className='calendar-check';mark.textContent=checked?'✓':'';mark.setAttribute('aria-hidden','true');button.append(numeral,mark);
  button.onclick=()=>{calendarChecks[key]=!calendarChecks[key];save('rutina-calendar-2026',calendarChecks);renderCalendar()};grid.append(button);
 }
}
$('calendar-prev').onclick=()=>{calendarMonth--;renderCalendar()};$('calendar-next').onclick=()=>{calendarMonth++;renderCalendar()};
$('goal-edit').onclick=()=>{$('goal-input').value=decemberGoal;$('goal-form').hidden=false;$('goal-text').hidden=true;$('goal-edit').hidden=true;$('goal-input').focus()};
function closeGoal(){$('goal-form').hidden=true;$('goal-text').hidden=false;$('goal-edit').hidden=false}
$('goal-cancel').onclick=closeGoal;$('goal-form').onsubmit=event=>{event.preventDefault();const value=$('goal-input').value.trim();if(!value)return;decemberGoal=value;save('rutina-goal-2026',value);closeGoal();renderCalendar()};
window.addEventListener('storage',event=>{if(event.key==='rutina-calendar-2026'){for(const key of Object.keys(calendarChecks))delete calendarChecks[key];Object.assign(calendarChecks,read(event.key,{}));renderCalendar()}if(event.key==='rutina-goal-2026'){decemberGoal=read(event.key,decemberGoal);renderCalendar()}});renderCalendar();
