let touchstartX
let touchstartY
      document.addEventListener('touchstart', (evt) => {
          touchstartX = evt.changedTouches[0].screenX
          touchstartY = evt.changedTouches[0].screenY;
        },
        { passive: true }
      );

      document.addEventListener('touchend', (evt) => {
          touchendX = evt.changedTouches[0].screenX;
          touchendY = evt.changedTouches[0].screenY;
          handleGuide();
        },
        { passive: true }
      );
      
      let handleSwipe = function () {
        if (touchendX - 50 > touchstartX) { }
        else if (touchendX + 50 < touchstartX) { }
}
