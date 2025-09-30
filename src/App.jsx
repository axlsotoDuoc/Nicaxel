import React from 'react'
import '/Styles/index.css'
import { UserCard } from './UserCard.jsx'

export function App () {
    return (
        <>
            <UserCard isFollowing
                userName = 'axlsotooo' 
                name = 'Axel P. Soto'/>

            <UserCard isFollowing={false}   
                userName = 'axlsotooo' 
                name = 'Axel P. Soto '/>

            <UserCard isFollowing 
                userName = 'axlsotooo' 
                name = 'Axel P. Soto '/>
        </>

    )
}