/**
 * constructor
 */
function StringPlus (val) {
  this.val = val
}

/**
 * .chain
 */
StringPlus.prototype.chain = function (f) {
  return f(this.val)
}

/**
 * .of
 */
StringPlus.prototype.of = function (a) {
  return new StringPlus(a) 
}

/**
 * .map
 */
StringPlus.prototype.map = function (f) {
  return new StringPlus(f(this.val)) 
}

/**
 * .ap
 */
StringPlus.prototype.ap = function (b) {
  return new StringPlus(this.val(b.val))
}

StringPlus.prototype.toString = function () { `StringPlus(${this.val})` }
