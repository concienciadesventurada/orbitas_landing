<script lang="ts">
	import { onMount } from "svelte";
	import OrbitasLogo from "$lib/assets/orbitas_logo.png";

	let hidden: boolean = false;

	onMount(() => {
		const button = document.querySelector("#menu-button");
		const menu = document.querySelector("#menu");
		const li = document.querySelectorAll("#menu li");
		const contactMail = document.getElementById("contact_mail");

		button?.addEventListener("click", () => {
			hidden = !hidden;
			menu?.classList.toggle("hidden", !hidden);
			contactMail?.classList.toggle("hidden", !hidden);
		});

		li?.forEach((li) => {
			li.addEventListener("click", () => {
				hidden = false;
				menu?.classList.add("hidden");
			});
		});
	});
</script>

<header class="sticky top-0 bg-white">
	<nav
		class="flex flex-col md:grid md:grid-cols-3 py-6 px-8 md:py-8 justify-between"
	>
		<hgroup
			class="flex w-full justify-between md:justify-start md:items-center md:col-span-1"
		>
			<div class="w-32">
				<a href="/"><img src={OrbitasLogo} alt="Orbitas Logo" /></a>
			</div>
			<button class="md:hidden" id="menu-button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-menu"
					><line x1="4" x2="20" y1="12" y2="12" /><line
						x1="4"
						x2="20"
						y1="6"
						y2="6"
					/><line x1="4" x2="20" y1="18" y2="18" /></svg
				>
			</button>
		</hgroup>
		<ul
			class="hidden md:flex justify-center capitalize md:col-span-1"
			id="menu"
		>
			<li class="py-4 md:px-6 hover:text-gray-300 duration-300">
				<a href="#about">nosotros</a>
			</li>
			<li class="py-4 md:px-6 hover:text-gray-300 duration-300">
				<a href="#products">productos</a>
			</li>
			<li class="py-4 md:px-6 hover:text-gray-300 duration-300">
				<a href="#services">servicios</a>
			</li>
		</ul>
		<div
			class="hidden md:flex py-4 md:px-6 group hover:text-gray-300 duration-300 md:col-span-1 justify-end"
			id="contact_mail"
		>
			<a class="flex gap-2 lowercase" href="mailto:contact@orbitascr.com">
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
					class="text-main group-hover:text-gray-300 duration-300"
					><rect width="20" height="16" x="2" y="4" rx="2" /><path
						d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
					/></svg
				>contact@orbitascr.com
			</a>
		</div>
	</nav>
</header>
