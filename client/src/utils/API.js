import axios from "axios";

export default {
  /** Get saved users */
  getSavedUsers: function() {
    return axios.get("/api/users");
  },
  getSavedUsersById: function(userid) {
    return axios.get(`/api/users/${userid}`);
  },
  /** Get saved musicians */
  getUsersByProfession: function(profession) {
    return axios.get(`/api/users/profession/${profession}`)
  },
  AddSongs: function(userid,data) {
    return axios.post(`/api/songs/${userid}`,data)
  },
//  Add tutorials for user to sell
  AddTutorials: function(userid,data){
    return axios.post(`/api/tutorials/${userid}`,data)
  },
  // Get tutorials of out user 
  getTutorialsByQuery: function(query) {
    console.log(query)
    return axios.get(`/api/tutorials/${query}`)
  },

  //get purchased songs for user 
  GetPurchasedSongs: function(songid, userid) {
    return axios.get(`api/users/purchasedsong/${songid}/${userid}`)
  },

//get purchased tutorials for user

  GetPurchasedTutorials: function(tutorialid, userid) {
  return axios.get(`api/users/purchasedtutorial/${tutorialid}/${userid}`)
  },

  // axios call for genre, price, title, and author
  getSongsByQuery: function(query) {
    console.log(query)
    return axios.get(`/api/songs/${query}`)
  },

  /** ===== User's Profile ===== */

  // Get user by username
  getUserByUsername: function(username) {
    return axios.get(`/api/users/username/${username}`);
  },

  // Get User Profile
  getProfile: function(userid, field) {
    return axios.get(`/api/users/profile/${userid}/${field}`)
  },

  // Update User Profile
  updateProfile: function(userid, field, data) {
    console.log(data);
    return axios.put(`/api/users/profile/${userid}/${field}`, {field: data});
  },
  signIn(data){
    return axios.post("/api/users/signin", data)
  },
  register(data){
    return axios.post("/api/users/register", data)
  },

  // Update user instrument list
  updateInstruments: function(userid, field, data) {
    return axios.put(`/api/users/profile/instruments/${userid}/${field}`, {value: data});
  },

  // Update user instrument list
  updateLinks: function(userid, field, data) {
    return axios.put(`/api/users/profile/links/${userid}/${field}`, {link: data});
  }



  
}