import React, { PureComponent, PropTypes } from 'react';
import css from './Home.css'

class HomeContainer extends PureComponent {
    render() {
        return (
            <div className={css.wrapper}>
                <div className={css.films}>
                    Фильмы
                </div>
                <div className={css.control}>
                    Пульт
                </div>
            </div>
        );
    }
}

export default HomeContainer;
