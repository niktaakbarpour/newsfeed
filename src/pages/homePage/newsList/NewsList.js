import React from 'react';
import News from "../news/News";
import './NewsList.css';

const NewsList = props => {
    return(
        <div className='card-list'>
            {
                props.news.map(n =>
                    <News key={n.id} n={n} />
                )
            }
        </div>
    )
}

export default NewsList;