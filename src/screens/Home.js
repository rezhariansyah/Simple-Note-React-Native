import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Icon, Fab} from 'native-base';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{justifyContent: 'center'}}
              onPress={() => this.props.navigation.openDrawer()}>
              <View style={styles.back}>
                <Image
                  style={styles.imageWidth}
                  source={require('../assets/images/arkan.png')}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.label}>
              <Text style={{textAlign: 'center'}}>NOTE APP</Text>
            </View>
            <TouchableOpacity style={{justifyContent: 'center'}}>
              <View style={styles.back}>
                <Icon
                  name="list"
                  color="#000000"
                  size={32}
                  style={styles.menuIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchBar}>
            <TextInput
              style={{marginHorizontal: 20}}
              placeholder="Search Note..."
            />
          </View>
          <ScrollView>
            <View style={styles.FlatList}>
              <TouchableOpacity activeOpacity={1}>
                <View style={styles.item}>
                  <Text style={{color: 'white', textAlign: 'right'}}>Date</Text>
                  <Text style={{color: 'white', fontSize: 17}}>Name Card</Text>
                  <Text style={{color: 'white'}}>Category</Text>
                  <Text style={{color: 'white'}}>Desc</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              bottom: 30,
              right: 30,
              width: 100,
              height: 100,
              borderRadius: 50,
            }}>
            <Icon />
          </View>
          <Fab
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('AddNote')}
            style={{
              backgroundColor: 'white',
              marginBottom: 50,
              position: 'absolute',
            }}>
            <Icon name="add" type="Ionicons" style={{color: 'black'}} />
          </Fab>
        </View>
      </Fragment>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  back: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  imageWidth: {
    width: 30,
    height: 30,
  },
  label: {
    justifyContent: 'center',
    flex: 1,
  },
  containerFlatlist: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  searchBar: {
    zIndex: 1,
    backgroundColor: '#fff',
    borderBottomColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    marginTop: 15,
    alignSelf: 'center',
    marginRight: 0,
    height: 38,
    width: 307,
    borderRadius: 20,
  },
  FlatList: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#4fd4ef',
    margin: 15,
    borderRadius: 8,
    elevation: 6,
    width: 138,
    height: 136,
    padding: 5,
  },
});
