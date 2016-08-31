This is an app that takes in a string and checks whether it is a unix timestamp or a natural language date. If so, 
it returns that timestamp/date in both unix timestamp and natural language date form; if not, it just returns "null"
for those two forms. 

e.g.: https://terrys-timestamp-ms.herokuapp.com/September%2023rd,%201994 
    => returns {"unix":"780278400","natural":"September 23rd, 1994"}
      https://terrys-timestamp-ms.herokuapp.com/123456
    => returns {"unix":"123456","natural":"January 2nd, 1970"}