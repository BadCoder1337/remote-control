import App, { Context } from "./App";
import React from 'react';

export default function withContext(Component: React.FC<typeof Context>) {
    return function wrappedComponent() {
        return (<App.CConsumer>
            {(context) => (<Component {...context}/>)}
        </App.CConsumer>)
    }
}
