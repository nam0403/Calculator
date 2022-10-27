import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';
import {useState} from 'react';
export default function App() {   
  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");
  const [text, setText] = useState("");
  const [history, setHistory] = useState("");
  const [search, setSearch] = useState("");
  const onButtonClick = (text) => {
    setText('');
    if (text == "=") {
      return calculateResult();
    }
    setResultText(resultText + text);
  };
const onclear =() => {
  setResultText(''); 
  setCalcText('');
  setText('');
};
const History = (text) => {

};
  const calculateResult = () => {
    setCalcText(eval(resultText));
  };
  const onOperationClick = (operation) => {
    let operations = ["DEL", "+", "-", "*", "/"];

    if (operation == "DEL") {
      return setResultText(
        resultText.toString().substring(0, resultText.length - 1)
      );
    }
    if (operation == "AC") {
      setResultText("");
      setCalcText(0);
      return;
    }
    if (operations.includes(resultText.toString().split("").pop())) return;
    setResultText(resultText + operation);
  };

  return (
    <View style={styles.container}>
      <View style={styles.valueBox}>
        <View style={styles.titleBox}> 
        <Ionicons name="calculator-outline" size ={30} color="#f9f9f9" />
        <Text style= {styles.title}>Calculator</Text>
        </View>
        <TextInput
                  style={styles.Calculation_Text}
                  placeholder= "Type here!!!"
                  onChangeText={newText => onButtonClick(newText)}
                  //defaultValue={text}
      />
        <Text style={styles.Calculation_Text}>{calcText}</Text>
        <Text style={styles.Result_Text}>{resultText}</Text>
      </View>
      <View style ={styles.btnBox}> 
        <View style={styles.btnRow}> 
          <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("DEL")} >
          <Text style = {styles.text}> DEL </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} >
          <Ionicons name = "calculator-outline" size ={25} color ="#ff4c29"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress = {() => onclear()}>
          <Text style = { styles.text }> CLEAR </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("/")}>
          <Text style = { styles.text}> / </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnRow}> 
          <TouchableOpacity style={styles.btn}  onPress={() => onButtonClick(7)}>
          <Text style = { styles.text}> 7 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={() => onButtonClick(8)}>
          <Text style = { styles.text}> 8 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onButtonClick(9)}>
          <Text style = { styles.text}> 9 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("*")}>
          <Text style = { styles.text}> * </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}> 
          <TouchableOpacity style={styles.btn} onPress={() => onButtonClick(4)}>
          <Text style = { styles.text}> 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onButtonClick(5)}>
          <Text style = { styles.text}> 5 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onButtonClick(6)}>
          <Text style = { styles.text}> 6 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("-")}>
          <Text style = { styles.text}> - </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}> 
          <TouchableOpacity style={styles.btn} onPress={() => onButtonClick(1)}>
          <Text style = { styles.text}> 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onButtonClick(2)}>
          <Text style = { styles.text}> 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onButtonClick(3)}>
          <Text style = { styles.text}> 3 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("+")}>
          <Text style = { styles.text}> + </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}> 
          <TouchableOpacity style={styles.btn} onPress={() => onButtonClick(0)}>
          <Text style = { styles.text}> 0 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onButtonClick(".")}>
          <Text style = { styles.text}> . </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.equal_btn} onPress={() => onButtonClick('=')}>
          <Text style = { styles.text}> = </Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
      container: {
        flex:1, 
        backgroundColor: '#082032',
        alignItems: 'center',
        justifyContent: 'center',
      },
      valueBox: {
        flex: 0.6,
        padding: 10,
      },
      title: {
        color: 'white',
        fontSize: 20,
      },
      titleBox: {
        width: wp(30),
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        marginTop: 20,
        flexDirection: 'row', 
      },
      Calculation_Text: {
        alignSelf: 'flex-end',
        fontSize: 30,
        color: "white",
        marginTop: hp(5),
      },
      Result_Text: {
        alignSelf: 'flex-end',
        fontSize: 30,
        color: "white",
        fontWeight: 'bold',
      },
      btnBox: {
        flex: 1.4,
        padding: 10,
      },
      btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
      },
      btn: {
        width: 75,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        //elevation: 25,
        borderColor: 'white',
        borderWidth: 1,
      },
      text: {
        fontSize: 20, 
        color: "#f9f9f9",
      },
      equal_btn: {
        width: 150,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 25,
        backgroundColor: '#ff4c29',
      },
});