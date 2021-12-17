import 'App.css'
import Header from 'components/Header'
import ListPage from 'features/Products/pages/ListPage'
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route path="/products" component={ListPage} />
                <Redirect from="/" to="/products" />
            </Switch>
        </div>
    )
}

export default App
