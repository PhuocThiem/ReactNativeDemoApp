import React, {Component} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {LinearProgress} from 'react-native-elements';

import Modal from 'react-native-modal';
import {styles} from '../screens/Home/style';

class CreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      creatingUserInfo: {
        username: '',
        name: '',
        password: '',
      },
    };
  }

  openCreateModal = () => {
    this.setState({isModalVisible: true});
  };

  closeCreateModal = () => {
    this.setState({isModalVisible: false});
  };

  handleChangeName = name => {
    this.setState({
      creatingUserInfo: {
        ...this.state.creatingUserInfo,
        name: name,
      },
    });
  };

  handleChangeUsename = username => {
    this.setState({
      creatingUserInfo: {
        ...this.state.creatingUserInfo,
        username: username,
      },
    });
  };

  handleChangePassword = password => {
    this.setState({
      creatingUserInfo: {
        ...this.state.creatingUserInfo,
        password: password,
      },
    });
  };

  render() {
    const {isModalVisible} = this.state;
    const {handleCreateUser, cUserResult} = this.props;
    return (
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {cUserResult.requesting ? (
              <LinearProgress color="primary" style={styles.linearProgress} />
            ) : (
              <>
                <Text style={styles.modalText}>Create a new user</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter name"
                  onChangeText={this.handleChangeName}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter username"
                  onChangeText={this.handleChangeUsename}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  onChangeText={this.handleChangePassword}
                />
                <View style={styles.createModalAction}>
                  <View>
                    <Pressable
                      style={[styles.createModalButton, styles.buttonSubmit]}
                      onPress={handleCreateUser}>
                      <Text style={styles.textStyle}>Submit</Text>
                    </Pressable>
                  </View>
                  <View>
                    <Pressable
                      style={[styles.createModalButton, styles.buttonClose]}
                      onPress={this.closeCreateModal}>
                      <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    );
  }
}

export default CreateModal;
