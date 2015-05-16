var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

function makeSortFunction(extractor, extractor2){
  return function(a, b) {
        var aName = extractor(a);
        var bName = extractor(b);
        var comparator = ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
        if(extractor2 && comparator == 0) {
            var aName = extractor2(a);
            var bName = extractor2(b);
            var comparator2 = ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
            comparator = comparator2;
        }
        return comparator;
    }
}

var sortParameters = function(parameters) {
    var rowValues = [];
    for(var k in parameters) {
        var parameter = parameters[k];
        rowValues.push(parameter);
    }
    rowValues.sort(makeSortFunction(
        function(d) { return d.category; },
        function(d) { return d.friendlyname;}
    ));
    return rowValues;
}

module.exports = {
    query: qs,
    sortParameters: sortParameters
}


