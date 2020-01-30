import React from "react";

import config from "../store/firebaseConfig";

const home = () => {
    return (
        <>
            <h2>Home</h2>
            <button onClick={() => config.auth().signOut()}> Logout </button>
        </>
    )
};

export default home;