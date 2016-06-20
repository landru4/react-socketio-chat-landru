import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as ChatActions from '../actions'

class App extends Component {
  render() {
    const { messages, actions } = this.props
    return (
      <div>
        <MainSection messages={messages} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  messages: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ChatActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
