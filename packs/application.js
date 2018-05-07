
import React from 'react';
import AppRoot from 'components/app_root';

class MyApp extends React {

  constructor(props) {
    super(props);

    // var pos = import('components/purchase_orders');
  }
  render() {
    return <AppRoot query_result={{info: {total: 0, page: 1}, results: []}}/>;
  }
}
