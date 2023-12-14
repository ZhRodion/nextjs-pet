'use client'

import ShoppingBasketItem from '@/ShoppingBasketItem/ShoppingBasketItem'
import ShoppingBasketList from '@/ShoppingBasketList/ShoppingBasketList'
import useStore from '@/zustand.store'
import styles from '../shoping-basket/shoppingBasket.module.scss'

export default function PageCatalog() {
	// Использует стор для получения состояния массива корзины
	const basketItems = useStore(state => state.basket)

	return (
		<ShoppingBasketList>
			{basketItems.length > 0 ? (
				basketItems.map(item => (
					<ShoppingBasketItem
						key={`basket_${item.id}`}
						id={item.id}
						cardImgSrc={item.cardImgSrc}
						catalogCardHeading={item.catalogCardHeading}
						catalogItemDescription={item.catalogItemDescription}
						catalogItemPrice={item.catalogItemPrice}
					/>
				))
			) : (
				<p className={styles.fillBasketText}>Заполните козину :)</p>
			)}
		</ShoppingBasketList>
	)
}
