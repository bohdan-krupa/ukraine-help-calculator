import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header_logo">logo</div>
                <div className="header_menu">
                    <div className="button menu_item">Головна</div>
                    <div className="button menu_item">Армія</div>
                    <div className="button menu_item">Гуманітарка</div>
                </div>
                <div className="button header_donate-button">Підтримати</div>
            </div>
        )
    }
}

class Intro extends React.Component {
    render() {
        return (
            <div className="intro"
                style={{
                    backgroundImage: "url(/bg.jpg)"
                }}>
                <div className="intro_content">
                    <div className="intro_title">НА ЩО<br></br> КОШТИ<br></br> ВИТРАЧАЮТЬСЯ?</div>
                    <div className="intro_stats">
                        <div className="stats_title">Розподіл коштів</div>
                        <div className="stats_list">
                            <div className="stats_item">
                                <div className="stats_item-title">
                                    item2
                                </div>
                                <div className="stats_item-progress">
                                    <div className="stats_item-progress-bar"></div>
                                    <div className="stats_item-progress-percent">30%</div>
                                </div>
                            </div>
                            <div className="stats_item">
                                <div className="stats_item-title">
                                    item2
                                </div>
                                <div className="stats_item-progress">
                                    <div className="stats_item-progress-bar"></div>
                                    <div className="stats_item-progress-percent">30%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

class Capability extends React.Component {
    render() {
        return (
            <div className="capability">
                <div className="capability_title">
                    Що можна придбати за ... грн?
                </div>
                <div className="capability_content">
                <div className="capability_button"
                        style={{
                            backgroundImage: "url(/arrow-left.png)",
                            backgroundSize: 'cover',
                            width: '100px',
                            height: '100px'
                        }}></div>
                    <div className="capability_list">
                        <div className="capability_item">
                            <div className="capability_item-top">
                                <img src={require('./bron.jpg')} width="100" height="100"></img>
                                <span className="capability_item-amount">x5</span>
                            </div>
                            <div className="capability_item-body">
                                <span className="capability_item-title">title </span>
                                -
                                <span className="capability_item-price"> 1000$</span>
                            </div>
                            <div className="capability_item-desc">Богдан роби базу даних Богдан роби базу даних Богдан роби базу даних</div>
                        </div>
                        <div className="capability_item">
                            <div className="capability_item-top">
                                <img src={require('./bron.jpg')} width="100" height="100"></img>
                                <span className="capability_item-amount">x5</span>
                            </div>
                            <div className="capability_item-body">
                                <span className="capability_item-title">title </span>
                                -
                                <span className="capability_item-price"> 1000$</span>
                            </div>
                            <div className="capability_item-desc">Богдан роби базу даних Богдан роби базу даних Богдан роби базу даних</div>
                        </div>
                        <div className="capability_item">
                            <div className="capability_item-top">
                                <img src={require('./bron.jpg')} width="100" height="100"></img>
                                <span className="capability_item-amount">x5</span>
                            </div>
                            <div className="capability_item-body">
                                <span className="capability_item-title">title </span>
                                -
                                <span className="capability_item-price"> 1000$</span>
                            </div>
                            <div className="capability_item-desc">Богдан роби базу даних Богдан роби базу даних Богдан роби базу даних</div>
                        </div>
                    </div>
                    <div className="capability_button"
                        style={{
                            backgroundImage: "url(/arrow-right.png)",
                            backgroundSize: 'cover',
                            width: '100px',
                            height: '100px'
                        }}></div>
                </div>

            </div>
        )
    }
}

class ArmyPage extends React.Component {
    render() {
        return (
            <div>

                <Header></Header>
                <Intro></Intro>
                <Capability></Capability>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ArmyPage />);