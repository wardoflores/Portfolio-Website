<!-- https://codepen.io/alvarotrigo/pen/MWEJEWG -->

<!-- <script>

</script> -->

<section class="top-nav">
	<div>
		<a data-sveltekit-preload-code data-sveltekit-reload href="/">KULMATA</a>
	</div>
	<input id="menu-toggle" type="checkbox" />
	<label class="menu-button-container" for="menu-toggle">
		<div class="menu-button" />
	</label>
	<ul class="menu">
		<li>
			<a data-sveltekit-preload-code data-sveltekit-reload target="_blank" rel="noopener noreferrer" href="/devlog">DEVLOG</a>
		</li>
<!--		<li>
			<a data-sveltekit-preload-code data-sveltekit-reload target="_blank" rel="noopener noreferrer" href="/about">ABOUT</a>
		</li> -->
		<li>
			<a data-sveltekit-preload-code data-sveltekit-reload target="_blank" rel="noopener noreferrer" href="https://kulmata.featurebase.app">FEEDBACK</a>
		</li>
<!--		<li>
			<a data-sveltekit-preload-code data-sveltekit-reload target="_blank" rel="noopener noreferrer" href="/services">SERVICES</a>
		</li>
	</ul>-->
</section>

<style type="scss">
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

	ul {
		margin: 0;
		list-style-type: none;
		/* display: flex;
    gap: 1rem; */
	}

	a {
		text-decoration: none;
		color: #26c6da;
		font-family: 'IBM Plex Mono', sans-serif;
	}

	/* 2 */

	* {
		/* font-family: "Raleway"; */
		box-sizing: border-box;
	}

	.top-nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #424242;
		/*background: linear-gradient(to left, #f46b45, #eea849); */
		/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		color: #fff;
		height: 50px;
		padding: 1em;
	}

	.menu {
		display: flex;
		flex-direction: row;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.menu > li {
		margin: 0 1rem;
		overflow: hidden;
	}

	.menu-button-container {
		display: none;
		height: 100%;
		width: 30px;
		cursor: pointer;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#menu-toggle {
		display: none;
	}

	.menu-button,
	.menu-button::before,
	.menu-button::after {
		display: block;
		background-color: #fff;
		position: absolute;
		height: 4px;
		width: 30px;
		transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
		border-radius: 2px;
	}

	.menu-button::before {
		content: '';
		margin-top: -8px;
	}

	.menu-button::after {
		content: '';
		margin-top: 8px;
	}

	#menu-toggle:checked + .menu-button-container .menu-button::before {
		margin-top: 0px;
		transform: rotate(405deg);
	}

	#menu-toggle:checked + .menu-button-container .menu-button {
		background: rgba(255, 255, 255, 0);
	}

	#menu-toggle:checked + .menu-button-container .menu-button::after {
		margin-top: 0px;
		transform: rotate(-405deg);
	}

	@media (max-width: 700px) {
		.menu-button-container {
			display: flex;
		}
		.menu {
			position: absolute;
			top: 0;
			margin-top: 50px;
			left: 0;
			flex-direction: column;
			width: 100%;
			justify-content: center;
			align-items: center;
		}
		#menu-toggle ~ .menu li {
			height: 0;
			margin: 0;
			padding: 0;
			border: 0;
			transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
		}
		#menu-toggle:checked ~ .menu li {
			border: 1px solid #333;
			height: 2.5em;
			padding: 0.5em;
			transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
		}
		.menu > li {
			display: flex;
			justify-content: center;
			margin: 0;
			padding: 0.5em 0;
			width: 100%;
			color: white;
			background-color: #222;
		}
		.menu > li:not(:last-child) {
			border-bottom: 1px solid #444;
		}
	}
</style>
