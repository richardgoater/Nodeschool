var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    var args = slice.call(arguments);
    args.unshift(namespace);
    console.log.apply(null, args);
  };
}

module.exports = logger;
