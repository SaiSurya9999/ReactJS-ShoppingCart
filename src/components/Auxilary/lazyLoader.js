import React, { Component } from 'react';

const lazyLoader = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent().then(cmp => {
                this.setState({ component: cmp.default });
            });
        }

        render() {
          let C = this.state.component;
          
          // Adding the props to Lazy loaded component for future use.
          return C ? <C {...this.props} /> : null;
        }
    }
};

export default lazyLoader;