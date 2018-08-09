import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Edit from '@material-ui/icons/Edit';
import Send from '@material-ui/icons/Send';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import EditForm from './EditForm';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chat from '@material-ui/icons/Chat'

export default class App extends Component {
  state = {
    message: 'Cat in the Hat',
    editform: false
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
    });
  }

  handleClickSendMsg = event => {
    event.preventDefault();
    const sentMsg = this.state.message;
    this.setState({ sentMsg });
  }

  handleEditMsg = event => {
    event.preventDefault();
    this.setState({
      editform: true
    })
  }

  render() {
    console.log('ref', this.refs.text);
    return (
      <div className='app'>
        <Typography variant='display4' color='inherit'>Hello!</Typography>
        <form>
          <Paper className='textfield'>
            <Grid container wrap="nowrap" spacing={10}>
              <Grid item>
                <IconButton>
                  <Chat />
                </IconButton>
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  multiline
                  rowsMax='100'
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item>
                <IconButton onClick={this.handleClickSendMsg}>
                  <Send />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </form>
        <div>
          <div className="mycomment">
            <p ref='text'>{this.state.sentMsg}</p>
            <IconButton onClick={this.handleEditMsg}>
              <Edit />
            </IconButton>
          </div>
        </div>
        <EditForm
          text={this.state.sentMsg} 
          editform={this.state.editform}
        />
      </div>
    )
  }
}