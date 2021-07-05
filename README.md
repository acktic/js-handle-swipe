# js-handle-swipe

js touchmove

# example

`document.addEventListener('touchstart', (evt) => {`<br>
`    touchmove = false;`<br>
`    touchstartX = evt.changedTouches[0].screenX;`<br>
`  },`<br>
`  { passive: true }`<br>
`);`<br>

`document.addEventListener('touchend', (evt) => {`<br>
`  touchendX = evt.changedTouches[0].screenX;`<br>
`  handleSwipe();`<br>
`  },`<br>
`  { passive: true }`<br>
`);`<br>
