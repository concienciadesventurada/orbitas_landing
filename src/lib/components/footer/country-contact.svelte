<script lang="ts">
	import Mail from "./mail.svelte";

	export let country: string;
	export let mails: string[];
</script>

<div class="flex items-center gap-2 text-main font-bold pb-2">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="lucide lucide-mail"
		><rect width="20" height="16" x="2" y="4" rx="2" /><path
			d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
		/></svg
	>
	<h3 class="font-bold text-xl">{country}</h3>
</div>
<div>
	{#each mails as mail}
		<Mail {mail} />
	{/each}
</div>
