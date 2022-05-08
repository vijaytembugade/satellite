export const getOtherEmail = (users, currentUser) => {
    return users?.filter(user => user !== currentUser.email)[0];
  }