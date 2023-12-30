import styles from '@/Header/MainHeader/MainHeader.module.scss'
import MainHeaderNav, { ListItem } from '@/Header/MainHeaderNav/MainHeaderNav'
import MainHeaderProfile from '@/Header/MainHeaderProfile/MainHeaderProfile'
import MainHeaderShopBasket from '@/Header/MainHeaderShopBasket/MainHeaderShopBasket'
import SocialMedia from '@/SocialMedia/SocialMedia'
import Image from 'next/image'
import { FC } from 'react'

const items: ListItem[] = [
	{ link: '##', linkContnent: 'Каталог' },
	{ link: '##', linkContnent: 'Дистрибуция' },
	{ link: '##', linkContnent: 'Комплектация магазинов' },
	{ link: '##', linkContnent: 'О компании' },
	{ link: '##', linkContnent: 'Контакты' },
]

const MainHeader: FC = () => {
	return (
		<header className={styles.mainHeader}>
			<div className={`${'container'} ${styles.mainHeaderWrapper}`}>
				<div className={styles.mainHeaderTopWrapper}>
					<SocialMedia />
					<div className={styles.logoWrapper}>
						<Image
							src='/img/header-img/header-logo.png'
							width={94}
							height={111}
							quality={100}
							alt='.Main Logo'
						></Image>
						<span className={styles.logoText}>Wunderbeer</span>
					</div>
					<div className={styles.mainHeaderSearcAndBasketWrapper}>
						<MainHeaderProfile />
						<MainHeaderShopBasket />
					</div>
				</div>
				<MainHeaderNav items={items} />
			</div>
		</header>
	)
}

export default MainHeader
