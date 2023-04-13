const textToSpeech = require('@google-cloud/text-to-speech')
const fs = require('fs')
const util = require('util')
const client = new textToSpeech.TextToSpeechClient()

const outputVoice = async (vocabulary, language) => {
  // 如果download裡沒有檔案，再透過google cloud API生成MP3檔
  if (!fs.existsSync(`download/voices/${vocabulary}.mp3`)) {
    let languageCode = ''
    switch (language) {
      case '韓文':
        languageCode = 'ko-KR'
        break
      case '英文':
        languageCode = 'en-US'
        break
    }

    const request = {
      input: { text: vocabulary },
      voice: { languageCode, ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' }
    }

    const [response] = await client.synthesizeSpeech(request)
    const writeFile = util.promisify(fs.writeFile)

    await writeFile(`download/voices/${vocabulary}.mp3`, response.audioContent, 'binary')
  }
}

module.exports = {
  outputVoice
}
