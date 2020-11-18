import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IosMapviewObjc, { MapView } from 'react-native-ios-mapview-objc';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    IosMapviewObjc.multiply(3, 7).then(setResult);
  }, []);

  // return (
  //   <View style={styles.container}>
  //     <Text>Result: {result}</Text>
  //   </View>
  // );

  // return (
  //     <View style={styles.container}>
  //       <Text> Result: {result}</Text>
  //       <MapView style={{ flex: 1 }}/>
  //     </View>
  // );

  return (
    <MapView style={{ flex: 1 }}/>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
