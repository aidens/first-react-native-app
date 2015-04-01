'use strict';

var React = require('react-native');


//Destructuring assignment
//which lets you extract multiple object properties
//and assign them to variables using a single statement.

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

//add Styles
//The text field and ‘Go’ button are on the same row, so you’ve wrapped them
//in a container that has a flexDirection: 'row' style. Rather than explicitly
//specifying the widths of the input field and button, you give each a flex
//value instead. The text field is styled with flex: 4,while the button has
//flex: 1; this results in their widths having a 4:1 ratio.

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    borderWidth: 1,
    borderColor:'#48BBEC'
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 38,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 38,
    padding: 10,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
  width: 217,
  height: 138
  }
});


// Add the component
class SearchPage extends Component {

  // Your component now has a state variable, with searchString set
  // to an initial value of london.
  //The isLoading property will keep track of whether a query is in progress.

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false
    };
  }

  // create a method that acts as an event handler.
  // This takes the value from the event’s text property and uses it to
  // update the component’s state.

  onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log(this.state.searchString);
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>

      <View style={styles.flowRight}>
        <TextInput
          style={styles.searchInput}
          value={this.state.searchString}
          onChange={this.onSearchTextChanged.bind(this)}
          placeholder='Search via name or postcode'/>
        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableHighlight>
      </View>

      <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Location</Text>
      </TouchableHighlight>

      <Image source={require('image!house')} style={styles.image}/>
     </View>
    );
  }
}

//The buttons in your app use TouchableHighlight, a React Native
//component that becomes transparent and reveals the underlay
//colour when tapped.

//The require('image!house') statement is used to reference an image
//located within your application’s asset catalogue.

//With React, you no longer have to worry about which parts of the UI might be
//affected by a state change; your entire UI is simply expressed as a function
//of your application state.

//This exports the SearchPage class, which permits its use in other files.
module.exports = SearchPage;
