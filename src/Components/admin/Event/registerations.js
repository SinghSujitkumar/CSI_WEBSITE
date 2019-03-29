import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { firebaseMembers ,firebaseDB} from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';
import CircularProgress from '@material-ui/core/CircularProgress';
class EventMembers extends Component {
  state = {
    isloading: true,
    members: []
  };
  componentDidMount() {
    const eventId = this.props.match.params.id;
    firebaseDB
      .ref(`events/${eventId}/registrations`)
      .once('value').then(snapshot => {
      const members = firebaseLooper(snapshot);
      this.setState({
        isloading: false,
        members: reverseArray(members)
      });
    });
  }
  render() {
    return (
      <AdminLayout>
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Division</TableCell>
                  <TableCell>Member</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.members
                  ? this.state.members.map((member, i) => (
                      <TableRow key={i}>
                        <TableCell>{member.name}</TableCell>
                        <TableCell>{member.email}</TableCell>
                        <TableCell>{member.phone}</TableCell>
                        <TableCell>{member.division}</TableCell>
                        <TableCell>{member.ismember?"Member":"Not member"}</TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </Paper>
          <div className="admin_progress">
            {this.state.isloading ? (
              <CircularProgress thickness={5} style={{ color: '#98c5e9' }} />
            ) : (
              ''
            )}
          </div>
        </div>
      </AdminLayout>
    );
  }
}
export default EventMembers;
