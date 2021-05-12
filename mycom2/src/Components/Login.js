import { Form, Input, Button, Checkbox } from "antd";
import "../App.css";
import { submit, cred } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Component } from "react";
import Notification from "./Notification";
class LoginUI extends Component {
  constructor(props) {
    super(props);

    this.state = {

      email: "",
      pwd: "",
      mail: "abdul",
      pass: "rub",
      // show: 0,
      log:false,
    };
  }
  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  onFinish = (values) => {
    console.log("Success:", values);
    this.props.cred(values)

  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  logged=()=>{
    const { email, pwd, mail, pass} = this.state;
    // if(email === mail && pwd === pass){
    //   this.setState({
    //     log:true,
    //   })


  }
  render() {
    // let button = 'button1';
    let show = true;
    const { email, pwd, mail, pass} = this.state;
    if(email === mail){
      if(pwd === pass){
        // button = 'button2';  
        show= false;
      }
    }
    return (
      <div className="login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
        >
          <Form.Item
           
            className="input "
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!"
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              value={this.state.email}
              placeholder="Username"
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </Form.Item>
          <Form.Item
            className="input"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={this.state.pwd}
              onChange={(event) => this.setState({ pwd: event.target.value })}
            />
          </Form.Item>
          {this.state.email === this.state.mail && this.state.pwd === this.state.pass ? 
          <Form.Item>
            <Link to="/homepage">
              <Button
                type="primary"
                htmlType="submit"
                // disabled={show}
                onClick={()=>this.logged()}
                style={{borderRadius:"18px"}}
              >
                Log in
              </Button>
            </Link>
          </Form.Item>  :
          <Form.Item>
            {/* <Link to="/homepage"> */}
              <Button
                type="primary"
                htmlType="submit"
                // disabled={show}
                onClick={()=>this.logged()}

                style={{borderRadius:"18px"}}
              >
                Log in
              </Button>
            {/* </Link> */}
          </Form.Item> }
        </Form>
        {this.state.email === this.state.mail  && this.state.pwd === this.state.pass ?
          (
            <Notification type="LOGIN SUCCESSFUL" />
          )
          : 
         ( <Notification type="incorrect password" />)
          
        }
        {/* {this.state.pwd !== "" && this.state.pwd !== this.state.pass ? (
          :
          null
        } */}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   const islogged = state.islogged;
//   return {
//     islogged,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (payload) => dispatch(submit(payload)),
    cred: (payload) => dispatch(cred(payload)),
  };
};
export default connect(null, mapDispatchToProps)(LoginUI);
