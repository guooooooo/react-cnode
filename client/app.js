import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './views/App';
import { AppContainer } from 'react-hot-loader';

// ReactDOM.render(<App />,document.getElementById('root'))
const root = document.getElementById('root')
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Component />     
            </BrowserRouter>
        </AppContainer>,
        root
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./views/App', ()=>{
        const NextApp = require('./views/App').default
        render(NextApp)
    })
}
