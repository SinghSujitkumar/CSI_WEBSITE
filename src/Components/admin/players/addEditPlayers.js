import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

import Fileuploader from '../../ui/fileuploader';
import { firebasePlayers, firebaseDB, firebase } from '../../../firebase';

class AddEditPlayers extends Component {
  state = {
    playerId: '',
    formType: '',
    formError: false,
    formSuccess: '',
    defaultImg: '',
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          label: 'Name',
          name: 'name_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      },
      email: {
        element: 'input',
        value: '',
        config: {
          label: 'Email ID',
          name: 'lastname_input',
          type: 'email'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      },
      phone: {
        element: 'input',
        value: '',
        config: {
          label: 'number',
          name: 'number_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      },
      class: {
        element: 'input',
        value: '',
        config: {
          label: 'Class',
          name: 'select_class',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      },
     
    }
  };

  updateFields = (player, playerId, formType, defaultImg) => {
    const newFormdata = { ...this.state.formdata };

    for (let key in newFormdata) {
      newFormdata[key].value = player[key];
      newFormdata[key].valid = true;
    }

    this.setState({
      playerId,
      defaultImg,
      formType,
      formdata: newFormdata
    });
  };

  componentDidMount() {
    const playerId = this.props.match.params.id;

    if (!playerId) {
      this.setState({
        formType: 'Add Member'
      });
    } else {
      firebaseDB
        .ref(`members/${playerId}`)
        .once('value')
        .then(snapshot => {
          const playerData = snapshot.val();
          this.updateFields(
            {
              ...playerData,
              image: ''
            },
            playerId,
            'Edit member',
            ''
          );
        });
    }
  }

  updateForm(element, content = '') {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    if (content === '') {
      newElement.value = element.event.target.value;
    } else {
      newElement.value = content;
    }

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormdata[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormdata
    });
  }

  successForm = message => {
    this.setState({
      formSuccess: message
    });
    setTimeout(() => {
      this.setState({
        formSuccess: ''
      });
    }, 2000);
  };

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      if (this.state.formType === 'Edit member') {
        firebaseDB
          .ref(`members/${this.state.playerId}`)
          .update(dataToSubmit)
          .then(() => {
            this.successForm('Update correctly');
            this.props.history.push('/admin_players');
          })
          .catch(e => {
            this.setState({ formError: true });
          });
      } else {
        firebasePlayers
          .push(dataToSubmit)
          .then(() => {
            this.props.history.push('/admin_players');
          })
          .catch(e => {
            this.setState({
              formError: true
            });
          });
      }
    } else {
      this.setState({
        formError: true
      });
    }
  }

  resetImage = () => {
    const newFormdata = { ...this.state.formdata };
    newFormdata['image'].value = '';
    newFormdata['image'].valid = false;

    this.setState({
      defaultImg: '',
      formdata: newFormdata
    });
  };

  storeFilename = filename => {
    this.updateForm({ id: 'image' }, filename);
  };

  render() {
    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={event => this.submitForm(event)}>
              <FormField
                id={'name'}
                formdata={this.state.formdata.name}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={'email'}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={'phone'}
                formdata={this.state.formdata.phone}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={'class'}
                formdata={this.state.formdata.class}
                change={element => this.updateForm(element)}
              />

              <div className="success_label">{this.state.formSuccess}</div>
              {this.state.formError ? (
                <div className="error_label">Something is wrong</div>
              ) : (
                ''
              )}
              <div className="admin_submit">
                <button onClick={event => this.submitForm(event)}>
                  {this.state.formType}
                </button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditPlayers;
