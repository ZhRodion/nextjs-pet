import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface StoreState {
	basket: any[]
	addToBasket: (item: any) => void
}

const useStore = create<StoreState>()(
	devtools(
		persist(
			set => ({
				basket: [],
				addToBasket: item =>
					set(state => ({ basket: [...state.basket, item] })),
			}),
			{ name: 'shopingBasket' }
		)
	)
)

export default useStore
