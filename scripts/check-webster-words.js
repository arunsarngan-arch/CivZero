import https from 'https';

const url = 'https://raw.githubusercontent.com/matthewreagan/WebstersEnglishDictionary/master/dictionary.json';

https.get(url, (res) => {
  let data = '';
  res.on('data', (c) => { data += c; });
  res.on('end', () => {
    const dict = JSON.parse(data);
    console.log('Total words in Webster:', Object.keys(dict).length);
    console.log('\n================ WATER ================');
    console.log(dict['water'] || dict['Water'] || dict['WATER']);
    console.log('\n================ FIRE ================');
    console.log(dict['fire'] || dict['Fire'] || dict['FIRE']);
  });
});
