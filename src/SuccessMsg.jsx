import React from "react";

export default function SuccessMsg () {
    function backToHome() {
        window.location.reload()
    }

    return (
        <>
            <div className="intro-container intro-container">
                    <div className="bf-intro-frame bf-intro-frame__submited">
                        <header className="bf-intro-frame-header">
                            <h2 className="bf-intro-title">SUCCESFULLY SUBMITED</h2>
                        </header>
                        <p className="bf-intro-text">Your information has been sent to The Rari Corp., and you should recieve an email confirmation as well!</p>
                    </div>
                    <footer className="bf-intro-frame-footer">
                            <div className="btn-container">
                                <button type="button" className="btn btn__back" onClick={backToHome}>HOME</button>
                            </div>
                    </footer>
                </div>
        </>
    )
}
