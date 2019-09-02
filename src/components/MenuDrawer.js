import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {getCategory} from '../redux/Actions/category';
import {ScrollView} from 'react-native-gesture-handler';

class MenuDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getCategory()).then(res => {
      this.setState({
        categoryList: this.props.categoryList,
      });
    });
  };

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
    console.log('ini category list', this.state.categoryList);
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
                <Text style={{color: 'white', fontSize: 20}}>David Sanchezz</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomLink}>
          <ScrollView>
            <FlatList
              data={this.state.categoryList}
              numColumns={1}
              onEndReachedThreshold={0.2}
              keyExtractor={item => item.id_category}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity>
                    <Text style={{fontSize: 18, marginVertical : 10}}>{item.category}</Text>
                  </TouchableOpacity>
                );
              }}
            />
            <Text style={{fontSize: 18, marginVertical : 10}}>Add Category</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryList: state.category.categoryList,
  };
};

export default connect(mapStateToProps)(MenuDrawer);

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
    paddingTop: 20,
    paddingHorizontal: 20,
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
