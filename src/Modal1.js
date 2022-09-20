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

function Modal1({ title, id }) {
  const [data, setdata] = useState({
    rate: "",
  });

  const { rate } = data;
  // const url = "http://localhost:5000/api/texts/update/";
  const url = "https://texterr.herokuapp.com/api/texts";

  const updateRate = async (e) => {
    const userData = {
      rate,
      id,
    };
    // e.preventDefault();
    const response = axios.put(url, userData);
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

  console.log(rate);
  console.log(id);
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
            <input value={rate} name="rate" onChange={onChange} />
            <button>Save Changes</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Modal1;
