'use client'

import styles from '@/IsAdultModal/IsAdultModal.module.scss'
import PortalModal from '@/PortalModal/PortalModal'
import Link from 'next/link'
import { FC } from 'react'

const IsAdultModal: FC = () => {
	return (
		<PortalModal isOpen={true}>
			<p className={styles.adultModalText}>
				Вам <span className={styles.boldFont}>точно</span> исполнилось
				<span className={styles.boldFont}> 18 </span> лет?
			</p>
			<div className={styles.adultModalBtnsWrapper}>
				<button className={styles.adultAgreeBtn}>Мне исполнилось 18 лет</button>
				<Link className={styles.adultRedirect} href='https://www.google.com/'>
					<button className={styles.adultDisagreeBtn}>Мне еще нет 18</button>
				</Link>
			</div>
		</PortalModal>
	)
}

export default IsAdultModal
