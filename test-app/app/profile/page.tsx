import HeroSection from '@/HeroSection/HeroSection'
import styles from '@/profile/profile.module.scss'
import UserProfile from '@/UserProfile/UserProfile'

const ProfilePage = () => {
	return (
		<div>
			<HeroSection sectionTitle='Профиль' />
			<div className={styles.profilePage}>
				<UserProfile userName={''} userEmail={''} userPassword={''} />
			</div>
		</div>
	)
}

export default ProfilePage
