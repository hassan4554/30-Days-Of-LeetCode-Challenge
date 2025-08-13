var MinStack = function () {
    this.st = []
};

MinStack.prototype.push = function (val) {
    let min_val = this.st.length ? this.st[this.st.length - 1][1] : val
    if (val < min_val) min_val = val
    this.st.push([val, min_val])
};

MinStack.prototype.pop = function () {
    if (this.st.length) {
        this.st.pop()
    }
};

MinStack.prototype.top = function () {
    return this.st.length ? this.st[this.st.length - 1][0] : -1
};

MinStack.prototype.getMin = function () {
    return this.st.length ? this.st[this.st.length - 1][1] : -1
};
