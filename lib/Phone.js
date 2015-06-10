function Phone(phoneNumber) {

  this.phoneNumber = phoneNumber;
  this.callPhone = function(phoneNumber){
    return this.phoneNumber + ' calls ' + phoneNumber;
  };
}

module.exports = Phone;