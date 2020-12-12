import { useState, useCallback } from 'react'

export function useLocalState(localItem) {
	const [loc, setState] = useState(JSON.parse(localStorage.getItem(localItem)))

	const setLoc = useCallback((newItem) => {
		if (newItem) {
			localStorage.setItem(localItem, JSON.stringify(newItem))
			setState(newItem)
		} else {
			localStorage.removeItem(localItem)
		}
	}, [loc])

	return [loc, setLoc]
}