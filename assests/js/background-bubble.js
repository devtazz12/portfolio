const container = document.getElementById("bubble-container");
const colors = [
  'rgba(59, 130, 246, 0.15)',
  'rgba(236, 72, 153, 0.15)',
  'rgba(245, 158, 11, 0.15)',
  'rgba(139, 92, 246, 0.15)',
  'rgba(6, 182, 212, 0.15)'
];

for (let i = 0; i < 30; i++) {
  const bubble = document.createElement("div");
  const size = Math.random() * 40 + 10;

  bubble.style.position = "absolute";
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.bottom = `-${size}px`;
  bubble.style.borderRadius = "9999px";
  bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  bubble.style.opacity = Math.random() * 0.3 + 0.2;
  bubble.style.animation = `floatBubble ${5 + Math.random() * 10}s ease-in-out infinite`;
  container.appendChild(bubble);
}
