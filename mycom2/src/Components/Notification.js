import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import {connect} from 'react-redux';
import log from '../actions';

import React, { Component } from 'react'

export class Notification extends Component {
    constructor(props) {
        super(props)
    
        // this.state = {
        //      data:'',
        // }
    }
    
    render() {
        // const data = this.state.data
        let data='';
        if(this.props.log === true){
            data='LOGIN SUCCESSFULL';
        }
        else
        {
            data='INCORRECT USERNAME OR PASSWORD';
        }
        const {log} = this.props;
        return (
            <div>
                {
                    notification.open({
                        message: 'Notification Title',
                        description:
                          this.props.type,
                        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = state =>{
    const log = state.actual;
    console.log("log",log)
    return{
        log
    }
}

export default connect(mapStateToProps,null)( Notification);

