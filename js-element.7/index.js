function filterBadWords(str, blacklist) {
    let newStr = str;
    
    for (const word of blacklist) {
      const regex = new RegExp(word, 'g');
      newStr = newStr.replace(regex, '*'.repeat(word.length));
    }
    
    return newStr;
  }
  
  const str = 'aaaaa bb aaa bb aa ccc dd mm nn aa cccc';
  const blacklist = ['aa', 'ccc'];
  
  const censoredStr = filterBadWords(str, blacklist);
  console.log(censoredStr);