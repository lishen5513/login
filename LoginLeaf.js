/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
    Dimensions,TextInput
} from 'react-native';
let widthOfMargin=Dimensions.get("window").width*0.05;

export default class LoginLeaf extends Component{
    constructor(props){
        super(props);
        this.state={
            inputedNum:'',
            inputedPW:''
        };
        this.updatePW=this.updatePW.bind(this);
    };
    updateNum(newText){
        this.setState({
            inputedNum:newText
        })
    };
    updatePW(newText){
        this.setState({
            inputedPW:newText
        });
    };
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle} placeholder={"输入手机号"} onChangeText={(newText)=>this.updateNum(newText)}/>
                    <Text style={styles.textPromptStyle}>
                        您输入的手机号：{this.state.inputedNum}
                    </Text>
                    <TextInput style={styles.textInputStyle} placeholder={"输入密码"} password="true" onChangeText={this.updatePW}/>
                <Text style={styles.bigTextPrompt} onpress={()=>this.userPressConfirm()}>确定</Text>
                <Text style={styles.bigTextPrompt} onpress={()=>this.userPressAddressBook()}>通讯录</Text>
            </View>
        );
    }
    userPressConfim(){
        this.props.navigator({
            phoneNumber:this.state.inputedNum,
            userPW:this.state.inputedPW,
            name:"waiting"
        });
    }
    userPressAddressBook(){

    }
}
/*--export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}*/

let styles=StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:"white"
   },
   textInputStyle:{
       backgroundColor:"gray",
       fontSize:20,
       margin:widthOfMargin//android上TextInput可以没有height，而iOS上必须有
   },
   textPromptStyle:{
       margin:widthOfMargin,
     fontSize:20
   }
});


