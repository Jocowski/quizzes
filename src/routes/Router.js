import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './RouterConfig';

import Home from '../pages/Home';
import Biblico from '../pages/Biblico';

const Router = () => {
    const RouteWithRole = ({ Element }) => {
        return (
          <>
            <Element/>
          </>
        );
    }

    return (
        <div>
            <Routes>
                <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
                <Route exact path={ROUTES.Biblico} element={<RouteWithRole Element={Biblico} />}></Route>
            </Routes>
        </div>
    )
}

export default Router;
