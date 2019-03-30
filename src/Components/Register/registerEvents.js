import React, { Component } from 'react';
import PlayerCard from '../ui/playerCard';
import Layout from '../../Hoc/Layout';
import FormField from '../../Components/ui/formFields';
import { validate } from '../ui/misc';
import Zoom from 'react-reveal/Zoom';
import {
    firebase,
    firebaseDB,
    firebaseMember,
    firebaseEvents
} from '../../firebase';
import { Promise } from 'core-js';
import Image from 'react-bootstrap/Image';
import { firebaseLooper, reverseArray } from '../ui/misc';
class registerEvents extends Component {
    state = {
        loading: 'true',
        events: [],
        memberId: '',
        eventId: '',
        eventdetail:'',
        filename: '',
        eventname: '',
        formType: '',
        ischeckbox:false,
        ischeckboxshow:false,
        formError: false,
        formSuccess: '',
        formdata: {
            name: {
                element: 'input',
                value: '',
                config: {
                    label: 'Name',
                    name: 'name_input',
                    type: 'name',
                    placeholder: 'Enter your Name'
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
                    label: 'Email',
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
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
                    label: 'Phone',
                    name: 'phone_input',
                    type: 'text',
                    placeholder: 'Phone'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            division: {
                element: 'input',
                value: '',
                config: {
                    label: 'Division',
                    name: 'division_input',
                    type: 'text',
                    placeholder: 'Division'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            ismember: {
                element: 'input',
                value: false,
                config: {
                    label: 'Division',
                    name: 'division_input',
                    type: 'text',
                    placeholder: 'Division'
                },
                validation: {
                    required: true
                },
                valid: true,
                validationMessage: '',
                showlabel: true
            }
        }
    };
    componentDidMount() {
        const memberId = this.props.match.params.id;
        if (!memberId) {
            this.setState({
                formType: 'Add Member'
            });
        } else {
            firebaseDB
                .ref(`${memberId}`)
                .once('value')
                .then(snapshot => {
                    const memberData = snapshot.val();
                });
        }
        firebaseEvents
            .orderByChild('date')
            .limitToLast(1)
            .once('value')
            .then(snapshot => {
                if (snapshot.val() != null) {
                    const events = firebaseLooper(snapshot);
                    const eventArr = reverseArray(events);
                    const name = eventArr[0].name;
                    const fname = eventArr[0].image;
                    const evnid = Object.keys(snapshot.val())[0];
                    const detail = eventArr[0].detail

                    firebase
                        .storage()
                        .ref('events')
                        .child(fname)
                        .getDownloadURL()
                        .then(url => {
                            this.setState({
                                loading: false,
                                eventname: name,
                                filename: url,
                                eventId: evnid,
                                eventdetail:detail
                            });
                        });
                }
            });
    }
    updateForm(element) {
        const newFormdata = { ...this.state.formdata };
        const newElement = { ...newFormdata[element.id] };

        newElement.value = element.event.target.value;

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
    };

    toggleChange = () => {
        this.setState({
          ischeckbox: !this.state.ischeckbox,
        });
      }

    submitForm(event) {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        console.log('member sadsfkjdsk ');

        for (let key in this.state.formdata) {
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        if (formIsValid) {
            if (this.state.eventId != '') {
                firebaseDB
                    .ref(`events/${this.state.eventId}/registrations`)
                    .orderByChild('email')
                    .equalTo(dataToSubmit.email)
                    .once('value')
                    .then(snapshot => {
                        if (snapshot.val() === null) {
                            firebaseDB
                                .ref(`members`)
                                .orderByChild('email')
                                .equalTo(dataToSubmit.email)
                                .once('value')
                                .then(snapshot => {
                                    if ( snapshot.val() !== null || dataToSubmit.ismember) {
                                        dataToSubmit.ismember = true;
                                        this.setState({
                                            dataToSubmit: dataToSubmit,
                                        });
                                        console.log("member ");
                                    }
                                    console.log('member '+dataToSubmit.ismember,'check '+this.state.ischeckbox,'show '+this.state.ischeckboxshow);
                                    if (dataToSubmit.ismember || (this.state.ischeckbox && this.state.ischeckboxshow)) {
                                        firebaseDB
                                            .ref(
                                                `events/${
                                                    this.state.eventId
                                                }/registrations`
                                            )
                                            .push(dataToSubmit)
                                            .then(() => {
                                                this.register = false;
                                                dataToSubmit.ismember = false;
                                                dataToSubmit.name='';
                                                dataToSubmit.email='';
                                                dataToSubmit.division='';
                                                dataToSubmit.phone='';
                                                this.setState({
                                                    dataToSubmit: dataToSubmit,
                                                    ischeckboxshow:false,
                                                    ischeckbox:false
                                                });
                                                console.log('success');
                                                console.log('member '+dataToSubmit.ismember,'check '+this.state.ischeckbox,'show '+this.state.ischeckboxshow);

                                                this.successForm('Success');
                                            })
                                            .catch(e => {
                                                this.setState({
                                                    formError: true
                                                });
                                            });
                                    }else{
                                        dataToSubmit.ismember = false;
                                        this.setState({
                                            dataToSubmit: dataToSubmit,
                                            ischeckboxshow:true
                                        });
                                        console.log('not member');
                                        console.log('member '+dataToSubmit.ismember,'check '+this.state.ischeckbox,'show '+this.state.ischeckboxshow);
                                        this.successForm(
                                            'You are not member'
                                        );
                                    }
                                });
                        } else {
                            this.successForm('Allready Register');
                        }
                    });
            }
        } else {
            this.setState({
                formError: true
            });
        }
    }
    render() {
        return (
            <div className="container" style={{paddingTop:'100px'}}>
                <div className="row">
                    <div className="col-md-7">
                        <div style={{ marginTop: '10px' }}>
                        <Zoom duration={1500}>
                            <div className="event_text">
                                <h2>Event:{this.state.eventname}</h2>
                            </div>
                            </Zoom>
                            <Zoom duration={3500}>
                            <center>
                                <Image
                                    src={this.state.filename}
                                    alt="Avatar"
                                    className="image_event"
                                />
                            </center>
                            </Zoom>
                            <Zoom duration={1500}>
                            <div align="justify" style={{background:'#ffffff',padding:'10px'}}>
                                <div className="event_text"> <h2>Description : </h2> </div>
                                <div style={{fontFamily: "'Righteous', cursive"}}>
                                <p>{this.state.eventdetail}</p>
                                </div>
                            </div>
                            </Zoom>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <Zoom duration={3000}>
                        <div style={{border: '3px solid #f1f1f1', margin:'10px', padding:'50px',paddingTop:'0px'}}>
                            <form onSubmit={event => this.submitForm(event)}>
                            <div className="event_text"><h2>Register </h2></div>
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
                                    id={'division'}
                                    formdata={this.state.formdata.division}
                                    change={element => this.updateForm(element)}
                                />
                                <FormField
                                    id={'phone'}
                                    formdata={this.state.formdata.phone}
                                    change={element => this.updateForm(element)}
                                />
                                <div style={this.state.ischeckboxshow ? {} : { display: 'none' }}>
                                    <input style={{width:'0px'}} checked={this.state.ischeckbox} onChange={this.toggleChange} id={this.state.eventId} type="checkbox"/>
                                    <label htmlFor={this.state.eventId}>You are not member still you want to register.</label>
                                </div>
                                {/* checked={this.state.isChecked} onChange={this.toggleChange} */}
                                {/* style={this.state.ischeckboxshow ? {} : { display: 'none' }} */}
                                <br />
                                {this.state.formError ? (
                                    <div className="error_label">
                                        Something is wrong, try again.
                                    </div>
                                ) : null}
                                <br />
                                <button style={{width:'100%'}}
                                    onClick={event => this.submitForm(event)}
                                >
                                    Register
                                </button>
                                <br />
                                <div className="success_label">
                                    {this.state.formSuccess}
                                </div>
                            </form>
                            </div>
                            </Zoom>

                    </div>
                </div>

            </div>
        );
    }
}
export default registerEvents;
