import styles from '@/UserProfile/UserProfile.module.scss'
import { FC } from 'react'

interface UserProfileProps {
	userName: string
	userEmail: string
	userPassword: string
}

const UserProfile: FC<UserProfileProps> = ({
	userName,
	userEmail,
	userPassword,
}) => {
	return (
		<section className={styles.userProfile}>
			<h2 className={styles.userProfileName}>
				Добро пожаловать, <span className={styles.userName}>{userName}</span>
			</h2>
			<div className={`${styles.userProfileData} ${'container'}`}>
				<ul className={styles.userProfileDetailDataList}>
					<li className={styles.userProfileDetailDataItem}>
						<b className={styles.userProfileDetailItemHeading}>Имя</b>
						<span className={styles.userProfileNotPrivateData}>{userName}</span>
						<button className={styles.changeUserDataBtn} type='button'>
							изменить
						</button>
					</li>
					<li className={styles.userProfileDetailDataItem}>
						<b className={styles.userProfileDetailItemHeading}>Почта</b>
						<span className={styles.userProfileNotPrivateData}>
							{userEmail}
						</span>
						<button className={styles.changeUserDataBtn} type='button'>
							изменить
						</button>
					</li>
					<li className={styles.userProfileDetailDataItem}>
						<b className={styles.userProfileDetailItemHeading}>Пароль</b>
						<span className={styles.userProfilePrivateData}>
							{userPassword}
						</span>
						<button className={styles.changeUserDataBtn} type='button'>
							изменить
						</button>
					</li>
				</ul>
				<button className={styles.doneBtn}>Готово</button>
			</div>
		</section>
	)
}

export default UserProfile
