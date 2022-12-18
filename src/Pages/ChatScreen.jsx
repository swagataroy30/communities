// import { async } from '@firebase/util';
// import React, {useState, useEffect} from 'react'
// import { StreamChat } from 'stream-chat'

// import {
//     Chat,
//     Channel,
//     Window,
//     ChannelHeader,
//     MessageList,
//     MessageInput,
//     Thread,
//     LoadingIndicator
// } from 'stream-chat-react'

// import styles from './ChatScreen.module.css';

// const apiKey = process.env.REACT_APP_STREAM_API_KEY

// const user = {
//     id: 'john',
//     name: 'John',
//     image: 'https://www.pngwing.com/en/free-png-xsukd',
// }

// export default function App(){
//     const [client, setClient] = useState(null)
//     const [Channel, setChannel] = useState(null)

//     useEffect(() => {
//         async function init(){
//             const chatClient = StreamChat.getInstance(apiKey)
//             await chatClient.connectUser(user, chatClient.devToken(user.id))

//             const channel = chatClient.channel('messaging', 'GSOC', {
//                 image: 'https://www.pngwing.com/en/free-png-hvhqk',
//                 name: 'Talk about Google summer of Code',
//                 members: [user.id]
//             })

//             await channel.watch()

//             setChannel(channel)
//             setClient(chatClient)
//         }

//         init()

//         if(client) return () => client.disconnectUser()
//     }, [])

//     if(!channel || !client) return <LoadingIndicator />

//     return(
//         <Chat client={client} theme="messaging light">
//             <Channel channel={channel}>
//                 <Window>
//                     <ChannelHeader/>
//                     <MessageList/>
//                     <MessageInput/>
//                 </Window>
//                 <Thread/>
//             </Channel>
//         </Chat>
//     )
// }

import { StreamChat } from 'stream-chat'

const client = StreamChat.getInstance("9a6xhxk7w5z3");
// you can still use new StreamChat("api_key");
await client.connectUser(
    {
        id: 'jlahey',
        name: 'Jim Lahey',
        image: 'https://i.imgur.com/fR9Jz14.png',
    },
   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibHVja3ktc2VhLTcifQ.gGtdLMR6f3qhVVOXkJn5eNY5jkmjT1F0sEjU7_7hK0c",
)

// Create a channel using your own id for that channel.
const channel = client.channel('messaging', 'travel', {
    name: 'Awesome channel about traveling',
});

// OR create a channel by providing list of members for that channel.
// In this case, id will be auto-generated on backend side
channel = client.channel('messaging', {
     members: ['vishal', 'neil'],
    name: 'Awesome channel about traveling'
});


// fetch the channel state, subscribe to future updates
await channel.watch();

const text = 'I’m mowing the air Randy, I’m mowing the air.';

const response = await channel.sendMessage({
    text,
    customField: '123',
});


// Listener for specific event on client
chatClient.on('user.presence.changed', event => {
    console.log('online presence changed for user - ', event.user);
})

// Listener for all events on client
chatClient.on(event => {
    console.log('Received an event on client - ', event)
})

// Channel specific events
channel.on('message.new', event => {
    console.log('received a new message', event.message.text);
    console.log(`Now have ${channel.state.messages.length} stored in local state`);
});

channel.on(event => {
    console.log('received a new event', event);
})





