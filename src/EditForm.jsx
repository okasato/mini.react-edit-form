import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from "@material-ui/core/Icon";
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import ContentEditable from "react-contenteditable";

export default class EditForm extends Component {
  state = {
    html: String(this.props.text)
  };

  getSelectedText = () => {
    const selectText = window.getSelection();
    if(!selectText.rangeCount) {
      return;
    }
  
    const range = selectText.getRangeAt(0);
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
    // this.changeTextFormat('strong');
    document.execCommand('bold');
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

  addText = () => {

  }

  makeTextClear = () => {
    const selectedText = this.getSelectedText();
    const newNode = document.createElement('span');
    newNode.innerHTML = selectedText.selectText.toString();

    const selectedNode = selectedText.selectText.anchorNode.parentNode;
    selectedNode.parentNode.removeChild(selectedNode);
    selectedText.range.insertNode(newNode);
  }

  handleChange = event => {
    this.setState({ html: event.target.value });
  }

  render() {
    if (this.props.editform === false) {
      return (
        <div className='edit-form'></div>
      ) 
    } else {
      console.log('@@@@', this.props.text, this.state.html);
      return (
        <div className='edit-form'>
          <ContentEditable
            html={this.state.html}
            disabled={false}
            onChange={this.handleChange}
          />
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
          <IconButton onClick={this.addText}>
            <AddIcon />
          </IconButton>
          <IconButton onClick={this.makeTextClear}>
            <Icon>clear</Icon>
          </IconButton>
        </div>
      )
    }
  }
}
