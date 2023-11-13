import CatalogSection from '@/components/CatalogSection/CatalogSection'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Beer Shop',
	description: 'Bear Shop for testing some stuff',
}

const AppPage: FC = () => {
	return <CatalogSection />
}

export default AppPage
