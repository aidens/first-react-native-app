'use strict';

// Application routing from Search Results
var PropertyView = require('./PropertyView');

//It’s a require statement that includes the react-native module, and a destructuring assignment.
var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;


// Add Style
var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});


// Add Component

class SearchResults extends Component {

// When constructing the data source, you provide a function that compares
// the identity of a pair of rows.The ListView uses this during the reconciliation
// process, in order to determine the changes in the list data.

// use of an arrow function  => in the onPress property of the TouchableHighlight
// component this is used to capture the guid for the row.

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  // Add method to the class to handle the press:
  rowPressed(propertyGuid) {
  var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];

    this.props.navigator.push({
      title: "Property",
      component: PropertyView,
      passProps: {property: property}
    });
  }

  //This manipulates the returned price, which is in the format ‘300,000 GBP’, to
  //remove the GBP suffix. Then it renders the row UI using techniques that you are
  //by now quite familiar with. This time, the data for the thumbnail image is supplied
  //via a URL, and React Native takes care of decoding this off the main thread.

  renderRow(rowData, sectionID, rowID) {
  var price = rowData.price_formatted.split(' ')[0];

  return (
    <TouchableHighlight onPress={() => this.rowPressed(rowData.guid)}
        underlayColor='#dddddd'>
      <View>
        <View style={styles.rowContainer}>
          <Image style={styles.thumb} source={{ uri: rowData.img_url }} />
          <View  style={styles.textContainer}>
            <Text style={styles.price}>£{price}</Text>
            <Text style={styles.title}
                  numberOfLines={1}>{rowData.title}</Text>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
    </TouchableHighlight>
  );

}

  // Specialized component — ListView — which displays rows of data within a
  // scrolling container, similar to UITableView. You supply data to the ListView
  // via a ListView.DataSource, and a function that supplies the UI for each row.

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }

}


module.exports = SearchResults;
