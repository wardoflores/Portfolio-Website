<!-- <header id="desktop-header">
    <nav>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="/blog">BLOG</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="/about">ABOUT</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="/contact">CONTACT</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="/projects">PROJECTS</a>
        </li>
      </ul>
    </nav>
  </header>

<style>

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

  header {
    padding: 1rem;
    background: #424242;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
  }
  
  ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }
  
  a {
    text-decoration: none;
    color: #26c6da;
    font-family: 'IBM Plex Mono', sans-serif;
  }

</style> -->


<script type="ts">
  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  nav {
    display: flex;
  }

  @media (max-width: 767px) {
    header {
      flex-direction: column;
      align-items: flex-start;
    }

    nav {
      display: ${showMenu ? 'block' : 'none'};
    }
  }

  .hamburger-menu {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    .hamburger-menu {
      display: block;
    }
  }
</style>

<header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  <div class="hamburger-menu" on:click="{toggleMenu}">
    <!-- Add a hamburger menu icon here -->
  </div>
</header>
