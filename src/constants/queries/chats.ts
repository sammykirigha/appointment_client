import { gql } from "@apollo/client"

export const FETCH_CHATS = gql`
query FetchChats {
  fetchChats {
    id
    members
    last_message_id
    last {
      id
      message
      sender_ {
        id
        username
      }
      receiver_ {
        username
        id
      }
	  createdAt
    }
  }
}
`

export const FETCH_MESSAGES = gql`
query FetchMessages($chat_id: String!) {
  fetchMessages(chatId: $chat_id) {
    id
    sender
    receiver
    chatId
    message
    sender_ {
      username
      id
    }
  }
}
`

export const CREATE_MESSAGES = gql`
mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    id
    sender
    receiver
    message
    chatId
    createdAt
    updatedAt
  }
}
`