<script lang="ts">
	import engineerIllustration from "$lib/assets/engineer_on_pc.svg";
</script>

<section
	class="w-5/6 md:h-[60vh] lg:h-[50vh] m-auto grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 items-center lg:w-5/6"
	id="hero"
>
	<div class="m-auto px-6 lg:px-0">
		<img src={engineerIllustration} alt="Engineer illustration" />
	</div>
	<div class="grid gap-4 px-6 lg:px-0">
		<h2 class="text-2xl font-bold">
			Diseñamos, construimos y escalamos aplicaciones móviles, web y en la nube
			personalizadas
		</h2>
		<h3>
			Escale rápidamente e impulse su equipo de desarrollo de productos con
			nuestros desarrolladores y diseñadores especialistas.
		</h3>
		<button
			class="max-w-fit bg-main rounded-md p-2 text-white duration-300 hover:opacity-75"
			>Hablar con un experto</button
		>
	</div>
</section>
