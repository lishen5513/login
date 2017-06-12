/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from "react";
import {AppRegistry,BackAndroid,Platform} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
import LoginLeaf from "./LoginLeaf";
import WaitingLeaf from "./WaitingLeaf";

export default class NaviModule extends Component{
    constructor(props){
    super(props);
    this.renderScene=this.renderScene.bind(this);
    this.configureScene=this.configureScene.bind(this);
    this.handleBackAndroid=this.handleBackAndroid.bind(this);
    }
    renderScene(router,navigator){
        this.navigator=navigator;
        switch(router){
            case "login":
                return <LoginLeaf navigator={navigator}/>;
            case "Waiting":
                return <WaitingLeaf navigator={navigator} phoneNumber={router.phoneNumber}
                userPW={router.userPW}/>
        }
    };
    configureScene(router){
        return Navigator.SceneConfigs.FadeAndroid;
    };
    handleBackAndroid(){
        if(this.navigator.getCurrentRoutes().length>1){
            this.navigator.pop();
            return true;
        }
        return false;
    };
    componentDidMount() {
        if (Platform.OS === "android") BackAndroid.addEventListener(
            "hardwareBackPress", this.handleBackAndroid);
    }
    componentWillUnmount(){
        if (Platform.OS === "android") BackAndroid.removeEventListener(
            "hardwareBackPress", this.handleBackAndroid);
    }
    render(){
        return(
            <Navigator initialRoute={{name:"login"}}
            configureScene={this.configureScene}
                       renderScene={this.renderScene}
            />
        )
    }
    }
    AppRegistry.registerComponent('AwesomeProject',()=>NaviModule);


