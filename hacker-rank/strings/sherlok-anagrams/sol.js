function isValid(s) {
    let dict = {};
    const sarr = s.split('');
    sarr.forEach(_ => {
        if (!dict[_]) {
            dict[_] = 1;
        } else {
            dict[_] += 1;
        }
    });

    const freqs = Object.values(dict);
    const freqSet = [...new Set(freqs)];

    // all chars are the same
    if (freqSet.length === 1) return 'YES';
    // if more than 2 types of frequencies are present, no chance to make single frequency via changing one letter
    if (freqSet.length > 2) return 'NO';

    // now only left a case with 2 frequencies

    // let's calculate how many letters are present in two frequencies
    let a = 0;
    let b = 0;
    freqs.forEach(_ => {
        if (freqSet[0] === _) {
            a += 1;
        }
        if (freqSet[1] === _) {
            b += 1;
        }
    });

    // if first frequency represented by one letter, then we try changing it and check if it matches the second frequency represented by other letters
    if (a === 1) {
        if (freqSet[0] + 1 === freqSet[1]) return 'YES';
        if (freqSet[0] - 1 === 0 || freqSet[0] - 1 === freqSet[1]) return 'YES';
    }
    // same as above but with second frequency
    if (b === 1) {
        if (freqSet[1] + 1 === freqSet[0]) return 'YES';
        if (freqSet[1] - 1 === 0 || freqSet[1] - 1 === freqSet[0]) return 'YES';
    }

    // if less common frequency represented by more than one letter we can't make all of them match since we're allowed only one change
    return 'NO';
}

console.log(isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd')) // YES



