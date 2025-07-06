
  const t = " Er. DEV NARAYAN TAJPURIYA";
  const typingTarget = document.getElementById("typing-text");
  const cursor = document.getElementById("cursor");

  let i = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!isDeleting && i <= t.length) {
      typingTarget.innerHTML = t.substring(0, i+1);
      i++;
    } else if (isDeleting && i > 0) {
      typingTarget.innerHTML = t.substring(0, i);
      i--;
    }

    // Adjust speed
    let speed = isDeleting ? 50 : 120;

    if (i === t.length) {
      isDeleting = true;
      speed = 5000; // pause at end
    } else if (i === 0) {
      isDeleting = false;
      speed = 1500; // pause before retyping
    }

    setTimeout(typeLoop, speed);
  }

  // Blinking cursor
  setInterval(() => {
    cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
  }, 600);

  // Start loop
  window.onload = () => {
    typeLoop();
  };