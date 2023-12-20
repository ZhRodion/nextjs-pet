'use client'

import ShoppingBasketItem from '@/ShoppingBasketItem/ShoppingBasketItem'
import ShoppingBasketList from '@/ShoppingBasketList/ShoppingBasketList'
import useBasketStore from '@/zustand.store'
import usePersistedStore from '@/zustand.usePersistedStore'
import { v4 as uuidv4 } from 'uuid'

export default function PageCatalog() {
	// Использует стор для получения состояния массива корзины
	const basketItems = usePersistedStore(useBasketStore, state => state.basket)

	return (
		<ShoppingBasketList>
			{basketItems?.map(item => (
				<ShoppingBasketItem
					key={uuidv4()}
					id={item.id}
					cardImgSrc={item.cardImgSrc}
					catalogCardHeading={item.catalogCardHeading}
					catalogItemDescription={item.catalogItemDescription}
					catalogItemPrice={item.catalogItemPrice}
				/>
			))}
		</ShoppingBasketList>
	)
}
