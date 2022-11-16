# ciro

Did not get to tests, but would try to test some of the hide/show logic as that is the most "business" logic used here.

I was a little confused with the response of the endpoint. When it returned a list of notifications, I was assuming that I was supposed to show the notification when the timestamp get to our current time. However, all of the time stamps were in the past, meaning the notifications were not new. I still wrote the code expecting the notifications to be in the past, and noted that in production code this contrived code wouldn't be needed as we would most likely be listening to an endpoint for notifications.

Things I would like to immediately change with more time:
- Use an actual design framework, such as css modules or tailwind
- Implement real TS (e.g. types and interfaces)

