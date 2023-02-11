import React from "react";
import CompleteForm from "./CompleteForm";

// Conditional components
function ButtonAccept(props) {
    return (
        <>
            <div>
                <button onClick={props.onClick} className="btn btn__accept">Yes, I accept</button>
            </div>
        </>
    )
}

function ButtonDecline(props) {
    return (
        <>
           <div>
                <button onClick={props.onClick} className="btn btn__decline">Decline</button>
            </div>  
        </>
    )
}

function DeclineMessage() {
    return (
        <>        
            <div className="intro-container intro-container__decline" >
                <div className="bf-intro-frame">
                    <h2>Oops!</h2>
                    <p className="warning warning-text" >It seems you have not accepted the terms and conditions for us to handle the information you provide us. To make sure you are on board with trying out this app you are required to agree.<br></br>Sad to see you go!<br></br>Thanks for your time anyways!</p>
                </div>
            </div>
       </>

    )
}

class Form extends React.Component {
    constructor(props) {
        super(props)
        // Initialize state
        this.state = { accept : undefined }
        // Bind functions when needed
        this.handleAccept = this.handleAccept.bind(this)
        this.handleDecline = this.handleDecline.bind(this)
    }

    // Functions
    handleAccept() {
        this.setState({ accept : true })
    }

    handleDecline() {
        this.setState({ accept : false })
    }

    // Render the component
    render () {
        const accept = this.state.accept
        if (accept) {
            return <CompleteForm></CompleteForm>
        } else if (accept === false) {
            return <DeclineMessage></DeclineMessage>
        }

        return (
            <>
                <div className="intro-container">
                    <div className="bf-intro-frame">
                        <header className="bf-intro-frame-header">
                            <h2 className="bf-intro-title">Welcome to the <span className="bf-title" title="Fictitious company under which I make & host projects">Rari Corporation*</span></h2>
                        </header>
                            <body className="bf-intro-body">
                                <p className="bf-intro-text">Thank you for taking interest in this small project.
                                <br></br>This is the first project I made using <span className="bf-react-colour">ReactJS</span>.
                                <br></br>
                                The idea was to follow the official <span className="bf-react-colour">React</span> learning paths by completing the tutorial provided by them.
                                <br></br>
                                I started this simple form after reaching step 6 of the first tutorial that consists of 12 steps in total.
                                <br></br>
                                With only the very basics of React and mostly using <span className="bf-react-colour">JSX</span>, I managed to set up a simple form to allow a user to fill in some input fields and submit the information.
                                <br></br><br></br>Proceeding with the form means you help providing me with some basic information about yourself and why you're navigating through these basic projects.
                                <br></br>
                                If this is okay with you, click on the accept button to continue!</p>
                            </body>
                        <footer className="bf-intro-frame-footer">
                            <div className="btn-container">
                                <ButtonDecline onClick={this.handleDecline} ></ButtonDecline>
                                <ButtonAccept onClick={this.handleAccept} ></ButtonAccept>
                            </div>
                        </footer>
                    </div>
                </div>
            </>
        )
    }
}

export default Form