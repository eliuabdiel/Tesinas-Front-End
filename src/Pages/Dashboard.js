import React, { useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Alert, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Dashboard() {
    const [error, setError] = useState()
    const { logout, currentUser } = useAuth()
    const history = useHistory()

    async function _handleClickLogout(e){ 
        try {
            setError('')
            await logout()
            history.push('/login')
        } catch(error){
            setError(error)
        }
    }
    return (
        <div>
            {error && <Alert variant="danger">{error}</Alert>} {/* si hay algun error pone una alerta en el componente */}
            <h1>Hello {currentUser.email} the dashboard</h1>
            <Button variant="danger" onClick={_handleClickLogout}> Logout</Button>
        </div>
    )
}
