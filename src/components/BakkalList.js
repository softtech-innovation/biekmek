import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import BakkalDetail from './BakkalDetail';

class BakkalList extends Component {
  state = { bakkals: [] };

  componentWillMount() {
    axios.get('https://biekmek-01-cihanbilir.c9users.io/bakkals.json')
      .then(response => this.setState({ bakkals: response.data }));
  }

  renderBakkals() {
    return this.state.bakkals.map(bakkal =>
      <BakkalDetail key={bakkal.title} bakkal={bakkal} />);
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 10 }}>
        {this.renderBakkals()}
      </ScrollView>
    );
  }
}

export default BakkalList;
