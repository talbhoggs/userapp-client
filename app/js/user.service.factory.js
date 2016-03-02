angular.module('main')
  .factory('UserServiceFactory', UserServiceFactory);

UserServiceFactory.$inject = ['$http'];

function UserServiceFactory($http){

  var service = {
    getUsers: getUsers,
    getUser: getUser,
    deleteUser : deleteUser,
    createUser : createUser,
    updateUser : updateUser,
    selectedUser : null
  };

  return service;

  /* Local rest interface

  function updateUser(user){
    return $http.put('http://localhost:9080/user-api/rest/service/'+user.id, user);
  }

  function getUsers(params){
    return $http.get('http://localhost:9080/user-api/rest/service/'+params);
  }

  function getUser(id){
    return $http.get('http://localhost:9080/user-api/rest/service/'+ id);
  }

  function deleteUser(id) {
    return $http.delete('http://localhost:9080/user-api/rest/service/'+ id);
  }

  function createUser(data) {
    return $http.post('http://localhost:9080/user-api/rest/service/', data);
  }
  
  */

  // 
  
  function updateUser(user){
    return $http.put('http://amperca.mybluemix.net/user-api/rest/service/'+user.id, user);
  }

  function getUsers(params){
    return $http.get('http://amperca.mybluemix.net/user-api/rest/service/'+params);
  }

  function getUser(id){
    return $http.get('http://amperca.mybluemix.net/user-api/rest/service/'+ id);
  }

  function deleteUser(id) {
    return $http.delete('http://amperca.mybluemix.net/user-api/rest/service/'+ id);
  }

  function createUser(data) {
    return $http.post('http://amperca.mybluemix.net/user-api/rest/service/', data);
  }
  
  
}
