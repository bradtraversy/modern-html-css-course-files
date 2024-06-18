document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const expanded = header.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded attribute
    header.setAttribute('aria-expanded', !expanded);

    // Toggle aria-hidden attribute
    content.setAttribute('aria-hidden', expanded);

    console.log('Accordion header clicked');
    console.log('aria-expanded:', header.getAttribute('aria-expanded'));
  });
});
