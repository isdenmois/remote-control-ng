import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.css'

class HomeContainer extends PureComponent {
    render() {
        return (
            <div className={css.wrapper}>
                <Link to="/films" className={css.films}>
                    Фильмы
                </Link>
                <Link to="/serials" className={css.films}>
                    Сериалы
                </Link>
                <Link to="/remote" className={css.control}>
                    Пульт
                </Link>
            </div>
        );
    }
}

export default HomeContainer;
