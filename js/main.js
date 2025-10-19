function updateTime() {
    const timeElement = document.getElementById("user-time");
    if (timeElement) {
      timeElement.textContent = Date.now();
    }
  }

  // Update immediately and every second
  updateTime();
  setInterval(updateTime, 1000);