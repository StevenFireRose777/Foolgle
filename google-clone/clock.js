// JS file for clock feature !
// Only in Military time,


function startTime(){
  const today = new Date(); // Gets current time info
  let h = today.getHours(); // gets hours
  let m = today.getMinutes(); // gets mins
  let s = today.getSeconds(); // gets secs
  m = checkTime(m); // makes sure to load the time
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);


}

function checkTime(i){
  if(i < 10){
    i = "0" + i; // if it is 1-9, a zero will be added infront like "01"
  }
  return i; // if >= 10
}

