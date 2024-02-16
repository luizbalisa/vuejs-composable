import {reactive} from 'vue';

export async function useFetchApi(url, method = 'GET') {
	const data = reactive({ info: {} })
	try {
		const response = await fetch(url, {
			method
		})

		data.info = await response.json()
	} catch (error) {
		console.log(error)
	}

	return data
}