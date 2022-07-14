<script lang="ts">
  export let name: string;
  export let time: string;
  setInterval(async () => {
    try {
      const response = await fetch("http://localhost:4000/api");
      time = (await response.json()).time;
    } catch (error) {
      time = "Server is Down!";
    }
  }, 100);
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <p>
    Current server time: {time}
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
