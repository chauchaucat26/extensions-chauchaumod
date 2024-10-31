function printKeyValuePairs(jsonData) {
    const language = getBrowserLanguage();
    const jaData = jsonData[language];
    for (const key in jaData) {
      if (jaData.hasOwnProperty(key)) {
        const value = jaData[key];
        const newText = `${value}`;
        const elements = document.querySelectorAll(`.${key}`);
        elements.forEach(element => {
            element.textContent = newText;
        });
      }
    }
} 
  const myJson = {
    "en": "{}",
    "ja": {
        "title": "ChauchauMod拡張機能ギャラリー",
        "setumei1": "これはChauchauMod公式の拡張機能ギャラリーであり、拡張機能サンドボックスの制限を受けない拡張機能を取得できます。ここにある拡張機能はすべて悪意の持ったchauchauにより安全性が確認されています。",
        "setumei2": "これらの拡張機能は、ChauchauModの「拡張機能の追加」メニューからも見つけることができます。",
        "info1": "これらの拡張機能は Scratch と互換性がありません",
        "info2": "これらの拡張機能を使用するプロジェクトは、Scratch で開くことも、Scratch にアップロードすることもできません。かわりに、これらは",
        "info3": "TurboWarpのパッケージャー",
        "info4": "で引き続き使用できます。",
        "footer": "ChauchauModは、TurboWarp、Scratch、Scratchチームおよび、Scratch財団と提携していません。",
        "footer2": "リポジトリ",
        "footer3": "開発者向けドキュメント",
        "copy": "URLをコピー",
        "open": "拡張機能を開く",
        "br": "ブラウザー",
        "br2": "ウェブアプリ作成用のユーティリティ",
        "br3": "犬派のネコ好き",
        "br4": "によって作成されました。",
        "tx": "テキスト",
        "tx2": "テキストを扱うときに便利なユーティリティブロック",
        "De": "デバイス",
        "De2": "デバイス系の拡張機能"
    }
  };
  
  window.onload = printKeyValuePairs(myJson);

  function getBrowserLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const supportedLanguages = ['ja', 'en'];
    if (supportedLanguages.includes(userLang.substring(0, 2))) {
      return userLang.substring(0, 2);
    } else {
      return 'en';
    }
  }
  const userLanguage = getBrowserLanguage();
  console.log('ユーザーの言語:', userLanguage);
