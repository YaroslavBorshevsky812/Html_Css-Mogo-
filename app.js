document.querySelector(".accordeon_content").addEventListener('click', (event) => {
    if(event.target.closest('.accordeon_content_item')) {
      event.target.closest('.accordeon_content_item')
      .classList.toggle('active');
    }
});