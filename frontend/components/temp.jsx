// // src/components/ConversationsList.js

// import React from 'react';

// import { API_ROOT } from '../constants';
// import NewConversationForm from './NewConversationForm';
// import MessagesArea from './MessagesArea';


// class ConversationsList extends React.Component {
//   state = {
//     conversations: [],
//     activeConversation: null
//   };


//   handleClick = id => {
//     this.setState({ activeConversation: id });
//   };





//   render = () => {
//     const { conversations, activeConversation } = this.state;
//     return (
//       <div className="conversationsList">
        



//         <h2>Conversations</h2>
//         <ul>{mapConversations(conversations, this.handleClick)}</ul>
//         <NewConversationForm />
//         {activeConversation ? (
//           <MessagesArea
//             conversation={findActiveConversation(
//               conversations,
//               activeConversation
//             )}
//           />
//         ) : null}
//       </div>
//     );
//   };
// }

// export default ConversationsList;

// // helpers

// const findActiveConversation = (conversations, activeConversation) => {
//   return conversations.find(
//     conversation => conversation.id === activeConversation
//   );
// };

// const mapConversations = (conversations, handleClick) => {
//   return conversations.map(conversation => {
//     return (
//       <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
//         {conversation.title}
//       </li>
//     );
//   });
// };