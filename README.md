# transfer_token_multi_parrachains
简单的脚本，一键发送平行链代币到多个地址


1. yarn install

2. 创建文件夹 private_data ， 在其中创建文件 seed.ts， 后者写入 export const my_seed = "xxx xxx xxx" 助记词请不要在公用电脑上写入 

3. 在pulbic_data 和 config文件中填入信息

4. tsc src/index.ts  编译脚本

5. node src/index.js  运行脚本


tip：
大部分波卡生态的地址使用 5xxxx的即可。 xcm相关的地址很不一样，新人请谨慎填写。


