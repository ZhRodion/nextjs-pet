import styles from '@/Header/MainHeaderProfile/MainHeaderProfile.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const MainHeaderProfile: FC = () => {
	return (
		<div className={styles.mainHeaderProfile}>
			<Link className={styles.mainHeaderLink} href='/profile'>
				<Image
					className={styles.profileImage}
					src='/img/vector/profile.svg'
					width={30}
					height={30}
					quality={100}
					alt='.Profile'
				/>
			</Link>
		</div>
	)
}

export default MainHeaderProfile
