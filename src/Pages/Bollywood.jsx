import React, { useContext } from 'react'

import { store } from './Details'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';

const Movies = () => {
    const [detail] = useContext(store);
    console.log(detail);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Movies</h1>
            <h1 style={{ margin: "20px 0px 20px 32%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        detail.filter((article) => { return article.category === "Movies" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className="sidebar">
                    {
                        detail.filter((article) => { return article.category === "Movies" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                       <img src="https://www.computerhope.com/jargon/a/advertise.jpg" alt="advertisement" style={{width:"160px",position:"relative",top:"-158px",height:"29vh"}} />
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Movies