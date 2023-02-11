<!-- https://codepen.io/slstudios/pen/mJqjeP -->

		<footer class="footer-distributed">

			<div class="footer-right">

				<a href="/"><i class="fa fa-facebook"></i></a>
				<a href="/"><i class="fa fa-twitter"></i></a>
				<a href="/"><i class="fa fa-linkedin"></i></a>
				<a href="/"><i class="fa fa-github"></i></a>

			</div>

			<div class="footer-left">

				<nav class="footer-links">
					<a class="link-1" href="/">HOME</a>

					<a target="_blank" rel="noopener noreferrer" href="/blog">BLOG</a>

					<a target="_blank" rel="noopener noreferrer" href="/about">ABOUT</a>

					<a target="_blank" rel="noopener noreferrer" href="/contact">CONTACT</a>

          <a target="_blank" rel="noopener noreferrer" href="/projects">PROJECTS</a>
        </nav>

				<p>Eduardo Jose G. Flores III &copy; 2023</p>
			</div>

		</footer>

<style>

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

* {
  font-family: 'IBM Plex Mono', sans-serif;
}

.footer-distributed {
  background-color: #424242;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 45px 50px;
}

.footer-distributed .footer-left p {
  color: #6d6d6d;
  font-size: 14px;
  margin: 0;
}
/* Footer links */

.footer-distributed nav.footer-links {
  /* font-size: 18px; */
  /* font-weight: bold; */
  color: #26c6da;
  margin: 0 0 10px;
  padding: 0;
  transition: ease .25s;
}

.footer-distributed nav.footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  transition: ease .25s;
}

.footer-distributed .footer-links a:before {
  content: "·";
  font-size: 20px;
  left: 0;
  color: #26c6da;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

.footer-distributed .footer-right {
  float: right;
  margin-top: 6px;
  max-width: 180px;
}

.footer-distributed .footer-right a {
  display: inline-block;
  width: 35px;
  height: 35px;
  background-color: #6d6d6d;
  border-radius: 2px;
  font-size: 20px;
  color: #26c6da;
  text-align: center;
  line-height: 35px;
  margin-left: 3px;
  transition:all .25s;
}

.footer-distributed .footer-right a:hover{transform:scale(1.1); -webkit-transform:scale(1.1);}

.footer-distributed nav.footer-links a:hover{text-decoration:underline;}

/* Media Queries */

@media (max-width: 600px) {
  .footer-distributed .footer-left, .footer-distributed .footer-right {
    text-align: center;
  }
  .footer-distributed .footer-right {
    float: none;
    margin: 0 auto 20px;
  }
  .footer-distributed .footer-left nav.footer-links {
    line-height: 1.8;
  }
}
</style>