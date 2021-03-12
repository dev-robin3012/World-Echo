
import React from 'react';
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
                <Like />
            </div>
        </Jumbotron>
    )
};

export default News;