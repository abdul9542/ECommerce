
import React, { Component } from 'react'
import { connect } from "react-redux";
import { useHistory,Link } from "react-router-dom";

// import { Form, Input, Button, Checkbox } from "antd";
import { Popover, Button } from 'antd';
import { carded, named,   selectCard } from "../actions";

import { Layout, Menu, Breadcrumb } from "antd";
import {ArrowLeftOutlined, DownloadOutlined, ShoppingCartOutlined, VerticalRightOutlined  } from '@ant-design/icons';
// import '../App.css';
import dp1 from '../dp1.jpg';
import dp2 from '../dp2.jpg';
import dp3 from '../dp3.jpg';
import { Avatar, Image } from 'antd';
import { Carousel, Radio } from 'antd';

import { Descriptions } from 'antd';
import Homepage from './Homepage';
import { getRenderPropValue } from 'antd/lib/_util/getRenderPropValue';

const { Header, Content, Footer } = Layout;


export class Card extends Component {
  constructor(props) {
    super(props)
      this.state = {
        size: 'large',
        images:[dp1,dp2,dp3],
        index:0,
        value:'',   
        contentStyle : {
          // height: '160px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'flex-end',
          // background: '#364d79',
        },
          // name: 0,
          // cards: [],
      }
  }
  getValue=(value)=>{
    console.log("id got",value)
    this.setState({
      value:value,
      // card: this.props.cards[value-1].name
    })
    // console.log('values given', value),
    console.log("id got",this.state.value)
  }
  async componentDidMount(){
    var url=new URL(window.location);
    console.log("url", url.pathname)
    const path=url.pathname;
    var value = (path.split('/'))[2];
    // value = decodeURIComponent(value);
    // const length= path.length-1;
    // console.log("path", id);
    this.props.named(value-1);
    this.getValue(value-1);
    console.log('id fetched',this.state.value)
  }
  setIndex=(value)=>{
    this.setState({
      index:value,
    })
    console.log("set index", this.state.index)
  }
  resetIndex=(value)=>{
    this.setState({
      index:'',
    })
    console.log("reset index", this.state.index, value)
  }
  
  
  select=(value)=>{
    this.props.selectCard(value);

  }
  render() {
    // text='',
    
   
    const id= this.props.name.data;
    console.log("name is ",id);
    // this.myloop(id);
    // console.log("name render", name)
    const card= this.props.cards[id];
    console.log("filter card", card.name)
    return (
      <div className="cardpage" >
       
        <div >
          
          <div className='top'>  
          <div  className="title">   
          <div className="input">
            <Link to="/homepage">
              <ArrowLeftOutlined />
            </Link>
        </div>        
            <h2>
              {card.name}
            </h2></div>
            {/* <div className='cartlist'>
              <Link to='/cart/'>
              <h3 className='icon'><ShoppingCartOutlined/></h3></Link></div> */}
          </div>
          <div className='carousal'>
            <div className='photos'>
              {card.images.map((item,index)=>
                (
                  <div key={index} className='leftphoto'>
                    {/* <Popover title={`image${index+1}`} trigger="hover"> */}
                      <p  onClick={()=>this.setIndex(index)}>
                        <img src={item}/>
                      </p>
                    {/* </Popover> */}
                  </div>
                ))
              }
            </div>
            {/* {this.state.index !== '' ?
              <div className="photo" onClick={()=>this.resetIndex()}>
                <Popover title="image1" trigger="hover">
                  <h2 >
                    <img src={card.images[this.state.index]}/>
                  </h2>
                </Popover>
              </div>
              : */}
              <div className='photo'>
                <Carousel autoplay dotPosition={'left'} >
                  {card.images.map((item,index)=>(
                    <div  key={index} >
                      <h2 style={this.state.contentStyle} >
                        <img src={item} />
                      </h2>
                    </div>
                  ))}
                </Carousel>
              </div>
            {/* } */}
           
          </div>
          <Descriptions title={`${card.name}'s Info`}>
            <Descriptions.Item label="Name">
              <h4>
                {card.name}
              </h4>
            </Descriptions.Item>
            <Descriptions.Item label="UserName">
              <h4>
                {card.username}
              </h4>
            </Descriptions.Item>
            <Descriptions.Item label="Telephone">
              <h4>
                {card.phone}
              </h4>
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              <h4>
                {card.email}
              </h4>
            </Descriptions.Item>
            <Descriptions.Item label="Company">
              <h4>
                {card.company.name}
              </h4>
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              <h4>
                {card.address.street}, {card.address.suite}, {card.address.city},
              </h4>
            </Descriptions.Item>
            <Descriptions.Item label="zip code">
              <h4>
                {card.address.zipcode}
              </h4>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    )
  }  
}
const mapStateToProps = (state) => {
    const name = state.data;
    // const cart = state.cart;
    const cards= state.cards.cardetails;

    // console.log("cart recieved",cart);
  
    return {
      name,
      cards,
      // cart,  
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      carded: (payload) => dispatch(carded(payload)),
      named: (payload) => dispatch(named(payload)),
      selectCard:(payload) => dispatch( selectCard(payload)),
  
    };
  };
  export default connect(mapStateToProps,mapDispatchToProps)(Card);
  

 
  