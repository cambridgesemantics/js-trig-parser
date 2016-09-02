var sUtils = require('./str-utils');
var isPrefixedIRI = new RegExp('[A-Za-z1-9]*:[A-Za-z1-9]*');
var selectPrefixName = new RegExp('^(.*?:)');
var uriTest = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
module.exports = {
  isExpandedIRI: function(str){
    if(typeof str !== 'string') return false;
    return sUtils.wrappedBy(str, '<', '>') && this.isURI(str.substring(1, str.length - 1));
  },
  isURI: function(str){
      if(typeof str !== 'string') return false;
      return uriTest.test(str);
  },
  isPrefixedIRI: function(iri){
    if(typeof str !== 'string') return false;
    return iri.test(isPrefixedIRI);
  },
  toURI: function(iri){
    if(typeof iri !== 'string') return false;
    if(!this.isIRI(iri)) return iri;
    return iri.substring(iri.indexOf('<') + 1, iri.indexOf('>'));
  },
  tryConvertToURI: function(iri){
    if(this.isIRI(iri)) return this.toURI(iri);
    return iri;
  },
  getPrefix: function(prefixedName){
    if(this.isIRI(prefixedName))
      prefixedName = this.toURI(prefixedName);
    return prefixedName.match(selectPrefixName);
  },
  isIRI: function(str){
    return str[0] === '<' && str[str.length - 1] === '>';
  },
  ensureSlashEnd: function(uriStr){
    return uriStr[uriStr.length - 1] === '/'? uriStr : uriStr + '/';
  }
};
