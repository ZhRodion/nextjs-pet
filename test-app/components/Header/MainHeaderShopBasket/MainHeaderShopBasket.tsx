'use client'

import styles from '@/Header/MainHeaderShopBasket/MainHeaderShopBasket.module.scss'
import useBasketStore from '@/zustand.store'
import usePersistedStore from '@/zustand.usePersistedStore'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Beer Shop',
	description: 'Bear Shop for testing some stuff',
}

const MainHeaderShopBasket: FC = () => {
	const basketItems = usePersistedStore(useBasketStore, state => state.basket)

	return (
		<div className={styles.mainHeaderBasketWrapper}>
			<Link className={styles.mainHeaderLink} href='/shoping-basket'>
				<Image
					className={styles.mainHeaderImg}
					src='/img/vector/shop-basket.svg'
					width={30}
					height={30}
					quality={100}
					alt='.Main Logo'
				></Image>
				{basketItems && basketItems.length > 0 ? (
					<span className={`${styles.shoppingBasketCount} ${styles.visible}`}>
						{basketItems.length}
					</span>
				) : (
					<span className={styles.shoppingBasketCount}></span>
				)}
			</Link>
		</div>
	)
}

export default MainHeaderShopBasket
