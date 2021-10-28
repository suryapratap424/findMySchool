const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('from-right');
      }
    });
  });
  cards=document.querySelectorAll('.cards')
  cards.forEach(card=>observer.observe(card))
  observer.observe(document.querySelector('.head'))
  