import * as React from 'react';
import { connect } from 'react-redux';
import { fetchUserInformation } from 'src/store/user/user.actions';

export class User extends React.Component<any, any> {
  public render() {
    return (
      <button
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => this.props.fetchUserInfo('pat', 'pod')}
      >
        Get user
      </button>
    )
  }
}

const mapActionsToProps = {
  fetchUserInfo: (userName: string, password: string) => fetchUserInformation({ userName, password })
}

export default connect(null, mapActionsToProps)(User);