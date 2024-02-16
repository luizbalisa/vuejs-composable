import { reactive } from 'vue'

const products = reactive([
	{
		id: 1,
		name: 'Product 1',
		price: 100, 
	},
	{
		id: 2,
		name: 'Product 2',
		price: 200,
	},
	{
		id: 3,
		name: 'Product 3',
		price: 300,
	}
])

const cart = reactive([])
export const useCart = () => {

	function addProduct(product) { 
		const inCart = cart.some(item => item.id === product.id)
		if(inCart) return
		cart.push(product)
	 }

	function removeProduct(product) {  }
	return {
		products,
		addProduct,
		removeProduct,
		cart
	}
}