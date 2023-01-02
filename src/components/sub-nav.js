import React, { useState } from "react";
import './style/Side-style.css'
import "./style/style.css"
import Nav from "./nav";

const SubNav = () => {
    const cato = ["Action", "Horror", "Science Fiction", "Comedy", "Love", "Drama",
        "Fantasy", "Thriller", "Mystery", "Top rated"]

    const [btnData, setBtnData] = useState()

    function handleClick(event) {
        setBtnData(event.target.innerText)
    }

    return (

        < >
            <Nav btnData={btnData} />
            <div className="side-div">
                <div className="side-nav">
                    <ul className="side-ul">
                        {
                            cato.map((e) => (
                                <li><button onClick={handleClick} >{e}</button></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SubNav