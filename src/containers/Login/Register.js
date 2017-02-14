import { Text, TextInput, Image, View, TouchableOpacity, Alert } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from 'react-native-i18n';

import { replaceRoute, popRoute } from '@actions/route';

import { Metrics, Styles, Images, Colors } from '@theme/';
import styles from './styles';
import { firebaseApp } from '@src/firebase';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }
  popRoute(route) {
    this.props.popRoute();
  }

  doLogin() {
    // TODO: Now it signups to firebase instead of signin
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        Alert.alert('Firebase_Signup_Succeed!', 'RefreshToken : ' + user.refreshToken);
        this.replaceRoute('home');
      })
      .catch((error) => {
        Alert.alert('signup_error', error.message);
        // this.replaceRoute('home');
      });
  }
  render() {
    const spacer = (<View style={{ height: Metrics.screenHeight / 40 }} />);
    return (
      <KeyboardAwareScrollView
        style={{ flex: 1, backgroundColor: Colors.brandPrimary }}
        automaticallyAdjustContentInsets={false}
      >
        <View style={Styles.fullScreen}>
          <View style={[Styles.center, { flex: 6 }]}>
            <View style={styles.logoContainer}>
              <Image
                resizeMode={'stretch'}
                style={styles.imgLogo}
                source={Images.imgLogo}
              />
              <Text style={styles.appNameText}>
                {I18n.t('APP_NAME')}
              </Text>
            </View>
            <Icon
              name="md-close"
              size={35}
              color={Colors.textSecondary}
              style={styles.closeButton}
              onPress={() => this.popRoute()}
            />
          </View>
          <View style={{ flex: 5, alignItems: 'center' }}>
            <TextInput
              style={[styles.textInputStyle]}
              underlineColorAndroid={'transparent'}
              placeholder={I18n.t('EMAIL')}
              placeholderTextColor={Colors.textSecondary}
              multiline={false}
              onChangeText={text => this.setState({ email: text })}
              returnKeyType={'next'}
              onSubmitEditing={() => this.refs.loginpwd.focus()}
            />
            {spacer}
            <TextInput
              ref={'loginpwd'}
              style={[styles.textInputStyle]}
              underlineColorAndroid={'transparent'}
              placeholder={I18n.t('PASSWORD')}
              placeholderTextColor={Colors.textSecondary}
              multiline={false}
              secureTextEntry
              onChangeText={text => this.setState({ password: text })}
              returnKeyType={'go'}
              onSubmitEditing={() => this.refs.username.focus()}
            />
            {spacer}
            <TextInput
              ref={'username'}
              style={[styles.textInputStyle]}
              underlineColorAndroid={'transparent'}
              placeholder={I18n.t('USER_NAME')}
              placeholderTextColor={Colors.textSecondary}
              multiline={false}
              secureTextEntry
              onChangeText={text => this.setState({ password: text })}
              returnKeyType={'go'}
              onSubmitEditing={() => alert('go')}
            />
            {spacer}
            <TouchableOpacity
              style={[Styles.center, Styles.buttonStyle]}
              onPress={() => this.doLogin()}
            >
              <Text style={Styles.buttonTextStyle}>
                {I18n.t('CREATE_ACCOUNT')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

Register.propTypes = {
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
    popRoute: () => dispatch(popRoute()),
  };
}
function mapStateToProps(state) {
  return { };
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
