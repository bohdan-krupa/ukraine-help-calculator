import { FC } from 'react';
import ReactDOM from 'react-dom/client';

const Header: FC = () => {
    return (
        <>
            <div className="army_header">
                <div className="header_logo">logo</div>
                <div className="header_menu">
                    <div className="button menu_item">Головна</div>
                    <div className="button menu_item">Армія</div>
                    <div className="button menu_item">Гуманітарка</div>
                </div>
                <div className="button header_donate-button">Підтримати</div>
            </div>
        </>
    )
}

export default Header;