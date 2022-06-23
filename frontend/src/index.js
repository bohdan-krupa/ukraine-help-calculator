import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header" style={{ backgroundImage: "url(/tractor2.png)" }}>
                {/* <img src={require("./tractor2.png")} width="960" height="100"></img> */}
                <div className="header_shadow"></div>
                <button
                    className="header_button-donate"
                    onMouseEnter={() => document.querySelector('.header_shadow').style.display = 'block'}
                    onMouseLeave={() => document.querySelector('.header_shadow').style.display = 'none'}
                >Підтримати країну
                </button>
            </div>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <p className="main_title">{this.props.value} грн - це ...</p>
                <div className="main_box">
                    <div className="main_button-page">{this.props.value} грн у відсотках</div>
                    <div className="main_items">
                        <div className="item">
                            <div className="item_picture">
                                <img width="150" height="150"></img>
                            </div>
                            <p className="item_text">Богдан роби базу даних Богдан роби базу даних Богдан роби базу даних</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

class Capability extends React.Component {
    render() {
        var number = 10000000
        return (
            <div className="container">
                <Header></Header>
                <Main value={number.toLocaleString()}></Main>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< Capability />);