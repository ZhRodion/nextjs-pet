import styles from '@/components/Header/MainHeaderSearch/MainHeaderSearch.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const MainHeaderSearch: FC = () => {
	return (
		<div className={styles.mainHeaderSearch}>
			<Link href='##'>
				<Image
					className={styles.searchImage}
					src='/img/vector/search.svg'
					width={30}
					height={30}
					quality={100}
					alt='.Search'
				/>
			</Link>
		</div>
	)
}

export default MainHeaderSearch
