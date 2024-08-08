import React from 'react'
import './styles/firstBlock.css'

class AboutCourseBlock extends React.Component{
    render(){
        return(
            <div className='AboutCourseBlock'>
                <div className='runningLine'>
                    <div className='track'>
                        <p className='content'>
                        / Инвестирование Криптовалют / Web3Space / Инвестирование Криптовалют / Web3Space / Инвестирование Криптовалют / Web3Space / Инвестирование Криптовалют / Web3Space / Инвестирование Криптовалют / Web3Space / Инвестирование Криптовалют / Web3Space / Инвестирование Криптовалют / Web3Space / Инвестирование Криптовалют / Web3Space / Инвестирование Криптовалют / Web3Space / Инвестирование Криптовалют / Web3Space
                        </p>
                    </div>
                </div>
                <div className='AboutCourseBlockChild'>
                    <div className='pure-g'>
                        <div className='pure-u-1-2'>
                            <div className='leftACB'>
                                <div className='forWhoBlock'>
                                    <p className='ACBlockH'>Для кого курс?</p>
                                    <p className='ACBlockText'>
                                    Этот курс для всех, кто хочет углубиться в мир криптовалют
                                    и научиться эффективно управлять своими криптоактивами.
                                    Независимо от вашего уровня знаний – будь то новичок,
                                    средний инвестор или опытный трейдер – наш курс
                                    предоставит вам необходимые инструменты и знания
                                    для достижения успеха.
                                    </p>
                                </div>
                                <div className='whyActBlock'>
                                    <p className='ACBlockH'>Почему это актуально?</p>
                                    <p className='ACBlockText'>В мире, где цифровые активы становятся все более
                                    значимыми, знание о криптовалютах и умение
                                    эффективно управлять ими – это ключ кфинансовой
                                    свободе и успеху.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='pure-u-1-2'>
                            <div className='rightACB'>
                                <div className='detailsACB'>
                                    <div className='detailsACBChild' id='dch1'>
                                        <p className='detailsACBChildText'>
                                            Объем рынка $2,6 триллионов
                                        </p>
                                    </div>
                                    <div className='detailsACBChild' id='dch2'>
                                        <p className='detailsACBChildText'>
                                        Общее признание криптовалюты как финансового инструмента
                                        </p>
                                    </div>
                                    <div className='detailsACBChild' id='dch3'>
                                        <p className='detailsACBChildText'>
                                        Более 15-ти лет существования направления
                                        </p>
                                    </div>
                                    <div className='detailsACBChild' id='dch4'>
                                        <p className='detailsACBChildText'>
                                        Общее признание криптовалюты как финансового инструмента
                                        </p>
                                    </div>
                                    <div className='detailsACBChild' id='dch5'>
                                        <p className='detailsACBChildText'>
                                        Самая высокая доходность за всю историю человечества
                                        </p>
                                    </div>
                                    <div className='detailsACBChild' id='dch6'>
                                        <p className='detailsACBChildText'>
                                        Системный финансовый инструмент
                                        </p>
                                    </div>
                                </div>
                                <div className='rightSecondBlock'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export {AboutCourseBlock};