import React from 'react';
import { Link } from 'react-router-dom'
import { routes } from '../router/helper'

const Links = () => {
    return (
        <div>
            {routes.map((route, index) =>
                <Link key={index} exact="true" to={route.path}>
                    {route.title}
                </Link>
            )}
        </div>
    )
}

export default Links