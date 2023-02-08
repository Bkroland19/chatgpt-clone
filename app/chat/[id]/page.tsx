import Chat from "../../../components/Chat"
import ChatInput from "../../../components/ChatInput"

function ChatPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* chat */}
      <Chat/>
      {/* chatInput */}
      <ChatInput />
    </div>
  )
}

export default ChatPage