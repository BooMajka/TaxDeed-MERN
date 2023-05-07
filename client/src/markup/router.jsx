import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import About from './pages/about'
import BlogGrid from './pages/blog-grid'
import Contact from './pages/contact'
import ServicesDetails from './pages/services-details'
import BackToTop from './layout/backToTop'


class Router extends Component {
    render() {
        return (
            <BrowserRouter basename={'/demo/fianandox/'}>
            {/* <BrowserRouter> */}
                <div class="page-wrapper">

                    <Switch>
                        <Route path='/' exact component={Index} />
                        <Route path='/about' component={About} />
                        <Route path='/blog-grid' component={BlogGrid} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/services-details' component={ServicesDetails} />
                    </Switch>

                    <BackToTop />

                </div>
            </BrowserRouter>

        )
    }
}

export default Router;