import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Like from './Like';

const News = (props) => {
    const { urlToImage, title, description, url } = props.article
    // console.log(props.article)
    // const [action, setAction] = useState('');
    // const handleAction = () => {
    //     const color = action ? "" : "text-primary";
    //     setAction(color)
    //     console.log(action)
    // }


    return (
        <Jumbotron className="d-flex">
            <img src={urlToImage} style={{ height: '200px' }, { width: '300px' }} alt="" />
            <div className="mx-3">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>
                    <Button variant="success"> <a href={url} className="text-dark">Read More</a></Button>
                </p>
                {/* <FontAwesomeIcon icon={faThumbsUp} onClick={handleAction} className={action} style={{ fontSize: '30px', margin: '10px 10px'}} /> */}
                {/* <FontAwesomeIcon icon={faThumbsDown} style={{ fontSize: '30px', margin: '10px 10px' }} /> */}
                <Like/>
            </div>
        </Jumbotron>
    )
};

export default News;