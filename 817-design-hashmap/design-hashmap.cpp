class Node {
    int key;
    int value;
    Node* next;

public:
    Node(int k = -1, int val = -1, Node* n = nullptr) {
        this->key = k;
        this->value = val;
        this->next = n;
    }
    Node* getNext() { return this->next; }
    void setNext(Node* n) { this->next = n; }
    void setValue(int val) { this->value = val; }
    int getValue() { return this->value; }
    int getKey() { return this->key; }
};

class MyHashMap {
    vector<Node*> map;

public:
    MyHashMap() {
        map.resize(1000);
        for (int i = 0; i < 1000; i++) {
            map[i] = new Node();
        }
    }

    int hashFunc(int key) { return key % 1000; }

    void put(int key, int value) {
        Node* curr = map[hashFunc(key)];

        while (curr->getNext()) {
            if (curr->getNext()->getKey() == key) {
                curr->getNext()->setValue(value);
                return;
            }
            curr = curr->getNext();
        }

        curr->setNext(new Node(key, value));
    }

    int get(int key) {
        Node* curr = map[hashFunc(key)];

        while (curr->getNext()) {
            if (curr->getNext()->getKey() == key) {
                return curr->getNext()->getValue();
            }
            curr = curr->getNext();
        }

        return -1;
    }

    void remove(int key) {
        Node* curr = map[hashFunc(key)];

        while (curr->getNext()) {
            if (curr->getNext()->getKey() == key) {
                curr->setNext(curr->getNext()->getNext());
                return;
            }
            curr = curr->getNext();
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key,value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */