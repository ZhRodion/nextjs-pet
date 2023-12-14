'use client'

import CatalogItem from '@/CatalogItem/CatalogItem'
import CatalogList from '@/CatalogList/CatalogList'
import styles from '@/CatalogSection/CatalogSection.module.scss'
import { FC } from 'react'

const CatalogSection: FC = () => {
	const CatalogItemsList = [
		{
			id: 1,
			cardImgSrc: '/img/catalog/1-cat-item.png',
			catalogCardHeading: 'Irish Stout Irish Stout',
			catalogItemDescription: '%4,6, Светлое, Нефильрованное',
			catalogItemPrice: '68',
		},
		{
			id: 2,
			cardImgSrc: '/img/catalog/2-cat-item.png',
			catalogCardHeading: 'Irish Stout',
			catalogItemDescription: '%4,6, Светлое, Нефильрованное',
			catalogItemPrice: '68',
		},
		{
			id: 3,
			cardImgSrc: '/img/catalog/3-cat-item.png',
			catalogCardHeading: 'Irish Stout',
			catalogItemDescription: '%4,6, Светлое, Нефильрованное',
			catalogItemPrice: '68',
		},
		{
			id: 4,
			cardImgSrc: '/img/catalog/3-cat-item.png',
			catalogCardHeading: 'Irish Stout',
			catalogItemDescription: '%4,6, Светлое, Нефильрованное',
			catalogItemPrice: '68',
		},
		{
			id: 5,
			cardImgSrc: '/img/catalog/2-cat-item.png',
			catalogCardHeading: 'Irish Stout',
			catalogItemDescription: '%4,6, Светлое, Нефильрованное',
			catalogItemPrice: '68',
		},
		{
			id: 6,
			cardImgSrc: '/img/catalog/1-cat-item.png',
			catalogCardHeading: 'Irish Stout Irish Stout',
			catalogItemDescription: '%4,6, Светлое, Нефильрованное',
			catalogItemPrice: '68',
		},
		{
			id: 7,
			cardImgSrc: '/img/catalog/3-cat-item.png',
			catalogCardHeading: 'Irish Stout',
			catalogItemDescription: '%4,6, Светлое, Нефильрованное',
			catalogItemPrice: '68',
		},
		{
			id: 8,
			cardImgSrc: '/img/catalog/2-cat-item.png',
			catalogCardHeading: 'Irish Stout',
			catalogItemDescription: '%4,6, Светлое, Нефильрованное',
			catalogItemPrice: '68',
		},
		{
			id: 9,
			cardImgSrc: '/img/catalog/1-cat-item.png',
			catalogCardHeading: 'Irish Stout Irish Stout',
			catalogItemDescription: '%4,6, Светлое, Нефильрованное',
			catalogItemPrice: '68',
		},
	]

	return (
		<section className={styles.CatalogSection}>
			<div className={`${'container'} ${styles.catalogSelectionWrapper}`}>
				<h2 className='visually-hidden'>Catalog</h2>
				<CatalogList>
					{CatalogItemsList.map(item => (
						<CatalogItem
							key={item.id}
							cardImgSrc={item.cardImgSrc}
							catalogCardHeading={item.catalogCardHeading}
							catalogItemDescription={item.catalogItemDescription}
							catalogItemPrice={item.catalogItemPrice}
							id={item.id}
						/>
					))}
				</CatalogList>
			</div>
		</section>
	)
}

export default CatalogSection
