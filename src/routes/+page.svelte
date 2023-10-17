<script lang="ts">
	import Hero from "$lib/components/hero.svelte";
	import SobreOrbitas from "$lib/components/sobre-orbitas.svelte";
	import Contact from "$lib/components/contact.svelte";
</script>

<Hero />
<SobreOrbitas />
<section
	class="w-5/6 flex flex-col gap-12 justify-center items-center m-auto text-center py-12"
>
	<hgroup>
		<h2 class="text-2xl font-bold py-6">Productos</h2>
		<p>
			Hemos entregado productos para clientes que van desde empresas, PYMES y
			nuevas empresas.
		</p>
	</hgroup>
</section>
<section class="w-5/6 m-auto flex flex-col md:grid md:grid-cols-2">
  <article class="flex flex-col gap-4">
    <hgroup class="text-main">
      <h4 class="text-xl font-bold">OSS</h4>
      <h5>Operation Support Systems</h5>
    </hgroup>
    <p>OSS es una plataforma que proporciona un ecosistema para digitalizar los procesos diarios y visibilizar los productos de la organización.</p>
  </article>
</section>
<Contact />
