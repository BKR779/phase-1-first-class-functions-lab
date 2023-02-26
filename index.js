// Code your solution in this file!

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function returnFirstTwoDrivers(drivers) {
  drivers = drivers.slice(0, 2);
  return drivers;
}

function returnLastTwoDrivers(drivers) {
  drivers = drivers.slice(-2);
  return drivers;
}

function createFareMultiplier(num) {
  return function () {
    return num ** 2;
  }
}

function fareDoubler(num) {
  return num * 2;

}

function fareTripler(num) {
  return num * 3;
}

function selectDifferentDrivers(drivers, callBack) {
  return callBack(drivers)
}