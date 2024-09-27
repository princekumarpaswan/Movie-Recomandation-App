import React from "react";


// card pop up

const Bigcard = (props) => {

    if (!props.open) return null

    return (
        <>
            <div>
                <div>
                    <div className="back-drop">
                        <div>
                            <img>imgae</img>
                            <div>
                                <h1>title</h1>
                                <h3>SUMMARY</h3>
                                <div>
                                    <h3>Release_date</h3>
                                    <h3>Revenue</h3>
                                    <h3>Run Time</h3>
                                </div>
                                <button>Back</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )


}


export default Bigcard
