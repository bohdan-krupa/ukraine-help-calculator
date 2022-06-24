import { FC } from 'react';
import ReactDOM from 'react-dom/client';

interface IMyProps {
    title: string;
    bg: string;
}

const Intro: FC<IMyProps> = (props: IMyProps) => {
    return (
        <>
            <div className="intro"                 
                style={{
                    backgroundImage: `url(/img/${props.bg})`
                }}>
                <div className="intro_title">
                    {props.title}
                </div>
            </div>
        </>
    )
}

export default Intro;