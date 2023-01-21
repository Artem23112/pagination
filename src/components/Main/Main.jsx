import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Pagination from '../StatePractice/Pagination/Pagination';
import { someData } from '../../Redux/stateData/stateData';

const Main = () => {
    const styleType = {
        primary: 'primary',
        secondary: 'secondary',
        danger: 'danger',
    }

    return (
        <div className='main'>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Pagination limit={3} blocks={someData} limitNumOfBth={5}/>} />
            </Routes>

            {/* <Alert view={styleType.primary}
                text='Тестовое сообщение '
                textLink='Подробнее...'
            />
            <Alert view={styleType.danger}
                text='Тестовое сообщение '
                textLink='Подробнее...'
            />
            <Alert view={styleType.secondary}
                text='Тестовое сообщение '
                textLink='Подробнее...'
            />
            <Button
                type='link'
                text='Помидорный господин'
                view={styleType.primary}
                href='https://ru.react.js.org/docs/components-and-props.html'
            />
            <Button
                type='button'
                text='Читать подробнее...'
                view={styleType.secondary}
            /> 
            <Card imgSrc='https://masyamba.ru/%D0%93%D0%BE%D1%80%D0%BE%D0%B4/83%20(%D0%93%D0%BE%D1%80%D0%BE%D0%B4,%20%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F,%20%D0%BF%D0%B0%D1%80%D0%B8%D0%B6,%20%D1%8D%D0%B9%D1%84%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0%20%D0%B1%D0%B0%D1%88%D0%BD%D1%8F,%20%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0,%20under%20the%20eiffel).jpg'
                titleText='Хочу во Францию'
                text='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
                linkText='Купить билет'
                linkHref='#'
            /> */}
        </div>
    )
}

export default Main;