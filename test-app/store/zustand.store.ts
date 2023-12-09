import create from 'zustand'

interface StoreState {
	selectedCatalogItem: null | {
		id: number
		catalogItemLink: string
		cardImgSrc: string
		catalogCardHeading: string
		catalogItemDescription: string
		catalogItemPrice: string
	}
	setSelectedCatalogItem: (
		item: null | {
			id: number
			catalogItemLink: string
			cardImgSrc: string
			catalogCardHeading: string
			catalogItemDescription: string
			catalogItemPrice: string
		}
	) => void
}

const useStore = create<StoreState>(set => ({
	selectedCatalogItem: null,
	setSelectedCatalogItem: item => set({ selectedCatalogItem: item }),
}))

export default useStore
