import React from 'react'

const Header = (props) => {
    return (
        <>
            <div className="main h-24 bg-green-300 flex justify-between items-center px-16">

                <h1 className='font-bold text-5xl'>{props.user}</h1>

                <ul className='flex justify-center items-center gap-10'>
                    <li>He is a Admin "{props.admin}"</li>
                    <li>Contact</li>
                    <li>Feedback</li>
                </ul>
            </div>
        </>
    )
}

export default Header