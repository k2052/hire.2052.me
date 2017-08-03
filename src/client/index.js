import { render } from 'react-dom'
import Home from '../pages'

const elem = document.getElementById('app')
require('../styles/site.css')

render(<Home />, elem)
