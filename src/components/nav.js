import React, { useRef, useState, useEffect } from "react";
import logo from "./asset/logo.png"
import "./style/style.css"
import Card from "./card";
import axios from "axios";



const Nav = (props) => {


    const [serch, setSerch] = useState();
    const [homchan, sethomechan] = useState(false)
    const [pagenum, setState] = useState(1)
    let [myData, setMyData] = useState([])





    const inputRef = useRef()

    let api = (`https://api.themoviedb.org/3/movie/popular?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&page=${pagenum}`)



    const getData = async (url) => {
        try {
            const res = await axios.get(url)
            const adata = (res.data.results)
            setMyData(adata)
        } catch (error) {
            console.log(error);
        }

    }

    if (props.btnData === 'Action') {
        console.log(props.btnData);
        const API = `https://api.themoviedb.org/3/search/movie?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&query=${props.btnData}&page=1&include_adult=false`
        getData(API)
    }
    if (props.btnData === 'Horror') {
        console.log(props.btnData);
        const API = `https://api.themoviedb.org/3/search/movie?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&query=${props.btnData}&page=${pagenum}&include_adult=false`
        getData(API)
    }
    if (props.btnData === 'Science Fiction') {
        console.log(props.btnData);
        const API = `https://api.themoviedb.org/3/search/movie?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&query=${props.btnData}&page=${pagenum}&include_adult=false`
        getData(API)
    }
    if (props.btnData === 'Comedy') {
        console.log(props.btnData);
        const API = `https://api.themoviedb.org/3/search/movie?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&query=${props.btnData}&page=${pagenum}&include_adult=false`
        getData(API)
    }
    if (props.btnData === 'Love') {
        console.log(props.btnData);
        const API = `https://api.themoviedb.org/3/search/movie?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&query=${props.btnData}&page=${pagenum}&include_adult=false`
        getData(API)
    }
    if (props.btnData === 'Drama') {
        console.log(props.btnData);
        const API = `https://api.themoviedb.org/3/search/movie?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&query=${props.btnData}&page=${pagenum}&include_adult=false`
        getData(API)
    }
    if (props.btnData === 'Fantasy') {
        console.log(props.btnData);
        const API = `https://api.themoviedb.org/3/search/movie?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&query=${props.btnData}&page=${pagenum}&include_adult=false`
        getData(API)
    }
    if (props.btnData === 'Thriller') {
        console.log(props.btnData);
        const API = `https://api.themoviedb.org/3/search/movie?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&query=${props.btnData}&page=${pagenum}&include_adult=false`
        getData(API)
    }
    if (props.btnData === 'Mystery') {
        console.log(props.btnData);
        const API = `https://api.themoviedb.org/3/search/movie?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&query=${props.btnData}&page=${pagenum}&include_adult=false`
        getData(API)
    }
    if (props.btnData === 'Top rated') {
        console.log(props.btnData);
        const API = `https://api.themoviedb.org/3/movie/top_rated?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&page=${pagenum}`
        getData(API)
    }


    useEffect(() => {

        getData(api)

    }, []);

    // api glitch







    const handleSearch = () => {
        const ss = (inputRef.current.value)
        setSerch(ss)
        inputRef.current.value = " "


    }


    let val = false

    function validate() {
        val = true
    }


    function click() {
        validate()
        if (val === true) {
            console.log('Done');
            handleSearch()
            const Aapi = `https://api.themoviedb.org/3/search/movie?api_key=b2ba6e67e25bef25a00d34d18815795d&language=en-US&query=${serch}&page=${pagenum}&include_adult=false`
            getData(Aapi)
        }




    }


    function home() {
        sethomechan(true)
        window.location.reload(false);

    }

    const DecreaseItem = () => {
        if (pagenum === 1) {
            setState(pagenum + 1);
        } else
            setState(pagenum - 1);
    }
    const IncrementItem = () => {
        setState(pagenum + 1);
    }

    const pageInfoD = () => {
        DecreaseItem()
        console.log(pagenum);
        getData(api)
        // getPageData()
    }

    const pageInfoI = () => {
        IncrementItem()
        console.log(pagenum);
        getData(api)

        // getPageData()
    }



    return (
        <>
            <div className="nav">
                <div className="logo-aline">
                    <a href="#"><img src={logo} alt="img" className="logoImg" /></a>
                    <a href="#"><h2 className="logoText">MovieTime</h2></a>
                </div>


                <div className="nav-list">
                    <ul>
                        <button className="nav-btn" onClick={home} ><li><span class="material-symbols-outlined">home</span>Home</li></button>
                        <button className="nav-btn" onClick={pageInfoD} ><li><span class="material-symbols-outlined previous ">arrow_back</span>Previous</li></button>
                        <button className="nav-btn" onClick={pageInfoI} ><li>Next<span class="material-symbols-outlined  previous">arrow_forward</span></li></button>
                        <li className="serchP"><input className="input-ser" placeholder="search...." ref={inputRef} />
                            <button className="ser-icon" onClick={click} ><span className="material-symbols-outlined" value="search" > search</span></button></li>
                    </ul>

                </div>





            </div>
            <Card myData={myData} />
        </>

    )
}


export default Nav;