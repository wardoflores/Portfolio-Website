<!-- https://codepen.io/alvarotrigo/pen/ExwYygW -->

<div class="timeline-area">
	<div class="container">
		<div class="title">
			<h2>Timelines</h2>
		</div>
		<div class="all-timelines">
			<!--SINGLE TIMELINE-->
			<div class="single-timeline d-flex-2">
				<div class="timeline-blank" />
				<div class="timeline-text d-flex-2">
					<span>
						<h3>January 2021</h3>
						—<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/wardoflores/Portfolio-Website"
							>Created my Portfolio Website</a
						>
					</span>
					<div class="t-square" />
				</div>
			</div>
			<!--SINGLE TIMELINE-->
			<div class="single-timeline d-flex-2">
				<div class="timeline-blank" />
				<div class="timeline-text d-flex-2">
					<span>
						<h3>February 2021</h3>
						—<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/wardoflores/Python-Projects"
							>Started making automations using Python</a
						>
					</span>
					<div class="t-square" />
				</div>
			</div>
			<!--SINGLE TIMELINE-->
			<div class="single-timeline d-flex-2">
				<div class="timeline-blank" />
				<div class="timeline-text d-flex-2">
					<span>
						<h3>Month 2021</h3>
						—<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/wardoflores/Linux-Dotfiles">Switched main OS to Arch Linux</a
						>
					</span>
					<div class="t-square" />
				</div>
			</div>
			<!--SINGLE TIMELINE-->
			<div class="single-timeline d-flex-2">
				<div class="timeline-blank" />
				<div class="timeline-text d-flex-2">
					<span>
						<h3>July 2022 - present</h3>
						—<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/eduardofloresiii/"
							>Started work as a Junior Web Developer at Virtual S Web Solutions</a
						>
					</span>
					<div class="t-square" />
				</div>
			</div>
		</div>
		<div class="timelinebutton">
			<button
				><a target="_blank" rel="noopener noreferrer" href="/contact">FIND OUT MORE ABOUT ME</a
				></button
			>
		</div>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	/* body {
	background-color: #1d2123;
	font-family: "Inter", sans-serif;
}

ul {
	list-style: none;
	margin: 0 !important;
}

a {
	text-decoration: none !important;
	display: inline-block;
}

img {
	max-width: 100%;
}

input {
    align-items: center;
    justify-content: center;
    text-align: center;
}

button:focus {
	outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
}
p {
	font-size: 14px;
	line-height: 26px;
	margin: 0;
} */

	button {
		margin: 0 auto;
		display: block;
	}

	.timelinebutton {
		margin: 0 auto;
		display: block;
		cursor: pointer;
		/*weight: 50px;*/
		width: 100px;
		text-shadow: none;
		position: relative;
		overflow: hidden;
	}

	.container {
		width: 100%;
		max-width: 1140px;
		padding: 0 15px;
		box-sizing: border-box;
		margin: 0 auto;
	}
	.title h2 {
		text-align: center;
		/* color: #000;
	font-weight: 600;
	margin-bottom: 40px;
	font-size: 32px; */
	}
	.d-flex-2 {
		display: flex;
		align-items: center;
	}
	.timeline-area {
		padding-bottom: 5%;
	}
	.all-timelines {
		position: relative;
	}
	.title h2 {
		text-align: center;
		/* color: #000;
	font-weight: 600; */
		margin-bottom: 5%;
	}
	.all-timelines::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		height: 100%;
		width: 2px;
		background: #efa22f;
		top: 20px;
	}
	.single-timeline {
		margin-bottom: 5%;
	}
	.timeline-blank {
		width: 50%;
	}
	.timeline-text {
		width: 50%;
		padding-left: 30px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		position: relative;
	}
	.timeline-text h3 {
		/* color: #000; */
		font-weight: 900;
		display: inline-block;
		/* font-size: 1rem; */
	}
	.timeline-text span {
		/* color: #000; */
		display: block;
		width: 100%;
	}
	.single-timeline:nth-child(even) .timeline-text span {
		text-align: right;
	}
	.t-square {
		content: '';
		position: absolute;
		width: 12px;
		height: 12px;
		left: -6px;
		background: #efa22f;
	}
	.single-timeline:nth-child(even) {
		-webkit-box-orient: horizontal;
		-webkit-box-direction: reverse;
		-ms-flex-direction: row-reverse;
		flex-direction: row-reverse;
	}
	.single-timeline:nth-child(even) .t-square {
		right: -6px;
		left: unset;
	}
	.single-timeline:nth-child(even) .timeline-text {
		padding-left: 0;
		padding-right: 30px;
		text-align: right;
	}

	@media all and (max-width: 991px) {
	}
	@media all and (max-width: 768px) {
		.all-timelines::before {
			right: unset;
			top: 0;
		}
		.single-timeline:nth-child(2n) .timeline-text {
			padding-left: 30px;
			padding-right: 0;
			text-align: left;
		}
		.single-timeline:nth-child(2n) .t-square {
			left: -6px;
			right: unset;
		}
		.timeline-blank {
			display: none;
		}
		.timeline-text {
			width: 100%;
		}
		.single-timeline:nth-child(even) .timeline-text span {
			text-align: left !important;
		}
	}
	@media all and (max-width: 575px) {
	}
	@media all and (max-width: 360px) {
		.all-timelines::before {
			top: 32px;
		}
	}
</style>
