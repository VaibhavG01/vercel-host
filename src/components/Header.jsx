import React from 'react'

const Header = () => {
    return (
        <>
            <div className="main bg-black px-4 md:px-16 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

                    <h1 className="text-white font-bold text-3xl md:text-5xl text-center md:text-left">
                        Vaibhav
                    </h1>

                    <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-center text-white">
                        <li>He is an Admin "VG"</li>
                        <li>The car Speed is 252</li>
                        <li>Feedback</li>
                    </ul>

                </div>
            </div>

        </>
    )
}

export default Header