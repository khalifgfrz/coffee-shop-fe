// Range Slide
const minPriceRange = document.getElementById("min-price-range");
const maxPriceRange = document.getElementById("max-price-range");
const minPriceValue = document.getElementById("min-price-value");
const maxPriceValue = document.getElementById("max-price-value");
const rangeProgress = document.getElementById("range-progress");

function updateProgress() {
  const min = parseInt(minPriceRange.value);
  const max = parseInt(maxPriceRange.value);
  if (min > max - 10) {
    minPriceRange.value = max - 10;
  }
  if (max < min + 10) {
    maxPriceRange.value = min + 10;
  }
  minPriceValue.textContent = `Idr.${minPriceRange.value}`;
  maxPriceValue.textContent = `Idr.${maxPriceRange.value}`;
  rangeProgress.style.left = `${(min / 1000) * 100}%`;
  rangeProgress.style.right = `${100 - (max / 1000) * 100}%`;

  minPriceValue.style.left = `${(min / 1000) * 100}%`;
  maxPriceValue.style.left = `${(max / 1000) * 100}%`;
}

minPriceRange.addEventListener("input", updateProgress);
maxPriceRange.addEventListener("input", updateProgress);

updateProgress();
