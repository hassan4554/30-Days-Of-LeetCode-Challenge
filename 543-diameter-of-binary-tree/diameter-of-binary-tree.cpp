/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        int count = 0;
        countNodes(root, count);

        return count;
    }

    int countNodes(TreeNode* root, int& count) {
        if (!root)
            return 0;

        int rightCount = countNodes(root->right, count);
        int leftCount = countNodes(root->left, count);

        count = max(count, leftCount + rightCount);
        return 1 + max(leftCount, rightCount);
    }
};