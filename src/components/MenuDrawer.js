import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

class MenuDrawer extends Component {
  navLink(nav, text) {
    return (
      <TouchableOpacity
        style={{height: 50}}
        onPress={() => this.props.navigation.navigate(nav)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLink}>
          <View style={styles.profile}>
            <View style={styles.imageView}>
              <Image
                style={styles.imageWith}
                source={require('../assets/images/arkan.png')}
              />
              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize : 20}}>Full Name</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomLink}>
          <Text style={{fontSize : 18}}>Add Category</Text>
        </View>
      </View>
    );
  }
}

export default MenuDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
  },
  topLink: {
    height: 300,
    backgroundColor: '#0F88F1',
  },
  bottomLink: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop : 20,
    paddingHorizontal : 20
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageWith: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 150 / 2,
  },
  buttonContainer: {
    backgroundColor: 'black',
    marginTop: 20,
    width: 270,
    height: 40,
    borderRadius: 20,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
