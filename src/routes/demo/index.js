import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

class Demo extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            text: '1'
        }
    }
    onClick(){
        const { dispatch, name } = this.props;
        if (name === '我是张颜') {
            dispatch({
                type: 'userName/name',
                payload: {
                    name: '我是刘汉川'
                }
            });
        } else {
            dispatch({
                type: 'userName/name',
                payload: {
                    name: '我是张颜'
                }
            });
        }
        
    }
    render() {
        const { name } = this.props;
        console.log(this.props);
        return (
            <div onClick={this.onClick.bind(this)}>{name}</div>
        );
    }
}
const mapStateToProps = ({ userName }) => ({
    userName
  });
export default connect(({ userName }) => ({ name: userName.name }))(Demo);
