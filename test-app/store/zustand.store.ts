'use client'

import { create } from 'zustand'
// Middleware
import { devtools, persist } from 'zustand/middleware'

interface StoreState {
	// Тип товаров в корзине
	basket: any[]
	// Прием и перемещзение товара в корзину
	addToBasket: (item: any) => void
}

// Хранилище товаров
const useStore = create<StoreState>()(
	devtools(
		// Делает состояние постоянным, то есть кешит
		persist(
			// Set - обновляет состояние компонента
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
