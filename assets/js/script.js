<script>
  const counters = document.querySelectorAll('.counter');
  const speed = 100; // lower = faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Trigger only when visible on scroll
  let animated = false;
  window.addEventListener('scroll', () => {
    const section = document.querySelector('.counter-section');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!animated && sectionTop < windowHeight - 100) {
      animateCounters();
      animated = true;
    }
  });
</script>
