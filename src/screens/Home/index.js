import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {get} from 'lodash';
import DropdownAlert from 'react-native-dropdownalert';

import {
  getListOfUser,
  createUser,
  updateUser,
  deleteUser,
} from '../../store/actions/user';

import {styles} from './style';
import {
  CreateModal,
  UserItem,
  UpdateModal,
  DeleteModal,
} from '../../components/index';
import {ERR_MSG} from '../../constants/constant';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateUserItem: {},
      deleteUserItem: {},
    };
  }

  componentDidMount() {
    const {getUsersAction} = this.props;
    getUsersAction();
  }

  hanldeCreateNewUser = async () => {
    const {createUserAction, cUserResult} = this.props;
    const {creatingUserInfo} = this.createModalRef.state;
    await createUserAction(creatingUserInfo);
    this.handleActionInfo(cUserResult);
  };

  handleOpenUpdateModal = ({item}) => {
    this.setState({updateUserItem: item});
    this.updateModalRef.openUpdateModal();
  };

  handleUpdateUser = async () => {
    const {updateUserAction, uUserResult} = this.props;
    const {UpdatingName} = this.updateModalRef.state;
    const {updateUserItem} = this.state;
    const data = {id: updateUserItem.id, name: UpdatingName};
    await updateUserAction(data);
    this.handleActionInfo(uUserResult);
  };

  handleOpenDeleteModal = ({item}) => {
    this.setState({deleteUserItem: item});
    this.deleteModalRef.openDeleteModal();
  };

  handleDeleteUser = async () => {
    const {deleteUserAction, dUserResult} = this.props;
    const {deleteUserItem} = this.state;
    await deleteUserAction(deleteUserItem.id);
    this.handleActionInfo(dUserResult);
  };

  handleActionInfo = result => {
    const {getUsersAction} = this.props;
    const msg = get(result, 'result.data.data.message', '');
    this.dropdownAlerRef.alertWithType(result.status, msg, result.status);
    result.status === 'success' && getUsersAction();
  };

  render() {
    const {cUserResult, rUsersResult, uUserResult, dUserResult} = this.props;
    const users = get(rUsersResult, 'result.data.data', []);
    const {updateUserItem, deleteUserItem} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        {rUsersResult.requesting ? (
          <View style={styles.progressContainer}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <>
            {rUsersResult.status === 'success' ? (
              <>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.createModalRef.openCreateModal()}>
                  <Text style={styles.buttonLabel}>ADD USER</Text>
                </TouchableOpacity>
                <View style={styles.mainContent}>
                  <FlatList
                    data={users}
                    renderItem={item => (
                      <UserItem
                        userItem={item}
                        onEditUser={() => this.handleOpenUpdateModal(item)}
                        onDeleteUser={() => this.handleOpenDeleteModal(item)}
                      />
                    )}
                    keyExtractor={item => item.id}
                    numColumns={1}
                  />
                </View>
                <CreateModal
                  ref={ref => {
                    this.createModalRef = ref;
                  }}
                  handleCreateUser={this.hanldeCreateNewUser}
                  cUserResult={cUserResult}
                />
                <UpdateModal
                  ref={ref => {
                    this.updateModalRef = ref;
                  }}
                  updatingUser={updateUserItem}
                  handleUpdateUser={this.handleUpdateUser}
                  uUserResult={uUserResult}
                />
                <DeleteModal
                  ref={ref => {
                    this.deleteModalRef = ref;
                  }}
                  deletingUser={deleteUserItem}
                  handleDeleteUser={this.handleDeleteUser}
                  dUserResult={dUserResult}
                />
              </>
            ) : (
              <Text>{ERR_MSG.COMMON_ERROR}</Text>
            )}
          </>
        )}
        <DropdownAlert
          ref={ref => {
            if (ref) {
              this.dropdownAlerRef = ref;
            }
          }}
        />
      </SafeAreaView>
    );
  }
}

export default connect(
  state => ({
    cUserResult: state.user.createdUser,
    rUsersResult: state.user.users,
    uUserResult: state.user.updatedUser,
    dUserResult: state.user.deletedUser,
  }),
  dispatch =>
    bindActionCreators(
      {
        createUserAction: createUser,
        getUsersAction: getListOfUser,
        updateUserAction: updateUser,
        deleteUserAction: deleteUser,
      },
      dispatch,
    ),
)(Home);
