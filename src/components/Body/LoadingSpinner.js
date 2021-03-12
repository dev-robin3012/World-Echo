import React from 'react';
import '../../App.css';

const LoadingSpinner = () => {
    return (
        <div className="text-center" id="loading">
            <div class="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    )
};

export default LoadingSpinner;