'use client'

import styles from '@/PortalModal/PortalModal.module.scss'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { default as Modal, default as ReactModal } from 'react-modal'

interface PortalModalProps {
	children: React.ReactNode
	isOpen?: boolean
}

const PortalModal: FC<PortalModalProps> = ({ children, isOpen = false }) => {
	ReactModal.setAppElement('body')
	const [isModalOpen, setIsModalOpen] = useState(isOpen)

	const handleOpenModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	useEffect(() => {
		setIsModalOpen(isOpen)
	}, [isOpen])

	return isModalOpen ? (
		<Modal
			className={styles.modalPageWrapper}
			isOpen={isModalOpen}
			onRequestClose={handleCloseModal}
		>
			<div className={styles.modalBody}>
				<button
					className={styles.modalCloseBtn}
					type='button'
					onClick={handleCloseModal}
				>
					<Image
						className={styles.closeCrossImg}
						src='/img/vector/cross.svg'
						width={30}
						height={30}
						quality={100}
						alt='.Close Cross'
					/>
				</button>
				<div className={styles.modalContent}>{children}</div>
			</div>
		</Modal>
	) : null
}

export default PortalModal
