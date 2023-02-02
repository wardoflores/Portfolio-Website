<script>
    import Timeline from "$lib/components/Timeline.svelte";
    import Carousel from "$lib/components/Carousel.svelte";
    import AppCard from "$lib/components/AppCard.svelte";
    import Contact from "$lib/components/Contact.svelte";
</script>

<h1>Wardo</h1>
<h2>Web Developer</h2>
<p>Hi, i'm Joey Flores<br /> Coder going where the wind blows, failing forward, for fun.</p>
<p><a href="#contact">Send me an email in the contact form</a>, <br />
Give feedback by <a href="#contact">adding issues in the repository</a>, <br />
or <a href="/about">message me in my social media accounts</a>.</p>
<!-- <h2>Timeline</h2> -->
<Timeline />
<hr>
<!-- <h2>About me</h2> -->
<Carousel />
<hr>
<!-- <h2>Apps</h2> -->
<AppCard />
<hr>
<h2>Contact Info</h2>
<p class="noselect">Please send your message below. I'll reply as soon as possible.</p>
<Contact />