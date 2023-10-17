<script lang="ts">
	export let acronym: string;
	export let name: string;
	export let desc: string;
</script>

<article class="flex flex-col gap-4 mx-auto w-5/6 lg:w-3/4">
	<hgroup class="text-main">
		<h4 class="text-xl font-bold">{acronym}</h4>
		<h5>{name}</h5>
	</hgroup>
	<p>
		{desc}
	</p>
</article>
