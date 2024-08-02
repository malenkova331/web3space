import React from 'react'
import './styles/header.css'
import tgIcon from './styles/img/tg_icon.svg'
import ytIcon from './styles/img/yt_icon.svg'


class Header extends React.Component{
    render(){
        return(
            <div className="Header">
                <div className="pure-g" id="header">
                    <div className="pure-u-1-5" >
                        <div id='logo'>

                        </div>
                    </div>
                    <div className="pure-u-3-5" >
                        <div className='headerNav'>
                            <div className='headerA'>
                                <a>
                                    О курсе
                                </a>
                            </div>
                            <div className='headerA'>
                                <a>
                                    Спикеры
                                </a>
                            </div>
                            <div className='headerA'>
                                <a>
                                    Программа курса
                                </a>
                            </div>
                            <div className='headerA'>
                                <a>
                                    Запись
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1-5">
                        <div className='headerMedia'>
                            <div id='headerLinkIcon'>
                                <a href="">
                                <img src={ytIcon} alt="ytIcon" id='headerIcon' />
                                </a>
                                
                            </div>
                            <div id='headerLinkIcon'>
                                <a href="">
                                    <img src={tgIcon} alt="tgIcon" id='headerIcon' />
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export {Header};