'use client'

import styles from '@/CatalogList/CatalogList.module.scss'
import { FC } from 'react'

interface CatalogListProps {
	children: React.ReactNode
}

const CatalogList: FC<CatalogListProps> = ({ children }) => {
	return <div className={styles.catalogList}>{children}</div>
}

export default CatalogList
