import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'




const FaIcons = ( ) => {

    return (
        <div>
            loading <FontAwesomeIcon icon={ faSpinner } size='3x' spin />
        </div>
    )

}




export default FaIcons