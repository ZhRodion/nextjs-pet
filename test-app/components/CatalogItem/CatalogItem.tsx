import styles from '@/CatalogItem/CatalogItem.module.scss'
import useStore from '@/zustand.store'
import Image from 'next/image'
import { FC } from 'react'

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
	const addToBasket = useStore(state => state.addToBasket)

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
		<div className={styles.catalogItem} key={id}>
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
