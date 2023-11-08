import styles from '@/components/Header/MainHeaderNav/MainHeaderNav.module.scss'
import Link from 'next/link'
import { FC } from 'react'

export interface ListItem {
	link: string
	linkContnent: string
}

export interface MainHeaderNavProps {
	items: ListItem[]
}

const MainHeaderNav: FC<MainHeaderNavProps> = ({ items }) => {
	return (
		<ul className={styles.mainHeaderNavList}>
			{items.map((item, index) => (
				<li key={index} className={styles.mainHeaderNavListLink}>
					<Link className={styles.mainHeaderNavLink} href={item.link}>
						{item.linkContnent}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default MainHeaderNav
