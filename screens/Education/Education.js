import React,{Component} from 'react';
import {View, Text, ScrollView, Linking,TouchableOpacity,StyleSheet, Image} from 'react-native';
import MyHeader from '../../components/MyHeader'
import { Card,Header,Icon } from 'react-native-elements';


export default class Education extends React.Component{
    render(){

        return(
            <ScrollView>
            <Header
          leftComponent={<Icon name='arrow-back' type='MaterialIcons' color='white'  onPress={() => this.props.navigation.navigate("List")}/>}
          centerComponent={{ text: "EDUCATION", style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
         
          backgroundColor = "#32867d"
        />
                <View>
                    <Card style={styles.card}>
                        <Card>
                            <TouchableOpacity onPress = {()=>{
                                Linking.openURL("https://seshagun.gov.in/                                ")
                            }}>
                          <Image 
                           source = {require("../../assets/eductaion/SSA.png")}
                           style={{width:320, height:150, alignSelf:"center"}}
                          />
                            </TouchableOpacity>
                            <Card>
                                <Text style={styles.text}>RIGHT TO EDUCATION</Text>
                            </Card>
                        </Card>
                    </Card>
                    
                    <Card style={styles.card}>
                        <Card>
                            <TouchableOpacity onPress = {()=>{
                        this.props.navigation.navigate("SpecialEducation")
                            }}>
                          <Image 
                           source = {require("../../assets/eductaion/SPECIAL.png")}
                           style={{width:320, height:150, alignSelf:"center"}}
                          />
                            </TouchableOpacity>
                            <Card>
                                <Text style={styles.text}>SPECIAL INCLUSSIVE EDUCATION</Text>
                            </Card>
                        </Card>
                    </Card>
                </View>
            </ScrollView>
        )
    }}
 
       
        const styles = StyleSheet.create({
       
            text:{
                fontSize:20,
                marginTop:10,
                
                textAlign:"center",
    
            },
            text1:{
                marginLeft:240,
                fontSize:20,
                marginTop:-30
            },
            card:{
                padding:10,
                margin:10,
            }
    
        })
