import './styles/header.css'


function Header() {
    return (
        <div className="Header">
            <div className="pure-g" id="header">
                <div className="pure-u-1-5" >
                    <div id='logo'>

                    </div>
                </div>
                <div className="pure-u-3-5" >
                    <div className="pure-g" id='headerNav'>
                        <div className="pure-u-1-4" id='headerA'>
                            <a>
                                О курсе
                            </a>
                        </div>
                        <div className="pure-u-1-4" id='headerA'>
                            <a>
                                Спикеры
                            </a>
                        </div>
                        <div className="pure-u-1-4" id='headerA'>
                            <a>
                                Программа курса
                            </a>
                        </div>
                        <div className="pure-u-1-4" id='headerA'>
                            <a>
                                Запись
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-5">
                    <div className='pure-g' id='headerMedia'>
                        <div className='pure-u-1-2'></div>
                        <div className='pure-u-1-4' >
                            <div id='headerLinkIcon'>
                                <a href="">
                                <img src={require("./styles/img/icon_yt.png")} alt="tgIcon" id='headerIcon' />
                                </a>
                                
                            </div>
                        </div>  
                        <div className='pure-u-1-4' >
                            <div id='headerLinkIcon'>
                                <a href="">
                                    <img src={require("./styles/img/icon_tg.png")} alt="tgIcon" id='headerIcon' />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Header;