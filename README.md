# transfer_token_multi_parrachains
简单的脚本，一键发送平行链代币到多个地址


1. yarn install

~~2. 创建文件夹 private_data ， 在其中创建文件 seed.ts， 后者写入 export const my_seed = "xxx xxx xxx" 助记词请不要在公用电脑上写入 ~~
2. 考虑到安全性，现在使用env的形式导入私钥。用户需在自己的terminal里输入 export my_seed="xxx xxx xxx"，其中xxx xxx xxx是助记词。

3. 用户只用填写private_data中的助记词和public_data中的csv数据。如需增加parachains的支持，需在rpc config等文件添加相应参数。

4. tsc src/index.ts  编译脚本

5. node src/index.js  运行脚本


tip：
大部分波卡生态的地址使用 5xxxx的即可。 如果调用xcm跨链相关的api的时候，一定谨慎填写地址，5xxxx不一定适用（可能造成资产丢失）。

如果要发送一共10KSM，账户中一定超过10ksm，比如11个（一是因为gas，二是因为keep_alive）


