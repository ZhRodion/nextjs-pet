import styles from '@/components/HeroSection/HeroSection.module.scss'
import Image from 'next/image'
import { FC } from 'react'

interface HeroSectionProps {
	sectionTitle: string
}

const HeroSection: FC<HeroSectionProps> = ({ sectionTitle }) => {
	return (
		<section className={styles.heroSection}>
			<Image
				className={styles.heroBgImage}
				src={'/img/hero/hero-beer.png'}
				alt={'.Beer Background'}
				width={1920}
				height={390}
				quality={100}
				// layout='responsive'
			/>
			<div className={`${'container'} ${styles.heroSectionWrapper}`}>
				<h1 className={styles.heroTitle}>{sectionTitle}</h1>
			</div>
		</section>
	)
}

export default HeroSection
