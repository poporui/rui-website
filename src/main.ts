import './style.scss';
import { getGradientHTML } from './gradientElement';

const toggleBtn = document.getElementById('toggle-gradient-bg');
const placeholder = document.getElementById('gradient-bg-placeholder');

let gradientVisible = false;

toggleBtn?.addEventListener('click', () => {
  if (!placeholder) return;
  if (!gradientVisible) {
    placeholder.innerHTML = getGradientHTML();
    placeholder.classList.add('gradient-bg');
    placeholder.style.display = 'block';
  } else {
    placeholder.style.display = 'none';
  }
  gradientVisible = !gradientVisible;
});