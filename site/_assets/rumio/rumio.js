(function(){
'use strict';
var clock=document.getElementById('utcClock');
function pad(v){return String(v).padStart(2,'0')}
function tick(){var d=new Date();if(clock)clock.textContent=pad(d.getUTCHours())+':'+pad(d.getUTCMinutes())+':'+pad(d.getUTCSeconds())+' UTC'}
tick();setInterval(tick,1000);
var commands=['observe room_01','verify house_rules.sol','rest until next_cycle'];
var node=document.getElementById('typedCommand'),ci=0,letter=0,back=false;
function type(){if(!node)return;var value=commands[ci];letter+=back?-1:1;node.textContent=value.slice(0,letter);var wait=back?35:65;if(!back&&letter===value.length){back=true;wait=1800}if(back&&letter===0){back=false;ci=(ci+1)%commands.length;wait=350}setTimeout(type,wait)}type();
var button=document.getElementById('walletButton');
function short(a){return a.slice(0,4)+'...'+a.slice(-4)}
async function connect(){if(!window.ethereum){button.textContent='No wallet';setTimeout(function(){button.textContent='Connect'},1500);return}try{var accounts=await window.ethereum.request({method:'eth_requestAccounts'});var chain=await window.ethereum.request({method:'eth_chainId'});if(chain!=='0x1237'){try{await window.ethereum.request({method:'wallet_switchEthereumChain',params:[{chainId:'0x1237'}]})}catch(e){if(e.code!==4902)throw e;await window.ethereum.request({method:'wallet_addEthereumChain',params:[{chainId:'0x1237',chainName:'Robinhood Chain',nativeCurrency:{name:'Ether',symbol:'ETH',decimals:18},rpcUrls:['https://rpc.mainnet.chain.robinhood.com'],blockExplorerUrls:['https://robinhoodchain.blockscout.com']}]})}}button.textContent=short(accounts[0])}catch(e){button.textContent='Declined';setTimeout(function(){button.textContent='Connect'},1500)}}
if(button)button.addEventListener('click',connect);
var codeButton=document.getElementById('codeButton');
var codeModal=document.getElementById('codeModal');
var codeClose=document.getElementById('codeClose');
function openCode(){codeModal.hidden=false;document.body.classList.add('modal-open');codeClose.focus()}
function closeCode(){codeModal.hidden=true;document.body.classList.remove('modal-open');codeButton.focus()}
if(codeButton&&codeModal&&codeClose){
  codeButton.addEventListener('click',openCode);
  codeClose.addEventListener('click',closeCode);
  codeModal.addEventListener('click',function(event){if(event.target===codeModal)closeCode()});
  document.addEventListener('keydown',function(event){if(event.key==='Escape'&&!codeModal.hidden)closeCode()});
}
})();
