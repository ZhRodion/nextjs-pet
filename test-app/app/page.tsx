'use client'

import CatalogSection from '@/../components/CatalogSection/CatalogSection'
import ModalPortal from '@/ModalPortal/ModalPortal'
import { FC } from 'react'

// export const metadata: Metadata = {
// 	title: 'Beer Shop',
// 	description: 'Bear Shop for testing some stuff',
// }

const AppMainPage: FC = () => {
	return (
		<div>
			<CatalogSection />
			<ModalPortal />
		</div>
	)
}

export default AppMainPage
