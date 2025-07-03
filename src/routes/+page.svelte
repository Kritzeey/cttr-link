<script>
	import Button from '$lib/components/button.svelte';
	import Input from '$lib/components/input.svelte';
</script>

<main class="flex min-h-dvh w-full flex-col items-center justify-center gap-8">
	<!-- title -->
	<div class="text-6xl font-bold">
		<span class="text-amber-400">cttr</span><span class="text-white">.link</span>
	</div>

	<!-- form component -->
	<form
		class="flex w-full max-w-xl flex-col items-center justify-center gap-4 rounded-2xl border border-white/40 bg-white/5 p-4"
	>
		<Input placeholder="Your long URL..." />
		<div class="flex w-full items-center gap-4">
			<span class="text-medium font-medium text-nowrap text-white">cttr-link.vercel.app/</span>
			<Input placeholder="Your short URL" />
		</div>
		<div class="flex w-full justify-end">
			<Button>Shorten!</Button>
		</div>
	</form>
</main>
