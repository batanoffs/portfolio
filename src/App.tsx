import { Routes, Route } from 'react-router-dom'

import ScrollToAnchor from './utils/ScrollToAnchor'

import { Home } from './components/Home'

import './index.css'

export const App = () => {
    ScrollToAnchor()
    return (
        <Routes>
            <Route path="/*" element={<Home />} />
        </Routes>
    )
}
