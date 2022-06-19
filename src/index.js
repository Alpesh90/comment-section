import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

 const App =()=> {
return (
    <div className="ui container comments">
        <ApprovalCard>
       <CommentDetail 
       author="Shubham" 
       TimeAgo="Today at 02:21PM" 
       comment="Nice pic!"
       avatar={faker.image.avatar()}
       />
        </ApprovalCard>
        <ApprovalCard>
       <CommentDetail 
       author="Aman" 
       TimeAgo="Today at 04:30AM" 
       comment="Kya bat he.."
       avatar={faker.image.avatar()}
       />
        </ApprovalCard>

        <ApprovalCard>
       <CommentDetail 
       author="Abhay" 
       TimeAgo="Yesterday at 01:45AM" 
       comment="im a big fan of kalu"
       avatar={faker.image.avatar()}
       />
        </ApprovalCard>
        <ApprovalCard>
       <CommentDetail 
       author="Abhishek" 
       TimeAgo="Today at 12:00PM" 
       comment="Offcourse yrr abdul"
       avatar={faker.image.avatar()}
       />
     </ApprovalCard>

    </div>
)


 };
 ReactDOM.render(<App/>,document.querySelector('#root'))
