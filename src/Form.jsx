import React from "react";
import CompleteForm from "./CompleteForm";

// Conditional components
function ButtonAccept(props) {
    return (
        <>
            <div>
                <button onClick={props.onClick} className="btn-accept">Yes, I accept</button>
            </div>
        </>
    )
}

function ButtonDecline(props) {
    return (
        <>
           <div>
                <button onClick={props.onClick} className="btn-decline">Decline</button>
            </div>  
        </>
    )
}

function DeclineMessage() {
    return (
        <>        
            <div className="warning-container" >
                <h2 className="warning">Oops!</h2>
                <p className="warning warning-text" >It seems you have not accepted the terms and conditions for us to handle the information you provide us. We are an evil corporation that needs control over you, so we cannot proceed then. Sorry to see you go!</p>
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
                    <h2>To continue we will need some information about you. Do you agree to provide this information?</h2>
                    <div className="btn-container">
                        <ButtonAccept onClick={this.handleAccept} ></ButtonAccept>
                        <ButtonDecline onClick={this.handleDecline} ></ButtonDecline>
                    </div>
                </div>
            </>
        )
    }
}

export default Form