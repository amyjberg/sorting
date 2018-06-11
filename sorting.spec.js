describe("Bubble Sort", function() {
    it("handles an empty array", function() {
        expect(bubbleSort([])).toEqual([]);
    });
    it("handles small array", function() {
        expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
    });
    it("handles big array", function() {
        expect(bubbleSort([4, 5, 6, 7, 3, 2])).toEqual([2, 3, 4, 5, 6, 7]);
    });
    // this needs to be fixed
    // beforeAll(function () {
    //   spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
    // });
    // it('getting to the center of tootsiepop involves exactly three licks', function () {
    //   tootsiepop.getToCenter();
    //   expect(tootsiepop.lick.calls.count()).toEqual(3);
    });

    //If the list is of length 0 or 1, then it is already sorted. Otherwise:
    //Divide the unsorted list into two sublists of about half the size.
    //Sort each sublist recursively by re-applying merge sort.
    //Merge the two sublists back into one sorted list.

describe('Split Array function', function() {
      it('is able to split an array into two halves', function() {
        // your code here
      });
    });

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
  });
});

describe('Merge Sort function', function(){
    it('is able sort one unsorted array of even length', function (){
        expect(mergeSort([3, 2, 6, 7, 8, 9, 10, 3])).toEqual([2, 3, 3, 6, 7, 8, 9, 10])
    });
    it('handles an empty array', function(){
        expect(mergeSort([])).toEqual([]);
    });
    it('handles an unsorted array of odd length', function(){
        expect(mergeSort([4, 0, 7])).toEqual([0, 4, 7]);
    });
    it('handles an array of length 1',function(){
        expect(mergeSort([4])).toEqual([4]);
    });

});
