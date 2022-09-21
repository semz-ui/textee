import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import './Body.css'
import axios from 'axios'
import {BsSearch, BsFillPenFill} from 'react-icons/bs'
import {FiArrowDown, FiArrowUp} from 'react-icons/fi'
import {GiPlayButton} from 'react-icons/gi'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Modal1 from './Modal1'
import Modal2 from './Modal2';
import Modal3 from './Modal3';

function Body() {
    const [ open, setOpen ] = useState(false)
    const [ open1, setOpen1 ] = useState(false)
    const [ open2, setOpen2 ] = useState(false)
    const [admin, setAdmin] = useState(true)
    const [ datas, setDatas ] = useState([])
    const [ info, setInfo ] = useState({})
    const [ info1, setInfo1 ] = useState({})
    const [ info2, setInfo2 ] = useState({})

    // const url = 'http://localhost:5000/api/texts/'
    const url = 'https://texterr.herokuapp.com/api/texts'
    const getData = async () => {
        const response = await axios.get(url)
        const data = await response.data
        setDatas(data)
        setInfo(data[0])
        setInfo1(data[1])
        setInfo2(data[2])
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
    const onAdmin = () => {
        setAdmin(current => !current)
    }
    console.log(info)
  return (
    <div className='body'>
        <div>
            <h1>Store Fees</h1>
            <div onClick={onAdmin}>
                <GiPlayButton />Admin
            </div>
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
                    <h2>{info.companyName}</h2>
                    <a href='google.com'>link</a>
                </div>
                <div>
                    <RiArrowDropDownLine size={40} onClick={onClose} />
                </div>
            </div>
                {
                    open ? <>
                        <div className='hd_t'><p className='ht'>Platform Fee</p></div>
                                <div className='hidden__text'>
                    <p>{info.platformFee.description}</p>
                    <div className='penEdit'>
                        <p>{info.platformFee.fees}%</p>
                        {
                            admin ? <><div className='trig'>
                            {/* <Modal1 title={data.title} id={data._id} /> */}
                            <Modal2 title={info.title} id={info._id} description={info.platformFee.description} />
                        </div></> : <></>
                        }
                    </div>
                </div>
                    </> : <></>
                }
                {
                    open ? <>
                        <div className='hd_t'><p className='ht'>Try Fee</p></div>
                                <div className='hidden__text'>
                    <p>{info.TryFee.description}</p>
                    <div className='penEdit'>
                        <p>{info.TryFee.fees}%</p>
                        {
                            admin ? <><div className='trig'>
                                <Modal1 title={info.title} id={info._id} description={info.TryFee.description} />
                        </div></> : <></>
                        }
                    </div>
                </div>
                    </> : <></>
                }
                {
                    open ? <>
                        <div className='hd_t'><p className='ht'>Feature Fee</p></div>
                                <div className='hidden__text'>
                    <p>{info.FeatureFee.description}</p>
                    <div className='penEdit'>
                        <p>{info.FeatureFee.fees}%</p>
                        {
                            admin ? <><div className='trig'>
                            <Modal3 title={info.title} id={info._id} description={info.FeatureFee.description} />
                        </div></> : <></>
                        }
                    </div>
                </div>
                    </> : <></>
                }
            </div>
            <div>
                <div className='mill1'>
                <div className='mil'>
                    <h2>{info1.companyName}</h2>
                    <a href='google.com'>link</a>
                </div>
                <div>
                    <RiArrowDropDownLine size={40} onClick={onClose1} />
                </div>
            </div>
                {
                    open1 ? <>
                    <div className='hd_t'><p className='ht'>Platform Fee</p></div>
                                <div className='hidden__text'>
                    <p>{info1.platformFee.description}</p>
                    <div className='penEdit'>
                        <p>{info1.platformFee.fees}%</p>
                        {
                            admin ? <>
                                <div className='trig'>
                            <Modal3 title={info1.title} id={info1._id} description={info1.platformFee.description} />
                        </div>
                            </> : <></>
                        }
                    </div>
                </div>
                    </> : <></>
                }
                {
                    open1 ? <>
                    <div className='hd_t'><p className='ht'>Try Fee</p></div>
                                <div className='hidden__text'>
                    <p>{info1.TryFee.description}</p>
                    <div className='penEdit'>
                        <p>{info1.TryFee.fees}%</p>
                        {
                            admin ? <>
                                <div className='trig'>
                            <Modal1 title={info1.title} id={info1._id} description={info1.TryFee.description} />
                        </div>
                            </> : <></>
                        }
                    </div>
                </div>
                    </> : <></>
                }
                {
                    open1 ? <>
                    <div className='hd_t'><p className='ht'>Feature Fee</p></div>
                                <div className='hidden__text'>
                    <p>{info1.FeatureFee.description}</p>
                    <div className='penEdit'>
                        <p>{info1.FeatureFee.fees}%</p>
                        {
                            admin ? <>
                                <div className='trig'>
                            <Modal3 title={info1.title} id={info1._id} description={info1.FeatureFee.description} />
                        </div>
                            </> : <></>
                        }
                    </div>
                </div>
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
                    <h2>{info2.companyName}</h2>
                    <a href='google.com'>link</a>
                </div>
                <div>
                    <RiArrowDropDownLine size={40} onClick={onClose2} />
                </div>
            </div>
                {
                    open2 ? <>
                        <div className='hd_t'><p className='ht'>Platform Fee</p></div>
                                <div className='hidden__text'>
                    <p>{info2.platformFee.description}</p>
                    <div className='penEdit'>
                        <p>{info2.platformFee.fees}%</p>
                        {
                            admin ? <><div className='trig'>
                            {/* <Modal1 title={data.title} id={data._id} /> */}
                            <Modal2 title={info2.title} id={info2._id} description={info2.platformFee.description} />
                        </div></> : <></>
                        }
                    </div>
                </div>
                    </> : <></>
                }
                {
                    open2 ? <>
                        <div className='hd_t'><p className='ht'>Try Fee</p></div>
                                <div className='hidden__text'>
                    <p>{info2.TryFee.description}</p>
                    <div className='penEdit'>
                        <p>{info2.TryFee.fees}%</p>
                        {
                            admin ? <><div className='trig'>
                                <Modal1 title={info2.title} id={info2._id} description={info2.TryFee.description} />
                        </div></> : <></>
                        }
                    </div>
                </div>
                    </> : <></>
                }
                {
                    open2 ? <>
                        <div className='hd_t'><p className='ht'>Feature Fee</p></div>
                                <div className='hidden__text'>
                    <p>{info2.FeatureFee.description}</p>
                    <div className='penEdit'>
                        <p>{info2.FeatureFee.fees}%</p>
                        {
                            admin ? <><div className='trig'>
                            <Modal3 title={info2.title} id={info2._id} description={info2.FeatureFee.description} />
                        </div></> : <></>
                        }
                    </div>
                </div>
                    </> : <></>
                }
            </div>
        </div>
        <div style={{ marginBottom: "20%" }}></div>
    </div>
  )
}

export default Body