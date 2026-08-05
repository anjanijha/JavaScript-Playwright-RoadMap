function firstNonRepeatedChar(str: string): void {
    const map = new Map<string, number>();
    for (const ch of str) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }
    for (const ch of str) {
        if (map.get(ch) === 1) {
            console.log(`The First Non-Repeated Character is: ${ch}`);
            return;
        }
    }
    console.log("No non-repeated character found.");
}
firstNonRepeatedChar("Anjani");