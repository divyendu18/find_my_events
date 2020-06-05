import React, { Component } from 'react';
import Wallpaper from './Wallpaper';
import CardEvents from "./CardEvents";
// import { fetchData} from '../../api';
import axios from 'axios';
import {connect} from 'react-redux';
import {getEvents} from '../../redux/action/eventAction';

class Home extends Component {
    state={
        loading:true,
        events:[],
        err:null
      };
      async componentDidMount(){
        // const url="http://localhost:3000/events";
        // try{
        //     const res = await axios.get(url);
        //     this.setState({
        //         loading:false,
        //         events:res.data
        //     })
        // }catch(err){
        //     console.log(err);
        //     this.setState({
        //         err:'Their is some error....'
        //     })
        // }
        this.props.getEvents()
      } 
        
    render() {
        const {events} = this.props;
            return(
                
            <div className="container">
                <Wallpaper/>
                <h1><i className="fad fa-grip-lines-vertical"/>UpComing Events</h1>    
                <div className="events" >
                    {events.map(event => <CardEvents content={event}/>)}
                </div>
            </div>
            )
    }
}

const mapStateToProps = state => ({
    events:state.event.events
})

export default connect(mapStateToProps,{getEvents})(Home);
