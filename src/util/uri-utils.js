var sUtils = require('./str-utils');
var isPrefixedIRI = new RegExp('[A-Za-z1-9]*:[A-Za-z1-9]*');
var selectPrefixName = new RegExp('^(.*?:)');

module.exports = {
  isExpandedIRI: function(str){
    if(typeof str !== 'string') return false;
    return sUtils.wrappedBy(str, '<', '>') && this.isURI(str.substring(1, str.length - 1));
  },
  isURI: function(str){
      if(typeof str !== 'string') return false;
      return str.indexOf(" ") === -1 && str.indexOf(":") !== -1;
  },
  isPrefixedIRI: function(iri){
    if(typeof str !== 'string') return false;
    return iri.test(isPrefixedIRI);
  },
  toURI: function(iri){
    if(typeof iri !== 'string') return false;
    if(!this.hasBrackets(iri)) return iri;
    return iri.substring(iri.indexOf('<') + 1, iri.indexOf('>'));
  },
  tryConvertToURI: function(iri){
    if(this.hasBrackets(iri)) return this.toURI(iri);
    return iri;
  },
  hasPrefix: function(prefixedName){
    
    var matches = prefixedName.match(selectPrefixName);
    return matches !== null && matches.length !== 0;
  },
  getPrefix: function(prefixedName){
    if(this.isIRI(prefixedName)){
      return prefixedName.match(selectPrefixName);
    }
    var error = new Error("Invalid iri: " + prefixedName);
    error.type = 'invalidIri';
    error.len = prefixedName.length;
    throw error;

  },
  hasBrackets: function(str){
    return str[0] === '<' && str[str.length - 1] === '>';
  },
  isIRI: function(str){
    if(this.hasPrefix(str)) return true;

    if(this.hasBrackets(str)){
      return this.isURI(this.toURI(str));
    }
    return false;
  },
  ensureSlashEnd: function(uriStr){
    return uriStr[uriStr.length - 1] === '/'? uriStr : uriStr + '/';
  }
};
