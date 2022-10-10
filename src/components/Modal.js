import React, { Component } from 'react'
import "../styles/Modal.css";

class Modal extends Component {

    onOutsideClick = () => {
        const {onClose} = this.props;
        onClose && onClose();
    }

    render() {
        const {show = false} = this.props;

        if(!show){
            return null;
        }

        return (
        <div className="outerModal flex centerFlex" onClick={this.onOutsideClick}>
            <div className="innerModal flex centerFlex flexColumn">
                Hello I am a modal!
            </div>
        </div>
        )
    }
}
export default Modal;