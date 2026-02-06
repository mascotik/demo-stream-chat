// @ts-nocheck
/**
 * Minimal Stream Chat test component with DEFAULT components only.
 * Purpose: Test if scroll jump issue exists in vanilla Stream Chat setup.
 *
 * Based on official GetStream documentation:
 * https://getstream.io/chat/docs/sdk/react/basics/getting_started/
 */
import { useEffect } from 'react';
import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  useCreateChatClient,
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = import.meta.env.VITE_API_KEY;
const userId = import.meta.env.VITE_USER_ID;
const userName = import.meta.env.VITE_USER_NAME;
const token = import.meta.env.VITE_USER_TOKEN;

const filters = { members: { $in: [userId] }, type: 'public' };
const options = { presence: true, state: true };
const sort = { created_at: -1 };

export const App = () => {
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: token,
    userData: { id: userId, name: userName },
  });

  // Log all WebSocket events
  useEffect(() => {
    if (!client) return;

    const handleEvent = (event) => {
      console.log('[WS Event]', event.type, event);
    };

    client.on(handleEvent);

    return () => {
      client.off(handleEvent);
    };
  }, [client]);

  if (!client) return <div>Loading...</div>;

  return (
    <Chat client={client} suppressAutoscroll={true}>
      <ChannelList
        sort={sort}
        filters={filters}
        options={options}
        lockChannelOrder={true} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList suppressAutoscroll={true} />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;
