/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if (!head)
            return head;

        ListNode* pointer1 = head;
        ListNode* pointer2 = head->next;
        pointer1->next=nullptr;

        while (pointer2 != nullptr) {
            ListNode* temp = pointer2->next;
            pointer2->next = pointer1;
            pointer1 = pointer2;
            pointer2 = temp;
        }
        return pointer1;
    }
};