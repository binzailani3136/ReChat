import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tabs, Tab } from 'react-native-elements';

import { setHomeTab } from '@actions/globals';
import { Metrics, Styles, Colors, Fonts } from '@theme/';
import styles from './styles';

class Home extends Component {
  setHomeTab(homeTab) {
    this.props.setHomeTab(homeTab);
  }
  renderTabButtonIcon(iconName, selected) {
    const iconColor = selected === true ? Colors.brandPrimary : Colors.textPrimary;
    return (
      <View style={styles.tabIconsContainer}>
        <Icon
          style={{ marginTop: 15 }}
          containerStyle={Styles.center}
          color={iconColor}
          name={iconName}
          size={Metrics.screenHeight / 25}
        />
      </View>
    );
  }
  renderBadge(badgeText) {
    return (
      <View style={styles.tabIconsContainer}>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeTextStyle}>
            {badgeText}
          </Text>
        </View>
      </View>
    );
  }
  render() {
    const selectedTab = this.props.globals.homeTab;
    const selectedTabButtonStyle = { backgroundColor: Colors.backgroundPrimary };
    const unselectedTabButtonStyle = { backgroundColor: Colors.brandSecondary };
    return (
      <View style={[Styles.fullScreen, { backgroundColor: Colors.backgroundPrimary }]}>
        <Tabs tabBarStyle={styles.tabBarStyle}>
          <Tab
            selected={selectedTab === 'chats'}
            tabStyle={selectedTab === 'chats' ? selectedTabButtonStyle : unselectedTabButtonStyle}
            title={I18n.t('CHATS')}
            titleStyle={[Fonts.style.regular, { color: Colors.textPrimary }]}
            selectedTitleStyle={[Fonts.style.regular, { color: Colors.textPrimary }]}
            renderIcon={() => this.renderTabButtonIcon('ios-chatbubbles-outline', false)}
            renderSelectedIcon={() => this.renderTabButtonIcon('ios-chatbubbles', true)}
            renderBadge={() => this.renderBadge('33')}
            onPress={() => this.setHomeTab('chats')}
          >
            <View style={{ flex: 1, backgroundColor: 'grey' }} />
          </Tab>
          <Tab
            selected={selectedTab === 'contacts'}
            tabStyle={selectedTab === 'contacts' ? selectedTabButtonStyle : unselectedTabButtonStyle}
            title={I18n.t('CONTACTS')}
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.titleStyle}
            renderIcon={() => this.renderTabButtonIcon('ios-contacts-outline', false)}
            renderSelectedIcon={() => this.renderTabButtonIcon('ios-contacts', true)}
            onPress={() => this.setHomeTab('contacts')}
          >
            <View style={{ flex: 1, backgroundColor: 'green' }} />
          </Tab>
          <Tab
            selected={selectedTab === 'discover'}
            tabStyle={selectedTab === 'discover' ? selectedTabButtonStyle : unselectedTabButtonStyle}
            title={I18n.t('DISCOVER')}
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.titleStyle}
            renderIcon={() => this.renderTabButtonIcon('ios-ionic-outline', false)}
            renderSelectedIcon={() => this.renderTabButtonIcon('ios-ionic', true)}
            onPress={() => this.setHomeTab('discover')}
          >
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
          </Tab>
          <Tab
            selected={selectedTab === 'profile'}
            tabStyle={selectedTab === 'profile' ? selectedTabButtonStyle : unselectedTabButtonStyle}
            title={I18n.t('PROFILE')}
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.titleStyle}
            renderIcon={() => this.renderTabButtonIcon('ios-person-outline', false)}
            renderSelectedIcon={() => this.renderTabButtonIcon('ios-person', true)}
            onPress={() => this.setHomeTab('profile')}
          >
            <View style={{ flex: 1, backgroundColor: 'navy' }} />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

Home.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  setHomeTab: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setHomeTab: homeTab => dispatch(setHomeTab(homeTab)),
  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
