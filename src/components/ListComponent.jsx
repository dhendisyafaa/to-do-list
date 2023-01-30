import React from 'react'

const ListComponent = (props) => {
    return (
        <div className='flex justify-between items-center border border-accent rounded-md p-3 mb-3'>
            <p>{props.item}</p>
            <div className="flex gap-4">
                {/* <p>v</p>
                <p>v</p> */}
            </div>
        </div>
    )
}

export default ListComponent