import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/'

const { func } = PropTypes

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { term: '' }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            term: e.target.value
        })
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.props.fetchWeather(this.state.term)
    }

    render() {
        return (
            <Fragment>
                <form
                    className="input-group search-form"
                    onSubmit={this.handleFormSubmit}
                >
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={this.handleInputChange}
                        className="form-control"
                        placeholder="Get a 5 day forecast"
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary">
                            Search
                        </button>
                    </span>
                </form>
            </Fragment>
        )
    }
}

SearchBar.propTypes = {
    fetchWeather: func.isRequired
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchWeather }, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchBar)
