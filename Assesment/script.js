const swatches = document.querySelectorAll('.swatch');
const sizeSelect = document.getElementById('size-select');
const selectedColor = document.getElementById('selected-color');
const selectedSize = document.getElementById('selected-size');
const compareBtn = document.getElementById('compare-btn');
const compareModal = document.getElementById('compare-modal');
const compareBoxes = document.getElementById('compare-boxes');
const closeBtn = document.querySelector('.close-btn');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

let selectedColors = [];

swatches.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('selected');

    const color = btn.dataset.color;
    if (btn.classList.contains('selected')) {
      if (!selectedColors.includes(color)) {
        selectedColors.push(color);
      }
      selectedColor.textContent = color;
    } else {
      selectedColors = selectedColors.filter(c => c !== color);
      selectedColor.textContent = selectedColors[0] || 'None';
    }
  });
});

sizeSelect.addEventListener('change', () => {
  selectedSize.textContent = sizeSelect.value;
});

compareBtn.addEventListener('click', () => {
  compareBoxes.innerHTML = '';
  selectedColors.forEach(color => {
    const swatchDiv = document.createElement('div');
    swatchDiv.className = 'compare-swatch';
    swatchDiv.style.backgroundColor = color.toLowerCase();
    compareBoxes.appendChild(swatchDiv);
  });
  compareModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  compareModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === compareModal) {
    compareModal.style.display = 'none';
  }
});

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-tab');

    // Remove active classes
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Activate selected tab and content
    button.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

// Thumbnail Click Handler
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      document.querySelector('.thumbnail.active').classList.remove('active');
      thumbnail.classList.add('active');
      document.getElementById('mainProductImage').src = thumbnail.src;
    });
  });
  
  // Size Chart Modal
  const modal = document.getElementById('sizeChartModal');
  const openModalBtn = document.getElementById('sizeChartBtn');
  const closeModalBtn = modal.querySelector('.close-btn');
  
  openModalBtn.onclick = () => modal.classList.remove('hidden');
  closeModalBtn.onclick = () => modal.classList.add('hidden');
  window.onclick = (e) => { if (e.target === modal) modal.classList.add('hidden'); };
  window.onkeydown = (e) => { if (e.key === 'Escape') modal.classList.add('hidden'); };

  function addBundleToCart() {
  alert("Bundle added to cart!");
}
  
  // Tabs
  document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.tab-btn.active').classList.remove('active');
      button.classList.add('active');
  
      document.querySelectorAll('.tab-content').forEach(tab => tab.hidden = true);
      const selectedTab = button.dataset.tab;
      document.getElementById(selectedTab).hidden = false;
    });
  });
  