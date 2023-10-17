<script lang="ts">
	import digitalCommunity from "$lib/assets/digital_community.svg";
	import Expertise from "./expertise.svelte";
</script>

<section
	class="w-5/6 flex flex-col gap-12 justify-center items-center m-auto text-center py-12"
>
	<div>
		<h2 class="text-xl font-bold py-6">Sobre Orbitas</h2>
		<p>
			"Somos su equipo de diseño y<br /> desarrollo de productos bajo demanda".
		</p>
	</div>
	<div
		class="flex flex-col gap-12 md:gap-4 md:grid md:grid-cols-2 md:py-12 lg:w-5/6"
	>
		<p class="m-auto md:text-left">
			Somos un equipo intencionalmente pequeño que trabaja con una variedad de
			clientes a la vez. Piense en nuestros diseñadores y desarrolladores como
			miembros de su equipo que trabajan en el sitio o de forma remota, lo que
			mejor se adapte a su proyecto.
		</p>
		<div class="m-auto">
			<img src={digitalCommunity} alt="Digital community illutration" />
		</div>
	</div>
</section>
<section class="w-5/6 grid grid-cols-2 lg:grid-cols-4 m-auto gap-12 items-center">
  <Expertise x={12} area="Expertos" />
  <Expertise x={30} area="Proyectos" />
  <Expertise x={10} area="Anos de experiencia" />
  <Expertise x={3} area="Paises" />
</section>
