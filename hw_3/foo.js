function foo() {
  return "bar";
}

module.exports.foo = foo;

//! For the exports, you do not need to put.foo on the end. Should just be
//! module.exports = foo;
