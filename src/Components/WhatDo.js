import '../Styles/WhatDo.css'
import BackendData from '../Constants/BackendData'
import FrontendData from '../Constants/FrontendData'
import { FileX } from 'react-bootstrap-icons'

const WhatDo = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10vh',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <BackendData />
            <FrontendData />
        </div>
    )
}

export default WhatDo


