import styles from '@/components/CatalogList/CatalogList.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface CatalogListProps {
	items: {
		id: number
		catalogItemLink: string
		cardImgSrc: string
		catalogCardHeading: string
		catalogItemDescription: string
		catalogItemPrice: string
	}[]
}

const CatalogList: FC<CatalogListProps> = ({ items }) => {
	return (
		<div className={styles.catalogList}>
			{items.map((item, index) => (
				<div className={styles.catalogItem} key={item.id}>
					<Link
						className={styles.catalogItemLink}
						href={`/products/[productId]`}
						as={`/products/${encodeURIComponent(item.catalogItemLink)}`}
						key={index}
					>
						<Image
							className={styles.catalogItemPhoto}
							src={item.cardImgSrc}
							width={214}
							height={571}
							quality={100}
							loading='lazy'
							sizes='100vw'
							alt={'.Catalog card image'}
						/>
						<div className={styles.catalogItemTextWrapper}>
							<p className={styles.catalogItemHeading}>
								{item.catalogCardHeading}
							</p>
							<p className={styles.catalogItemDescription}>
								{item.catalogItemDescription}
							</p>
						</div>
						<b className={styles.catalogItemPrice}>{item.catalogItemPrice} ₽</b>
						<button className={styles.catalogItemBuyBtn} type='button'>
							Купить
						</button>
					</Link>
				</div>
			))}
		</div>
	)
}

export default CatalogList
