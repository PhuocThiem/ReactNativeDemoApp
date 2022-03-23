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
    this.setState({
      isModalVisible: true,
    });
  };

  closeCreateModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    const {isModalVisible} = this.state;
    const {onCloseCreateModal, handleCreateUser, cUserResult} = this.props;
    return (
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {cUserResult.requesting ? (
              <LinearProgress color="primary" style={{width: 200}} />
            ) : (
              <>
                <Text style={styles.modalText}>Create a new user</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter name"
                  onChangeText={newName =>
                    this.setState({
                      creatingUserInfo: {
                        ...this.state.creatingUserInfo,
                        name: newName,
                      },
                    })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter username"
                  onChangeText={newUsername =>
                    this.setState({
                      creatingUserInfo: {
                        ...this.state.creatingUserInfo,
                        username: newUsername,
                      },
                    })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  onChangeText={newPass =>
                    this.setState({
                      creatingUserInfo: {
                        ...this.state.creatingUserInfo,
                        password: newPass,
                      },
                    })
                  }
                />
                <View style={styles.createModalAction}>
                  <View>
                    <Pressable
                      style={[styles.createModalButton, styles.buttonSubmit]}
                      onPress={() => handleCreateUser()}>
                      <Text style={styles.textStyle}>Submit</Text>
                    </Pressable>
                  </View>
                  <View>
                    <Pressable
                      style={[styles.createModalButton, styles.buttonClose]}
                      onPress={() => onCloseCreateModal()}>
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
