
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('api-button');
  if (btn) {
    btn.addEventListener('click', async () => {
      const res = await fetch('/api/exercise?name=squat');
      const data = await res.json();
      alert(JSON.stringify(data[0], null, 2));
    });
  }
});
