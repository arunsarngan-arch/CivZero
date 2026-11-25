import https from 'https';

const url = 'https://raw.githubusercontent.com/matthewreagan/WebstersEnglishDictionary/master/dictionary_compact.json';

https.get(url, (res) => {
  let data = '';
  res.on('data', (c) => {
    data += c;
    if (data.length > 20000) {
      const lastIndex = data.lastIndexOf('","');
      if (lastIndex !== -1) {
        try {
          const sample = JSON.parse(data.slice(0, lastIndex) + '"}');
          const keys = Object.keys(sample);
          console.log('Sample keys:', keys.slice(0, 5));
          for (const k of keys.slice(0, 3)) {
            console.log(`\n================== ${k} ==================`);
            console.log(sample[k]);
          }
          process.exit(0);
        } catch (e) {
          // keep accumulating
        }
      }
    }
  });
});
