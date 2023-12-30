'use client'

import EmptyBasket from '@/EmptyBasket/EmptyBasket'
import HeroSection from '@/HeroSection/HeroSection'
import ShoppingBasketItem from '@/ShoppingBasketItem/ShoppingBasketItem'
import ShoppingBasketList from '@/ShoppingBasketList/ShoppingBasketList'
import Spiner from '@/Spiner/Spiner'
import useBasketStore from '@/zustand.store'
import usePersistedStore from '@/zustand.usePersistedStore'
import { v4 as uuidv4 } from 'uuid'

export default function PageCatalog() {
	// Использует стор для получения состояния массива корзины
	const basketItems = usePersistedStore(useBasketStore, state => state.basket)

	return (
		<div>
			<HeroSection sectionTitle='Корзина' />
			<ShoppingBasketList>
				{/* Показываем спиннер, если корзина еще не загружена */}
				{!basketItems && <Spiner />}
				{/* Выделяем место под будущие элементы, чтобы избежать дерганий */}
				{basketItems &&
					(basketItems.length > 0 ? (
						basketItems?.map(item => (
							<ShoppingBasketItem
								key={uuidv4()}
								id={item.id}
								cardImgSrc={item.cardImgSrc}
								catalogCardHeading={item.catalogCardHeading}
								catalogItemDescription={item.catalogItemDescription}
								catalogItemPrice={item.catalogItemPrice}
							/>
						))
					) : (
						<EmptyBasket />
					))}
			</ShoppingBasketList>
		</div>
	)
}
