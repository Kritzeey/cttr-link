<script lang="ts">
	let { children, ...props } = $props();
</script>

<button
	class="cursor-pointer rounded-2xl bg-amber-400 px-6 py-2 text-white duration-200 outline-none hover:ring hover:ring-white focus:ring focus:ring-white"
>
	{@render children?.()}
</button>
