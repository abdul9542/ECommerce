import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { Form, Input, Button, Checkbox } from "antd";
import { Popover, Button } from 'antd';
import { Layout, Menu, Breadcrumb } from "antd";
import {ArrowLeftOutlined} from '@ant-design/icons';
import '../App.css';
import dp1 from '../dp1.jpg';
import dp2 from '../dp2.jpg';
import dp3 from '../dp3.jpg';
import { Avatar, Image } from 'antd';
import { Carousel, Radio } from 'antd';

import { Descriptions } from 'antd';

const { Header, Content, Footer } = Layout;


export class Card1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          content : (
                    <div>
                        <p>Content</p>
                        <p>Content</p>
                      </div>
                    ),
          contentStyle : {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'flex-end',
            background: '#364d79',
          },
            name: "",
            images:[dp1,dp2,dp3],
            index:0,
            cards: [
              {
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                  street: "Kulas Light",
                  suite: "Apt. 556",
                  city: "Gwenborough",
                  zipcode: "92998-3874",
                  geo: {
                    lat: "-37.3159",
                    lng: "81.1496",
                  },
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                  name: "Romaguera-Crona",
                  catchPhrase: "Multi-layered client-server neural-net",
                  bs: "harness real-time e-markets",
                },
              },
              {
                name: "Ervin Howell",
                username: "Antonette",
                email: "Shanna@melissa.tv",
                address: {
                  street: "Victor Plains",
                  suite: "Suite 879",
                  city: "Wisokyburgh",
                  zipcode: "90566-7771",
                  geo: {
                    lat: "-43.9509",
                    lng: "-34.4618",
                  },
                },
                phone: "010-692-6593 x09125",
                website: "anastasia.net",
                company: {
                  name: "Deckow-Crist",
                  catchPhrase: "Proactive didactic contingency",
                  bs: "synergize scalable supply-chains",
                },
              },
              {
                name: "Clementine Bauch",
                username: "Samantha",
                email: "Nathan@yesenia.net",
                address: {
                  street: "Douglas Extension",
                  suite: "Suite 847",
                  city: "McKenziehaven",
                  zipcode: "59590-4157",
                  geo: {
                    lat: "-68.6102",
                    lng: "-47.0653",
                  },
                },
                phone: "1-463-123-4447",
                website: "ramiro.info",
                company: {
                  name: "Romaguera-Jacobson",
                  catchPhrase: "Face to face bifurcated interface",
                  bs: "e-enable strategic applications",
                },
              },
              {
                name: "Patricia Lebsack",
                username: "Karianne",
                email: "Julianne.OConner@kory.org",
                address: {
                  street: "Hoeger Mall",
                  suite: "Apt. 692",
                  city: "South Elvis",
                  zipcode: "53919-4257",
                  geo: {
                    lat: "29.4572",
                    lng: "-164.2990",
                  },
                },
                phone: "493-170-9623 x156",
                website: "kale.biz",
                company: {
                  name: "Robel-Corkery",
                  catchPhrase: "Multi-tiered zero tolerance productivity",
                  bs: "transition cutting-edge web services",
                },
              },
              {
                name: "Chelsey Dietrich",
                username: "Kamren",
                email: "Lucio_Hettinger@annie.ca",
                address: {
                  street: "Skiles Walks",
                  suite: "Suite 351",
                  city: "Roscoeview",
                  zipcode: "33263",
                  geo: {
                    lat: "-31.8129",
                    lng: "62.5342",
                  },
                },
                phone: "(254)954-1289",
                website: "demarco.info",
                company: {
                  name: "Keebler LLC",
                  catchPhrase: "User-centric fault-tolerant solution",
                  bs: "revolutionize end-to-end systems",
                },
              },
              
            ]
        }
    }
    
    setIndex=(value)=>{
      this.setState({
        index:value,
      })
      console.log("index", this.state.index)
    }
  render() {
    const name= this.props.name;
    console.log("name render", name)
    const card= this.state.cards.filter((item)=>item.name === name.data)
    console.log("filter card", card)
    return (
      <div className="cardpage" >
        <div className="input">
          <Link to="/homepage">
            <Button
              type="primary"
              htmlType="submit"
              style={{borderRadius:"18px"}}
            >
              <ArrowLeftOutlined/>
            </Button>
          </Link>
        </div>
        {card.map((item,index)=>
          (
            <div key={index}>
              <div className="title">
                <Popover content={item.name} title="Name" trigger="hover">
                  <Avatar
                    style={{
                      color: '#f56a00',
                      backgroundColor: '#fde3cf',
                    }}
                  >
                    {item.name[0]}
                  </Avatar>
                </Popover>
                <h2>
                  {item.name}
                </h2>
              </div>
              <div className='carousal'>
                <div className='photos'>
                  {this.state.images.map((item,index)=>
                    (
                      <Popover title={`image${index+1}`} trigger="hover">
                        <h2 key={index} onClick={()=>this.setIndex(index)}>
                          <img src={item}/>
                        </h2>
                      </Popover>
                    ))
                  }
                </div>
                <div className="photo">
                  <Popover title={`image${index+1}`} trigger="hover">
                    <h2>
                      <img src={this.state.images[this.state.index]}/>
                    </h2>
                  </Popover>
                </div>
              </div>
              <Descriptions title={`${item.name}'s Info`}>
                <Descriptions.Item label="Name">
                  {item.name}
                </Descriptions.Item>
                <Descriptions.Item label="UserName">
                  {item.username}
                </Descriptions.Item>
                <Descriptions.Item label="Telephone">
                  {item.phone}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {item.email}
                </Descriptions.Item>
                <Descriptions.Item label="Company">
                  {item.company.name}
                </Descriptions.Item>
                <Descriptions.Item label="Address">
                  {item.address.street},{item.address.suite},{item.address.city},
                </Descriptions.Item>
                <Descriptions.Item label="zip code">
                  {item.address.zipcode}
                </Descriptions.Item>
              </Descriptions>
            </div>
          ))
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    const name = state.data;
    const cards= state.cardetails;

    console.log("index recieved", name);
  
    return {
      name,
      cards,
    };
  };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       carded: (payload) => dispatch(carded(payload)),
//       named: (payload) => dispatch(named(payload)),
  
//     };
//   };
  export default connect(mapStateToProps, null)(Card1);
  

 
  