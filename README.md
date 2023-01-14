
# MerkleTree Address Hash for Whitelisting

- A method you can use to save gas while whitelisting your smart contracts.

[TR] Bu repository, Bitcoin ve diğer kripto paralarda kullanılan adresleri hashlemek için Merkle ağacı yapısını kullanmaktadır. Bu yapı sayesinde, adreslerin güvenliği ve gizliliği sağlanmaktadır.

[EN] This repository uses the Merkle tree structure to hash addresses used in Bitcoin and other cryptocurrencies. Thanks to this structure, the security and confidentiality of addresses are ensured.




## Kurulum 

- Repository'yi klonlayın veya indirin. Gerekli paketleri yüklemek için

- Daha fazla entegrasyon ekleme `npm install` komutunu çalıştırın. 
- `script.js` dosyasını çalıştırmak için `node script.js` komutunu çalıştırın

  
## Kullanım 
Proje, adresleri hashlemek için kullanılan bir fonksiyon içermektedir. Fonksiyon, bir adres dizesini alır ve onu Merkle ağacı yapısı kullanarak hashler.

```javascript
const walletWhitelist = require("./walletWhitelist");
```

Adresleri walletWhitelist.js dosyasındaki array' e eklemelisiniz.

Daha sonra `node script.js` komutunu terminalde çalıştırın. Ve size `root.json` ve `proof.json` olarak 2 dosya oluşturacaktır.

Root.json akıllı sözleşmenize eklemeniz gereken root hash(kök hash)'inizdir.
Proof.json ise her beyazlistedeki kullanıcı içi oluşturulmuş bir kanıt(proof) dizisidir.

Bu kanıtı akıllı sözleşmeyle etkileşime geçerken argüman olarak kullanmaları için projenizdeki mimarinize uygun şekilde sağlayın.

  
## Lisans

[MIT](https://choosealicense.com/licenses/mit/)

  Bu proje MIT lisansı ile lisanslanmıştır. Ayrıntılar için LICENSE dosyasını inceleyebilirsiniz.