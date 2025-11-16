"use strict";

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every(function (value, index) {
    return value === arr2[index];
  });
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) {
    return 0;
  }

  let filteredUsers = users.filter(function (user) {
    return user.gender === gender;
  });

  if (filteredUsers.length === 0) {
    return 0;
  }

  let ages = filteredUsers.map(function (user) {
    return user.age;
  });

  let averageAge = ages.reduce(function (sum, current, index, array) {
    return sum + current / array.length;
  }, 0);

  return averageAge;
}