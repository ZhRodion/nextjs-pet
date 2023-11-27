import '@/globals.scss'
import { FC } from 'react'
import MainFooter from '../Footer/MainFooter/MainFooter'
import MainHeader from '../Header/MainHeader/MainHeader'
import HeroSection from '../HeroSection/HeroSection'

interface PageLayoutProps {
	children: React.ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	return (
		<div>
			<MainHeader />
			<main className={'pageMain'}>
				<HeroSection sectionTitle='Корзина' />
				{children}
			</main>
			<MainFooter />
		</div>
	)
}

export default PageLayout
