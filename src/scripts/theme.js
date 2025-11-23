document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('main-header');
  
  // Guard clause: if header doesn't exist on this page, stop running
  if (!header) return;

  // Define the classes for the two states
  // State 1: Top of page (Tall, Dark Grey)
  const defaultClasses = ['bg-transparent', 'h-[80px]'];
  
  // State 2: Scrolled (Short, Red)
  const scrollClasses  = ['bg-green', 'h-[60px]', 'shadow-lg'];

  function handleScroll() {
    if (window.scrollY > 50) {
      // Scrolled Down: Remove default, Add scroll
      header.classList.remove(...defaultClasses);
      header.classList.add(...scrollClasses);
    } else {
      // Top: Remove scroll, Add default
      header.classList.remove(...scrollClasses);
      header.classList.add(...defaultClasses);
    }
  }

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);
});