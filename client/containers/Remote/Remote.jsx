import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
import open from '../../open';
import css from './Remote.css';

function key(k, m) {
    socket.emit("keyboard", {
        key: k,
        modifiers: m,
    })
}

export default class RemoteContainer extends PureComponent {
    render() {
        return (
            <div>
                <div className={css.pause} onClick={() => key("space")}>
                    Пауза
                </div>
                <div className={css.pause} onClick={() => key("audio_vol_up")}>
                    Громче
                </div>
                <div className={css.pause} onClick={() => key("audio_vol_down")}>
                    Тише
                </div>
            </div>
        );
    }
}
