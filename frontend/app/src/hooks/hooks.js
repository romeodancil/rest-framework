import { useState, useCallback } from 'react'

export function useLocalState(localItem) {
	const [loc, setState] = useState(localStorage.getItem(localItem))

	const setLoc = useCallback((newItem) => {
		if (newItem) {
			localStorage.setItem(localItem, newItem)
			setState(newItem)
		} else {
			localStorage.removeItem(localItem)
		}
	}, [loc])

	return [loc, setLoc]
}