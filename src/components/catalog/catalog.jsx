import React from 'react'
import '../catalog/catalog.css'
import catalog1 from '../catalog/imgCatalog/S035c1162fb30422799044906f5a9d0ecG 10.png'
import catalog2 from '../catalog/imgCatalog/S035c1162fb30422799044906f5a9d0ecG 11.png'
import catalog3 from '../catalog/imgCatalog/S035c1162fb30422799044906f5a9d0ecG 12.png'
import binDark from '../catalog/imgCatalog/binDark.png'
import darkLike from '../catalog/imgCatalog/darkLike.png'

class Catalog extends React.Component {
    render() {
        return (
            <div className="catalog">
                <div className="catalog-content">
                    <div className="pagin">
                        <a href="" className='paginA'>Главная</a> \
                        <a href="" className='paginA'>Каталог</a>
                    </div>

                    <div className="catalog-inform">
                        <div className="catalog-menu">
                            <a href="" className="menu-link">Всё</a>
                            <a href="" className="menu-link">Топ</a>
                            <a href="" className="menu-link">Низ</a>
                            <a href="" className="menu-link">Обувь</a>
                        </div>

                        <div className="catalog-inform-blog">
                            <div className="catalog-blog">
                                <div className="element">
                                    <img src={catalog1} alt="" className='catalog' />
                                    <h2 className="catalog-title">Рубашка СВЭГ</h2>
                                    <div className="catalog-btn">
                                        <h2 className="price">9999 ₽</h2>
                                        <div className="btn-form">
                                            <img src={darkLike} alt="cat" />
                                            <img src={binDark} alt="cat" />
                                        </div>
                                    </div>
                                </div>
                                <div className="element">
                                    <img src={catalog2} alt="" className='catalog' />
                                    <h2 className="catalog-title">Рубашка СВЭГ</h2>
                                    <div className="catalog-btn">
                                        <h2 className="price">9999 ₽</h2>
                                        <div className="btn-form">
                                            <img src={darkLike} alt="cat" />
                                            <img src={binDark} alt="cat" />
                                        </div>
                                    </div>
                                </div>
                                <div className="element">
                                    <img src={catalog3} alt="" className='catalog' />
                                    <h2 className="catalog-title">Рубашка СВЭГ</h2>
                                    <div className="catalog-btn">
                                        <h2 className="price">9999 ₽</h2>
                                        <div className="btn-form">
                                            <img src={darkLike} alt="cat" />
                                            <img src={binDark} alt="cat" />
                                        </div>
                                    </div>
                                </div>
                                <div className="element">
                                    <img src={catalog1} alt="" className='catalog' />
                                    <h2 className="catalog-title">Рубашка СВЭГ</h2>
                                    <div className="catalog-btn">
                                        <h2 className="price">9999 ₽</h2>
                                        <div className="btn-form">
                                            <img src={darkLike} alt="cat" />
                                            <img src={binDark} alt="cat" />
                                        </div>
                                    </div>
                                </div>
                                <div className="element">
                                    <img src={catalog2} alt="" className='catalog' />
                                    <h2 className="catalog-title">Рубашка СВЭГ</h2>
                                    <div className="catalog-btn">
                                        <h2 className="price">9999 ₽</h2>
                                        <div className="btn-form">
                                            <img src={darkLike} alt="cat" />
                                            <img src={binDark} alt="cat" />
                                        </div>
                                    </div>
                                </div>
                                <div className="element">
                                    <img src={catalog3} alt="" className='catalog' />
                                    <h2 className="catalog-title">Рубашка СВЭГ</h2>
                                    <div className="catalog-btn">
                                        <h2 className="price">9999 ₽</h2>
                                        <div className="btn-form">
                                            <img src={darkLike} alt="cat" />
                                            <img src={binDark} alt="cat" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Catalog