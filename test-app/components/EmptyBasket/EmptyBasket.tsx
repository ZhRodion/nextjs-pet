import styles from '@/EmptyBasket/EmptyBasket.module.scss'
import Link from 'next/link'
import { FC } from 'react'

const EmptyBasket: FC = () => {
	return (
		<div className={styles.emptyBasketText}>
			<h2 className={styles.emptyBasketTitle}> Пустая корзина </h2>
			<p className={styles.emptyBasketSubtext}>
				В вашей корзине пока нет товаров
				<br />
				Легко добавляйте в корзину понравившиеся товары кликнув по кнопке :)
			</p>
			<Link className={styles.backToCatalogLink} href='/'>
				<button className={styles.backToCatalog} type='button'>
					Перейти в каталог
				</button>
			</Link>
		</div>
	)
}

export default EmptyBasket
