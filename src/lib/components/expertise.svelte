<script lang="ts">
	import { onMount } from "svelte";

	export let x: number;
	export let area: string;

	function increment() {
		const e = document.getElementById(area);
		const end = Number(e?.innerHTML);
		let i = 0;

		const incrementInterval = setInterval(() => {
			if (i <= end) {
				e!.innerHTML = i.toString();
				i++;
			} else {
				clearInterval(incrementInterval);
			}
		}, 75);
	}

	onMount(() => {
		const e = document.getElementById(area);

		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5
		};

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				observer.disconnect();
				increment();
			}
		}, options);

		observer.observe(e!);
	});
</script>

<hgroup class="text-center">
	<h3 class="text-3xl text-main font-bold">+<span id={area}>{x}</span></h3>
	<h4 class="text-xl">{area}</h4>
</hgroup>
