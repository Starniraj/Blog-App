import React, { useContext } from 'react'
import { store } from './Details'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';

const Tourism = () => {
    const [detail] = useContext(store);
    console.log(detail);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Tourism: All State</h1>
            <h1 style={{ margin: "20px 0px 20px 35%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        detail.filter((article) => { return article.category === "Tourism" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                            />
                        ))
                    }
                   
                </div>

                <div className="sidebar">
                    {
                        detail.filter((article) => { return article.category === "Tourism" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
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
export default Tourism