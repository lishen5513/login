import React,{Component} from "react";
import {StyleSheet,Text,View} from "react-native";
export default class WaitingLeaf extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textPromptStyle}>登录使用手机号{this.props.phoneNumber}</Text>
                <Text style={styles.textPromptStyle}>登录使用密码{this.props.userPW}</Text>
                <Text style={styles.bigTextPrompt} onpress={() => this.onGobackPressed()}>返回</Text>
            </View>
        );
    }
onGobackPressed(){
        this.props.navigator.pop();
};
}
WaitingLeaf.propTypes={
    phoneNumber:React.PropTypes.string,
    userPW:React.PropTypes.string
};
WaitingLeaf.defaultProps={
    phoneNumber:"123456",
    phonrPW:"456123"
};
let style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F5F5FF",
        justifyContent:"center",
        alignItems:"center"
    },
    textPromptStyle:{
        fontSize:20
    },
    bigTextPrompt:{
        width:300,
        fontSize:60,
        color:"white",
        textAlign:"center",
        backgroundColor:"gray"
    }

})
