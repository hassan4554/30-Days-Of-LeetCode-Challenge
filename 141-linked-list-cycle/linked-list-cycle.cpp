/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode* head) {
        ListNode* pointer1 = head;
        ListNode* pointer2 = head;
        while (pointer2 != nullptr && pointer2->next != nullptr) {
            pointer2 = pointer2->next->next;
            pointer1 = pointer1->next;

            if (pointer2 == pointer1) {
                return true;
            }
        }
        return false;
    }
};