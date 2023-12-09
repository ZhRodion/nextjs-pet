import styles from '@/ShoppingBasketList/ShoppingBasketList.module.scss'
import { FC } from 'react'

interface ShoppingBasketListProps {
	children: React.ReactNode
}

const ShoppingBasketList: FC<ShoppingBasketListProps> = ({ children }) => {
	return (
		<section className={styles.shgoippingBasketList}>
			<div className={`${'container'} ${styles.shoppingBasketListWrapper}`}>
				{children}
			</div>
		</section>
	)
}

export default ShoppingBasketList
