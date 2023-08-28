# transfer_token_multi_parrachains
简单的脚本，一键发送平行链代币到多个地址


1. yarn install

2. 考虑到安全性，现在使用env的形式导入私钥。用户需在自己的terminal里输入 export my_seed="xxx xxx xxx"，其中xxx xxx xxx是助记词。

3. 用户只用填写public_data中的csv数据。如需增加parachains的支持，要在rpc config等文件添加相应参数。

4. tsc   编译脚本

5. node dist/src/index.js  运行脚本


tip：
大部分波卡生态的地址使用 5xxxx的即可。 如果调用xcm跨链相关的api的时候，一定谨慎填写地址，5xxxx不一定适用（可能造成资产丢失）。

如果要发送一共10KSM，账户中一定超过10ksm，比如11个（一是因为gas，二是因为keep_alive）

当前，本脚本只支持在KSM链发送KSM，在bifrost链发送BNC，以此类推。后续会增加在单一链发送不同token的支持。


