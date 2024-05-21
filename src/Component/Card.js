import React from 'react'

const Card = ({title, text, borderColor}) => {
    console.log("Border Color is ", borderColor)
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 border-2" style={{borderColor:`${borderColor}`}} >
            <div className="px-6 py-4">
                <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/></svg>
                <div className="font-bold text-lg mb-2">{title}</div>
                </div>
                <p className="text-gray-700 text-base">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Card
