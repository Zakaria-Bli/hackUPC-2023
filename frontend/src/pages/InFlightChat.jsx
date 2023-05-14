import { useState } from "react"

import AuthPage from "./authPage"
import ChatsPage from "./chatsPage"

function InFlightChat() {
  const [user, setUser] = useState()

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />
  } else {
    return <ChatsPage user={user} />
  }
}

export default InFlightChat
