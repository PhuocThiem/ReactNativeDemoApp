import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native';
import {LinearProgress} from 'react-native-elements';

import Modal from 'react-native-modal';
import {styles} from '../screens/Home/style';

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  openDeleteModal = () => {
    this.setState({isModalVisible: true});
  };

  closeDeleteModal = () => {
    this.setState({isModalVisible: false});
  };

  render() {
    const {isModalVisible} = this.state;
    const {deletingUser, handleDeleteUser, dUserResult} = this.props;

    return (
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {dUserResult.requesting ? (
              <LinearProgress color="primary" style={styles.linearProgress} />
            ) : (
              <>
                <Text style={styles.modalText}>
                  Do you want to remove user: {deletingUser.id}
                </Text>
                <View style={styles.createModalAction}>
                  <View>
                    <Pressable
                      style={[styles.createModalButton, styles.buttonSubmit]}
                      onPress={handleDeleteUser}>
                      <Text style={styles.textStyle}>Yes</Text>
                    </Pressable>
                  </View>
                  <View>
                    <Pressable
                      style={[styles.createModalButton, styles.buttonClose]}
                      onPress={this.closeDeleteModal}>
                      <Text style={styles.textStyle}>No</Text>
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

export default DeleteModal;
