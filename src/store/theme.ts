import { writable } from "svelte/store"

const createTheme = (key) => {
	const startValue: boolean = JSON.parse(localStorage.getItem(key))

	const { subscribe, set, update } = writable(startValue)

	const local = () => {
		subscribe((current) => {
			localStorage.setItem(key, JSON.stringify(current))
		})
	}

	const setTheme = (isDark) => {
		let html = document.getElementsByTagName("html")[0]
		if (isDark) {
			html.setAttribute("class", "dark")
		} else {
			html.setAttribute("class", "")
		}
	}

	setTheme(startValue)

	return {
		subscribe,
		useLocalStorage: local,
		toggleDarkTheme: () => {
			update((n) => {
				setTheme(!n)
				local()

				return !n
			})
		},
		reset: () => set(startValue),
	}
}

export const theme = createTheme("dark-theme")
