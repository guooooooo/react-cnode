import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App.jsx';
import { AppContainer } from 'react-hot-loader';

// ReactDOM.render(<App />,document.getElementById('root'))
const root = document.getElementById('root')
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />     
        </AppContainer>,
        root
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./views/App.jsx', ()=>{
        const NextApp = require('./views/App.jsx').default
        render(NextApp)
    })
}
