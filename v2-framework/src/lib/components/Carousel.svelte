<!-- https://css-tricks.com/css-only-carousel/ -->

<script>
    // fetch('https://api.unsplash.com/photos/random/?count=5&client_id=52d8369eb3e2576a5f5b6423865e074e9c7045761bff1ac5664ff3e0bdb57a1d') 
//   .then(response => response.json())
//   .then(data => {
//     data.forEaach(function(image, i) {
//       document.querySelector("#slide-" + (i+1)).innerHTML = `
//         <img src="${image.urls.regular}" alt="">
//         <p class="author-info">
//           <a href="${image.links.html}?utm_source=slider-thing&utm_medium=referral&utm_campaign=api-credit">Photo by ${image.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>
//         </p>
//       `;
//     });
//   });
</script>

<div class="slider">
  
    <a href="#slide-1">1</a>
    <a href="#slide-2">2</a>
    <a href="#slide-3">3</a>
    <a href="#slide-4">4</a>
    <a href="#slide-5">5</a>
  
    <div class="slides">
      <div id="slide-1">
        1
      </div>
      <div id="slide-2">
        2
      </div>
      <div id="slide-3">
        3
      </div>
      <div id="slide-4">
        4
      </div>
      <div id="slide-5">
        5
      </div>
    </div>
  </div>

<style>
    * {
  box-sizing: border-box;
    }

    .slider {
    width: 300px;
    text-align: center;
    overflow: hidden;
    }

    .slides {
    display: flex;
    
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    
    
    
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    
    /*
    scroll-snap-points-x: repeat(300px);
    scroll-snap-type: mandatory;
    */
    }
    .slides::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }
    .slides::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
    }
    .slides::-webkit-scrollbar-track {
    background: transparent;
    }
    .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 300px;
    height: 300px;
    margin-right: 50px;
    border-radius: 10px;
    background: #eee;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    }
    /* .slides > div:target { */
    /*   transform: scale(0.8); */
    /* } */
    /* .author-info {
    background: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 0.75rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    }
    .author-info a {
    color: white;
    } */
    /* img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }

    .slider > a {
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    background: white;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 0 0.5rem 0;
    position: relative;
    }
    .slider > a:active {
    top: 1px;
    }
    .slider > a:focus {
    background: #000;
    }

    /* Don't need button navigation */
    @supports (scroll-snap-type) {
    .slider > a {
        display: none;
    }
}

    /* html, body {
    height: 100%;
    overflow: hidden;
    }
    body {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #74ABE2, #5563DE);
    font-family: 'Ropa Sans', sans-serif;
    } */
</style>