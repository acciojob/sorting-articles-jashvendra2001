//your JS code here. If required.

const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Remove A, An, or The from the beginning for sorting
function strip(article) {
  return article.replace(/^(a |an |the )/i, '').trim();
}

// Sort alphabetically
const sortedBands = bands.sort((a, b) => {
  return strip(a).localeCompare(strip(b));
});

// Display the sorted list
const bandList = document.getElementById('band');

sortedBands.forEach((band) => {
  const li = document.createElement('li');
  li.textContent = band;
  bandList.appendChild(li);
});
