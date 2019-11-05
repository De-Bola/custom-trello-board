import React from 'react';
import Icon from '@material-ui/core/Icon';
import color from '@material-ui/core/colors/orange';
import TextArea from 'react-textarea-autosize';
import { Card, Button } from '@material-ui/core';
 
class ActionButton extends React.Component{

    state = {
        isFormOpen: false,
        text: ''
    };

    openForm = () => {
        this.setState({isFormOpen: true});
    };

    closeForm = e => {
        this.setState({isFormOpen:false});
    }

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    renderAddButton = () =>{
        const {list} = this.props;
        const buttonText = list ? 'Add another list' : 
        'Add another card';

        const buttonTextOpacity = list ? 1 : 0.5;

        const buttonTextColor = list ? 'white' : 'inherit';

        const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';
        return(
            <div onClick={this.openForm}
            style= {{
                ...styles.buttonGroup,
                opacity: buttonTextOpacity,
                color: buttonTextColor,
                backgroundColor: buttonTextBackground
            }}>
                <Icon>
                    add
                </Icon><p>
                    {buttonText}
                </p>
            </div>
        );
    };


    renderForm = () => {
        const {list} = this.props;
        const placeHolder = list ? 'Put list title' : 
        'Put card title';
        const buttonTitle = list ? 'Add List' : 'Add Card';

        return <div>
            <Card style = {{
                    minHeight : '80',
                    minWidth : '272',
                    padding : '6px 8px 2px'
                }}>
                <TextArea 
                onBlur={this.closeForm}
                value={this.state.text}
                onChange={this.handleInputChange}
                placeholder={placeHolder} 
                autoFocus
                style = {{
                    overflow : 'hidden',
                    resize : 'none',
                    width : '100%',
                    outline : 'none',
                    border : 'none'
                }}
                /></Card>
                <div style={
                    styles.formButtonGroup
                }>
                    <Button 
                        variant = 'contained'
                        style={{
                            color: 'white',
                            backgroundColor: '#5aac44'
                        }}
                    >{buttonTitle}{' '}</Button>
                    <Icon style={{
                        marginLeft: 8,
                        cursor: 'pointer'
                    }}>close</Icon>
                </div>
        </div>};

    render(){
        return this.state.isFormOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles={
    buttonGroup:{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 2,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup:{
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
}

export default ActionButton;