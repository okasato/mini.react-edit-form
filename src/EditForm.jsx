import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from "@material-ui/core/Icon";
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import ContentEditable from "react-contenteditable";

export default class EditForm extends Component {
  state = {
    html: 'Edit here.'
  };

  makeTextBold = () => {
    document.execCommand('bold');
  }

  makeTextItalic = () => {
    document.execCommand('italic');
  }

  makeTextUnderlined = () => {
    document.execCommand('underline', false, null);        
  }

  makeTextStrikethrough = () => {
    document.execCommand('strikeThrough', false, null);    
  }

  makeTextColored = () => {
    document.execCommand('foreColor', false, '#e51c23');
  }

  makeTextClear = () => {
    document.execCommand('removeFormat', false, null);
  }

  undo = () => {
    document.execCommand('undo', false, null);
  }

  redo = () => {
    document.execCommand('redo', false, null);
  }

  handleChange = event => {
    this.setState({ html: event.target.value });
  }

  componentDidUpdate = prevProps => {
    if (this.props.text !== prevProps.text) {
      this.setState({ html: this.props.text });
    }
  }

  render() {
    if (this.props.editform === false) {
      return (
        <div className='edit-form'></div>
      ) 
    } else {
      return (
        <div className='edit-form'>
          {/* <div className='edit-area'> */}
          <Paper>
            <ContentEditable
              html={this.state.html}
              disabled={false}
              onChange={this.handleChange}
            />
          </Paper>
          {/* </div> */}
          <IconButton onClick={this.makeTextBold}>
            <i class="material-icons">format_bold</i>
          </IconButton>
          <IconButton onClick={this.makeTextItalic}>
            <i class="material-icons">format_italic</i>
          </IconButton>
          <IconButton onClick={this.makeTextUnderlined}>
            <i class="material-icons">format_underlined</i>
          </IconButton>
          <IconButton onClick={this.makeTextStrikethrough}>
            <i class="material-icons">format_strikethrough</i>
          </IconButton>
          <IconButton onClick={this.makeTextColored}>
            <i class="material-icons">format_color_text</i>
          </IconButton>
          <IconButton onClick={this.makeTextClear}>
            <Icon>clear</Icon>
          </IconButton>
          <IconButton onClick={this.undo}>
            <i class="material-icons">undo</i>
          </IconButton>
          <IconButton onClick={this.redo}>
            <i class="material-icons">redo</i>
          </IconButton>
        </div>
      )
    }
  }
}
