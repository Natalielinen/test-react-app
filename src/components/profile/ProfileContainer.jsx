import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile, getStatus, updateStatus} from "../redux/profileReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {

            userId = this.props.authorizedUserId;
        }

        this.props.getUserProfile(userId);

        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.authPage.userId,
    isAuth: state.authPage.isAuth

});


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);