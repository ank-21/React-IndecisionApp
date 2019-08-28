import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}   //tells us to whether model should be open or not
        onRequestClose={props.handleClearSelectedOption}//for pressing escape key or back screen
        contentLabel="Selected Option"   //used for accessiblity purposes
        closeTimeoutMS = {200}
        className="modal"
        >
        <h3 className="modal__title">Selected Options</h3>
        {props.selectedOption&&<p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick = {props.handleClearSelectedOption}>Okay</button>
    </Modal>
)
export default OptionModal