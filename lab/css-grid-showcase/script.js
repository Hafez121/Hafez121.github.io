// toggle between vanilla and tailwind versions of each component
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    const view = btn.dataset.view;

    document.querySelectorAll(`[data-target="${target}"]`).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.getElementById(`${target}-vanilla`).style.display = view === 'vanilla' ? '' : 'none';
    document.getElementById(`${target}-tailwind`).style.display = view === 'tailwind' ? '' : 'none';
  });
});

// live breakpoint label so resizing the window means something
const badge = document.getElementById('breakpoint-badge');
function updateBreakpoint(){
  const w = window.innerWidth;
  if (w < 480) badge.textContent = 'Mobile (<480px)';
  else if (w < 768) badge.textContent = 'Small tablet (<768px)';
  else if (w < 1024) badge.textContent = 'Tablet (<1024px)';
  else badge.textContent = 'Desktop';
}
updateBreakpoint();
window.addEventListener('resize', updateBreakpoint);
