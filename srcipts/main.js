let lastScrollTop = 0;
const hiddenDiv = document.querySelector('.scroll');

window.addEventListener('scroll', function () {
  if (window.scrollY === 0) {
    hiddenDiv.classList.add('close');
  } else {
    hiddenDiv.classList.remove('close');
  }
})

hiddenDiv.addEventListener('click', () => {
  window.scrollTo(0, 0);
})

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('animation');
    } else {
      change.target.classList.remove('animation');
    }
  });
}

let options = {
  threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.select');

for (let elm of elements) {
  observer.observe(elm);
}