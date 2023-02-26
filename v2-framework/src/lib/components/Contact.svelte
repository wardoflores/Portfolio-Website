<script lang="ts">
// todo
</script>


<h1>Contact me</h1>

<p>Feel free to say hi;<br /> business inquiries also welcome!</p>

<div class="container" id="contact">
	<label class="hide" for="contact">&nbsp;</label>

	<form action="https://api.staticforms.xyz/submit" method="post">
        <!-- Replace with accesKey sent to your email -->
        <input type="hidden" name="accessKey" value="98848b09-38b4-487e-8d1b-1a50d030c3d0" required  > <!-- Required -->
        <label for="Name" class="noselect">Name</label>
		<input type="text" name="name"> <!-- Optional -->
		<label for="email" class="noselect">Email</label>
        <input type="text" name="email" required > <!-- Optional -->
		<label for="subject" class="noselect">Subject</label>
        <input type="text" name="subject"> <!-- Optional -->
		<label for="message" class="noselect">Message</label>
        <textarea name="message" maxlength="128" style="background-color:rgba(35, 43, 50, 0.4);" required ></textarea> <!-- Optional -->
        <!-- If you want replyTo to be set to specific email -->
        <!-- <input type="text" name="replyTo" value="@example.com"> Optional -->
        <!-- Specify @ as reply to value if you want it to be customers email -->
        <input type="hidden" name="replyTo" value="@"> <!-- Optional -->
        <!-- If you want form to redirect to a specific url after submission -->
        <!-- <input type="hidden" name="redirectTo" value="https://example.com/contact/success"> Optional -->
        <input type="submit" value="Submit" />
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
	/* text-align: center; */
    width:100%;
    height: 5%;
    margin-bottom: 5%;
	margin-top: 1%;
	padding-top: 1%;
	padding-bottom: 1%;
	border-radius: 9px;
    border:1.5px solid #03DAC6;
    background-color:rgba(35, 43, 50, 0.4); /* 4th Layer */

	}

	input[type="email"] {
	font-size: 14px;
	/* text-align: center; */
    width:100%;
    height:5%;
    margin-bottom:5%;
	margin-top:1%;
	padding-top: 1%;
	padding-bottom: 1%;
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

	input[type="submit"], input[type="reset"], input[type="button"], button {
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

input[type="submit"]:hover, input[type="reset"]:hover, input[type="button"]:hover, button:hover {
  background-color: var(--button-background-hover-color, #333);
  box-shadow: var(
    --button-box-shadow-hover,
    rgba(0, 0, 0, 0.3) 0px 2px 4px, 
    rgba(0, 0, 0, 0.2) 0px 1px 0px inset
  );
}

input[type="submit"]:active, input[type="reset"]:active, input[type="button"]:active, button:active {
  background-color: var(--button-background-active-color, #333);
  box-shadow: var(
    --button-box-shadow-active,
    rgba(0, 0, 0, 0.4) 0px 3px 6px, 
    rgba(0, 0, 0, 0.2) 0px 1px 0px inset
  );
  transform: translateY(1px);
}

</style>
