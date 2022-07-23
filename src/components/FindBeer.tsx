import React, {useEffect, useRef, useState} from 'react';
import './FindBeer.css';

interface FindBeerProps {
    data: string,
    setData: any
}

export const FindBeer = ({data, setData}: FindBeerProps) => {

    let thisInput = useRef<HTMLDivElement>(null)
    let thisInputValue = useRef<HTMLInputElement>(null)
    let thisPlaceholder = useRef<HTMLDivElement>(null)
    let greenRedVertLine = useRef<HTMLDivElement>(null)
    let [active, setActive]: [boolean, any] = useState(false);
    let [height, setHeight]: [string, any] = useState('0');
    let inputWrapper = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(thisInput)
            setHeight(thisInput.current ? thisInput.current.offsetHeight + 'px' : '0');
    }, [])

    return (
        <div ref={inputWrapper} className="InputWrapper" style={{
            background: '#F4F4F4',
            padding: '0',
            borderRadius: '',
            width: 'fit-content'
        }}>
            <div ref={thisInput} style={{position: 'relative', cursor: 'pointer'}}
                 className={['Input', 'InputDesktop',
                     active ? 'InputDesktopActive' :
                         'InputDesktop'].join(' ')}
                 onClick={() => {
                     thisInputValue.current ? thisInputValue.current.focus() : null
                 }}>
                <input type={'text'}
                       ref={thisInputValue}
                       value={data}
                       onFocus={() => {
                           setActive(true)
                               thisPlaceholder.current ? (
                                   thisPlaceholder.current.style.top = '11px'
                               ) : null
                               thisPlaceholder.current ? (
                                   thisPlaceholder.current.style.transform = 'translate(0, 0)'
                               ) : null
                               thisPlaceholder.current ? (
                                   thisPlaceholder.current.style.color = '#353535'
                               ) : null
                               thisPlaceholder.current ? (
                                   thisPlaceholder.current.style.opacity = '0.5'
                               ) : null
                       }}
                       onBlur={(e) => {
                           setActive(false)
                               if (thisInputValue.current && thisInputValue.current.value === '') {
                                   thisPlaceholder.current ? (
                                       thisPlaceholder.current.style.top = '50%'
                                   ) : null
                                   thisPlaceholder.current ? (
                                       thisPlaceholder.current.style.transform = 'translate(0, -50%)'
                                   ) : null
                                   thisPlaceholder.current ? (
                                       thisPlaceholder.current.style.color = 'black'
                                   ) : null
                                   thisPlaceholder.current ? (
                                       thisPlaceholder.current.style.opacity = '1'
                                   ) : null
                               }
                       }}
                       onInput={() => {
                           if (setData) {
                               thisInputValue.current ? setData(thisInputValue.current.value) : null
                           }
                       }}
                />
                <div ref={greenRedVertLine} style={{
                    width: '4px',
                    height: active ? height : '0',
                    background: '#4d4d4d',
                    position: "absolute",
                    top: '0',
                    left: '0'
                }}></div>
                {
                    <div ref={thisPlaceholder} style={{
                        transition: 'top .5s, transform .5s, color .5s, opacity .5s',
                        fontWeight: '500',
                        fontSize: '16px',
                        letterSpacing: '0.05em',
                        color: data ? '#353535' : (!active ? 'black' : '#353535'),
                        opacity: !data ? (!active ? '1' : '0.5') : '0.5',
                        position: "absolute",
                        top: data ? '11px' : (!active ? '50%' : '11px'),
                        left: '20px',
                        transform: data ? 'translate(0, 0)' : (!active ? 'translate(0, -50%)' : 'translate(0, 0)'),
                        visibility: 'visible'
                    }}>
                        Название пива
                    </div>
                }
            </div>
        </div>
    );
};