import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'


export default function RouteWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}) {
    const signed = false

    if (!signed && isPrivate) {
        return <Redirect to="/" />
    }

    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />
    }

    return <Route {...rest} component={Component} />
}

