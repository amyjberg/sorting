describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles small array', function(){
    expect( bubbleSort([3, 1, 2]) ).toEqual( [1, 2, 3] );
  });
  it('handles big array', function(){
    expect ( bubbleSort([4, 5, 6, 7, 3, 2]) ).toEqual([2, 3, 4, 5, 6, 7]);
  })
});

