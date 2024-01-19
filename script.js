let start= document.getElementById('start');
let stop= document.getElementById('stop');
let reset=document.getElementById('reset');
let hr= "00";
let min = "00";
let sec="00";
let count="00";
let timer;
function stopwatch(){
     if(timer){
        count++;
     } 
     if(count<=9){
        document.getElementById('count').innerText="0"+count;
     }
     if(count>9){
      document.getElementById('count').innerText=count;
     }
     
     if(count>99){
        sec++;
        document.getElementById('sec').innerText="0"+sec;
        count=0;
      document.getElementById('count').innerText="0"+0;
      
     }
     if(sec>9){
      document.getElementById('sec').innerText=sec;
     }
   
   if(sec==60){
     min ++;
      document.getElementById('min').innerText="0"+min;
      sec=0;
    document.getElementById('sec').innerText="0"+0;
    
   }
   if(min==60){
      hour ++;
       document.getElementById('hour').innerText="0"+hour;
       min=0;
     document.getElementById('min').innerText="0"+0;
     
    }

    setTimeout(stopwatch,10);
  
}
 start.addEventListener('click',function(){
    timer=true;
    stopwatch();
 });
 stop.addEventListener('click', function(){
    timer=false;
 });
 reset.addEventListener('click',function(){
    timer=false;
    hr="00";
    min="00";
    sec="00";
    count="0";
  document.getElementById('hr').innerHTML=hr;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
    document.getElementById('count').innerHTML=count;
 });
 