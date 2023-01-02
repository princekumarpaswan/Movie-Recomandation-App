import React, { useState } from "react";
import "./style/card-style.css"
import "./style/model.css"
// import image from "./asset/cc.jpg"
import axios from "axios";
// import Bigcard from "./bigCard";
// import { BrowserRouter, Routers, Router } from "react-router-dom"

const Card = (props) => {


    const [modal, setModel] = useState(false)
    const [pop, setPop] = useState([])

    const toggleModel = (event) => {
        setModel(!modal)
        const id = (event.target.value)
        const api = `https://api.themoviedb.org/3/movie/${id}?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US`
        getData(api)
    }

    const getData = async (url) => {
        const getId = await axios.get(url)
        setPop(getId.data)
    }


    return (
        <>
            <div className="position">

                {


                    props.myData.map((ele) => {
                        return (
                            <div className="card" >
                                <img className="card-img" src={`https://image.tmdb.org/t/p/w220_and_h330_face${ele.poster_path}`} alt='img' />
                                <button onClick={toggleModel} className="card-btn" value={ele.id} >{ele.title}</button>
                            </div>
                        )
                    })
                }

                {
                    modal && (
                        <div className="model">
                            <div className="overlay" onClick={toggleModel}></div>
                            <div className="modal-content backdrop" style={{ backgroundImage: "url(https://image.tmdb.org/t/p/w220_and_h330_face" + `${pop.backdrop_path})` }} >
                                <div className="popImg">
                                    <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${pop.poster_path}`} alt="img"></img>
                                    <div className="layer">
                                        <h1>{pop.title}</h1>
                                        <p>{pop.overview}</p>
                                        <div>
                                            <h3>Released on: {pop.release_date}</h3>
                                            <h3>Run Time: {pop.runtime} m</h3>
                                            <h3>IMDB rating: {pop.vote_average}</h3>
                                        </div>
                                    </div>
                                </div>
                                <button className="close-modal" onClick={toggleModel}>Close</button>
                            </div>
                        </div>
                    )
                }


            </div>

        </>

    )

}



export default Card