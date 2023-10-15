<script lang="ts">
	import OrbitasLogo from "$lib/assets/orbitas_logo.png";
	import CountryContact from "$lib/components/footer/country-contact.svelte";
	import Socials from "$lib/components/footer/socials.svelte";

	const year = new Date().getFullYear().toString();
</script>

<footer
	class="flex flex-col md:grid md:grid-cols-[1fr,1fr,10rem] lg:grid-cols-[1fr,1fr,20rem] bg-[#F5F5F5] py-12"
>
	<div class="hidden md:block mx-auto my-auto">
		<div class="w-48 md:w-72 mx-auto items-center">
			<img src={OrbitasLogo} alt="Orbitas Logo" />
		</div>
		<h3 class="text-center">Orbitas Software Development &copy {year}</h3>
	</div>
	<div class="w-5/6 md:w-full mx-auto p-6 border-l-4 border-main">
		<CountryContact
			country="Costa Rica"
			mails={["soporte@orbitacr.com", "contact@orbitacr.com"]}
		/>
		<hr class="border border-main my-4" />
		<CountryContact country="México" mails={["contact_mx@orbitacr.com"]} />
		<hr class="border border-main my-4" />
		<CountryContact
			country="Estados Unidos"
			mails={["contact_us@orbitacr.com"]}
		/>
	</div>
	<Socials />
	<div class="md:hidden">
		<div class="w-48 md:w-72 mx-auto items-center">
			<img src={OrbitasLogo} alt="Orbitas Logo" />
		</div>
		<h3 class="text-center">Orbitas Software Development &copy {year}</h3>
	</div>
</footer>
