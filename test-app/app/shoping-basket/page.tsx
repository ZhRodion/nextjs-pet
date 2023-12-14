'use client'

import styles from '@/shoping-basket/shoppingBasket.module.scss'
import ShoppingBasketList from '@/ShoppingBasketList/ShoppingBasketList'

export default function PageCatalog() {
	return (
		<section className={styles.shoppingBasket}>
			<ShoppingBasketList>
				<div></div>
			</ShoppingBasketList>
		</section>
	)
}
