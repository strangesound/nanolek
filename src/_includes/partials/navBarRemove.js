  const navBar = document.getElementById('navbar');
  document.addEventListener('DOMContentLoaded', () => {
    let resizer = new ResizeObserver(handleResize);
    resizer.observe(navBar)
  })

  function handleResize(entries) {
    navHeight = entries[0].contentRect.height;
    console.log('navHeight', navHeight);
    return navHeight;
  }

  document.getElementById("main-content").style.marginTop = navHeight;


  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document
        .getElementById("navbar")
        .style
        .top = "0";
    } else {
      document
        .getElementById("navbar")
        .style
        .top = "-" + navHeight + "px";
    }
    prevScrollpos = currentScrollPos;
  }
