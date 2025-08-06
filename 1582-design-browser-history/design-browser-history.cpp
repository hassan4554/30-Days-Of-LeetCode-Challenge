class BrowserHistory {
    stack<string> forwardHistory;
    stack<string> backHistory;

public:
    BrowserHistory(string homepage) {
        backHistory.push(homepage);
    }

    void visit(string url) {
        while(!forwardHistory.empty()){
            forwardHistory.pop();
        }
        backHistory.push(url);
    }

    string back(int steps) {
        string url;
        while (steps && backHistory.size() > 1) {
            url = backHistory.top();
            backHistory.pop();
            forwardHistory.push(url);
            steps--;
        }
        
        return backHistory.top();
    }

    string forward(int steps) {
        while (steps && !forwardHistory.empty()) {
            string url = forwardHistory.top();
            forwardHistory.pop();
            backHistory.push(url);
            steps--;
        }
        
        return backHistory.top();
    }
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory* obj = new BrowserHistory(homepage);
 * obj->visit(url);
 * string param_2 = obj->back(steps);
 * string param_3 = obj->forward(steps);
 */