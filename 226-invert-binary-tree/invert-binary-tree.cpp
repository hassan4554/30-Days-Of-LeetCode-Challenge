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
    TreeNode* invertTree(TreeNode* root) {
        if (!root)
            return nullptr;

        TreeNode* temp = root->left;
        root->left = root->right;
        root->right = temp;

        invertTree(root->left);
        invertTree(root->right);
        return root;
    }
};

// class Solution {
// public:
//     TreeNode* invertTree(TreeNode* root) {
//         vector<int> treeArr;
//         preOrderTraversal(treeArr, root);

//         TreeNode* newTree;
//         for (int i = 0; i < treeArr.size(); i++) {
//             if (!i) {
//                 newTree = new TreeNode(treeArr[i]);
//             } else {
//                 addNode(newTree, treeArr[i]);
//             }
//         }

//         return newTree;
//     }

//     void addNode(TreeNode*& root, int num) {
//         if (!root) {
//             root = new TreeNode(num);
//             return;
//         }

//         if (num < root->val) {
//             addNode(root->right, num);
//         } else {
//             addNode(root->left, num);
//         }
//     }

//     void preOrderTraversal(vector<int>& treeArr, TreeNode* node) {
//         if (!node)
//             return;
//         treeArr.push_back(node->val);
//         preOrderTraversal(treeArr, node->right);
//         preOrderTraversal(treeArr, node->left);
//     }
// };