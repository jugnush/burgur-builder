import React, { Component } from 'react';
import Layout from './component/layout/layout'
import Burgurbuilder from './container/burgurBuilder/burgurBuilder'


class App extends Component {
  render() {
    return (
      <Layout>
        <Burgurbuilder />
      </Layout>
    );
  }
}

export default App;
