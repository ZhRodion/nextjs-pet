import styles from '@/components/Header/MainHeaderShopBasket/MainHeaderShopBasket.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const MainHeaderShopBasket: FC = () => {
	return (
		<div className={styles.mainHeaderBasketWrapper}>
			<Link href='##'>
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
