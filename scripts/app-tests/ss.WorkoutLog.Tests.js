function assert(expr, msg) {
  if (!expr) {
    throw new Error(msg || 'failed');
  }
};

describe('true', function() {
  it('is true', function() {
    assert(true === true);
  })

  it('is not "true"', function() {
    assert(true === true);
  })
});
