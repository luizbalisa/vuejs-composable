<template>
	<div>
		<table>
			<tr>
				<th>Item</th>
				<th>Quantidade</th>
			</tr>
			<tr v-for="product in cart" :key="product.id">
				<td>{{ product.name }}</td>
			</tr>
			<tr>
				<td>Total</td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td>
					<button @click="clearCart()">Limpar carrinho</button>
				</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<button @click="checkout()">Finalizar compra</button>
				</td>
			</tr>
		</table>
	</div>
</template>

<script setup>
import {useCart} from '@/composables/useCart';

const { cart} = useCart();

</script>

<style lang="scss" scoped>
</style>