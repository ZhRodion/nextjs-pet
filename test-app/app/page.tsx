'use client'

import CatalogSection from '@/../components/CatalogSection/CatalogSection'
import HeroSection from '@/HeroSection/HeroSection'
import ModalPortal from '@/ModalPortal/ModalPortal'
import SignUp from '@/SignUp/SignUp'
import { FC } from 'react'

// export const metadata: Metadata = {
// 	title: 'Beer Shop',
// 	description: 'Bear Shop for testing some stuff',
// }

const AppMainPage: FC = () => {
	return (
		<div>
			<HeroSection sectionTitle='Каталог' />
			<CatalogSection />
			<ModalPortal />
			<SignUp />
		</div>
	)
}

export default AppMainPage
