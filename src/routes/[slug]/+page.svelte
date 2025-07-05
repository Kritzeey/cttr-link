<script lang="ts">
  import Button from "$lib/components/button.svelte";

  let { data } = $props();
</script>

<main class="flex h-dvh w-full flex-col items-center justify-center gap-8">
  {#if data.message}
    <span class="text-6xl font-bold text-amber-400"> Oops! </span>
    <div class="text-2xl text-white">
      The short url <span class="text-amber-400">{data.shortUrl}</span> isn't registered
      yet!
    </div>
    <a href="/">
      <Button>Go Back</Button>
    </a>
  {/if}
</main>
