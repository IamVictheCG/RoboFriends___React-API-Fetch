import { Component } from 'react'

 class ErrorHanddler extends Component {
    constructor() {
        super()
        this.state = {
            error: false
        }
    }

    componentDidCatch(err, info){
        console.log(err.message)
        console.log(info)
        this.setState({error: true})
    }

    render() {
        if (this.state.error){
            return <h1 style={color}>Something has gone wrong...</h1>
        }
        return <>{this.props.children}</>
    }
}

const color = {
    color: "red"
}

export default ErrorHanddler