import styles from '@/page.module.scss'
import RootLayout from './layout'

export default function Home() {
	return (
		<RootLayout>
			<main className={styles.main}></main>
		</RootLayout>
	)
}
