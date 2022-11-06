<!-- https://codepen.io/alvarotrigo/pen/ZEXzOWQ -->

<div class="timeline">
    <div class="outer">
      <div class="card">
        <div class="info">
          <h3 class="title">Title 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div class="card">
        <div class="info">
          <h3 class="title">Title 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div class="card">
        <div class="info">
          <h3 class="title">Title 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div class="card">
        <div class="info">
          <h3 class="title">Title 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div class="card">
        <div class="info">
          <h3 class="title">Title 5</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
    </div>
  </div>

  <style>
  /* :root {
    --primary-color: #fff; /* try #212121 also for dark mode */
    /* --background-color: #212121;
    --font: sans-serif;
  } */
  
  * {
    margin: 0;
    padding: 0;
  }
  
  /* body {
    background: var(--background-color);
    font-family: var(--font);
    display: flex;
    justify-content: center;
  } */
  
  /* Timeline Container */
  .timeline {
    background: var(--primary-color);
    margin: 20px auto;
    padding: 20px;
  }
  
  /* Outer Layer with the timeline border */
  .outer {
    border-left: 2px solid #333;
  }
  
  /* Card container */
  .card {
    position: relative;
    margin: 0 0 20px 20px;
    padding: 10px;
    background: #333;
    color: gray;
    border-radius: 8px;
    max-width: 400px;
  }
  
  /* Information about the timeline */
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  /* Title of the card */
  .title {
    color: orangered;
    position: relative;
  }
  
  /* Timeline dot  */
  .title::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 999px;
    left: -39px;
    border: 3px solid orangered;
  }
</style>