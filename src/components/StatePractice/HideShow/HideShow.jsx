import React from 'react';
import {useState} from 'react';

const HideShow = (props) => { 

    const [hideShowState, setHideShowState] = useState({
        static: props.text,
        changeble: props.text,
        visible: true,
        textBth: 'Скрыть',
    })

    // const [bthInfo, setBthInfo] = useState({
    //     text: 'Скрыть',
    // });

    function hideShowText() {
        // debugger;
        if(hideShowState.visible === false) {
            setHideShowState({
                static: hideShowState.static,
                visible: !hideShowState.visible,
                changeble: hideShowState.static,
                textBth: 'Скрыть',
            })

            return;
        }
        
        setHideShowState({
            static: hideShowState.static,
            visible: !hideShowState.visible,
            changeble: '',
            textBth: 'Показать',
        })

        return;
    }

    return (
        <div className="hide-show__wrapper">
            <button className="hide-show__bth" onClick={() => {hideShowText()}}>{hideShowState.textBth}</button>
            <p className="hide-show__wrapper-text">{hideShowState.changeble}</p>
        </div>
    )
}

export default HideShow;