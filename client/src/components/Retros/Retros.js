import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import SetupEdit from './SetupForm/SetupEdit';
import CRTInviteDatePicker from './SetupForm/CRTInviteDatePicker';
import CRTInviteNameAdded from './SetupForm/CRTInviteNameAdded';
import CRTSetupName from './SetupForm/CRTSetupName';
import CRTSetupEdit from './SetupForm/CRTSetupEdit';
import CRTInviteSetTime from './SetupForm/CRTInviteSetTime';
import CRTInviteRepeat from './SetupForm/CRTInviteRepeat';
import CRTInviteNameFilled from './SetupForm/CRTInviteNameFilled';
import CRTInviteNameEntered from './SetupForm/CRTInviteNameEntered';
import CRTInviteMeAddAdmin from './SetupForm/CRTInviteMeAddAdmin';


export default class Retros extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        setUpEditData: {}
    }

    setUpEditDataHandler = (data) => {
        console.log(data);
    }

    render() {
        return (
            <div style={{ padding: '0px 0px 0px' }}>
                <SetupEdit setUpEditData={this.setUpEditDataHandler} />
                {/* <Switch>
                    <Redirect exact from={this.props.match.url} to={this.props.match.url + "/setupedit"} />
                    <Route path={this.props.match.url + "/setupedit"} render={(props) => <SetupEdit {...props} setUpEditData={this.setUpEditDataHandler} />} />
                    <Route path={this.props.match.url + "/crtsetupedit"} component={CRTSetupEdit} />
                </Switch>*/}
            </div>
        )
    }
}
