import React from 'react';

const Modal = props => {

    let modalContainer = (
        <div id="modal-container">
            <h3>{props.modalText}</h3>
            <button className='f6 link dim ph3 pv2 mb2 dib white bg-dark-gray' onClick={props.onClose}>Close</button>
        </div>
    );

    if (!props.isOpen) {
        modalContainer = null;
    }

    return(
        <div id="modal">
            {modalContainer}
        </div>

    )
}

export default Modal