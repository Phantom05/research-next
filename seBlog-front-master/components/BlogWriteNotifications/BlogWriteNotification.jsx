import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class BlogWriteNotification extends Component {

    renderErrorNotification = () => {
        toast.error("💩채워지지 않은 항목이 있습니다", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    render() {
        const { blogNotifyError } = this.props.event
        return (
           <>
            {
                blogNotifyError && this.renderErrorNotification()
            }
            <ToastContainer autoClose={3000} />
           </>
        );
    }
}

const mapStateToProps = state => ({
    event: state.event,
});
  
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps,mapDispatchToProps)(BlogWriteNotification);