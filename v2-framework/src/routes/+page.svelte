<script>
    import Timeline from "$lib/components/Timeline.svelte";
    import Carousel from "$lib/components/Carousel.svelte";
    import AppCard from "$lib/components/AppCard.svelte";
    import Contact from "$lib/components/Contact.svelte";
</script>

<h1>Hi, I'm Wardo</h1>
<h2>Web Developer</h2>
<p>Coder going where the wind blows, failing forward, for fun.</p>
<p>Contact me by <a target="_blank" rel="noopener noreferrer" href="#contact">sending me an email in the contact form</a>, <br />
Give feedback by <a target="_blank" rel="noopener noreferrer" href="https://github.com/wardoflores/Portfolio-Website">adding issues in the repository</a>, <br />
or <a target="_blank" rel="noopener noreferrer" href="/about">message me in my social media accounts</a>.</p>
<!-- Place Landing page essentials for your services -->
<!-- Teaser of the Timeline -->
<Timeline />
<hr>
<!-- Teaser about me -->
<Carousel />
<hr>
<!-- Teaser about apps -->
<AppCard />
<hr>
<h2>Contact Info</h2>
<p class="noselect">Please send your message below. I'll reply as soon as possible.</p>
<Contact />