import React from 'react'
import './styles/mainPage.css'
import bg from './styles/img/back.svg'
import tgIcon2 from './styles/img/tg_icon2.png'
import rep from './styles/img/replacement.svg'


class MainPage extends React.Component{
    render(){
        return(
            <div className='mainPage'>
                <div className='pure-g'>
                    <div className='pure-u-5-8'>
                        <div className='left'>
                            <div className='scheduleParent'>
                                <div className='schedule'>
                                    <div className='scheduleChild' id='sc1'>
                                    <p>
                                        4 Недели
                                    </p>
                                    </div>
                                    <div className='scheduleChild' id='sc2'>
                                    <p>
                                        С понедельника по пятницу
                                    </p>
                                    </div>
                                    <div className='scheduleChild' id='sc3'><p>С 11:30 до 13:00</p></div>
                                    <div className='scheduleChild' id='sc4'><p>Стартуем с 1 августа</p></div>
                                </div>
                            </div>
                        
                            <div className='mainPageH'>
                                <div className='mainPageHChild'>Курc</div>
                                <div className='mainPageHChildOr'>Инвестирование Криптовалют</div>
                                <div className='mainPageHChild'>С нуля</div>
                            </div>
        
                            <div className='aboutBlock'>
                                <div className='aboutH'>
                                    <p>
                                        Что вы получите ?
                                    </p>
                                </div>
                                <div className='aboutLi'>
                                    <li className='aboutLiChild'>
                                    Глубокое понимание криптовалют
                                    </li>
                                    <li className='aboutLiChild'>
                                    Навыки управления криптоактивами
                                    </li>
                                    <li className='aboutLiChild'>
                                    Аналитические способности
                                    </li>
                                    <li className='aboutLiChild'>
                                    Юридическая грамотность
                                    </li>
                                    <li className='aboutLiChild'>
                                    Сертификат об окончании курса
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pure-u-3-8'>
                        <div className='right'>
                            <div className='mainPageTitle'>
                                <div className='MPTChild'>
                                    <p>
                                        Web3Space
                                    </p>
                                </div>
                            </div>
                            <div className='aboutTeamBlock'>
                                <div className='atbImg'>
                                    <img className='atbImgCH' src={rep} alt="" />
                                </div>
                            </div>
                        <div className='aboutTeamBlock2' style={{backgroundImage: `url(${bg})`}}>
                            <div className='atbH'>
                                <p>
                                За курс лично отвечает
                                команда Web3Space
                                </p>
                            </div>
                            <div className='atbText'>
                                <p>
                                Пять профессиональных криптоэнтузиастов
                                с многолетним подтвержденным опытом
                                создали его специально для вас, чтобы вы смогли
                                не просто зарабатывать, но и сделать криптовалюты
                                частью вашей жизни.
                                </p>
                            </div>
                            <a className='atbButton' href="">
                                <div className='atbButton'>
                                <div className='atbButtonChild' >
                                    <img className='atbLogo' src={tgIcon2} alt="" />
                                    <p>Подписаться на канал</p>
                                </div>
                                </div>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className='mpbut'>
                        <div className='after'></div>
                        <div className='afterch' id='afch1'></div>
                        <div className='afterch' id='afch2'></div>
                        <div className='mainPageButtonBlock'>
                            <button className='mainPageButton'>
                                Записаться на курс
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export {MainPage};

