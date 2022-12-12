import success from '../../assets/icons/success.png'
import error from '../../assets/icons/error.png'
import warning from '../../assets/icons/warning.png'
import info from '../../assets/icons/info.png'
import close from '../../assets/icons/close.png'
import { useEffect, useState } from 'react'


type Props = {
    title: string,
    message?: string,
    type?: string,
    position?: string,
}

type toastContent = {
    title: string,
    message?: string,
}
const ModernToaster = ({ title, message, type = 'success', position = 'bottom-right' }: Props) => {
    const [toastLists, setToastLists] = useState<toastContent[]>([])
    const [showToast, setShowToast] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowToast(false)
        }, 2000);
    }, [showToast])

    useEffect(() => {

        if (title && message) {
            setShowToast(true)
            setToastLists([...toastLists, { title, message }])
        }
    }, [toastLists,showToast])

    const handleCloseToast = () => {
        setShowToast(false)
        setToastLists([])
    }
    console.log('hi::', title, message)
    return (
        <div className={`modernToast ${!showToast && 'hideModernToast'}`}>
            {toastLists.map((toast, idx) => (
                <div className={`
                modernToastCard
        ${type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : type === 'warning' ? 'toast-warn' : 'toast-info'}
        ${position === 'top-right' ? 'top-right' : position === 'bottom-right' ? 'bottom-right' : position === 'top-left' ? 'top-left' : 'bottom-left'}        `
                }  >
                    <div className="modernToast-container toast-line">
                        <div className="toastbox--main">
                            <div className="toast--icon">
                                {type === 'success' && <img src={success} alt="info" />}
                                {type === 'error' && <img src={error} alt="info" />}
                                {type === 'warning' && <img src={warning} alt="info" />}
                                {type === 'info' && <img src={info} alt="info" />}

                            </div>
                            <div className="toast--text">
                                <div className="toast--title">{toast.title}</div>
                                <div className="toast--message">{toast.message}</div>
                            </div>
                            <div className="toast--button">
                                <button className="toastbutton" onClick={() => handleCloseToast()}>
                                    <img className="icon-close" src={close} alt="info" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ModernToaster;