class Solution {
private:
    static bool cmp (vector<int> a, vector<int> b) {
        return a[0] < b[0];
    }
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end(), cmp);
        int prevEnd = INT_MIN;
        int res = 0;
        for (vector<int> interval: intervals) {
            if (interval[0] >= prevEnd) {
                prevEnd = interval[1];
            }
            else {
                res++;
                prevEnd = min(prevEnd, interval[1]);
            }
        }
        return res;
    }
};