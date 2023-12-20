'use client'

import styles from '@/CatalogItem/CatalogItem.module.scss'
import useBasketStore from '@/zustand.store'
import Image from 'next/image'
import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface CatalogItemProps {
	id: number
	cardImgSrc: string
	catalogCardHeading: string
	catalogItemDescription: string
	catalogItemPrice: string
}

const CatalogItem: FC<CatalogItemProps> = ({
	id,
	cardImgSrc,
	catalogCardHeading,
	catalogItemDescription,
	catalogItemPrice,
}) => {
	// Добавление состояния в стор
	const addToBasket = useBasketStore(state => state.addToBasket)

	// Кликом собираем пропсы конкретные
	const handleBuyClick = () => {
		addToBasket({
			id,
			cardImgSrc,
			catalogCardHeading,
			catalogItemDescription,
			catalogItemPrice,
		})
	}

	return (
		<div className={styles.catalogItem} key={uuidv4()}>
			<Image
				className={styles.catalogItemPhoto}
				src={cardImgSrc}
				width={214}
				height={571}
				quality={100}
				loading='lazy'
				sizes='100vw'
				alt={'.Catalog card image'}
			/>
			<div className={styles.catalogItemTextWrapper}>
				<p className={styles.catalogItemHeading}>{catalogCardHeading}</p>
				<p className={styles.catalogItemDescription}>
					{catalogItemDescription}
				</p>
			</div>
			<b className={styles.catalogItemPrice}>{catalogItemPrice} ₽</b>
			<button
				className={styles.catalogItemBuyBtn}
				type='button'
				onClick={handleBuyClick}
			>
				Купить
			</button>
			<button className={styles.catalogItemBuyOneClickBtn} type='button'>
				Купить в 1 клик
			</button>
		</div>
	)
}

export default CatalogItem
