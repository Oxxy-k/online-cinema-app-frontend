export const getStoreLocalStorage = (name: string) => {
	if (typeof localStorage === 'undefined') return null
	const value = localStorage.getItem(name)
	return value ? JSON.parse(value) : null
}
