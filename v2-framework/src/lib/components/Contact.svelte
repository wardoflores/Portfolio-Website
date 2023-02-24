<script lang="ts">
// todo
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

		<label for="Name" class="noselect">Name</label>

		<br />

		<input type="text" id="senderName" class="contactforms" required />

		<span id="Name_ErrorMessage" class="errorMessage" />

		<br />

		<label for="email" class="noselect">E-mail</label>

		<br />

		<input type="email" id="senderEmail" class="contactforms" required />

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
		width: 60%;
	}

	#contact {
		text-align: center;
		padding-bottom: 5%;
	}

	label {
    float:left;

	}

	input[type="text"] {
	font-size: 14px;
	text-align: center;
    width:100%;
    height: 5%;
    margin-bottom: 5%;
	margin-top: 1%;
	padding-top: 2.5%;
	padding-bottom: 2.5%;
	border-radius: 9px;
    border:1.5px solid #03DAC6;
    background-color:rgba(35, 43, 50, 0.4); /* 4th Layer */

	}

	input[type="email"] {
	font-size: 14px;
	text-align: center;
    width:100%;
    height:5%;
    margin-bottom:5%;
	margin-top:1%;
	padding-top: 2.5%;
	padding-bottom: 2.5%;
	border-radius: 9px;
    border:1.5px solid #03DAC6;
    background-color:rgba(35, 43, 50, 0.4); /* 4th Layer */
    
	}

	textarea {
	font-size: 14px;
    width:100%;
    border:1.5px solid #03DAC6;
    /* padding:10px; */
    margin-bottom: 5%;
    margin-top:1%;
	padding-bottom: 10%;
	border-radius: 9px;
    height:100px;
    resize:none;

	}

	input[type="submit"],
input[type="reset"],
input[type="button"],
button {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--button-background-color, #333);
  border: none;
  border-radius: 3px;
  box-shadow: var(
    --button-box-shadow,
    rgba(0, 0, 0, 0.2) 0px 1px 3px, 
    rgba(0, 0, 0, 0.15) 0px 1px 0px inset
  );
  color: var(--button-color, white);
  cursor: pointer;
  font-size: inherit;
  font-weight: 600;
  height: var(--button-height, 36px);
  line-height: var(--button-height, 36px);
  margin: 0;
  min-width: var(--button-min-width, 64px);
  outline: none;
  padding: 0 16px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 0.15s ease-in-out;
}

input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
button:hover {
  background-color: var(--button-background-hover-color, #333);
  box-shadow: var(
    --button-box-shadow-hover,
    rgba(0, 0, 0, 0.3) 0px 2px 4px, 
    rgba(0, 0, 0, 0.2) 0px 1px 0px inset
  );
}

input[type="submit"]:active,
input[type="reset"]:active,
input[type="button"]:active,
button:active {
  background-color: var(--button-background-active-color, #333);
  box-shadow: var(
    --button-box-shadow-active,
    rgba(0, 0, 0, 0.4) 0px 3px 6px, 
    rgba(0, 0, 0, 0.2) 0px 1px 0px inset
  );
  transform: translateY(1px);
}

</style>
