import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class ElHeader extends React.Component {
    render() {
      
        return  (
            <div class="header">
            <a href="#default" class="logo">React Application</a>
            <div class="header-right">
               <a class="active" href="#home">Home</a>
               <a href="#contact">Contact</a>
               <a href="#about">About</a>
            </div>
            </div>
        );
        
    }
}

class ElFooter extends React.Component {
    render() {
      
        return  (
            <footer>
                <p style={{textAlign: "center"}}>All rights reserved &copy;2020</p>
            </footer>
        );
        
    }
}



class UserData extends React.Component {
    constructor(props) {
       super(props) 
       this.state = {
          users: [
             { id: 1, name: 'Maya Hasan', age: 21, phone: '01889778667', email: 'wasif@email.com', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
             { id: 2, name: 'Ali Ahasan', age: 19, phone: '01889778667', email: 'ali@email.com', photo: 'https://images.unsplash.com/photo-1500649297466-74794c70acfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
             { id: 3, name: 'Saad Mahmud', age: 16, phone: '01889722667', email: 'saad@email.com', photo: 'https://images.unsplash.com/photo-1444069069008-83a57aac43ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
             { id: 4, name: 'Shimar Jahan', age: 25, phone: '01889778667', email: 'asad@email.com', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
             { id: 5, name: 'Keya Hasan', age: 21, phone: '01889778667', email: 'wasif@email.com', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
             { id: 6, name: 'Alim Ahasan', age: 19, phone: '01889778667', email: 'ali@email.com', photo: 'https://images.unsplash.com/photo-1500649297466-74794c70acfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
             { id: 7, name: 'Saadi Mahim', age: 16, phone: '01899778667', email: 'saad@email.com', photo: 'https://images.unsplash.com/photo-1444069069008-83a57aac43ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
             { id: 8, name: 'Shmmi Jahan', age: 25, phone: '01889778667', email: 'asad@email.com', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
             { id: 9, name: 'Nazia Hasan', age: 21, phone: '01889778667', email: 'wasif@email.com', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
             { id: 10, name: 'Al alim Ahasan', age: 19, phone: '01889778667', email: 'ali@email.com', photo: 'https://images.unsplash.com/photo-1500649297466-74794c70acfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
             { id: 11, name: 'Shajahan Mahmud', age: 16, phone: '01889770067', email: 'saad@email.com', photo: 'https://images.unsplash.com/photo-1444069069008-83a57aac43ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
             { id: 12, name: 'kobir Jahan', age: 25, phone: '01889778667', email: 'asad@email.com', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' }
          ]
       }
    }
 
    renderTableData() {
        return this.state.users.map((user, index) => {
           const { id, name, age, phone, email, photo } = user //destructuring
           return (
              <tr key={id}>
                 <td>
                    <img src={photo} width='60px'/>
                  </td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{phone}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }
  
     render() {
        return (
           <div>
              <div class="alert info">
                  <strong>User List</strong>
               </div>
              <table id='users'>
                 <tbody>
                    <tr>
                     <td>Image</td>
                     <td>Name</td>
                     <td>Age</td>
                     <td>Phone</td>
                     <td>Email</td>
                    </tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
 }
 
 export default UserData //exporting a component make it reusable and this is the beauty of react


ReactDOM.render(<ElHeader />, document.getElementById('el-header'));

ReactDOM.render(<UserData />, document.getElementById('datatable'));

ReactDOM.render(<ElFooter />, document.getElementById('el-footer'));


serviceWorker.unregister();
