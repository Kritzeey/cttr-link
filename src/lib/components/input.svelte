<script lang="ts">
	let { ...props } = $props();
</script>

<input
	{...props}
	class="w-full rounded-2xl border border-white/40 bg-white/5 px-6 py-2 text-white duration-200 outline-none placeholder:text-white/80 focus:border-white"
/>
