import React from 'react'

const Card = ({title, text, borderColor}) => {
    console.log("Border Color is ", borderColor)
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 border-2" style={{borderColor:`${borderColor}`}} >
            <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Card
