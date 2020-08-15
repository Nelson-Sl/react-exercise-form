import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: '',
    gender: 'Male',
    Description: '',
    agreeConducts: 'off',
  }

  handleNameChange = () => {
    this.setState({
      name: event.target.value,
      gender: this.state.gender,
      Description: this.state.Description,
      agreeConducts: this.state.agreeConducts,
    })
  }

  handleGenderChange = () => {
    this.setState({
      name: this.state.name,
      gender: event.target.value,
      Description: this.state.Description,
      agreeConducts: this.state.agreeConducts,
    })
  }

  handleGenderChange = () => {
    this.setState({
      name: this.state.name,
      gender: event.target.value,
      Description: this.state.Description,
      agreeConducts: this.state.agreeConducts,
    })
  }

  handleDescriptionChange = () => {
    this.setState({
      name: this.state.name,
      gender: this.state.gender,
      Description: event.target.value,
      agreeConducts: this.state.agreeConducts,
    })
  }

  handleAgreementChange = () => {
      if(this.state.agreeConducts === 'off') {
        this.setState({
          name: this.state.name,
          gender: this.state.gender,
          Description: this.state.Description,
          agreeConducts: 'on',
      })}else{
        this.setState({
          name: this.state.name,
          gender: this.state.gender,
          Description: this.state.Description,
          agreeConducts: 'off',
      })
    }
  }

  onSubmit = () => {
    console.log('name: ' + this.state.name, ' gender: ' + this.state.gender + 'Description: ' 
      + this.state.Description + ' agreeConducts: ' + this.state.agreeConducts);
    event.preventDefault();
  }

  render() {
    return (
      <div className='formArea'>
        <form className='profileForm'>
          <h1>My Profile</h1>
          <div className='name'>
            <label className='label' htmlFor='name'>Name</label><br/>
            <input id='name' type='text' value={this.state.name} onChange={this.handleNameChange} placeholder='Your Name'/><br/>
          </div>
          <div className='gender'>
          <label  className='label' htmlFor='gender'>Gender</label><br/>
            <select id='gender' onChange={this.handleGenderChange} defaultValue={this.state.gender}>
              <option>Male</option>
              <option>Female</option>
            </select><br/>
          </div>
          <div className='description'>
            <label className='label' htmlFor='description'>Description</label><br/>
            <textarea id='description' value={this.state.description} onChange={this.handleDescriptionChange} placeholder='Descripton about yourself'></textarea><br/>
          </div>
          <div className='checkBox'>
            <input type='checkbox' value={this.state.agreeConducts} onChange={this.handleAgreementChange} />
            <span>I have read the terms of conduct</span><br/>
          </div>
          <div className='submit'>
            <input type='submit' value='Submit' onClick={this.onSubmit} 
                disabled={!this.state.name.length || !this.state.Description.length || this.state.agreeConducts==='off'} />
          </div>  
        </form>
      </div>
    );
  }
}

export default MyProfile;


