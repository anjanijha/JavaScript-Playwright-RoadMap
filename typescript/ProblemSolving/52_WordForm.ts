const words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax'];
const string1 = 'tcabniyhjs';
function canFormWord(word: string, str: string): boolean {
    const map = new Map<string, number>();
    for (const char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    for (const char of word) {
        const count = map.get(char) || 0;
        if (count === 0) {
            return false;
        }
        map.set(char, count - 1);
    }
    return true;
}
for (const word of words) {
    console.log(word, canFormWord(word, string1));
}