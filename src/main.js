
import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import GrapeContainer from 'grape.jsx'

import _ from 'styles.css'

$(function() {
  $('body').append($('<div id="app"></div>'))
  ReactDOM.render(React.createElement(GrapeContainer, {}, null), $('#app').get(0))
})
