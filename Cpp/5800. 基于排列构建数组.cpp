#include "common.h"

class Solution
{
public:
  vector<int> buildArray(vector<int> &nums)
  {
    vector<int> ans(nums.size());
    for (auto i = 0; i < nums.size(); i++)
    {
      ans[i] = nums[nums[i]];
    }
    return ans;
  }
};