#include "common.h"
/*
 * @lc app=leetcode.cn id=739 lang=cpp
 *
 * [739] 每日温度
 */

// @lc code=start
class Solution
{
public:
    vector<int> dailyTemperatures(vector<int> &temperatures)
    {
        int n = temperatures.size();
        vector<int> res(n);
        stack<int> s;
        for (int i = 0; i < n; i++)
        {
            /* code */
            while (!s.empty() && temperatures[i] > temperatures[s.top()])
            {
                res[s.top()] = i - s.top();
                s.pop();
            }
            s.push(i);
        }

        return res;
    }
};
// @lc code=end
