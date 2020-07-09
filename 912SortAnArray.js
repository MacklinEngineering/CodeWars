/*
912. Sort an Array
Medium

415

265

Add to List

Share
Given an array of integers nums, sort the array in ascending order.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
 


*/


var sortArray = function(nums) {
    return nums.sort(function (a, b){
        return a - b
    })
};
 
