
import React,{useState} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Section from './Section';

export default function App() {

  const [inp,setInp] = useState('')
  const [list,setList] =useState([]);

  const addSection=()=>{
      if(inp){
      setList([ ...list, { key : Math.random().toString() , data:inp } ]);
      setInp('')
      }
      else{
          setList([...list])
      }
  }

  const delSection=(itemkey)=>{
    var newlist = list.filter(item=> item.key!=itemkey)
    setList(newlist);
  }


  return (<SafeAreaView style={styles.container} >
    <View style={{width:'100%',backgroundColor:'#66B2FF',}} >
    <Text style={{fontSize:24,textTransform:'capitalize',padding:10,fontWeight:'700',textAlign:'center'}} >curriculum app</Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-evenly',width:"100%",padding:5}} >
    <TextInput style={{borderColor:'red',borderWidth:1,width:"50%",textAlign:'center',fontSize:17}} value={inp} onChangeText={text=>setInp(text)} />
    <Button title="Add Section" onPress={addSection} />
    </View>
    <ScrollView>
      {list.map((item)=>
      <View key={item.key}>
        <View style={{flexDirection:'row', justifyContent:'space-evenly',width:"100%",backgroundColor:'yellow'}} >
        <Text style={styles.sectionheading} >SECTION : {item.data}</Text>
        <Button title="Delete" onPress={()=>delSection(item.key)} />
        
        </View>
        <Section/>
      </View>
      )}
    </ScrollView>
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionheading:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    padding:5,
   

    
  },
});
