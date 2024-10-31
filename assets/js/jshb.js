document.addEventListener("DOMContentLoaded", function () {
  // For articleCarousel
  const carousel = document.getElementById("articleCarousel");
  const prevBtn = document.getElementById("prevBtnCarousel");
  const nextBtn = document.getElementById("nextBtnCarousel");

  // Initial setup
  prevBtn.style.display = "none"; // Hide the left button initially

  // Event listener for when the slide changes in articleCarousel
  carousel.addEventListener("slid.bs.carousel", function () {
    const totalItems = carousel.querySelectorAll(".carousel-item").length;
    const currentIndex = [
      ...carousel.querySelectorAll(".carousel-item"),
    ].findIndex((item) => item.classList.contains("active"));

    // Show or hide buttons based on the current index
    prevBtn.style.display = currentIndex === 0 ? "none" : "block"; // Hide left button at the start
    nextBtn.style.display = currentIndex === totalItems - 1 ? "none" : "block"; // Hide right button at the end
  });

  // For articleCarousel1
  const carousel1 = document.getElementById("articleCarousel1");
  const prevBtn1 = document.getElementById("prevBtnCarousel1");
  const nextBtn1 = document.getElementById("nextBtnCarousel1");

  // Initial setup for the second carousel
  prevBtn1.style.display = "none"; // Hide the left button initially

  // Event listener for when the slide changes in articleCarousel1
  carousel1.addEventListener("slid.bs.carousel", function () {
    const totalItems1 = carousel1.querySelectorAll(".carousel-item").length;
    const currentIndex1 = [
      ...carousel1.querySelectorAll(".carousel-item"),
    ].findIndex((item) => item.classList.contains("active"));

    // Show or hide buttons based on the current index
    prevBtn1.style.display = currentIndex1 === 0 ? "none" : "block"; // Hide left button at the start
    nextBtn1.style.display =
      currentIndex1 === totalItems1 - 1 ? "none" : "block"; // Hide right button at the end
  });

  // Optional: Click event for the next button to show the previous button
  nextBtn.addEventListener("click", function () {
    prevBtn.style.display = "block"; // Show left button when right button is clicked for articleCarousel
  });

  nextBtn1.addEventListener("click", function () {
    prevBtn1.style.display = "block"; // Show left button when right button is clicked for articleCarousel1
  });
});



  document.addEventListener('DOMContentLoaded', function () {
    const setupCarouselPagination = (carouselId, paginationId) => {
      const paginationLinks = document.querySelectorAll(`#${paginationId} .page-link`);
      const carousel = document.querySelector(`#${carouselId}`);

      // Function to update the active pagination link
      function updateActiveLink() {
        const activeIndex = [...carousel.querySelectorAll('.carousel-item')].findIndex(item => item.classList.contains('active'));
        paginationLinks.forEach((link, index) => {
          link.classList.toggle('active', index === activeIndex);
        });
      }

      // Add click event to pagination links
      paginationLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          const slideTo = this.getAttribute('data-slide-to');
          const carouselInstance = new bootstrap.Carousel(carousel);
          carouselInstance.to(slideTo);
          updateActiveLink();
        });
      });

      // Add event listener for carousel slide events
      carousel.addEventListener('slid.bs.carousel', updateActiveLink); 

      // Initial call to set the active link
      updateActiveLink();
    };

    // Setup pagination for both carousels
    setupCarouselPagination('articleCarousel', 'paginationCarousel');
    setupCarouselPagination('articleCarousel1', 'paginationCarousel1');
  });
  
  
 