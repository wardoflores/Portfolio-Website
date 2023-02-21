<script lang="ts">
	// TODO
</script>

<h1>Contact me</h1>

<p>Feel free to say hi;<br /> business inquiries also welcome!</p>

<div class="container" id="contact">
	<label class="hide" for="contact">&nbsp;</label>

	<form
		class="inputField"
		method="POST"
		action="https://mailto:eduardojoeyflores@gmail.com"
		target="_top"
	>
		<!--  onsubmit="return false" -->

		<label for="Name" class="noselect">Name</label>

		<br />

		<input type="text" id="senderName" class="contactforms" required />
		<!--onblur="checkForErrors(this)"-->

		<span id="Name_ErrorMessage" class="errorMessage" />

		<br />

		<label for="email" class="noselect">E-mail</label>

		<br />

		<input type="email" id="senderEmail" class="contactforms" required />
		<!--onblur="checkForErrors(this)"-->

		<span id="email_ErrorMessage" class="errorMessage" />

		<br />

		<label for="message" class="noselect">Message</label>

		<br />

		<textarea
			id="message"
			class="contactforms"
			maxlength="128"
			style="background-color:rgba(35, 43, 50, 0.4);"
			required
		/> <br />

		<br />

		<label class="hide" for="submit">&nbsp;</label>

		<input type="submit" id="submit" class="ripple" value="submit" required />
		<!-- onClick="submitForm()" -->
	</form>
</div>

<style>
	form {
		margin: 0 auto;
		width: 250px;
	}

	#contact {
		text-align: center;
		padding-bottom: 5%;
	}
</style>
