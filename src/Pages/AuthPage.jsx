import React, { Fragment } from 'react'
import AuthenticationImage from '../component/Authpage Components/AuthenticationImage'
import AuthenticationForm from '../component/Authpage Components/AuthenticationForm'
import NavBar from '../component/Authpage Components/NavBar'

const AuthPage = () => {
    return (
        <Fragment>
            <NavBar />
            <div className='flex'>
                <AuthenticationImage />
                <AuthenticationForm />
            </div>
        </Fragment>
    )
}

export default AuthPage