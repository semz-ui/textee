import React, { useState } from "react";
import Modal from "react-modal";
import { MdCancel } from "react-icons/md";
import { BsFillPenFill } from "react-icons/bs";
import axios from "axios";
import "./Modal1.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Modal2({ title, id, description }) {
  console.log(id);
  const [data, setdata] = useState({
    fees: "",
  });

  const { fees } = data;

  //   const url = "http://localhost:5000/api/texts/update/";
  const url = "https://texterr.herokuapp.com/api/texts/update";

  const updateRate = async (e) => {
    // e.preventDefault();
    const response = axios.patch(url, {
      id,
      platformFee: {
        description: description,
        fees: fees,
      },
    });
    console.log(response);
    return response;
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const onChange = (e) => {
    setdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <BsFillPenFill onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="mode">
          <div className="icon__modal">
            <MdCancel onClick={closeModal} />
          </div>
          <h1>Edit Platform Free</h1>
          {/* <button >close</button> */}
          <div>{title}</div>
          <form onSubmit={updateRate} className="input1">
            <label>Enter fee as percentage</label>
            <input
              value={fees}
              name="fees"
              onChange={onChange}
              className="mode__input"
            />
            <button className="btn__mode">Save Changes</button>
          </form>
          <button onClick={closeModal} className="btn__mode1">
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Modal2;
