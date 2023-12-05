function updateClock() {
  let now = new Date();

  // Set the desired timezone offset for London
  // London is UTC during standard time and UTC+1 during daylight saving time
  let timeZoneOffset =
    now.getTimezoneOffset() / 60 +
    (now.getMonth() >= 2 && now.getMonth() <= 9 ? 1 : 0);

  let localTime = new Date(now.getTime() + timeZoneOffset * 60 * 60 * 1000);
  let hours = localTime.getHours().toString().padStart(2, "0");
  let minutes = localTime.getMinutes().toString().padStart(2, "0");
  let seconds = localTime.getSeconds().toString().padStart(2, "0");
  document.getElementById(
    "time"
  ).textContent = `${hours}:${minutes}:${seconds}`;
  setTimeout(updateClock, 1000);
}
updateClock();
