const input = document.querySelector(".screen");
const year = document.getElementById("years");
const Month = document.getElementById("months");
const Days = document.getElementById("days");
const button = document.querySelector(".button");
const Result = document.querySelector(".result");
const MoreResult = document.querySelector(".moreResult");
const TolDays = document.getElementById("total-Days");
const TolWeek = document.getElementById("Total-Week");
const TolHour = document.getElementById("Total-hours");
const BofDay = document.getElementById("Birth-day");


button.addEventListener('click' ,function(){
  const DobValue =  input.value ;
const dob = new Date(DobValue);
const ToDate = new Date();
const TalYear = ToDate.getFullYear() - dob.getFullYear();
let TalMonth = ToDate.getMonth() - dob.getMonth();
const TalDays = ToDate.getDate() - dob.getDate();
 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  if(TalDays < 0){
  const prevMonthDays = new Date(ToDate.getFullYear(), ToDate.getMonth(), 0).getDate();
  Days.innerHTML = prevMonthDays + TalDays;
  TalMonth-- ;
}
else{
  Days.innerHTML = TalDays;
}

if(TalMonth < 0){
  year.innerHTML = TalYear - 1;
  Month.innerHTML = TalMonth + 12;
}
else{
  year.innerHTML = TalYear;
  Month.innerHTML = TalMonth;
}






const diff = ToDate - dob;
const totalDays = Math.floor(diff / 86400000);
TolDays.innerHTML = totalDays;

 const Week = Math.floor(totalDays / 7);
TolWeek.innerHTML = Week; // yeh add karo
  
const timer = setInterval(function(){
 
  const Hours = Math.floor(diff / 3600000);
  TolHour.innerHTML = Hours;

} ,10)


 
  BofDay.innerHTML = days[dob.getDay()];

Result.style.visibility = "visible";
 MoreResult.style.visibility = "visible";

})