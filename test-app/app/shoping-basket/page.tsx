'use client'

import styles from '@/shoping-basket/shoppingBasket.module.scss'
import ShoppingBasketItem from '@/ShoppingBasketItem/ShoppingBasketItem'
import ShoppingBasketList from '@/ShoppingBasketList/ShoppingBasketList'
import useStore from '@/zustand.store'

export default function PageCatalog() {
	const selectedCatalogItem = useStore(state => state.selectedCatalogItem)

	return (
		<section className={styles.shoppingBasket}>
			<ShoppingBasketList>
				{selectedCatalogItem && (
					<ShoppingBasketItem
						key={selectedCatalogItem.id}
						{...selectedCatalogItem}
					/>
				)}
			</ShoppingBasketList>
		</section>
	)
}
