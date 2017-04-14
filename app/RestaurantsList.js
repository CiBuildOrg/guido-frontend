import React, { Component } from 'react';
import {
  Image,
  ListView,
  Subtitle,
  TouchableOpacity,
  Screen,
  Text,
  GridRow,
  Card,
  View,
  Caption,
  Icon,
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

import { connect } from 'react-redux';
import { navigatePush } from './redux';

class RestaurantsList extends Component {
    constructor(props) {
      super(props);
      this.renderRow = this.renderRow.bind(this);
      this.state = {
        paths: [{
          "name": "Trajet1",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "125",
          "comments": "468",
        }, {
          "name": "Trajet2",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "1332",
          "comments": "432",
        }, {
          "name": "Trajet3",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "1232",
          "comments": "238",
        }, {
          "name": "Trajet4",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"  },
          "like": "65",
          "comments": "544",
        }, {
          "name": "Trajet5",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "154",
          "comments": "542",
        }, {
          "name": "Trajet6",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "542",
          "comments": "98",
        }, {
          "name": "Trajet7",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "643",
          "comments": "26",
        }, {
          "name": "Trajet8",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "357",
          "comments": "37",
        }, {
          "name": "Trajet9",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "876",
          "comments": "537",
        }, {
          "name": "Trajet10",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "56",
          "comments": "54",
        }],
      }
    }

    renderRow(rowData, sectionId, index) {
      const cellViews = rowData.map((path, id) => {
      return (
          <TouchableOpacity key={id} styleName="flexible">
            <Card styleName="flexible">
              <Image source={require('../doc/map.png')} />
              <View styleName="content">
                <Subtitle numberOfLines={3}>{path.name}</Subtitle>
                <View styleName="horizontal">
                  <Caption styleName="collapsible" numberOfLines={2}>{path.description}</Caption>
                </View>
                <View styleName="horizontal">
                  <Caption styleName="collapsible" numberOfLines={2}> </Caption>
                </View>
                <View styleName="horizontal">
                  <View styleName="horizontal flexible">
                    <Icon style={{color: 'gray', flex:1, top:3, transform:[{scale:0.75}]}} name="like" />
                    <Caption style={{color: 'gray', flex:1}} >{path.like}</Caption>
                  </View>
                  <View styleName="horizontal flexible">
                    <Icon style={{color: 'gray', flex:1, top:4.5, transform:[{scale:0.7}]}}  name="comment-full" />
                    <Caption style={{color: 'gray', flex:1}} >{path.comments}</Caption>
                  </View>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        );
      });
      return (
        <GridRow columns={2}>
          {cellViews}
        </GridRow>
      );
    }

    render() {
      const groupedData = GridRow.groupByRows(this.state.paths, 2, () => {
        return 1;
      });
      return (
        <Screen>
          <ListView
            data={groupedData}
            renderRow={this.renderRow}
          />
        </Screen>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  onButtonPress: (restaurant) => {
    dispatch(navigatePush({
      key: 'RestaurantDetails',
      title: 'Details',
    }, { restaurant }));
  },
});

export default connect(
	undefined,
	mapDispatchToProps
)(RestaurantsList);

