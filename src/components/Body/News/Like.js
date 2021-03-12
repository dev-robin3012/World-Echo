import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Like = () => {
    const [action, setAction] = useState('');
    const handleAction = () => {
        setAction(action ? '' : "text-primary")
    }

    return (
        <div>
            <FontAwesomeIcon icon={faThumbsUp} onClick={() => handleAction()} className={action} style={{ fontSize: '30px', margin: '10px 10px' }} />
            {/* <FontAwesomeIcon icon={faThumbsDown} style={{ fontSize: '30px', margin: '10px 10px' }} /> */}
        </div>
    );
};

export default Like;