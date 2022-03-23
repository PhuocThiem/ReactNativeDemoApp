import React, {Component} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {LinearProgress} from 'react-native-elements';

import Modal from 'react-native-modal';
import {styles} from '../screens/Home/style';

class UpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      UpdatingName: '',
    };
  }

  openUpdateModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  closeUpdateModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    const {isModalVisible} = this.state;
    const {updatingUser, onCloseUpdateModal, handleUpdateUser, uUserResult} =
      this.props;
    return (
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {uUserResult.requesting ? (
              <LinearProgress color="primary" style={{width: 200}} />
            ) : (
              <>
                <Text style={styles.modalText}>
                  Update name of user: {updatingUser.id}
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={newName =>
                    this.setState({UpdatingName: newName})
                  }
                  defaultValue={updatingUser.name}
                />
                <View style={styles.createModalAction}>
                  <View>
                    <Pressable
                      style={[styles.createModalButton, styles.buttonSubmit]}
                      onPress={() => handleUpdateUser()}>
                      <Text style={styles.textStyle}>Update</Text>
                    </Pressable>
                  </View>
                  <View>
                    <Pressable
                      style={[styles.createModalButton, styles.buttonClose]}
                      onPress={() => onCloseUpdateModal()}>
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

export default UpdateModal;
