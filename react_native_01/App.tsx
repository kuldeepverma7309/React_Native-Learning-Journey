import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

function App(): React.JSX.Element {
  const [name, setName] = useState<string>('Kuldeep Verma');
  const [skills, setSkills] = useState<string>('JavaScript, React.js, Node.js, MongoDB, TypeScript, Express.js, Python, DSA, Blockchain Developement.');
  const print = () => {
    console.log(`my bio data :- Name: Kuldeep Verma, Age: 25, Location: Lucknow, Education: B.Tech, Semester: 7th sem., Branch: Computer Science, Skills: JavaScript, React.js, Node.js, MongoDB, TypeScript, Express.js, Python, DSA, Blockchain Developement, Title: Full Stack Developer`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Hey this is my bio data</Text>
      <Text style={styles.subHeader}>I am learning React Native</Text>
      <MyData name={name} skills={skills}/>
      <Button title='Press' color={'green'} onPress={print} />
    </ScrollView>
  );
}

const MyData = ({name,skills}:{name:string,skills:string}): React.JSX.Element => {

  return (
    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>Name: {name}</Text>
      <Text style={styles.dataText}>Age: 22</Text>
      <Text style={styles.dataText}>Location: Lucknow</Text>
      <Text style={styles.dataText}>Education: B.Tech</Text>
      <Text style={styles.dataText}>Semester: 7th sem.</Text>
      <Text style={styles.dataText}>Branch: Computer Science</Text>
      <Text style={styles.dataText}>Skills: {skills}</Text>
      <Text style={styles.dataText}>Title: Full Stack Developer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 30,
    color: 'red',
    fontWeight: '800',
    marginBottom: 20,
  },
  dataContainer: {
    marginBottom: 20,
  },
  dataText: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default App;