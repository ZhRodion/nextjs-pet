import styles from '@/ShoppingBasketItem/ShoppingBasketItem.module.scss'
import Image from 'next/image'
import { FC } from 'react'

interface ShoppingBasketItemProps {
	id: number
	catalogItemLink: string
	cardImgSrc: string
	catalogCardHeading: string
	catalogItemDescription: string
	catalogItemPrice: string
}

const ShoppingBasketItem: FC<ShoppingBasketItemProps> = ({
	id,
	cardImgSrc,
	catalogCardHeading,
	catalogItemDescription,
	catalogItemPrice,
}) => {
	return (
		<div className={styles.shoppingBasketItem}>
			<Image
				src={cardImgSrc}
				width={214}
				height={571}
				loading='lazy'
				alt='.Card Image'
			/>
			<div className={styles.catalogCardText}>
				<b>{catalogCardHeading}</b>
				<p>{catalogItemDescription}</p>
				<p>Цена продукта {catalogItemPrice}</p>
			</div>
		</div>
	)
}

export default ShoppingBasketItem
