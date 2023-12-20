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
const useBasketStore = create<StoreState>()(
	devtools(
		// Делает состояние постоянным, то есть кешит
		// Set - обновляет состояние компонента
		persist(
			(set, get) => ({
				basket: [],
				addToBasket: item =>
					set(state => ({ basket: [...state.basket, item] })),
			}),
			{ name: 'shopingBasket' }
		)
	)
)

export default useBasketStore
