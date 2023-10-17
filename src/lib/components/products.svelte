<script lang="ts">
	import products from "$lib/products";
	import Product from "./products/product.svelte";
</script>

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
<section
	class="w-5/6 m-auto flex flex-col md:grid md:grid-cols-2 gap-12 lg:w-2/3 py-12"
>
	{#each products as product}
		<Product
			acronym={product.acronym}
			name={product.name}
			desc={product.desc}
		/>
	{/each}
</section>
