// Your code here
let nameArr = ["ayse","basar","ms", 5];

function createEmployeeRecord(name){
  console.log(name)
  let newObj = {
    firstName : name[0],
    familyName : name[1],
    title : name[2],
    payPerHour : name[3],
    timeInEvents : [],
    timeOutEvents : []
  }
  return newObj
}

// console.log(createEmployeeRecord(nameArr))

const createEmployeeRecords = (arr) => {
    let employeeRecordArray = [];
    for(let i = 0; i < arr.length; i++){
      employeeRecordArray.push(createEmployeeRecord(arr[i]));
    }
    return employeeRecordArray;
};

const createTimeInEvent = (employee, dateStamp) => {
    employee.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(dateStamp.split(' ')[1]),
      date: dateStamp.split(' ')[0],
});  
    return employee;
};

const createTimeOutEvent = (employee, dateStamp) => {
    employee.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(dateStamp.split(' ')[1]),
      date: dateStamp.split(' ')[0],
});  
    return employee;
};


const hoursWorkedOnDate = (employee, dateGiven) => {
    let timeIn = employee.timeInEvents.find(time => time.date === dateGiven);              
    let timeOut = employee.timeOutEvents.find(time => time.date === dateGiven);             
      return (timeOut.hour - timeIn.hour) / 100;                                              
};


const wagesEarnedOnDate = (employee, date) => {
    return parseInt(hoursWorkedOnDate(employee, date)) * parseInt(employee.payPerHour);
};

const allWagesFor = (employee) => {
    let date = employee.timeInEvents.map(arr => arr.date);
    let sum = date.reduce((acc, curr) => (acc + wagesEarnedOnDate(employee, curr)), 0);
    return sum;
};

const findEmployeeByFirstName = (employeeArr, name) => {
    return employeeArr.find(employee => employee.firstName === name);
};

const calculatePayroll = (employeeArr) => {
    let sum = employeeArr.reduce((acc, curr) => (acc + allWagesFor(curr)), 0);
    learnreturn sum;
};
