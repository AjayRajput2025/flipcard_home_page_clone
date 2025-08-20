
document.addEventListener("DOMContentLoaded", () => {
  const scrollPanel = document.getElementById("scrollPanel");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  const panelItems = scrollPanel.querySelectorAll("img");

  // Wait for images to load
  window.addEventListener("load", () => {
    const itemWidth = panelItems[0].offsetWidth + 20;
    const numItems = panelItems.length;

    let scrollIndex = 0;
    let autoScroll;

    // Clone items to simulate infinite scroll
    panelItems.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollPanel.appendChild(clone);
    });

    const allItems = scrollPanel.querySelectorAll("img");

    // Scroll function
    function scrollToIndex(index) {
      scrollPanel.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }

    // Start auto-scroll
    const startAutoScroll = () => {
      autoScroll = setInterval(() => {
        scrollIndex++;
        scrollToIndex(scrollIndex);

        // Reset if at end of clone
        if (scrollIndex >= numItems * 2 - 1) {
          setTimeout(() => {
            scrollPanel.scrollTo({ left: 0, behavior: "auto" });
            scrollIndex = 0;
          }, 310); // wait for smooth scroll to finish (~300ms)
        }
      }, 3000);
    };

    // Right button scroll
    rightBtn.addEventListener("click", () => {
      clearInterval(autoScroll);
      scrollIndex++;
      scrollToIndex(scrollIndex);

      if (scrollIndex >= numItems * 2 - 1) {
        setTimeout(() => {
          scrollPanel.scrollTo({ left: 0, behavior: "auto" });
          scrollIndex = 0;
        }, 310);
      }

      startAutoScroll();
    });
    

// Disable left button (if needed)
    leftBtn.disabled = true;
    leftBtn.style.opacity = "0.5";
    leftBtn.style.cursor = "default";

    leftBtn.addEventListener("click", () => {
      return;
    });

    // Hover to pause
    scrollPanel.addEventListener("mouseenter", () => clearInterval(autoScroll));
    scrollPanel.addEventListener("mouseleave", () => {
      clearInterval(autoScroll);
      startAutoScroll();
    });

    // Start auto-scroll
    startAutoScroll();
  });
});



 function scrollLeft() {
      document.getElementById('scrollPanel').scrollBy({ left: -400, behavior: 'smooth' });
    }
    function scrollRight() {
      document.getElementById('scrollPanel').scrollBy({ left: 400, behavior: 'smooth' });
    }



document.getElementById("searchInput").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  allItems.forEach((img) => {
    const altText = img.alt.toLowerCase();
    img.style.display = altText.includes(query) ? "inline-block" : "none";
  });
});


document.getElementById("searchInput")




document.addEventListener("DOMContentLoaded", () => {
  // ... your existing code ...

  const allItems = scrollPanel.querySelectorAll("img");

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    allItems.forEach((img) => {
      const altText = img.alt.toLowerCase();
      img.style.display = altText.includes(query) ? "inline-block" : "none";
    });
  });
});



const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  productCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});