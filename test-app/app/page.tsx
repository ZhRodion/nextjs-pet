import CatalogSection from '@/../components/CatalogSection/CatalogSection'
import IsAdultModal from '@/IsAdultModal/IsAdultModal'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Beer Shop',
	description: 'Bear Shop for testing some stuff',
}

const AppMainPage: FC = () => {
	return (
		<div>
			<CatalogSection />
			<IsAdultModal />
		</div>
	)
}

export default AppMainPage
