<script lang="js">
  import { onMount } from 'svelte';

  const BMC_USERNAME = 'flyingahas'; // Replace with your BMC username
  const BUTTON_POSITION = 'Right'; // Left/Right/Bottom

  onMount(() => {
    if (typeof window !== 'undefined' && !document.querySelector('[data-name="BMC-Widget"]')) {
      const script = document.createElement('script');
      script.dataset.name = 'BMC-Widget';
      script.dataset.cfasync = 'false';
      script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
      script.dataset.id = BMC_USERNAME;
      script.dataset.description = 'Support my work!';
      script.dataset.color = '#FF5F5F';
      script.dataset.position = BUTTON_POSITION;
      script.dataset.x_margin = '18';
      script.dataset.y_margin = '18';
      script.async = true;
      
      document.body.appendChild(script);
    }
  });
</script>

<svelte:head>
  <link 
    rel="stylesheet" 
    href="https://cdnjs.buymeacoffee.com/1.0.0/button.css" 
    data-name="bmc-button"
  />
</svelte:head>
