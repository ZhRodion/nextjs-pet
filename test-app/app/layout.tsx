import '@/globals.scss'
import MainHeader from '@/Header/MainHeader/MainHeader'
import styles from '@/page.module.scss'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC } from 'react'
import MainFooter from '../components/Footer/MainFooter/MainFooter'
import HeroSection from '../components/HeroSection/HeroSection'
const inter = Inter({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
	title: 'Beer Shop',
	description: 'Bear Shop for testing some stuff',
}

interface MainLayoutProps {
	children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<MainHeader />
				<main className={styles.main}>
					<HeroSection sectionTitle='Каталог' />
					{children}
				</main>
				<MainFooter />
			</body>
		</html>
	)
}

export default MainLayout
