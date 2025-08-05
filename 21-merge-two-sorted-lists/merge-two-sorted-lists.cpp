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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* list3 = nullptr;
        ListNode* head = nullptr;
        while (list1 != nullptr && list2 != nullptr) {
            ListNode* temp;
            if (list1->val < list2->val) {
                temp = list1;
                list1 = list1->next;
            } else {
                temp = list2;
                list2 = list2->next;
            }
            if (list3 == nullptr) {
                list3 = temp;
                head = list3;
            } else {
                list3->next = temp;
                list3 = list3->next;
            }
        }

        while (list1 != nullptr) {
            ListNode* temp = list1;
            if (list3 == nullptr) {
                list3 = temp;
                head = list3;
            } else {
                list3->next = temp;
                list3 = list3->next;
            }
            list1 = list1->next;
        }

        while (list2 != nullptr) {
            ListNode* temp = list2;
            if (list3 == nullptr) {
                list3 = temp;
                head = list3;
            } else {
                list3->next = temp;
                list3 = list3->next;
            }
            list2 = list2->next;
        }

        return head;
    }
};