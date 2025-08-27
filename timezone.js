
var localtime=document.getElementById('local');
var localdates=document.getElementById('localdate');
var selected_time= document.getElementById('selected-time');
var selected_date=document.getElementById('selected-date');
var selectedtimezone=document.getElementById('selected-time-zone');
function updatetime(){
    let date=new Date();
    //Local time
    const formatterTime= new Intl.DateTimeFormat('en-US',{
        hour:'2-digit',
        hour12:true,
        minute:'2-digit',
        second:'2-digit'
    });
    const formatterDate=new Intl.DateTimeFormat('en-GB',{
        day:'2-digit',
        month:'long',
        year:'numeric'
    });
    localtime.innerHTML =formatterTime.format(date);
    localdates.innerHTML =formatterDate.format(date);
    //selected time-zone
    const formatterselected_time=new Intl.DateTimeFormat('en-GB',{
        hour:'2-digit',
        hour12:true,
        minute:'2-digit',
        second:'2-digit',
        timeZone:selectedtimezone.value
    });
    const formatter_selected_date= new Intl.DateTimeFormat('en-GB',{
        day:'2-digit',
        month:'long',
        year:'numeric',
        timeZone:selectedtimezone.value
    });
    selected_time.innerHTML=formatterselected_time.format(date);
    selected_date.innerHTML=formatter_selected_date.format(date);   
}
setInterval(updatetime,1000);
updatetime();
selectedtimezone.addEventListener('change',updatetime);
updatetime();
