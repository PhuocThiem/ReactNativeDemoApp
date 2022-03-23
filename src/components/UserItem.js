import React, {Component} from 'react';

import {View, Text, Pressable} from 'react-native';
import {get} from 'lodash';

import {Icon} from '.';
import {styles} from '../screens/Home/style';

class UserItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userItem, onEditUser, onDeleteUser} = this.props;
    const item = get(userItem, 'item', []);
    return (
      <View style={styles.item}>
        <View style={styles.itemInfo}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.titleLiner} />
          <View>
            <Text style={styles.text}>ID: {item.id}</Text>
            <Text style={styles.text}>Username: {item.username}</Text>
          </View>
        </View>
        <View style={styles.itemAction}>
          <Pressable
            style={styles.createModalButton}
            onPress={() => onEditUser()}
            data={{id: item.id, name: item.name}}>
            <Icon name="edit" size={25} color="orange" type="AntDesign" />
          </Pressable>
          <Pressable
            style={styles.createModalButton}
            onPress={() => onDeleteUser()}>
            <Icon name="delete" size={25} color="red" type="AntDesign" />
          </Pressable>
        </View>
      </View>
    );
  }
}

export default UserItem;
