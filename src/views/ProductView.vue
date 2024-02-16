<template>
	<div class="product-view">
		<h1>Produtos</h1> 
		<a to="/cart" href="/cart"><img src="../assets/cart.png" alt="Carrinho"></a>
		<section class="cards">
			<article v-for="product in products" :key="product.id" class="card">
				<h2 class="title">{{ product.name }}</h2>
				<p class="price">R$ {{ product.price }}</p>
				<div class="actions">
					<button @click="addProduct(product)">Adicionar</button>
				</div>
			</article>
		</section>
		{{ cart }}
	</div>
</template>

<script setup>
import { useCart } from '@/composables/useCart'
const { products, cart, removeProduct, addProduct} = useCart();
console.log(products);
</script>

<style lang="scss" scoped>
.product-view {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	background-color: #fdfeff;
	border: 1px solid #b1d8f6;
	border-radius: 8px;
	width: 100%;

	.cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		background-color: #b1d8f6;
		border: 1px solid #b1d8f6;
		border-radius: 8px;
		width: 100%;
		margin: 1rem;
		
	}
}
</style>