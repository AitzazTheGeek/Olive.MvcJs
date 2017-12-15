(function () {
    var a = Array;
    a.groupBy = function (array, groupFunction) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(groupFunction(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (g) { return groups[g]; });
    };
})();
//# sourceMappingURL=Array.js.map