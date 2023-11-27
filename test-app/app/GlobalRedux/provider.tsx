'use client'

import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

interface ProvidersProps {
	children: React.ReactNode
}

// export const Providers = ({ children}) => {
// 	return <Provider store={store}>{children}</Provider>
// }

const Providers: FC<ProvidersProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default Providers
