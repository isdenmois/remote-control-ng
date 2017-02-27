import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FilmsContainer extends PureComponent {
    renderItem(data) {
        const path = data.Files.length > 1 ? `/serials/${data.Hash}` : 'remote';
        const onClick = data.Files.length === 1 ? () => open(data.Files[0].Path) : undefined;

        return (
            <li key={data.Hash}>
                <Link to={path}>
                    {data.Name}
                </Link>
            </li>
        )
    }

    render() {
        return (
            <ul>
                {this.props.films.map(this.renderItem)}
            </ul>
        );
    }
}

FilmsContainer.propTypes = {
    films: PropTypes.array,
};

function mapStateToProps(state) {
    return {
        films: state.serials,
    };
}

const mapActionsToProps = {

};

export default connect(mapStateToProps)(FilmsContainer);
