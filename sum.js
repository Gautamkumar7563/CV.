 window.addEventListener('scroll', function() {
    const photo = document.querySelector('.gautamphoto img');
    const position = photo.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {  // jab image screen me aa jaye
      photo.classList.add('show');
    }
  });