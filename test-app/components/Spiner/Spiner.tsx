import styles from '@/Spiner/Spiner.module.scss'
import { FC } from 'react'

const Spiner: FC = () => {
	return (
		<div className='container'>
			<div className={styles.spinerWrapper}>
				<div className={styles.spinner}></div>
			</div>
		</div>
	)
}

export default Spiner
