import styles from '@/components/Header/MainHeaderShopBasket/MainHeaderShopBasket.module.scss'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Beer Shop',
	description: 'Bear Shop for testing some stuff',
}

const MainHeaderShopBasket: FC = () => {
	return (
		<div className={styles.mainHeaderBasketWrapper}>
			<Link href='/shoping-basket'>
				<Image
					src='/img/vector/shop-basket.svg'
					width={30}
					height={30}
					quality={100}
					alt='.Main Logo'
				></Image>
			</Link>
		</div>
	)
}

export default MainHeaderShopBasket