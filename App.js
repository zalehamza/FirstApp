
import { 
  StyleSheet, 
  text,
  Text,
  StatusBar,
  View, 
  Button,
  Platform, 
  Alert,
  SafeAreaView,
  Image, 
  Dimensions
} from 'react-native';
import { useDimensions } from "@react-native-community/hooks";
import { TextInput } from 'react-native-web';
export default function App() {
  
  console.log(useDimensions());
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ 
        backgroundColor: "dodgerblue",
        flex: 1
         }}>
        
      </View>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0
  },
});
