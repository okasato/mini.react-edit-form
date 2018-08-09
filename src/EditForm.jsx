import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from "@material-ui/core/Icon";

export default class EditForm extends Component {

  getSelectedText = () => {
    const selectText = window.getSelection();
    if(!selectText.rangeCount) {
      return;
    }
  
    const range = selectText.getRangeAt(0);
    console.log('hi selectText', selectText);
    return { selectText, range };
  }

  changeTextFormat = (format, style = '') => {
    const selectedText = this.getSelectedText();
    const newNode = document.createElement(format);
    newNode.setAttribute('style', style);
    newNode.innerHTML = selectedText.selectText.toString();
    
    selectedText.range.deleteContents();
    selectedText.range.insertNode(newNode);
  }

  makeTextBold = () => {
    this.changeTextFormat('strong');
  }

  makeTextItalic = () => {
    this.changeTextFormat('em');
  }

  makeTextUnderlined = () => {
    this.changeTextFormat('span', 'text-decoration: underline;');
  }

  makeTextStrikethrough = () => {
    this.changeTextFormat('del');
  }

  makeTextColored = () => {
    this.changeTextFormat('span', 'color: rgb(214, 60, 24);');
  }

  makeTextClear = () => {
    const selectedText = this.getSelectedText();
    const newNode = document.createElement('span');
    // newNode.setAttribute('style', style);
    newNode.innerHTML = selectedText.selectText.toString();

    selectedText.range.deleteContents();
    // selectedText.range.insertNode(newNode);
  }

  render() {
    if (this.props.editform === false) {
      return (
        <div className='edit-form'></div>
      ) 
    } else {
      console.log('@@@@', this.props.text);
      return (
        <div className='edit-form'>
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
        </div>
      )
    }
  }
}
