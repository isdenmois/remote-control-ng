import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
import open from '../../open';

class FilmContainer extends PureComponent {
    render() {
        return (
            <ul>
                {this.props.files.map(data => (
                    <li key={data.Name}>
                        <Link to="/remote" onClick={() => open(data.Path)}>
                            {data.Name}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

FilmContainer.propTypes = {
    files: PropTypes.array,
};

function mapStateToProps(state, props) {
    const Hash = props.match.params.id;
    const film = find(state.films, { Hash }) || {};

    return {
        files: film.Files || [],
    };
}

const mapActionsToProps = {

};

export default connect(mapStateToProps)(FilmContainer);
