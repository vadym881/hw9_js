const notifications = [
  {
    source: "Facebook",
    text: "You have a new friend request",
    date: "2024-03-11",
  },
  {
    source: "Email",
    text: "Your order has been shipped",
    date: "2024-02-11",
  },
  {
    source: "Twitter",
    text: "New follower: @user123",
    date: "2024-03-11",
  },
];

console.log(notificationHandler(notifications));

function notificationHandler(notifArray) {
  const notifObject = {};
  for (const notification of notifArray) {
    const { source, text, date } = notification;

    if (!notifObject[source]) {
      notifObject[source] = [];
    }
    notifObject[source].push({ text, date });
  }

  return notifObject;
}
