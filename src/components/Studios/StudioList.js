import React, { Component } from 'react'
//import the components we will need
import StudioCard from './StudioCard'
import StudioManager from '../../modules/StudioManager'
import "./Studio.css"


class StudioList extends Component {
    //define what this component needs to render
    state = {
        studios: [],
    }

    componentDidMount() {
        console.log("Studio LIST: ComponentDidMount");
        //getAll from StudioManager and hang on to that data; put it in state
        StudioManager.getAll()
            .then((studios) => {
                this.setState({
                    studios: studios
                })
            })
    }

    render() {
        return (
            <>
            <div className="container-studios">
                {this.state.studios.map(studio =>
                    <StudioCard
                        key={studio.id}
                        studio={studio}
                     />
                )}
            </div>
            </>
        )
    }
}

export default StudioList
