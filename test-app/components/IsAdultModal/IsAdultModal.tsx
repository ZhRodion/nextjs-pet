'use client'

import styles from '@/IsAdultModal/IsAdultModal.module.scss'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { FC } from 'react'

const IsAdultModal: FC = () => {
	const handleAgree = () => {
		// Задать куку с именем 'isAdult' и значением 'true' на 60 дней
		Cookies.set('isAdult', 'true', { expires: 60 })
	}

	return (
		<div className={styles.modalPageWrapper}>
			<div className={styles.modalBody}>
				<p className={styles.adultModalText}>
					Вам <span className={styles.boldFont}>точно</span> исполнилось
					<span className={styles.boldFont}> 18 </span> лет?
				</p>
				<div className={styles.adultModalBtnsWrapper}>
					<button className={styles.adultAgreeBtn} onClick={handleAgree}>
						Мне исполнилось 18 лет
					</button>
					<Link className={styles.adultRedirect} href='https://www.google.com/'>
						<button className={styles.adultDisagreeBtn}>Мне еще нет 18</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default IsAdultModal
