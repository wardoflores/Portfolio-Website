<!-- https://www.freecodecamp.org/news/learn-css-basics-by-building-a-card-component/ -->

<!-- A div with container id to hold the card -->
<div id="container">
	<!-- A div with card class for the card  -->
	<div class="card">
		<img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies" />

		<!-- A div with card__details class to hold the details in the card  -->
		<div class="card__details">
			<!-- Span with tag class for the tag -->
			<span class="tag">Svelte</span>

			<span class="tag">something</span>

			<!-- A div with name class for the name of the card -->
			<div class="name">Web App Number 1</div>

			<p>Description about App 1</p>

			<button>Read more</button>
		</div>
	</div>

	<!-- A div with card class for the card  -->
	<div class="card">
		<img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies" />

		<!-- A div with card__details class to hold the details in the card  -->
		<div class="card__details">
			<!-- Span with tag class for the tag -->
			<span class="tag">Svelte</span>

			<span class="tag">something</span>

			<!-- A div with name class for the name of the card -->
			<div class="name">Web App Number 1</div>

			<p>Description about App 1</p>

			<button>Read more</button>
		</div>
	</div>
</div>

<style>
	img {
		width: 100%;
		/* height: 50vh; */
	}
	#container {
		max-width: 300px;

		/* Center the container in middle on horizontal axis */
		margin: 0 auto;

		/* Add empty space above the container (20% of the view height) */
		/* margin-top: 20vh; */

		/* background-color: #eaeff1; */
		/* font-family: "Raleway", sans-serif; */
		border-radius: 12px;
		/* height: 214px; */
		object-fit: cover;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content: space-around;
	}
	.card {
		/* Change background color */
		background-color: white;

		/* Add border */
		border: 1px solid #bacdd8;

		/* Add space between the border and the content */
		padding: 8px;

		border-radius: 12px;

		margin-top: 5%;
		margin-bottom: 5%;

		order: 4;
		flex: 1 1 300px; /* <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> */
	}
	/* Style div elements that have class equal to tag */
	/* .tag {
    padding: 4px 8px;
    border: 1px solid #e5eaed;

    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    color: #788697;
  } */

	/* Style div elements that have class equal to name */
	/* .name {
    font-size: 24px;
    font-weight: 600;

    margin-top: 16px;
  } */

	/* Style p element */
	/* p {
    font-size: 14px;
    color: #7f8c9b;
    line-height: 150%;
  } */

	/* Style button element */
	button {
		border: none;
		padding: 12px 24px;
		border-radius: 50px;

		font-weight: 600;
		color: #0077ff;
		background-color: #e0efff;

		/* Button is inline-block element by default, it need to have block display for margin: 0 auto; to work */
		margin: 0 auto;
		display: block;

		/* Button is a clickable element, therefore it should have a pointer cursor */
		cursor: pointer;
	}

	.card__details {
		/* Add space around the details */
		padding: 16px 8px 8px 8px;
	}
	/* Add style when button is focused or hovered */
	button:focus,
	button:hover {
		background-color: #0077ff;
		color: #e0efff;
	}
</style>
