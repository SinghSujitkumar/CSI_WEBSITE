import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

import Fileuploader from '../../ui/fileuploader';
import { firebaseEvents, firebaseDB, firebase } from '../../../firebase';
class AddEditEvent extends Component {
  state = {
    eventId: '',
    formType: '',
    formError: false,
    eventName:'eve',
    formSuccess: '',
    defaultImg: '',
    formdata: {
      date: {
        element: 'input',
        value: '',
        config: {
          label: 'Event date',
          name: 'date_input',
          type: 'date'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      },
      name: {
        element: 'input',
        value: '',
        config: {
          label: 'Event Name',
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
      image: {
        element: 'image',
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      detail: {
        element: 'input',
        value: '',
        config: {
          label: 'Discription',
          name: 'detail_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      }
    }
  };

  updateFields = (event, eventId, formType, defaultImg) => {
    const newFormdata = { ...this.state.formdata };

    for (let key in newFormdata) {
      newFormdata[key].value = event[key];
      newFormdata[key].valid = true;
    }

    this.setState({
      eventId,
      defaultImg,
      formType,
      formdata: newFormdata
    });
  };
  componentDidMount() {
    const eventId = this.props.match.params.id;
    if (!eventId) {
      this.setState({
        formType: 'Add Event'
      });
    } else {
      firebaseDB
        .ref(`events/${eventId}`)
        .once('value')
        .then(snapshot => {
          const eventData = snapshot.val();
        console.log(this.state.formType);
          
        
          firebase
            .storage()
            .ref('events')
            .child(eventData.image)
            .getDownloadURL()
            .then(url => {
              this.updateFields(eventData, eventId, 'Edit event', url);
            })
            .catch(e => {
              this.updateFields(
                {
                  ...eventData,
                  image: ''
                },
                eventId,
                'Edit event',
                ''
              );
            });
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
      if (this.state.formType === 'Edit event') {
        firebaseDB
          .ref(`events/${this.props.match.params.id}`)
          .update(dataToSubmit)
          .then(() => {
            this.successForm('Updated correctly');
            this.props.history.push('/admin_events');
          })
          .catch(e => {
            this.setState({ formError: true });
          });
      } else {
        firebaseEvents
          .push(dataToSubmit)
          .then(() => {
            this.props.history.push('/admin_events');
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
                id={'date'}
                formdata={this.state.formdata.date}
                change={element => this.updateForm(element)}
              />
            
              <Fileuploader
                dir="events"
                tag={'Event image'}
                defaultImg={this.state.defaultImg}
                defaultImgName={this.state.formdata.image.value}
                resetImage={() => this.resetImage()}
                filename={filename => this.storeFilename(filename)}
              />

              <FormField
                id={'name'}
                formdata={this.state.formdata.name}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={'detail'}
                formdata={this.state.formdata.detail}
                change={element => this.updateForm(element)}
              />
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
export default AddEditEvent;
