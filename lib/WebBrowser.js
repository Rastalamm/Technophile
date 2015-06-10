function WebBrowser(){
  this.open = function(url){
    return 'Browsing to ' + url;
  }
};

module.exports = WebBrowser;