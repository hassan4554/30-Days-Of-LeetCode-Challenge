/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const convertToString = (node) => {
    if (!node) {
        return ',#';
    }
    return `,${node.val}` + convertToString(node.left) + convertToString(node.right)
}
var isSubtree = function (root, subRoot) {
    const rootToString = convertToString(root)
    const subRootToString = convertToString(subRoot)

    return rootToString.includes(subRootToString)
};