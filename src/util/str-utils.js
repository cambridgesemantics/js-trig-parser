var tripleDoubleQtStart = new RegExp('^"""', '');
var tripleDoubleQtEnd = new RegExp('"""$', '');

var tripleSingleQtStart = new RegExp("^'''", '');
var tripleSingleQtEnd = new RegExp("'''$", '');


var singleQtStart = new RegExp("^'");
var singleQtEnd = new RegExp("'$");

var doubleQtStart = new RegExp('^"');
var doubleQtEnd = new RegExp('"$');

module.exports =  {
  wrappedBySimple: function (str, seq){
    return str.indexOf(seq) === 0 && str.indexOf(seq) === str.length - 1;
  },
  wrappedBy: function(str, first, second){
    if(typeof first === 'string' && typeof second === 'string'){
      return str.indexOf(first) === 0 && str.indexOf(second) === str.length - 1;
    }
    else if(first === 'string' && second === undefined){
      return this.wrappedBySimple(str, first);
    }
    else if(Array.isArray(first)){
      var test = false;
      first.forEach(function(seq){
        test = test || this.wrappedBySimple(str, seq);
      }.bind(this));
      return test;
    }
    return false;
  },

  removeLiteralQuotes: function(str){
    if(typeof str !== 'string') throw new Error('not a str');
    var temp;
    if(tripleDoubleQtStart.test(str) && tripleDoubleQtEnd.test(str)){
      temp = str.replace(tripleDoubleQtStart, '');
      return temp.replace(tripleDoubleQtEnd, '');
    }
    else if(tripleSingleQtStart.test(str) && tripleSingleQtEnd.test(str)){
      temp = str.replace(tripleSingleQtStart, '');
      return temp.replace(tripleSingleQtEnd, '');
    }
    else if(singleQtStart.test(str) && singleQtEnd.test(str)){
      temp = str.replace(singleQtStart, '');
      return temp.replace(singleQtEnd, '');
    }
    else if(doubleQtStart.test(str) && doubleQtEnd.test(str)){
      temp = str.replace(doubleQtStart, '');
      return temp.replace(doubleQtEnd, '');
    }
    throw new Error("Str not quoted literal: " + str);
  }
};
