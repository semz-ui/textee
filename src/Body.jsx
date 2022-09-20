import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import './Body.css'
import axios from 'axios'
import {BsSearch, BsFillPenFill} from 'react-icons/bs'
import {FiArrowDown, FiArrowUp} from 'react-icons/fi'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Modal1 from './Modal1'

function Body() {
    const [ open, setOpen ] = useState(false)
    const [ open1, setOpen1 ] = useState(false)
    const [ open2, setOpen2 ] = useState(false)
    const [ datas, setDatas ] = useState([])

    // const url = 'http://localhost:5000/api/texts/'
    const url = 'https://texterr.herokuapp.com/api/texts'
    const getData = async () => {
        const response = await axios.get(url)
        const data = await response.data
        setDatas(data)
    }

    useEffect(() => {
      getData()
    }, [])


    

    const onClose = () => {
        setOpen(current => !current)
    }
    const onClose1 = () => {
        setOpen1(current => !current)
    }
    const onClose2 = () => {
        setOpen2(current => !current)
    }
  return (
    <div className='body'>
        <div>
            <h1>Store Fees</h1>
        </div>
        <div className='body1'>
            <div className='search'>
            <BsSearch size={20} className= "search__icon" />
            <input className='body_input' />
        </div>
        <div className='btn__div'>
            {/* <div className='btn_sort'>
                <TbArrowsSort /><button className='btn'>Sort</button>
            </div> */}
            <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className='check'>
            <Form.Check type="radio" aria-label="radio 1" /><Dropdown.Item>Store Name</Dropdown.Item>
        </div>
        <div className='check'>
            <Form.Check type="radio" aria-label="radio 1" /><Dropdown.Item>Date Added</Dropdown.Item>
        </div>
        <div className='check'>
            <Form.Check type="radio" aria-label="radio 1" /><Dropdown.Item>Platform Fee</Dropdown.Item>
        </div>
        <div className='check'>
            <Form.Check type="radio" aria-label="radio 1" /><Dropdown.Item>Try Fee</Dropdown.Item>
        </div>
        <div className='check'>
            <Form.Check type="radio" aria-label="radio 1" /><Dropdown.Item>Feature Fee</Dropdown.Item>
        </div>
        <div className='check'>
            <FiArrowDown /><Dropdown.Item>Feature Fee</Dropdown.Item>
        </div>
        <div className='check'>
            <FiArrowUp /><Dropdown.Item>Feature Fee</Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        </div>
        <div className='body__text'>
            <div className='body2'>
                <div className='mill'>
                <div className='mil'>
                    <h2>Millwoods</h2>
                    <a href='google.com'>link</a>
                </div>
                <div>
                    <RiArrowDropDownLine size={40} onClick={onClose} />
                </div>
            </div>
                {
                    open ? <>
                {
                    datas.map((data) => {
                        return (
                            <div key={data._id}>
                                <div className='hidden__text'>
                    <p>{data.text}</p>
                    <div className='penEdit'>
                        <p>{data.rate}%</p>
                        <div className='trig'>
                            <Modal1 title={data.title} id={data._id} />
                        </div>
                    </div>
                </div>
                            </div>
                        )
                    })
                }
                    </> : <></>
                }
            </div>
            <div>
                <div className='mill1'>
                <div className='mil'>
                    <h2>Raie Eyewear</h2>
                    <a href='google.com'>link</a>
                </div>
                <div>
                    <RiArrowDropDownLine size={40} onClick={onClose1} />
                </div>
            </div>
                {
                    open1 ? <>
                {
                    datas.map((data) => {
                        return (
                            <div key={data._id}>
                                <div className='hidden__text'>
                    <p>{data.text}</p>
                    <div className='penEdit'>
                        <p>{data.rate}%</p>
                        <div className='trig'>
                            <Modal1 title={data.title} id={data._id} />
                        </div>
                    </div>
                </div>
                            </div>
                        )
                    })
                }
                    </> : <></>
                }
            </div>
            <div></div>
        </div>
         {/* Second body */}



        <div className='body__text'>
            <div className=''>
                <div className='mill'>
                <div className='mil'>
                    <h2>Sirens Swimwear</h2>
                    <a href='google.com'>link</a>
                </div>
                <div>
                    <RiArrowDropDownLine size={40} onClick={onClose2} />
                </div>
            </div>
                {
                    open2 ? <>
                {
                    datas.map((data) => {
                        return (
                            <>
                                <div className='hidden__text'>
                    <p>{data.text}</p>
                    <div className='penEdit'>
                        <p>{data.rate}%</p><BsFillPenFill />
                    </div>
                </div>
                            </>
                        )
                    })
                }
                    </> : <></>
                }
            </div>
        </div>
    </div>
  )
}

export default Body