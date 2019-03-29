import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fileuploader from '../../ui/fileuploader';
import {firebaseEvents} from '../../../firebase'
import { firebaseLooper, reverseArray } from '../../ui/misc';
import CircularProgress from '@material-ui/core/CircularProgress';
class AdminEvents extends Component {

    state={
        isloading :true,
        events:[]
    }
    componentDidMount(){
        firebaseEvents.once('value').then(snapshot=>{
            const events=firebaseLooper(snapshot);
            this.setState({
                isloading: false,
                events:reverseArray(events)
            })
        })
    }
    render() {
        return(
        <AdminLayout>
        <div>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Titile</TableCell>
                            <TableCell>Poster</TableCell>
                            <TableCell>Registrations</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.events ?
                                this.state.events.map((event,i)=>(
                                    <TableRow key={i}>
                                        <TableCell>
                                            {event.date}
                                        </TableCell>
                                        <TableCell>
                                        <Link to={`/admin_events/add_events/${event.id}`}> {event.name}</Link> 
                                        </TableCell>   
                                        <TableCell>
                                            {event.detail}
                                        </TableCell>
                                        <TableCell>
                                        <Link to={`/event_members/${event.id}`}>CHECK</Link> 
                                        </TableCell>
                                    </TableRow>
                                ))
                            :null
                        }
                    </TableBody>
                </Table>   
            </Paper>
            <div className="admin_progress">
            {
                this.state.isloading ?
                    <CircularProgress  thickness ={5} style={{color:'#98c5e9'}}/>
                :''
            }
            </div>
        </div>
      </AdminLayout>
    )
  }
}
export default  AdminEvents