let btnWeek = document.getElementById("weekly");
let btnDay = document.getElementById("dayly");
let btnMonth = document.getElementById("monthly");

btnDay.addEventListener("click", () => {
  document.getElementById("work-day").innerText = "5hrs";
  document.getElementById("p-work-day").innerText = "LastDay - 7hrs";
  document.getElementById("play-day").innerText = "1hr";
  document.getElementById("p-play-day").innerText = "LastDay - 2hrs";
  document.getElementById("study").innerText = "0hrs";
  document.getElementById("p-study").innerText = "LastDay - 1hr";
  document.getElementById("ex").innerText = "1hr";
  document.getElementById("p-ex").innerText = "LastDay - 1hr";
  document.getElementById("soccial").innerText = "1hr";
  document.getElementById("p-soccial").innerText = "LastDay - 3hrs";
  document.getElementById("self").innerText = "0hrs";
  document.getElementById("p-self").innerText = "LastDay - 1hr";
});

btnWeek.addEventListener("click", () => {
  document.getElementById("work-day").innerText = "32hrs";
  document.getElementById("p-work-day").innerText = "LastDay - 36hrs";
  document.getElementById("play-day").innerText = "10hrs";
  document.getElementById("p-play-day").innerText = "LastDay - 8hrs";
  document.getElementById("study").innerText = "4hrs";
  document.getElementById("p-study").innerText = "LastDay - 7hrs";
  document.getElementById("ex").innerText = "4hrs";
  document.getElementById("p-ex").innerText = "LastDay - 5hr";
  document.getElementById("soccial").innerText = "5hr";
  document.getElementById("p-soccial").innerText = "LastDay - 10hrs";
  document.getElementById("self").innerText = "2hrs";
  document.getElementById("p-self").innerText = "LastDay - 2hr";
});

btnMonth.addEventListener("click", () => {
  document.getElementById("work-day").innerText = "103hrs";
  document.getElementById("p-work-day").innerText = "LastDay - 128hrs";
  document.getElementById("play-day").innerText = "23hrs";
  document.getElementById("p-play-day").innerText = "LastDay - 29hrs";
  document.getElementById("study").innerText = "13hrs";
  document.getElementById("p-study").innerText = "LastDay - 19hrs";
  document.getElementById("ex").innerText = "11hrs";
  document.getElementById("p-ex").innerText = "LastDay - 18hr";
  document.getElementById("soccial").innerText = "21hr";
  document.getElementById("p-soccial").innerText = "LastDay - 23hrs";
  document.getElementById("self").innerText = "7hrs";
  document.getElementById("p-self").innerText = "LastDay - 11hr";
});
