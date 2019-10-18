import React from 'react' 

class ErrorPage extends React.Component {
    state = {error: null}

    static getDerivedStateFromError(error) {
        return {error};
    }

    render() {
    
    if (this.state.error) {
        return (
            <main className="error-page">
                <h1>Oops! Something went wrong</h1>
                <p>Try refreshing the page</p>
            </main>
        )
    }
    return this.props.children
  }
}

export default ErrorPage