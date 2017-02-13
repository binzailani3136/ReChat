import { Image } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { replaceRoute } from '@actions/route';
import { Styles, Images } from '@theme/';

class Splash extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.gotoLoginMain();
    }, 1500);
  }
  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  gotoLoginMain() {
    this.replaceRoute('login');
  }
  render() {
    return (
      <Image
        resizeMode={'cover'}
        style={[Styles.fullScreen]}
        source={Images.bkgSplash}
      />
    );
  }
}

Splash.propTypes = {
  replaceRoute: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}
function mapStateToProps(state) {
  return { };
}
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
