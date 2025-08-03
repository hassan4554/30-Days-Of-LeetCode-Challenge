class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int i = 0;
        int j = 0;
        int k = 0;
        string word3;
        while (word1[i] != '\0' && word2[j] != '\0') {
            word3.push_back(word1[i++]);
            word3.push_back(word2[j++]);
        }

        if (word1[i] != '\0') {
            while (word1[i] != '\0') word3.push_back(word1[i++]);
        }

        else if (word2[j] != '\0') {
            while (word2[j] != '\0')
                word3.push_back(word2[j++]);
        }
        return word3;
    }
};