import { createRoot } from 'react-dom/client'
import './styles/global.css'

import App from './main/App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
