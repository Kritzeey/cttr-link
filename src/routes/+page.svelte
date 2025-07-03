<script>
  import { enhance } from "$app/forms";
  import Button from "$lib/components/button.svelte";
  import Input from "$lib/components/input.svelte";

  let { form } = $props();
</script>

<main class="flex min-h-dvh w-full flex-col items-center justify-center gap-8">
  <!-- title -->
  <div class="text-6xl font-bold">
    <span class="text-amber-400">cttr</span><span class="text-white">.link</span
    >
  </div>

  <!-- form component -->
  <form
    use:enhance
    method="post"
    class="flex w-full max-w-xl flex-col items-center justify-center gap-4 rounded-2xl border border-white/40 bg-white/5 p-4"
  >
    <div class="flex w-full flex-col gap-2">
      <Input name="longUrl" placeholder="Your long URL..." />
      {#if form?.errors?.fieldErrors.longUrl}
        <span class="w-full text-sm text-rose-700"
          >{form.errors.fieldErrors.longUrl[0]}</span
        >
      {/if}
    </div>
    <div class="flex w-full items-center gap-4">
      <span class="text-medium font-medium text-nowrap text-white"
        >cttr-link.vercel.app/</span
      >
      <div class="flex w-full flex-col gap-2">
        <Input name="shortUrl" placeholder="Your short URL" />
        {#if form?.errors?.fieldErrors.shortUrl}
          <span class="w-full text-sm text-rose-700"
            >{form.errors.fieldErrors.shortUrl[0]}</span
          >
        {/if}
      </div>
    </div>
    <div class="flex w-full justify-end">
      <Button>Shorten!</Button>
    </div>
  </form>
</main>
