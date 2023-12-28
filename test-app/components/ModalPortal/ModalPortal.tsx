'use effect'

import Cookies from 'js-cookie'

import IsAdultModal from '@/IsAdultModal/IsAdultModal'
import { createPortal } from 'react-dom'

const ModalPortal = () => {
	// Проверить, была ли установлена кука 'isAdult'
	const isAdultCookieSet = Cookies.get('isAdult') === 'true'

	// Если кука уже установлена, не отображать модалку
	if (isAdultCookieSet) {
		return null
	}

	return <>{createPortal(<IsAdultModal />, document.body)}</>
}

export default ModalPortal
