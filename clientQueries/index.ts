import { gql } from "@apollo/client"


export const GET_LINK = gql`
  query Query($id: ID!) {
    link(id: $id) {
      data {
        id
        sender
        message
        receiver
        color {
          upper
          middle
          bottom
        }
      }
    }
  }  
  `


export const POST_lolly = gql`
mutation Mutation($inplink: InpLink) {
  getLink(inplink: $inplink) {
    data {
      id
      sender
      message
      receiver
      color {
        upper
        middle
        bottom
      }
    }
  }
}
`