import styles from '@/components/Footer/MainFooter/MainFooter.module.scss'
import MainFooterNavigation from '@/components/Footer/MainFooterNavigation/MainFooterNavigation'
import SocialMedia from '@/components/SocialMedia/SocialMedia'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const MainFooter: FC = () => {
	const footerLinks = [
		{ href: '##', linkContent: 'Каталог' },
		{ href: '##', linkContent: 'Дистрибуция' },
		{ href: '##', linkContent: 'Комплектация магазинов' },
		{ href: '##', linkContent: 'О компании' },
		{ href: '##', linkContent: 'Контакты' },
		{ href: '##', linkContent: 'Корзина' },
	]

	return (
		<footer className={styles.mainFooter}>
			<div className={`${'container'} ${styles.mainFooterWrapper}`}>
				<div className={styles.footerFirstColumn}>
					<div className={styles.footerLogoWrapper}>
						<Image
							src='/img/header-img/header-logo.png'
							width={94}
							height={111}
							quality={100}
							alt='.Main Logo'
						></Image>
						<span className={styles.footerLogoText}>Wunderbeer</span>
					</div>
					<p className={styles.footerText}>
						В ассортименте в большом разнообразии представлены хмельные напитки
						собственного изготовления, а также от проверенных и надёжных
						партнёров.
					</p>
					<SocialMedia />
				</div>
				<div className={styles.footerSecondColumn}>
					<p className={styles.footerContactHeading}>Контактная информация</p>
					<ul className={styles.footerContactsList}>
						<li className={styles.footerContactsListItem}>
							<Link className={styles.footerContactsLink} href='##'>
								<Image
									src='/img/vector/map-point.svg'
									width={14}
									height={21}
									quality={100}
									alt='.Social Icon'
								></Image>
								Россия, Москва, Рязанский проспект 22, к2
							</Link>
						</li>
						<li className={styles.footerContactsListItem}>
							<Link
								className={styles.footerContactsLink}
								href='tel: +7 (495) 740-40-51'
							>
								<Image
									src='/img/vector/phone.svg'
									width={20}
									height={21}
									quality={100}
									alt='.Social Icon'
								></Image>
								+7 (495) 740-40-51
							</Link>
						</li>
						<li className={styles.footerContactsListItem}>
							<Link
								className={styles.footerContactsLink}
								href='tel:+7 (925) 924-07-00 '
							>
								<Image
									src='/img/vector/phone.svg'
									width={20}
									height={21}
									quality={100}
									alt='.Social Icon'
								></Image>
								+7 (925) 924-07-00
							</Link>
						</li>
						<li className={styles.footerContactsListItem}>
							<Link
								className={styles.footerContactsLink}
								href='mailto:wunderbeer@mail.ru'
							>
								<Image
									src='/img/vector/mail.svg'
									width={19}
									height={16}
									quality={100}
									alt='.Social Icon'
								></Image>
								wunderbeer@mail.ru
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.footerThirdColumn}>
					<MainFooterNavigation links={footerLinks} />
				</div>
			</div>
		</footer>
	)
}

export default MainFooter
