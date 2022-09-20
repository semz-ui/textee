import React, { useState, useEffect } from 'react'
import './Body.css'
import axios from 'axios'
import {BsSearch, BsFillPenFill} from 'react-icons/bs'
import {TbArrowsSort} from 'react-icons/tb'
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

    console.log(datas)

    

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
    <div className='body'>]
        <div>
            <h1>Store Fees</h1>
        </div>
        <div className='body1'>
            <div className='search'>
            <BsSearch size={20} className= "search__icon" />
            <input className='body_input' />
        </div>
        <div className='btn__div'>
            <div className='btn_sort'>
                <TbArrowsSort /><button className='btn'>Sort</button>
            </div>
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
                        <h4>{data.rate}%</h4>
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
                        <h4>{data.rate}%</h4>
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
                        <h4>{data.rate}%</h4><BsFillPenFill />
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