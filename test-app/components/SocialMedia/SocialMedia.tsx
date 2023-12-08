import styles from '@/SocialMedia/SocialMedia.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const SocialMedia: FC = () => {
	return (
		<div className={styles.socMediaBlock}>
			<Link className={styles.socMediaLink} href='##'>
				<Image
					className={styles.socMediaIcon}
					src='/img/vector/insta-soc.svg'
					width={30}
					height={30}
					priority={false}
					alt='.Social Media Icon'
				/>
			</Link>
			<Link className={styles.socMediaLink} href='##'>
				<Image
					className={styles.socMediaIcon}
					src='/img/vector/facebook-soc.svg'
					width={30}
					height={30}
					priority={false}
					alt='.Social Media Icon'
				/>
			</Link>
			<Link className={styles.socMediaLink} href='##'>
				<Image
					className={styles.socMediaIcon}
					src='/img/vector/vk-soc.svg'
					width={30}
					height={30}
					priority={false}
					alt='.Social Media Icon'
				/>
			</Link>
		</div>
	)
}

export default SocialMedia
