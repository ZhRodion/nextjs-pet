import styles from '@/components/Footer/MainFooterNavigation/MainFooterNavigation.module.scss'
import Link from 'next/link'
import { FC } from 'react'

export interface MainFooterNavigationProps {
	links: { href: string; linkContent: string }[]
}

const MainFooterNavigation: FC<MainFooterNavigationProps> = ({ links }) => {
	return (
		<ul className={styles.mainFooterNavList}>
			{links.map((link, index) => (
				<li key={index} className={styles.mainFooterNavListItem}>
					<Link className={styles.mainFooterNavListLink} href={link.href}>
						{link.linkContent}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default MainFooterNavigation
