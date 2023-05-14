import { PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={"a07a3f13-4bd8-4a4f-832c-c4c1aef77061"}
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  )
}

export default ChatsPage
