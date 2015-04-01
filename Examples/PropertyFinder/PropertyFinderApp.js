// your code goes here
'use strict';

// load react
var React = require('react-native');

// Application routing
var SearchPage = require('./Search');

// load stylesheet
var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

// the basic building block of the React UI. Components contain immutable properties,
// mutable state variables and expose a method for rendering.
// Your current application is quite simple and only requires a render method.
class HelloWorld extends React.Component {
  render() {
    return React.createElement(React.Text, {style: styles.text}, "Hello World!");
  }
}

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Aiden\'s App',
          component:SearchPage,
        }}/>
    );
  }
}
// AppRegistry defines the entry point to the application and provides the root component.

React.AppRegistry.registerComponent('PropertyFinderApp', function() { return PropertyFinderApp });
