
import $ from 'jquery'
import ReactDOM from 'react-dom'
import GrapeContainer from 'grape.jsx'

import _ from 'styles.css'

$(function() {
  $('body').append($('<div id="app"></div>'))
  ReactDOM.render(GrapeContainer, $('#app').get(0))
})
