'use client'

import ShoppingBasketItem from '@/ShoppingBasketItem/ShoppingBasketItem'
import ShoppingBasketList from '@/ShoppingBasketList/ShoppingBasketList'
import useStore from '@/zustand.store'
import styles from '../shoping-basket/shoppingBasket.module.scss'

export default function PageCatalog() {
	const basketItems = useStore(state => state.basket)

	return (
		<ShoppingBasketList>
			{basketItems.length > 0 ? (
				basketItems.map(item => (
					<ShoppingBasketItem
						key={item.id}
						cardImgSrc={item.cardImgSrc}
						catalogCardHeading={item.catalogCardHeading}
						catalogItemDescription={item.catalogItemDescription}
						catalogItemPrice={item.catalogItemPrice}
						id={0}
					/>
				))
			) : (
				<p className={styles.fillBasketText}>Заполните козину :)</p>
			)}
		</ShoppingBasketList>
	)
}
