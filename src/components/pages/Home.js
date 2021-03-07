import React from 'react'
import Navigation from '../Navigation'

const Home = () => {
    return (
        <>
        <Navigation />
        <div className="homeContainer">
            <div className="container">
                <p className="home-subheading">Hello, My Name is Niv Suroghon</p>
                <p className="home-heading">I Am a Student Full-Stack Developer!</p>
            </div>
        </div>
        </>
    )
}

export default Home
