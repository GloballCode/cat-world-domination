// ══════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════
// Small inline SVG icons for concepts Bootstrap Icons doesn't cover (cat paw, fish, yarn ball)
const ICO_PAW='<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" style="vertical-align:-2px"><circle cx="4.3" cy="4.2" r="1.5"/><circle cx="8" cy="2.9" r="1.5"/><circle cx="11.7" cy="4.2" r="1.5"/><circle cx="13.1" cy="7.3" r="1.3"/><path d="M8 7.6c-2.7 0-4.9 2-4.9 4.3 0 1.6 1.3 2.5 2.9 2 .7-.2 1.3-.2 2 0 1.6.5 2.9-.4 2.9-2 0-2.3-2.2-4.3-4.9-4.3z"/></svg>';
const ICO_FISH='<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" style="vertical-align:-2px"><path d="M1 8c2.2-3 5.3-4.6 8.2-4.6 1.9 0 3.5.8 4.6 1.9L16.3 3.3v9.4l-2.5-2c-1.1 1.1-2.7 1.9-4.6 1.9C6.3 12.6 3.2 11 1 8z"/><circle cx="4.6" cy="7" r=".8" fill="#0a0814"/></svg>';
const ICO_YARN='<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1" style="vertical-align:-2px"><circle cx="8" cy="8" r="6.3" fill="currentColor" opacity=".22" stroke="none"/><path d="M2.1 6.3C5 8 8 4.8 13.2 7.3M1.9 9.6c4.1-2.1 8.2 2 12.3-1M3.2 4.3c3.6 3.1 6.1.4 10.2 3.2M2.8 11.7c4.1 1.6 7.2-2.6 11.3-.5"/></svg>';

const TERRITORIES=[
  {id:'br',name:'Brazil',pop:8,fish:6,army:5,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Purrazil','Catrazil','Meowzil']},
  {id:'us',name:'United States',pop:15,fish:8,army:12,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Pawnited States','United Stares','Meowmerica']},
  {id:'ca',name:'Canada',pop:6,fish:7,army:6,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Catada','Purranada','Clawsada']},
  {id:'mx',name:'Mexico',pop:7,fish:5,army:5,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Meow-xico','Catxico','Purrico']},
  {id:'ar',name:'Argentina',pop:5,fish:5,army:4,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Catgentina','Purrgentina','Pawgentina']},
  {id:'co',name:'Colombia',pop:4,fish:4,army:3,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Catolombia','Purrlombia','Meowlombia']},
  {id:'cl',name:'Chile',pop:3,fish:5,army:3,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Catile','Purrhile','Meow-le']},
  {id:'pe',name:'Peru',pop:4,fish:4,army:3,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Purrru','Cateru','Meow-ru']},
  {id:'gb',name:'United Kingdom',pop:7,fish:5,army:7,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['United Kitten-dom','Furr-itain','Clawland']},
  {id:'fr',name:'France',pop:7,fish:5,army:7,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Purrance','Catfrance','Meowsailles']},
  {id:'de',name:'Germany',pop:8,fish:4,army:8,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Germeowny','Catmany','Furrmany']},
  {id:'it',name:'Italy',pop:6,fish:6,army:5,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Itacat','Purraly','Cataly']},
  {id:'es',name:'Spain',pop:5,fish:6,army:5,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Spaing','Catspaña','Purrain']},
  {id:'pt',name:'Portugal',pop:3,fish:7,army:3,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Purrrtugal','Catugal','Meow-gal']},
  {id:'nl',name:'Netherlands',pop:4,fish:5,army:4,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Nether-Cats','Purrlands','Catherlands']},
  {id:'be',name:'Belgium',pop:3,fish:3,army:3,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Bel-cat-um','Meowgium','Purrjum']},
  {id:'se',name:'Sweden',pop:3,fish:6,army:4,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Catden','Purrweden','Meoweden']},
  {id:'no',name:'Norway',pop:2,fish:8,army:3,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Nor-purr-way','Catway','Meow-rway']},
  {id:'fi',name:'Finland',pop:2,fish:7,army:3,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Fin-claw-d','Catfinland','Purrland']},
  {id:'pl',name:'Poland',pop:5,fish:4,army:5,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Pawland','Catland of the North','Purrland']},
  {id:'ru',name:'Russia',pop:12,fish:7,army:14,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Russmeow','Catsia','Purrsia']},
  {id:'ua',name:'Ukraine',pop:5,fish:4,army:5,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Ukr-meow-ne','Catraine','Purrraine']},
  {id:'tr',name:'Turkey',pop:7,fish:5,army:7,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Tur-cat','Purrkey','Meow-key']},
  {id:'sa',name:'Saudi Arabia',pop:5,fish:3,army:6,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Saudi Cat-rabia','Purrrabia','Meow Arabia']},
  {id:'ir',name:'Iran',pop:6,fish:4,army:6,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:["I-Ran from Dogs",'Catran','Purrran']},
  {id:'eg',name:'Egypt',pop:6,fish:5,army:5,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Egycat','Purrpt','Ancient CATipt']},
  {id:'ng',name:'Nigeria',pop:8,fish:5,army:5,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Nigermeow','Cateria','Purrria']},
  {id:'za',name:'South Africa',pop:5,fish:5,army:4,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['South Catfrica','Purrfrica','Meow Africa']},
  {id:'ke',name:'Kenya',pop:4,fish:4,army:3,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Kenycat','Purrnya','Meow-nya']},
  {id:'et',name:'Ethiopia',pop:6,fish:3,army:4,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Ethio-paw','Catopia','Purropia']},
  {id:'in',name:'India',pop:14,fish:6,army:10,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Catdia','Purrdia','Meow-dia']},
  {id:'cn',name:'China',pop:16,fish:7,army:15,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Catna','Purrchina','Meow Dynasty']},
  {id:'jp',name:'Japan',pop:8,fish:9,army:7,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Nyan-pan','Cat-pan','Neko-Japan']},
  {id:'kr',name:'South Korea',pop:5,fish:8,army:6,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['South Catrea','Purrrea','Neko-rea']},
  {id:'id',name:'Indonesia',pop:9,fish:7,army:6,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Cato-nesia','Purrdonesia','Meow-nesia']},
  {id:'au',name:'Australia',pop:5,fish:8,army:5,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Pawstralia','Purrstralia','CATstralia']},
  {id:'nz',name:'New Zealand',pop:2,fish:8,army:2,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['New Catland','Purrland Below','Kiwi-Cat']},
  {id:'th',name:'Thailand',pop:5,fish:7,army:4,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Tailand','Catland of Smiles','Meow-land']},
  {id:'vn',name:'Vietnam',pop:6,fish:6,army:5,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Viet-meow','Catnam','Purrnam']},
  {id:'pk',name:'Pakistan',pop:8,fish:4,army:7,flag:'<i class="bi bi-geo-alt-fill"></i>',puns:['Pawkistan','Catistan','Purristan']},
];

const BUILDINGS=[
  {id:'fishery',name:'Fishery',emoji:ICO_FISH,effect:'+3 fish/turn/lv',costBase:30,costPer:20,max:10,produces:'fish',pAmt:3},
  {id:'tower',name:'Cat Tower',emoji:'<i class="bi bi-building"></i>',effect:'+2 cat pop/turn/lv',costBase:25,costPer:15,max:6},
  {id:'yarn',name:'Yarn Factory',emoji:ICO_YARN,effect:'+2 yarn/turn/lv',costBase:20,costPer:15,max:8,produces:'yarn',pAmt:2},
  {id:'academy',name:'Academy of Meow',emoji:'<i class="bi bi-mortarboard-fill"></i>',effect:'-10% research cost/lv',costBase:40,costPer:30,max:5},
  {id:'fortress',name:'Cat Fortress',emoji:'<i class="bi bi-shield-fill"></i>',effect:'+6 defense/lv',costBase:35,costPer:25,max:6},
  {id:'cattery',name:'Royal Cattery',emoji:'<i class="bi bi-house-fill"></i>',effect:'+3 cat pop capacity/lv',costBase:50,costPer:35,max:5},
  {id:'cellar',name:'Catnip Cellar',emoji:'<i class="bi bi-flower2"></i>',effect:'+2 catnip/turn/lv',costBase:35,costPer:25,max:6,produces:'catnip',pAmt:2},
  {id:'orbital',name:'Orbital Scratching Post',emoji:'<i class="bi bi-broadcast"></i>',effect:'+20 all resources/turn',costBase:500,costPer:0,max:1},
];

const UNITS=[
  {id:'house',name:'House Cat',emoji:ICO_PAW,cost:5,catCost:1,attack:2,defense:1,desc:'Basic conscript'},
  {id:'orange',name:'Orange Cat',emoji:'<i class="bi bi-circle-fill" style="color:#ff9d3a"></i>',cost:10,catCost:1,attack:5,defense:2,desc:'Strong but chaotic'},
  {id:'void',name:'Void Cat',emoji:'<i class="bi bi-square-fill"></i>',cost:15,catCost:1,attack:7,defense:3,desc:'Stealth specialist. Shrinks danger zones in battle.'},
  {id:'maine',name:'Maine Coon Guard',emoji:'<i class="bi bi-shield-fill"></i>',cost:25,catCost:2,attack:10,defense:7,desc:'Heavy infantry. Widens the safe zone in battle.'},
  {id:'spy',name:'Shadow Paw Spy',emoji:'<i class="bi bi-eye-fill"></i>',cost:20,catCost:1,attack:3,defense:2,desc:'Reduces enemy army by 10% when used'},
  {id:'lion',name:'Lion Corps',emoji:'<i class="bi bi-award-fill"></i>',cost:60,catCost:3,catnipCost:5,attack:20,defense:12,desc:'Late-game elite. Requires catnip supplements.'},
  {id:'space',name:'Space Cat',emoji:'<i class="bi bi-rocket-fill"></i>',cost:150,catCost:4,catnipCost:10,attack:38,defense:20,desc:'Endgame. Requires Space research + catnip.'},
];

const TECHS=[
  {id:'naps',name:'Better Naps',cost:30,effect:'+10% all production',done:false,apply:()=>{G.prodBonus+=.1}},
  {id:'purring',name:'Advanced Purring',cost:35,effect:'+15% diplomacy success',done:false,apply:()=>{G.dipBonus+=.15}},
  {id:'laser',name:'Laser Pointer Tracking',cost:45,effect:'+12% attack power',done:false,apply:()=>{G.atkBonus+=.12}},
  {id:'psych',name:'Human Psychology',cost:50,effect:'+20% fish from territories',done:false,apply:()=>{G.taxBonus+=.2}},
  {id:'quantum',name:'Quantum Meowing',cost:120,effect:'+30% all production',done:false,apply:()=>{G.prodBonus+=.3}},
  {id:'claws',name:'Retractable Claws 2.0',cost:40,effect:'+6 flat attack',done:false,apply:()=>{G.flatAtk+=6}},
  {id:'catnip2',name:'Catnip Synthesis',cost:60,effect:'+2 catnip/turn',done:false,apply:()=>{G.catnipRate+=2}},
  {id:'space_t',name:'Space Exploration',cost:150,effect:'Unlocks Space Cats',done:false,apply:()=>{G.spaceUnlocked=true}},
  {id:'hypno',name:'Hypno-Purr',cost:80,effect:'+25% prestige gain',done:false,apply:()=>{G.prestigeBonus+=.25}},
  {id:'yarn2',name:'Industrial Yarn',cost:55,effect:'+3 yarn/turn',done:false,apply:()=>{G.yarnBonus+=3}},
  {id:'catpop',name:'Population Studies',cost:45,effect:'+20% cat pop growth',done:false,apply:()=>{G.popBonus+=.2}},
  {id:'meme_mastery',name:'Meme Mastery',cost:35,effect:'+2 meme tokens/turn',done:false,apply:()=>{G.maxMeme+=2}},
  {id:'tactics',name:'Feline Tactics',cost:65,effect:'+8% attack, faster battle bar',done:false,apply:()=>{G.atkBonus+=.08}},
];

// Cat Council members — notable cats in your court
const COUNCIL_MEMBERS=[
  {id:'advisor',name:'Fluffington the Wise',role:'Royal Advisor',emoji:'<i class="bi bi-stars"></i>',effect:'Each turn: 10% chance to give 20 free fish',active:true,
   tick:()=>{if(Math.random()<.1){G.fish+=20;addLog('Fluffington dispensed wisdom (and fish)!','ev')}}},
  {id:'spy_master',name:'Shadow',role:'Spymaster',emoji:'<i class="bi bi-eye-fill"></i>',effect:'Each turn: reduces a random enemy army by 2',active:true,
   tick:()=>{const e=G.territories.filter(t=>!t.owned);if(e.length){const t=e[Math.floor(Math.random()*e.length)];t.army=Math.max(1,t.army-2);}}},
  {id:'orange_minister',name:'Marmalade',role:'Minister of Chaos',emoji:'<i class="bi bi-circle-fill" style="color:#ff9d3a"></i>',effect:'Each turn: 20% chance to do something chaotic',active:true,
   tick:()=>{if(Math.random()<.2){const r=Math.random();if(r<.3){G.fish+=15;addLog('Marmalade accidentally ordered extra fish!','ev')}else if(r<.6){G.happiness-=8;addLog('Marmalade knocked over the happiness department.','bad')}else{G.yarn+=10;addLog('Marmalade found a yarn stash!','ev')}}}},
  {id:'general',name:'Colonel Whisker-Fluff',role:'Head of Military',emoji:'<i class="bi bi-shield-fill"></i>',effect:'Army costs 10% less fish to recruit',active:true,
   tick:()=>{}},
  {id:'diplomat',name:'Lady Mittens',role:'Chief Diplomat',emoji:'<i class="bi bi-gem"></i>',effect:'+1 action token per turn',active:true,
   tick:()=>{G.actTokens=Math.min(G.maxAct,G.actTokens+1)}},
  {id:'scientist',name:'Dr. Purrstein',role:'Head Scientist',emoji:'<i class="bi bi-lightbulb-fill"></i>',effect:'Each turn: 5% chance to research a random tech for free',active:false,
   tick:()=>{if(Math.random()<.05){const undone=G.techs.filter(t=>!t.done);if(undone.length){const t=undone[Math.floor(Math.random()*undone.length)];t.done=true;t.apply();addLog(`Dr. Purrstein accidentally discovered: ${t.name}!`,'ev')}}}},
  {id:'minstrel',name:'Biscuit the Bard',role:'Royal Minstrel',emoji:'<i class="bi bi-music-note-beamed"></i>',effect:'Happiness +3 every turn',active:false,
   tick:()=>{G.happiness=Math.min(100,G.happiness+3)}},
];

const RANDOM_EVENTS=[
  {name:'Red Dot Crisis!',icon:'<i class="bi bi-record-circle-fill" style="color:#e04b4b"></i>',text:'A mysterious red dot appeared.\nAll armies refuse to march.',effect:'<i class="bi bi-lightning-charge-fill"></i> Cannot declare war next turn',apply:()=>{G.skipAtk=true}},
  {name:'Giant Cardboard Box Found!',icon:'<i class="bi bi-box-seam-fill"></i>',text:'A massive cardboard box has appeared in the capital.\nNational productivity: zero.',effect:'+20 happiness, +10 yarn',apply:()=>{G.happiness=Math.min(100,G.happiness+20);G.yarn+=10}},
  {name:'Vacuum Cleaner Appears!',icon:'<i class="bi bi-arrow-repeat"></i>',text:'Mass panic sweeps the palace.\nNobody is governing right now.',effect:'-15 happiness, -1 action token this turn',apply:()=>{G.happiness=Math.max(0,G.happiness-15);G.actTokens=Math.max(0,G.actTokens-1)}},
  {name:'Human Drops Tuna!',icon:ICO_FISH,text:'A clumsy human dropped an entire crate of tuna outside the palace gates.',effect:'+40 fish',apply:()=>{G.fish+=40}},
  {name:'Cat Sleeps On Keyboard!',icon:'<i class="bi bi-keyboard-fill"></i>',text:'The Royal Cat dozed off on the war terminal.\nA random executive order was filed.',effect:'Random: fish / units / happiness',apply:()=>{const r=Math.random();if(r<.33){G.fish+=25;addLog('Order issued: Free fish Fridays!','ev')}else if(r<.66){const u=G.units.find(u=>u.id==='house');u.count+=4;addLog('Order issued: Emergency conscription!','ev')}else{G.happiness-=10;addLog('Order issued: Mandatory 3am staff meetings.','bad')}}},
  {name:'Catnip Rain!',icon:'<i class="bi bi-flower2"></i>',text:"It's raining catnip.\nNobody knows how.\nNobody is questioning it.",effect:'+15 catnip',apply:()=>{G.catnip+=15}},
  {name:'International Cat Day!',icon:'<i class="bi bi-emoji-smile-fill"></i>',text:'The world celebrates cats.\nTemporary wave of pro-feline sentiment detected.',effect:'+20 prestige, +10 happiness',apply:()=>{G.prestige+=20;G.happiness=Math.min(100,G.happiness+10)}},
  {name:'Orange Cat Incident!',icon:'<i class="bi bi-circle-fill" style="color:#ff9d3a"></i>',text:'An Orange Cat was briefly left in charge of the treasury.',effect:'50%: +30 fish  |  50%: -30 fish',apply:()=>{if(Math.random()<.5){G.fish+=30;addLog('Orange Cat somehow found fish!','ev')}else{G.fish=Math.max(0,G.fish-30);addLog('Orange Cat pushed all fish reserves off the table.','bad')}}},
  {name:'Dog Alliance Offer',icon:'<i class="bi bi-people-fill"></i>',text:'The Global Dog Alliance proposes a peace treaty.\nCats are deeply offended.',effect:'+25 prestige (reluctant). -10 happiness.',apply:()=>{G.prestige+=25;G.happiness=Math.max(0,G.happiness-10)}},
  {name:'Legendary Yarn Ball Spotted!',icon:ICO_YARN,text:'A truly massive yarn ball was spotted rolling through the capital.\nAll production stopped.',effect:'+30 yarn',apply:()=>{G.yarn+=30}},
  {name:'Spy Betrayal!',icon:'<i class="bi bi-eye-fill"></i>',text:'A human spy infiltrated the court.\nSensitive fish reserves exposed.',effect:'-25 fish, enemy army +3 somewhere',apply:()=>{G.fish=Math.max(0,G.fish-25);const e=G.territories.filter(t=>!t.owned);if(e.length){const t=e[Math.floor(Math.random()*e.length)];t.army+=3}}},
  {name:'Catnip Shortage!',icon:'<i class="bi bi-exclamation-diamond-fill"></i>',text:'The national catnip reserves ran dry.\nCat productivity hits rock bottom.',effect:'-10 happiness, -2 catnip',apply:()=>{G.happiness=Math.max(0,G.happiness-10);G.catnip=Math.max(0,G.catnip-2)}},
];

const ACHIEVEMENTS=[
  {id:'first',name:'First Blood',desc:'Conquer your first territory',icon:'<i class="bi bi-shield-fill-check"></i>',done:false,check:()=>oc()>1},
  {id:'fish500',name:'Master Fisherman',desc:'Accumulate 500 fish',icon:ICO_FISH,done:false,check:()=>G.fish>=500},
  {id:'res5',name:'Scholar of Meow',desc:'Research 5 technologies',icon:'<i class="bi bi-mortarboard-fill"></i>',done:false,check:()=>G.techs.filter(t=>t.done).length>=5},
  {id:'dip5',name:'Purr-fect Diplomat',desc:'Form 5 peace deals',icon:'<i class="bi bi-handshake"></i>',done:false,check:()=>G.peaceDone>=5},
  {id:'land20',name:'Catlord',desc:'Own 20 territories',icon:'<i class="bi bi-map-fill"></i>',done:false,check:()=>oc()>=20},
  {id:'army100',name:'General Fluffington',desc:'Train 100 total units',icon:'<i class="bi bi-shield-fill"></i>',done:false,check:()=>G.units.reduce((a,u)=>a+u.count,0)>=100},
  {id:'fish1000',name:'Billionfish',desc:'Accumulate 1000 fish',icon:'<i class="bi bi-cash-coin"></i>',done:false,check:()=>G.fish>=1000},
  {id:'win',name:'World Dominator',desc:'Conquer all 40 territories',icon:'<i class="bi bi-globe-americas"></i>',done:false,check:()=>oc()>=40},
  {id:'rename5',name:'Creative Namer',desc:'Rename 5 territories',icon:'<i class="bi bi-pencil-fill"></i>',done:false,check:()=>G.renames>=5},
  {id:'rebel',name:'Suppressor',desc:'Survive a rebellion',icon:'<i class="bi bi-fire"></i>',done:false,check:()=>G.rebellions>0},
  {id:'cats200',name:'Cat Census',desc:'Reach 200 cat population',icon:ICO_PAW,done:false,check:()=>G.catPop>=200},
  {id:'meme10',name:'Meme Warrior',desc:'Use 10 cat memes',icon:'<i class="bi bi-emoji-laughing-fill"></i>',done:false,check:()=>G.memeUsed>=10},
  {id:'battle_sweep',name:'Purrfect Victory',desc:'Win a battle 3-0',icon:'<i class="bi bi-lightning-charge-fill"></i>',done:false,check:()=>G.perfectWins>0},

  // ── new achievements ──
  {id:'gem_realm',name:'Gem of the Realm',desc:'Reach 400 prestige',icon:'<i class="bi bi-gem"></i>',done:false,check:()=>G.prestige>=400},
  {id:'space_cats',name:'To Infinity and Meow-yond',desc:'Unlock Space Exploration',icon:'<i class="bi bi-rocket-fill"></i>',done:false,check:()=>G.spaceUnlocked},
  {id:'ally5',name:'Ally of All',desc:'Form 5 alliances',icon:'<i class="bi bi-people-fill"></i>',done:false,check:()=>G.alliances>=5},
  {id:'yarn200',name:'Yarn Baron',desc:'Accumulate 200 yarn',icon:'<i class="bi bi-circle-fill"></i>',done:false,check:()=>G.yarn>=200},
  {id:'dip_century',name:"Diplomat's Century",desc:'Complete 15 combined peace deals and alliances',icon:'<i class="bi bi-globe"></i>',done:false,check:()=>(G.peaceDone+G.alliances)>=15},
  {id:'chaos_incarnate',name:'Chaos Incarnate',desc:'Rule as Chaos government for 30 turns',icon:'<i class="bi bi-shuffle"></i>',done:false,check:()=>G.gov==='Chaos'&&G.turn>=30},
  {id:'blitzkrieg',name:'Blitzkrieg Meow',desc:'Own 20 territories by turn 15',icon:'<i class="bi bi-lightning-fill"></i>',done:false,check:()=>G.blitzTurn!=null&&G.blitzTurn<=15},
  {id:'hardcore_win',name:'Hardest of the Hardcore',desc:'Win the game on Lion difficulty',icon:'<i class="bi bi-fire"></i>',done:false,check:()=>G.won&&G.diff==='lion'},
  {id:'prestige_win',name:'Meow-nificent Empire',desc:'Win via Prestige Victory',icon:'<i class="bi bi-stars"></i>',done:false,check:()=>G.won&&G.winType==='prestige'},
  {id:'nine_lives',name:'Nine Lives',desc:'Survive a moment of near-total unhappiness',icon:'<i class="bi bi-heart-fill"></i>',done:false,check:()=>G.hadLowHappiness===true},
  {id:'iron_whiskers',name:'Iron Whiskers',desc:'Win 10 battles',icon:'<i class="bi bi-shield-shaded"></i>',done:false,check:()=>G.battlesWon>=10},
  {id:'no_cat_left',name:'No Cat Left Behind',desc:'Own 10+ territories without ever losing one to invasion',icon:'<i class="bi bi-shield-fill"></i>',done:false,check:()=>oc()>=10&&G.territoryLosses===0},
];

// ══════════════════════════════════════════════
// SAVE SYSTEM (portable save-code based)
// ══════════════════════════════════════════════
// Instead of (or in addition to) localStorage, the empire is exported as a
// self-contained text "save code" the player copies out and pastes back in
// later via the "Continue Game" screen. This also means saves can be moved
// between devices/browsers.
//
// serializeState() strips G down to plain data only: G.achievements holds
// live `check()` functions (and G.techs/COUNCIL_MEMBERS carry `apply()`/
// `tick()` too) which can't survive JSON and shouldn't be trusted from
// storage anyway. Those get reduced to just their `id`s (plus `done`/
// `active` flags where relevant) and restoreState() rebuilds full objects
// by merging that plain data back onto fresh copies of the source arrays
// (TERRITORIES/UNITS/BUILDINGS/TECHS/ACHIEVEMENTS/COUNCIL_MEMBERS), matched
// by id — never trusting saved array order/shape blindly.
const SAVE_VERSION=1;
const SAVE_PREFIX='CWD'+SAVE_VERSION+':';

// btoa/atob only handle Latin1, so run text through a UTF-8-safe escape
// hatch first (empire names etc. may contain accented/unicode characters).
function b64Encode(str){
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,(_,hex)=>String.fromCharCode(parseInt(hex,16))));
}
function b64Decode(str){
  return decodeURIComponent(atob(str).split('').map(c=>'%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)).join(''));
}

function serializeState(){
  return{
    v:SAVE_VERSION,
    turn:G.turn,fish:G.fish,catnip:G.catnip,catnipRate:G.catnipRate,yarn:G.yarn,yarnRate:G.yarnRate,
    prestige:G.prestige,happiness:G.happiness,
    catPop:G.catPop,catPopCap:G.catPopCap,catPopGrowth:G.catPopGrowth,
    prodBonus:G.prodBonus,atkBonus:G.atkBonus,flatAtk:G.flatAtk,taxBonus:G.taxBonus,dipBonus:G.dipBonus,
    prestigeBonus:G.prestigeBonus,yarnBonus:G.yarnBonus,popBonus:G.popBonus,
    spaceUnlocked:G.spaceUnlocked,skipAtk:G.skipAtk,
    alliances:G.alliances,peaceDone:G.peaceDone,renames:G.renames,rebellions:G.rebellions,memeUsed:G.memeUsed,
    perfectWins:G.perfectWins,battlesWon:G.battlesWon,territoryLosses:G.territoryLosses,blitzTurn:G.blitzTurn,
    hadLowHappiness:G.hadLowHappiness,winType:G.winType,
    actTokens:G.actTokens,maxAct:G.maxAct,memeTokens:G.memeTokens,maxMeme:G.maxMeme,
    empireName:G.empireName,gov:G.gov,diff:G.diff,
    territories:G.territories.map(t=>({id:t.id,owned:t.owned,relation:t.relation,atWar:t.atWar,
      displayName:t.displayName,memeDebuff:t.memeDebuff,warTurns:t.warTurns,army:t.army})),
    units:G.units.map(u=>({id:u.id,count:u.count})),
    buildings:G.buildings.map(b=>({id:b.id,level:b.level})),
    techs:G.techs.filter(t=>t.done).map(t=>t.id),
    achievements:G.achievements.filter(a=>a.done).map(a=>a.id),
    council:G.council.map(c=>({id:c.id,active:c.active})),
    log:G.log.slice(0,40),
    won:G.won,lost:G.lost,pendingInvasions:G.pendingInvasions,
  };
}

function restoreState(d){
  G={
    turn:d.turn,fish:d.fish,catnip:d.catnip,catnipRate:d.catnipRate,yarn:d.yarn,yarnRate:d.yarnRate,
    prestige:d.prestige,happiness:d.happiness,
    catPop:d.catPop,catPopCap:d.catPopCap,catPopGrowth:d.catPopGrowth,
    prodBonus:d.prodBonus||0,atkBonus:d.atkBonus||0,flatAtk:d.flatAtk||0,taxBonus:d.taxBonus||0,dipBonus:d.dipBonus||0,
    prestigeBonus:d.prestigeBonus||0,yarnBonus:d.yarnBonus||0,popBonus:d.popBonus||0,
    spaceUnlocked:!!d.spaceUnlocked,skipAtk:!!d.skipAtk,
    alliances:d.alliances||0,peaceDone:d.peaceDone||0,renames:d.renames||0,rebellions:d.rebellions||0,memeUsed:d.memeUsed||0,
    perfectWins:d.perfectWins||0,battlesWon:d.battlesWon||0,territoryLosses:d.territoryLosses||0,blitzTurn:d.blitzTurn!=null?d.blitzTurn:null,
    hadLowHappiness:!!d.hadLowHappiness,winType:d.winType||null,
    actTokens:d.actTokens,maxAct:d.maxAct,memeTokens:d.memeTokens,maxMeme:d.maxMeme,
    empireName:d.empireName,gov:d.gov,diff:d.diff,
    territories:TERRITORIES.map(base=>{
      const s=(d.territories||[]).find(x=>x.id===base.id)||{};
      return{...base,owned:!!s.owned,relation:s.relation||'neutral',atWar:!!s.atWar,
        displayName:s.displayName||base.name,memeDebuff:s.memeDebuff||0,warTurns:s.warTurns||0,
        army:s.army!=null?s.army:base.army};
    }),
    units:UNITS.map(base=>{
      const s=(d.units||[]).find(x=>x.id===base.id);
      return{...base,count:s?s.count:(base.id==='house'?5:0)};
    }),
    buildings:BUILDINGS.map(base=>{
      const s=(d.buildings||[]).find(x=>x.id===base.id);
      return{...base,level:s?s.level:0};
    }),
    techs:TECHS.map(t=>({...t,done:(d.techs||[]).includes(t.id)})),
    achievements:ACHIEVEMENTS.map(a=>({...a,done:(d.achievements||[]).includes(a.id)})),
    council:COUNCIL_MEMBERS.map(c=>{
      const s=(d.council||[]).find(x=>x.id===c.id);
      return{...c,active:s?!!s.active:c.active};
    }),
    log:d.log||[],selectedTer:null,won:!!d.won,lost:!!d.lost,pendingInvasions:d.pendingInvasions||[],
  };
  setupMap();
}

// Produces the shareable save code string for the game currently in progress.
function generateSaveCode(){
  return SAVE_PREFIX+b64Encode(JSON.stringify(serializeState()));
}

// Parses+validates a pasted save code. Returns the plain-data object on
// success, or null (never throws) if the code is missing/corrupt so callers
// can show an error and leave the player right where they were.
function parseSaveCode(code){
  try{
    code=(code||'').trim();
    if(!code.startsWith(SAVE_PREFIX))return null;
    const json=b64Decode(code.slice(SAVE_PREFIX.length));
    const d=JSON.parse(json);
    if(typeof d.turn!=='number'||!Array.isArray(d.territories)||!d.empireName)return null;
    return d;
  }catch(err){return null;}
}

function openSaveCode(){
  document.getElementById('savecode-out').value=generateSaveCode();
  document.getElementById('savecode-copybtn').innerHTML='<i class="bi bi-clipboard-fill"></i> Copy Code';
  document.getElementById('svm').classList.add('show');
}

function copySaveCode(){
  const ta=document.getElementById('savecode-out');
  const done=()=>{
    const btn=document.getElementById('savecode-copybtn');
    btn.innerHTML='<i class="bi bi-check-lg"></i> Copied!';
    setTimeout(()=>{btn.innerHTML='<i class="bi bi-clipboard-fill"></i> Copy Code';},1800);
  };
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(ta.value).then(done).catch(()=>{ta.select();document.execCommand('copy');done();});
  }else{
    ta.select();document.execCommand('copy');done();
  }
}

function loadFromCode(){
  const input=document.getElementById('loadcode-inp');
  const err=document.getElementById('loadcode-err');
  const d=parseSaveCode(input.value);
  if(!d){
    err.textContent="That code doesn't look right — check you copied the whole thing and try again.";
    err.style.display='block';
    return;
  }
  err.style.display='none';
  restoreState(d);
  showScreen('game');render();
  addLog(`${G.empireName} continues its reign, turn ${G.turn}.`,'ev');
}

// ══════════════════════════════════════════════
// GAME STATE
// ══════════════════════════════════════════════
let G={};
let bInt=null,bPos=0,bDir=1,bSpd=2,bRound=0,bWins=0,bLosses=0,bActive=false,bDangerW=12;

// ══════════════════════════════════════════════
// MAP ZOOM / PAN
// ══════════════════════════════════════════════
let mapZoom=1,mapPanX=0,mapPanY=0,mapDragging=false,mapDragMoved=false,mapLastX=0,mapLastY=0;

function svgPoint(e){
  const svg=document.getElementById('world-svg');
  const pt=svg.createSVGPoint();
  pt.x=e.clientX;pt.y=e.clientY;
  const ctm=svg.getScreenCTM();
  if(!ctm) return {x:480,y:250};
  const loc=pt.matrixTransform(ctm.inverse());
  return {x:loc.x,y:loc.y};
}

function clampPan(){
  const maxPanX=960*(mapZoom-1)+100, maxPanY=500*(mapZoom-1)+100;
  mapPanX=Math.min(maxPanX,Math.max(-maxPanX,mapPanX));
  mapPanY=Math.min(maxPanY,Math.max(-maxPanY,mapPanY));
}

function applyMapTransform(){
  const g=document.getElementById('mapview');
  if(g) g.setAttribute('transform',`translate(${mapPanX},${mapPanY}) scale(${mapZoom})`);
}

function mapZoomBy(factor){
  const newZoom=Math.min(6,Math.max(1,mapZoom*factor));
  if(newZoom===mapZoom)return;
  const cx=480,cy=250;
  const wx=(cx-mapPanX)/mapZoom, wy=(cy-mapPanY)/mapZoom;
  mapPanX=cx-newZoom*wx; mapPanY=cy-newZoom*wy;
  mapZoom=newZoom;
  clampPan();applyMapTransform();
}

function mapResetView(){mapZoom=1;mapPanX=0;mapPanY=0;applyMapTransform();}

function setupMapZoomPan(){
  const svg=document.getElementById('world-svg');
  svg.addEventListener('wheel',e=>{
    e.preventDefault();
    const factor=e.deltaY<0?1.15:1/1.15;
    const newZoom=Math.min(6,Math.max(1,mapZoom*factor));
    if(newZoom===mapZoom)return;
    const V=svgPoint(e);
    const wx=(V.x-mapPanX)/mapZoom, wy=(V.y-mapPanY)/mapZoom;
    mapPanX=V.x-newZoom*wx; mapPanY=V.y-newZoom*wy;
    mapZoom=newZoom;
    clampPan();applyMapTransform();
  },{passive:false});

  // The pointer is only "captured" once we've confirmed the user is actually
  // panning (moved past a small threshold). Calling setPointerCapture() on
  // every pointerdown — including a plain click with no movement — locks the
  // eventual pointerup/click target to the <svg> root instead of the country
  // <path> under the cursor, which is what was silently breaking country
  // clicks. Deferring capture until real dragging starts means a plain click
  // never gets captured, so its click event still resolves to the actual path.
  let mapPointerId=null;
  svg.addEventListener('pointerdown',e=>{
    mapPointerId=e.pointerId;
    mapDragging=false;mapDragMoved=false;
    mapLastX=e.clientX;mapLastY=e.clientY;
  });
  svg.addEventListener('pointermove',e=>{
    if(mapPointerId===null||e.pointerId!==mapPointerId)return;
    const dx=e.clientX-mapLastX, dy=e.clientY-mapLastY;
    if(!mapDragging){
      if(Math.abs(dx)<=6&&Math.abs(dy)<=6)return; // not a drag yet — don't pan, let clicks through
      mapDragging=true;mapDragMoved=true;
      svg.classList.add('dragging');
      try{svg.setPointerCapture(mapPointerId);}catch(err){}
    }
    const rect=svg.getBoundingClientRect();
    const scaleX=960/rect.width, scaleY=500/rect.height;
    mapPanX+=dx*scaleX; mapPanY+=dy*scaleY;
    mapLastX=e.clientX;mapLastY=e.clientY;
    clampPan();applyMapTransform();
  });
  const endDrag=e=>{
    if(mapDragging&&e&&e.pointerId!=null){try{svg.releasePointerCapture(e.pointerId);}catch(err){}}
    mapDragging=false;svg.classList.remove('dragging');mapPointerId=null;
    setTimeout(()=>{mapDragMoved=false;},0);
  };
  svg.addEventListener('pointerup',endDrag);
  svg.addEventListener('pointercancel',endDrag);
  svg.addEventListener('pointerleave',endDrag);
}
let pendingConquest=null,pendingRename=null;

function oc(){return G.territories.filter(t=>t.owned).length;}

// ── SETUP ──
function buildTerGrid(){
  document.getElementById('tergrid').innerHTML=TERRITORIES.map((t,i)=>
    `<div class="tso ${i===0?'sel':''}" data-id="${t.id}" onclick="selST(this,'${t.id}')">${t.flag} ${t.name}</div>`).join('');
  G._st='br';
}
buildTerGrid();
function selST(el,id){document.querySelectorAll('.tso').forEach(x=>x.classList.remove('sel'));el.classList.add('sel');G._st=id;}

document.querySelectorAll('#govgrid .gbox').forEach(el=>el.addEventListener('click',()=>{document.querySelectorAll('#govgrid .gbox').forEach(x=>x.classList.remove('sel'));el.classList.add('sel')}));
document.querySelectorAll('#diffgrid .gbox').forEach(el=>el.addEventListener('click',()=>{document.querySelectorAll('#diffgrid .gbox').forEach(x=>x.classList.remove('sel'));el.classList.add('sel')}));

function startGame(){
  const s={
    empire:document.getElementById('sempire').value.trim()||'The Purrific Empire',
    gov:document.querySelector('#govgrid .gbox.sel').dataset.v,
    diff:document.querySelector('#diffgrid .gbox.sel').dataset.v,
    st:G._st||'br',
  };
  initGame(s);showScreen('game');render();
  addLog(`${s.empire} is declared! The feline uprising begins in ${G.territories.find(t=>t.id===s.st).name}.`,'ev');
}

// ── INIT ──
function initGame(s){
  // Base tokens
  let maxAct=5,maxMeme=5;
  if(s.gov==='Kingdom') maxAct=6;
  if(s.gov==='Republic') maxMeme=6;
  if(s.gov==='Empire') maxAct=6;
  if(s.gov==='Chaos'){maxAct=7;maxMeme=7;}

  G={
    turn:1,fish:120,catnip:5,catnipRate:1,yarn:25,yarnRate:2,prestige:10,happiness:80,
    catPop:20,catPopCap:50,catPopGrowth:2,
    prodBonus:0,atkBonus:0,flatAtk:0,taxBonus:0,dipBonus:0,prestigeBonus:0,yarnBonus:0,popBonus:0,
    spaceUnlocked:false,skipAtk:false,
    alliances:0,peaceDone:0,renames:0,rebellions:0,memeUsed:0,perfectWins:0,
    battlesWon:0,territoryLosses:0,blitzTurn:null,hadLowHappiness:false,winType:null,
    actTokens:maxAct,maxAct:maxAct,memeTokens:maxMeme,maxMeme:maxMeme,
    empireName:s.empire,gov:s.gov,diff:s.diff,
    territories:TERRITORIES.map(t=>({...t,owned:t.id===s.st,relation:'neutral',atWar:false,displayName:t.name,memeDebuff:0,warTurns:0})),
    units:UNITS.map(u=>({...u,count:u.id==='house'?5:0})),
    buildings:BUILDINGS.map(b=>({...b,level:0})),
    techs:TECHS.map(t=>({...t})),
    achievements:ACHIEVEMENTS.map(a=>({...a})),
    council:COUNCIL_MEMBERS.map(c=>({...c})),
    log:[],selectedTer:null,won:false,lost:false,pendingInvasions:[],
  };
  applyGovTrait();
  setupMap();
}

function applyGovTrait(){
  const g=G.gov;
  if(g==='Kingdom') G.atkBonus+=.15;
  if(g==='Republic') G.prodBonus+=.15;
  if(g==='Empire') G.flatAtk+=4;
}

// ══════════════════════════════════════════════
// MAP
// ══════════════════════════════════════════════
let mapZoomPanReady=false;
function setupMap(){
  document.querySelectorAll('.cpth').forEach(p=>{
    const id=p.dataset.id;if(!id)return;
    p.addEventListener('click',()=>{if(mapDragMoved){mapDragMoved=false;return;}selectTer(id);});
    p.addEventListener('mouseenter',e=>showTT(id,e));
    p.addEventListener('mouseleave',hideTT);
    p.addEventListener('mousemove',moveTT);
  });
  if(!mapZoomPanReady){setupMapZoomPan();mapZoomPanReady=true;}
}

function updateMapColors(){
  G.territories.forEach(t=>{
    const p=document.getElementById('svg-'+t.id);if(!p)return;
    let cls='cpth ';
    if(t.owned) cls+='owned';
    else if(t.atWar) cls+='at-war';
    else if(t.relation==='allied') cls+='allied';
    else if(t.relation==='trade') cls+='trade';
    else if(t.relation==='enemy') cls+='enemy';
    else cls+='neutral';
    if(G.selectedTer===t.id) cls+=' sel';
    p.className.baseVal=cls;
  });
}

function selectTer(id){
  const t=G.territories.find(x=>x.id===id);if(!t)return;
  G.selectedTer=id;updateMapColors();
  if(!t.owned) openActionModal(t);
}

function openActionModal(t){
  const myP=calcMyPow();const theirP=t.army;
  const wc=calcWC(myP,theirP);
  document.getElementById('am-ico').innerHTML=t.flag;
  document.getElementById('am-ttl').textContent=`${t.displayName}${t.displayName!==t.name?' ('+t.name+')':''}`;
  document.getElementById('am-txt').textContent=
    `Army: ${theirP}${t.memeDebuff>0?' (-'+t.memeDebuff+' from memes)':''}\nYour power: ${myP} | Win chance: ~${wc}%\nFish income: +${t.fish}/turn\nRelation: ${relL(t.relation)}`;
  document.getElementById('am-fx').innerHTML=
    `<i class="bi bi-lightning-charge-fill"></i> Action: ${G.actTokens}/${G.maxAct} remaining | <i class="bi bi-chat-heart-fill"></i> Memes: ${G.memeTokens}/${G.maxMeme} remaining`;

  const btns=document.getElementById('am-btns');
  const isAllied=t.relation==='allied';
  const warDis=G.actTokens<=0||G.skipAtk||isAllied;
  const memeDis=G.memeTokens<=0;
  const dipDis=G.actTokens<=0||!t.atWar;
  const neutralDipDis=G.actTokens<=0||t.atWar||isAllied;

  let warReason='No tokens';
  if(isAllied) warReason="Can't attack an ally";
  else if(G.skipAtk) warReason='Red Dot!';

  btns.innerHTML=`
    <button class="abtn red" onclick="initBattle('${t.id}')" ${warDis?'disabled':''}><i class="bi bi-shield-fill-check"></i> Declare Meow${warDis?'<br><span style="font-size:9px">'+warReason+'</span>':''}</button>
    <button class="abtn pink" onclick="useMeme('${t.id}')" ${memeDis?'disabled':''}><i class="bi bi-chat-heart-fill"></i> Cat Meme<br><span style="font-size:9px">${memeDis?'No memes':'Weakens army'}</span></button>
    ${t.atWar
      ?`<button class="abtn blue" onclick="doNegotiate('${t.id}')" ${dipDis?'disabled':''}><i class="bi bi-peace"></i> Negotiate Peace<br><span style="font-size:9px">${dipDis?'No tokens':'End the war'}</span></button>`
      :isAllied
      ?`<button class="abtn blue" disabled><i class="bi bi-handshake"></i> Alliance<br><span style="font-size:9px">Already allied</span></button>`
      :`<button class="abtn blue" onclick="dipAction('${t.id}','ally')" ${neutralDipDis?'disabled':''}><i class="bi bi-handshake"></i> Alliance<br><span style="font-size:9px">${neutralDipDis?'No tokens':'Costs 1 action'}</span></button>`
    }
    <button class="abtn gray" onclick="closeM('am')"><i class="bi bi-x-lg"></i> Cancel</button>`;
  document.getElementById('am').classList.add('show');
}

function showTT(id,e){
  const t=G.territories.find(x=>x.id===id);if(!t)return;
  document.getElementById('mtt-name').innerHTML=t.flag+' '+t.displayName+(t.displayName!==t.name?' ('+t.name+')':'');
  document.getElementById('mtt-pop').textContent=t.pop;
  document.getElementById('mtt-fish').textContent=t.fish;
  document.getElementById('mtt-army').textContent=t.owned?'—':t.army+(t.memeDebuff>0?' (debuffed)':'');
  document.getElementById('mtt-status').innerHTML=t.owned?'<i class="bi bi-check-circle-fill"></i> Yours':t.atWar?'<i class="bi bi-shield-fill-check"></i> At War':relL(t.relation);
  document.getElementById('mtt').style.display='block';moveTT(e);
}
function moveTT(e){
  const g=document.getElementById('game').getBoundingClientRect();
  const tt=document.getElementById('mtt');
  let x=e.clientX-g.left+12,y=e.clientY-g.top-35;
  if(x+155>g.width)x-=165;
  tt.style.left=x+'px';tt.style.top=y+'px';
}
function hideTT(){document.getElementById('mtt').style.display='none';}
function relL(r){return{neutral:'Neutral',allied:'Allied',enemy:'Enemy',pact:'Non-Aggression Pact',trade:'Trade Partner'}[r]||r;}

// ══════════════════════════════════════════════
// ACTIONS
// ══════════════════════════════════════════════
function spendAct(){G.actTokens=Math.max(0,G.actTokens-1);renderTokens();}
function spendMeme(){G.memeTokens=Math.max(0,G.memeTokens-1);renderTokens();}

function useMeme(id){
  if(G.memeTokens<=0)return;
  const t=G.territories.find(x=>x.id===id);if(!t||t.owned)return;
  spendMeme();G.memeUsed++;
  const debuff=Math.floor(t.army*.12)+2;
  t.army=Math.max(1,t.army-debuff);
  t.memeDebuff=(t.memeDebuff||0)+debuff;
  addLog(`<i class="bi bi-emoji-laughing-fill"></i> Meme sent to ${t.displayName}! Army weakened by ${debuff}.`,'ev');
  closeM('am');render();
}

function dipAction(id,action){
  if(G.actTokens<=0)return;
  const t=G.territories.find(x=>x.id===id);if(!t||t.owned||t.atWar)return;
  if(action==='ally'&&t.relation==='allied'){addLog(`Already allied with ${t.displayName}!`,'ev');return;}
  spendAct();
  const base={ally:35,trade:55,pact:50}[action]||35;
  const ok=Math.random()*100<Math.min(92,base+(G.dipBonus*60)+(G.prestige/3));
  if(ok){
    t.relation={ally:'allied',trade:'trade',pact:'pact'}[action];
    if(action==='ally'){G.alliances++;G.prestige+=5;G.fish+=15;}
    if(action==='trade') G.fish+=10;
    addLog(`${action} with ${t.displayName} established!`,'good');
  } else addLog(`${t.displayName} rejected the ${action} offer.`,'bad');
  closeM('am');renderDiplomacy();renderTopbar();
}

function doNegotiate(id){
  if(G.actTokens<=0)return;
  const t=G.territories.find(x=>x.id===id);if(!t||t.owned||!t.atWar)return;
  spendAct();
  const base=40+(G.dipBonus*60)+(G.prestige/4);
  const ok=Math.random()*100<Math.min(85,base);
  if(ok){
    t.atWar=false;t.relation='neutral';t.warTurns=0;G.peaceDone++;G.prestige+=3;
    addLog(`Peace negotiated with ${t.displayName}!`,'good');
  } else addLog(`${t.displayName} refused peace. The war continues.`,'bad');
  closeM('am');renderDiplomacy();render();
}

// ══════════════════════════════════════════════
// BATTLE
// ══════════════════════════════════════════════
let battleMode='attack',battleDefendTargetId=null,battleInvaderId=null,battleInvasionForce=0;

function initBattle(id){
  if(G.actTokens<=0||G.skipAtk)return;
  const t=G.territories.find(x=>x.id===id);
  if(!t||t.relation==='allied')return;
  pendingConquest=id;battleMode='attack';
  spendAct();closeM('am');
  const myP=calcMyPow();const theirP=t.army;
  startBattleUI(myP,theirP,`Battle for ${t.displayName}!`,
    `Enemy power: ${theirP} vs your ${myP}. Best of 3 rounds.\nHit green zone to win a round. Red zones = instant miss.`);
}

function initDefense(invaderId){
  const invader=G.territories.find(x=>x.id===invaderId);if(!invader)return;
  const owned=G.territories.filter(t=>t.owned);if(owned.length===0)return;
  const target=owned[Math.floor(Math.random()*owned.length)];
  battleMode='defend';battleDefendTargetId=target.id;battleInvaderId=invaderId;
  battleInvasionForce=Math.max(3,Math.ceil(invader.army*0.6));
  const myP=calcMyPow();const theirP=battleInvasionForce;
  document.getElementById('bm').classList.add('show');
  startBattleUI(myP,theirP,`${invader.displayName} invades ${target.displayName}!`,
    `Invasion force: ${theirP} vs your defense: ${myP}. Best of 3 rounds.\nHit green zone to defend. Red zones = instant miss.\nLose and ${target.displayName} falls to the invaders!`);
}

function startBattleUI(myP,theirP,titleText,descText){
  const ratio=theirP/Math.max(1,myP);
  // Speed scales with difficulty ratio: harder enemy = faster bar
  const diffMult={kitten:.8,tomcat:1.2,lion:1.8}[G.diff]||1.2;
  bSpd=Math.max(0.8,Math.min(4.5, (0.9+ratio*1.2)*diffMult));

  // Unit composition affects the minigame itself:
  // Void Cats (stealth) shrink the danger zones; Maine Coon Guards (heavy armor) widen the safe zone.
  const voidCount=G.units.find(u=>u.id==='void').count;
  const maineCount=G.units.find(u=>u.id==='maine').count;
  const voidFrac=Math.min(.55,voidCount*0.02);
  const maineFrac=Math.min(.5,maineCount*0.015);
  bDangerW=Math.max(4,12*(1-voidFrac));

  // Zone size: bigger zone = easier (powerful army vs weak enemy), boosted by Maine Coon Guards
  let zSize=Math.min(36,Math.max(10,32-ratio*10));
  zSize=Math.min(46,zSize*(1+maineFrac));
  const zLeft=10+Math.random()*(60-zSize);

  document.getElementById('b-danger').style.width=bDangerW+'%';
  document.getElementById('b-danger2').style.width=bDangerW+'%';
  document.getElementById('b-zone').style.left=zLeft+'%';
  document.getElementById('b-zone').style.width=zSize+'%';
  document.getElementById('b-ttl').textContent=titleText;
  let compNote='';
  if(voidFrac>0||maineFrac>0){
    const notes=[];
    if(voidFrac>0)notes.push('Void Cats shrink the danger zones');
    if(maineFrac>0)notes.push('Maine Coon Guards widen the safe zone');
    compNote='\n'+notes.join('. ')+'.';
  }
  document.getElementById('b-desc').textContent=descText+compNote;
  document.getElementById('b-speed-info').innerHTML=
    `Bar speed: ${bSpd<1.2?'<i class="bi bi-hourglass-split"></i> Slow (you outpower them)':bSpd<2.2?'<i class="bi bi-lightning-charge-fill"></i> Medium':'<i class="bi bi-rocket-fill"></i> Fast (they outpower you)'}`;
  document.getElementById('b-rounds').innerHTML='<div class="brnd" id="br0"></div><div class="brnd" id="br1"></div><div class="brnd" id="br2"></div>';
  bPos=0;bDir=1;bRound=0;bWins=0;bLosses=0;bActive=true;

  // Power edge: overwhelming force auto-wins the first round; being badly
  // outmatched auto-loses it. This makes recruiting an army matter directly,
  // not just for bar speed/zone size.
  const powerEdge=myP/Math.max(1,theirP);
  if(powerEdge>=2.5){
    bWins++;const ri=document.getElementById('br0');ri.innerHTML='<i class="bi bi-check-lg"></i>';ri.className='brnd w';
    bRound=1;
    document.getElementById('b-res').textContent='Your army overwhelms them! Free round win.';
  }else if(powerEdge<=0.4){
    bLosses++;const ri=document.getElementById('br0');ri.innerHTML='<i class="bi bi-x-lg"></i>';ri.className='brnd l';
    bRound=1;
    document.getElementById('b-res').textContent='Their army overwhelms yours! Free round loss.';
  }else{
    document.getElementById('b-res').textContent='';
  }
  document.getElementById('b-rnum').textContent=bRound+1;
  document.getElementById('b-btn').disabled=false;
  document.getElementById('bm').classList.add('show');
  if(bInt) clearInterval(bInt);
  bInt=setInterval(()=>{
    if(!bActive)return;
    bPos+=bDir*bSpd;
    if(bPos>=100){bPos=100;bDir=-1;}
    if(bPos<=0){bPos=0;bDir=1;}
    document.getElementById('b-fill').style.width=bPos+'%';
    // Color feedback
    const zone=document.getElementById('b-zone');
    const zl=parseFloat(zone.style.left),zw=parseFloat(zone.style.width);
    const inZone=bPos>=zl&&bPos<=(zl+zw);
    const dangerL=bPos<=bDangerW||bPos>=(100-bDangerW);
    document.getElementById('b-fill').style.background=dangerL?'#cc2222':inZone?'#00cc44':'#ffd700';
  },18);
}

function battleClick(){
  if(!bActive||bRound>=3)return;
  const zone=document.getElementById('b-zone');
  const zl=parseFloat(zone.style.left),zw=parseFloat(zone.style.width);
  const inZone=bPos>=zl&&bPos<=(zl+zw);
  const danger=bPos<=bDangerW||bPos>=(100-bDangerW);
  const hit= !danger && inZone;
  const ri=document.getElementById('br'+bRound);
  if(hit){bWins++;ri.innerHTML='<i class="bi bi-check-lg"></i>';ri.className='brnd w';document.getElementById('b-res').textContent='HIT! Purrfect strike!';}
  else if(danger){bLosses++;ri.innerHTML='<i class="bi bi-exclamation-triangle-fill"></i>';ri.className='brnd l';document.getElementById('b-res').textContent='DANGER ZONE! Heavy losses!';}
  else{bLosses++;ri.innerHTML='<i class="bi bi-x-lg"></i>';ri.className='brnd l';document.getElementById('b-res').textContent='Missed! The cats were distracted...';}
  bRound++;
  if(bRound>=3){bActive=false;clearInterval(bInt);setTimeout(resolveBattle,700);}
  else{
    document.getElementById('b-rnum').textContent=bRound+1;
    // Shift zone each round
    const nz=document.getElementById('b-zone');
    const nzw=parseFloat(nz.style.width);
    nz.style.left=(10+Math.random()*(60-nzw))+'%';
  }
}

function resolveBattle(){
  closeM('bm');
  if(battleMode==='defend'){resolveDefense();return;}
  const t=G.territories.find(x=>x.id===pendingConquest);
  const win=bWins>=2;
  if(win){
    t.owned=true;t.atWar=false;t.memeDebuff=0;t.warTurns=0;
    const perfect=bWins===3;
    if(perfect) G.perfectWins++;
    G.battlesWon++;
    const lossRate=perfect?.04:bWins===2?.12:.0;
    const loss=Math.floor(G.units.reduce((a,u)=>a+u.count,0)*lossRate);
    distributeLosses(loss);
    G.fish+=15;G.prestige+=Math.floor(6*(1+G.prestigeBonus));
    addLog(`Victory! Conquered ${t.displayName}${perfect?' (Perfect!3-0)':''}. Lost ${loss} units.`,'good');
    setTimeout(()=>offerRename(t),300);
  } else {
    t.atWar=true;if(!t.warTurns)t.warTurns=0;
    const loss=Math.floor(G.units.reduce((a,u)=>a+u.count,0)*.16);
    distributeLosses(loss);G.prestige=Math.max(0,G.prestige-5);
    addLog(`Defeat at ${t.displayName}! Lost ${loss} units. Still at war.`,'bad');
    render();
  }
}

function resolveDefense(){
  const target=G.territories.find(x=>x.id===battleDefendTargetId);
  const invader=G.territories.find(x=>x.id===battleInvaderId);
  const win=bWins>=2;
  if(!target||!invader){showNextInvasion();return;}
  if(win){
    invader.army=Math.max(1,invader.army-battleInvasionForce);
    invader.warTurns=0;
    G.battlesWon++;
    const perfect=bWins===3;
    const lossRate=perfect?.02:.08;
    const loss=Math.floor(G.units.reduce((a,u)=>a+u.count,0)*lossRate);
    distributeLosses(loss);
    G.prestige+=Math.floor(4*(1+G.prestigeBonus));
    addLog(`Repelled the invasion at ${target.displayName}! ${invader.displayName}'s force was crushed.`,'good');
  } else {
    target.owned=false;target.atWar=true;target.warTurns=0;target.relation='enemy';
    target.army=Math.max(4,battleInvasionForce);target.memeDebuff=0;
    G.territoryLosses++;
    const loss=Math.floor(G.units.reduce((a,u)=>a+u.count,0)*.2);
    distributeLosses(loss);G.prestige=Math.max(0,G.prestige-8);
    addLog(`${target.displayName} has fallen to ${invader.displayName}'s invasion!`,'bad');
  }
  render();
  if(!checkGameOver()) showNextInvasion();
}

function showNextInvasion(){
  if(!G.pendingInvasions||G.pendingInvasions.length===0)return;
  if(oc()<=0)return;
  const next=G.pendingInvasions.shift();
  setTimeout(()=>initDefense(next.invaderId),350);
}


// ══════════════════════════════════════════════
// RENAME
// ══════════════════════════════════════════════
function offerRename(t){
  pendingRename=t.id;
  document.getElementById('rn-ttl').textContent=`Rename ${t.name}?`;
  document.getElementById('rn-grid').innerHTML=t.puns.map(p=>
    `<div class="rnopt" onclick="selRename(this,'${p.replace(/'/g,"\\'")}')">${p}</div>`).join('');
  document.getElementById('rn-inp').value='';
  document.getElementById('rnm').classList.add('show');
}
function selRename(el,n){
  document.querySelectorAll('.rnopt').forEach(x=>x.classList.remove('sel'));
  el.classList.add('sel');
  document.getElementById('rn-inp').value=n;
}
function confirmRename(){
  const n=document.getElementById('rn-inp').value.trim();
  if(n&&pendingRename){
    const t=G.territories.find(x=>x.id===pendingRename);
    t.displayName=n;G.renames++;
    addLog(`Renamed ${t.name} → ${n}!`,'ev');
  }
  closeM('rnm');pendingRename=null;render();
}

// ══════════════════════════════════════════════
// ECONOMY
// ══════════════════════════════════════════════
function calcFishIncome(){
  const own=G.territories.filter(t=>t.owned);
  let base=own.reduce((a,t)=>a+t.fish,0);
  const f=G.buildings.find(b=>b.id==='fishery');if(f) base+=f.level*f.pAmt;
  const orb=G.buildings.find(b=>b.id==='orbital');if(orb&&orb.level) base+=20;
  return Math.floor(base*(1+G.prodBonus)*(1+G.taxBonus));
}

function calcMyPow(){
  const unitPow=G.units.reduce((a,u)=>a+(u.count*(u.attack+G.flatAtk)),0);
  const fort=G.buildings.find(b=>b.id==='fortress');
  const fortDef=fort?fort.level*6:0;
  // Cat pop gives minor bonus
  const popBonus=Math.floor(G.catPop/20);
  return Math.floor((unitPow+fortDef+popBonus)*(1+G.atkBonus));
}

function calcWC(my,their){return Math.min(90,Math.max(10,Math.round(my/(my+their)*100)));}

function distributeLosses(n){
  let r=n;
  for(const u of G.units){if(r<=0)break;const take=Math.min(u.count,Math.ceil(r/2));u.count-=take;r-=take;}
}

// ══════════════════════════════════════════════
// END TURN
// ══════════════════════════════════════════════
function endTurn(){
  G.turn++;const news=[];

  // Income
  const fi=calcFishIncome();G.fish+=fi;
  const cel=G.buildings.find(b=>b.id==='cellar');
  G.catnip+=G.catnipRate+(cel?cel.level*cel.pAmt:0);
  const yf=G.buildings.find(b=>b.id==='yarn');
  const yi=(yf?yf.level*yf.pAmt:0)+G.yarnBonus;G.yarn+=Math.max(0,yi);
  const yarnUpkeep=2+Math.floor(oc()*0.5);
  G.yarn=Math.max(0,G.yarn-yarnUpkeep);

  // Cat population growth
  const tw=G.buildings.find(b=>b.id==='tower');
  const cat=G.buildings.find(b=>b.id==='cattery');
  G.catPopCap=50+(cat?cat.level*20:0)+(G.territories.filter(t=>t.owned).length*5);
  const growAmt=Math.floor((G.catPopGrowth+(tw?tw.level*2:0))*(1+G.popBonus));
  if(G.catPop<G.catPopCap) G.catPop=Math.min(G.catPopCap,G.catPop+growAmt);

  // Happiness
  if(G.yarn>5) G.happiness=Math.min(100,G.happiness+2);
  else{
    G.happiness=Math.max(0,G.happiness-6);
    const ownedNow=G.territories.filter(t=>t.owned);
    if(Math.random()<0.3&&ownedNow.length>0){
      const t=ownedNow[Math.floor(Math.random()*ownedNow.length)];
      t.owned=false;t.relation='enemy';t.atWar=true;t.warTurns=0;t.army=Math.floor(t.pop*.7);G.rebellions++;
      news.push({t:'<i class="bi bi-exclamation-triangle-fill"></i> Yarn Shortage Riots!',b:`Without yarn to keep them calm, the cats of ${t.displayName} have revolted and broken away from the empire!`});
      addLog(`Yarn shortage triggered a revolt! Lost ${t.displayName}!`,'bad');
    } else {
      const l=Math.floor(G.units.reduce((a,u)=>a+u.count,0)*.05);
      if(l>0){
        distributeLosses(l);
        news.push({t:'<i class="bi bi-exclamation-triangle-fill"></i> Yarn Shortage',b:`Without yarn to keep them calm, ${l} units deserted the army.`});
      }else{
        news.push({t:'<i class="bi bi-exclamation-triangle-fill"></i> Yarn Shortage',b:'Citizens growing restless without yarn.'});
      }
    }
  }

  // Prestige
  G.prestige+=Math.floor(oc()*0.5*(1+G.prestigeBonus));

  // Council ticks
  G.council.filter(c=>c.active).forEach(c=>{try{c.tick();}catch(e){}});

  // AI: human nations grow armies
  const gr={kitten:.04,tomcat:.11,lion:.2}[G.diff];
  let coalition=false;
  G.territories.filter(t=>!t.owned).forEach(t=>{
    if(Math.random()<gr) t.army=Math.ceil(t.army*(1+gr*.7));
    if(G.diff==='lion'&&oc()>14&&Math.random()<.06) coalition=true;
    if(t.memeDebuff>0) t.memeDebuff=Math.max(0,t.memeDebuff-1);
  });
  if(coalition){
    G.territories.filter(t=>!t.owned&&t.army<18).forEach(t=>t.army+=4);
    news.push({t:'<i class="bi bi-globe-americas"></i> Human Coalition!',b:'Nations are uniting against '+G.empireName+'!'});
  }

  // War escalation: nations at war too long launch invasions of your territory
  const invasionThreshold={kitten:4,tomcat:3,lion:2}[G.diff];
  G.territories.filter(t=>!t.owned&&t.atWar).forEach(t=>{
    t.warTurns=(t.warTurns||0)+1;
    if(t.warTurns>=invasionThreshold&&oc()>0){
      G.pendingInvasions.push({invaderId:t.id});
      t.warTurns=0;
    }
  });

  // Human-declared wars
  const warDecChance={kitten:.04,tomcat:.09,lion:.18}[G.diff];
  const ownedFrac=oc()/40;
  G.territories.filter(t=>!t.owned&&!t.atWar&&t.army>8).forEach(t=>{
    const aggression=warDecChance*(1+ownedFrac*2)*(G.happiness<50?1.4:1);
    if(Math.random()<aggression){
      t.atWar=true;t.warTurns=0;
      // They raid fish income
      const raid=Math.floor(t.army*0.4);
      G.fish=Math.max(0,G.fish-raid);
      news.push({t:'<i class="bi bi-lightning-charge-fill"></i> '+t.displayName+' Declares War!',
        b:t.displayName+' has declared war on '+G.empireName+'! They raided '+raid+' fish. Retaliate or negotiate, or they will invade in a few turns.'});
      addLog(t.displayName+' declared war on you! -'+raid+' fish','bad');
    }
  });

  // Allied nations help out
  G.territories.filter(t=>!t.owned&&t.relation==='allied').forEach(t=>{
    const tribute=Math.ceil(t.fish*0.3);
    G.fish+=tribute;
    if(Math.random()<0.15){
      const enemies=G.territories.filter(x=>!x.owned&&x.atWar);
      if(enemies.length){
        const e=enemies[Math.floor(Math.random()*enemies.length)];
        const r=Math.max(1,Math.ceil(e.army*.08));
        e.army=Math.max(1,e.army-r);
        addLog(`${t.displayName} sent reinforcements against ${e.displayName}! Their army -${r}.`,'good');
      }
    }
  });

  // Rebellions
  G.territories.filter(t=>t.owned).forEach(t=>{
    const rc=G.happiness<40?.09:G.happiness<60?.03:.01;
    if(Math.random()<rc){
      t.owned=false;t.relation='enemy';t.army=Math.floor(t.pop*.9);t.warTurns=0;G.rebellions++;
      news.push({t:`<i class="bi bi-fire"></i> Rebellion! ${t.displayName}`,b:`The cats of ${t.displayName} have overthrown imperial rule!`});
      addLog(`Rebellion! Lost ${t.displayName}!`,'bad');
    }
  });

  // Random events
  const evChance=G.gov==='Chaos'?.38:.2;
  if(Math.random()<evChance){const e=RANDOM_EVENTS[Math.floor(Math.random()*RANDOM_EVENTS.length)];e.apply();news.push({t:e.icon+' '+e.name,b:e.text});}
  if(Math.random()<.12){const e=RANDOM_EVENTS[Math.floor(Math.random()*RANDOM_EVENTS.length)];e.apply();news.push({t:e.icon+' '+e.name,b:e.text});}

  // Army desertion
  if(G.happiness<30){const l=Math.floor(G.units.reduce((a,u)=>a+u.count,0)*.06);if(l>0){distributeLosses(l);news.push({t:'<i class="bi bi-emoji-frown-fill"></i> Mass Desertion',b:`${l} units deserted due to low morale.`});}}

  // Refill tokens
  G.actTokens=G.maxAct;G.memeTokens=G.maxMeme;
  G.skipAtk=false;

  checkAch();render();checkVictory();
  addLog(`Turn ${G.turn}: +${fi} fish, cats: ${G.catPop}/${G.catPopCap}`);
  if(!checkGameOver()) showNews(news);
}

// ══════════════════════════════════════════════
// BUILDINGS / UNITS / TECH
// ══════════════════════════════════════════════
function buyBuilding(id){
  const b=G.buildings.find(x=>x.id===id);if(!b||b.level>=b.max)return;
  const cost=b.costBase+b.level*b.costPer;
  if(G.fish<cost){addLog('Not enough fish!','bad');return;}
  G.fish-=cost;b.level++;addLog(`${b.name} → Lv${b.level}`,'good');
  renderTopbar();renderEmpire();
}

function recruitUnit(id){
  const u=G.units.find(x=>x.id===id);if(!u)return;
  if(u.id==='space'&&!G.spaceUnlocked){addLog('Research Space Exploration first!','bad');return;}
  const cost=G.council.find(c=>c.id==='general'&&c.active)?Math.floor(u.cost*.9):u.cost;
  if(G.fish<cost){addLog('Not enough fish!','bad');return;}
  if(G.catPop<u.catCost){addLog(`Need ${u.catCost} cat population! Build Cat Towers.`,'bad');return;}
  if(u.catnipCost&&G.catnip<u.catnipCost){addLog(`Need ${u.catnipCost} catnip! Build a Catnip Cellar.`,'bad');return;}
  G.fish-=cost;G.catPop-=u.catCost;if(u.catnipCost)G.catnip-=u.catnipCost;u.count++;
  if(u.id==='orange'&&Math.random()<.3){
    const q=['knocked something off the war table.','deleted a map. Nobody knows which one.','is now leading a platoon. Pray.'];
    addLog('Orange Cat '+q[Math.floor(Math.random()*q.length)],'ev');
  }
  if(u.id==='spy'){u.count--;G.catPop+=u.catCost;
    const enemy=G.territories.filter(t=>!t.owned);
    if(enemy.length){const t=enemy[Math.floor(Math.random()*enemy.length)];const r=Math.ceil(t.army*.1);t.army=Math.max(1,t.army-r);addLog(`Shadow Paw Spy infiltrated ${t.displayName}! Army -${r}.`,'good');}
    return;
  }
  renderTopbar();renderEmpire();
}

function doResearch(id){
  const t=G.techs.find(x=>x.id===id);if(!t||t.done)return;
  if(G.fish<t.cost){addLog('Not enough fish!','bad');return;}
  G.fish-=t.cost;t.done=true;t.apply();
  addLog(`Researched: ${t.name}!`,'good');
  renderTopbar();renderResearch();
}

// ══════════════════════════════════════════════
// RENDER
// ══════════════════════════════════════════════
function render(){
  updateMapColors();renderTopbar();renderTokens();
  if(G.blitzTurn==null&&oc()>=20) G.blitzTurn=G.turn;
  if(G.happiness<=5) G.hadLowHappiness=true;
  checkAch();
}

function renderTopbar(){
  const fi=calcFishIncome();
  document.getElementById('rulerbadge').innerHTML=`<i class="bi bi-shield-fill-check"></i> ${G.empireName} · ${G.gov}`;
  document.getElementById('r-fish').textContent=G.fish;
  document.getElementById('r-firate').textContent=`+${fi}`;
  document.getElementById('r-cats').textContent=`${G.catPop}/${G.catPopCap}`;
  document.getElementById('r-catnip').textContent=G.catnip;
  document.getElementById('r-yarn').textContent=G.yarn;
  document.getElementById('r-prestige').textContent=G.prestige;
  document.getElementById('r-happy').textContent=G.happiness;
  document.getElementById('r-happy').style.color=G.happiness<40?'#e05a5a':G.happiness<60?'#ffd700':'#5bd671';
  document.getElementById('r-ter').textContent=oc();
  document.getElementById('r-turn').textContent=G.turn;
}

function renderTokens(){
  document.getElementById('act-tokens').innerHTML=
    Array.from({length:G.maxAct},(_,i)=>`<span class="tok act ${i>=G.actTokens?'used':''}"></span>`).join('');
  document.getElementById('meme-tokens').innerHTML=
    Array.from({length:G.maxMeme},(_,i)=>`<span class="tok meme ${i>=G.memeTokens?'used':''}"></span>`).join('');
}

function showTab(id,el){
  document.querySelectorAll('.stab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  el.classList.add('active');
  if(id==='empire') renderEmpire();
  else if(id==='research') renderResearch();
  else if(id==='diplomacy') renderDiplomacy();
  else if(id==='council') renderCouncil();
  else if(id==='achievements') renderAch();
}

function renderEmpire(){
  document.getElementById('bld-list').innerHTML=G.buildings.map(b=>{
    const cost=b.costBase+b.level*b.costPer;const max=b.level>=b.max;
    return`<div class="card ${max?'maxed':''}" onclick="buyBuilding('${b.id}')">
      <span style="font-size:1rem">${b.emoji}</span> <span class="cn">${b.name}</span>
      <div class="cg">Lv ${b.level}/${b.max}</div>
      <div class="cs">${b.effect}</div>
      ${max?`<div class="cc" style="color:#3a7a3a">Maxed</div>`:`<div class="cc">Cost: ${cost} ${ICO_FISH}</div>`}
    </div>`;}).join('');
  document.getElementById('unit-list').innerHTML=G.units.map(u=>{
    const isSpy=u.id==='spy';
    const locked=u.id==='space'&&!G.spaceUnlocked;
    const catOk=G.catPop>=u.catCost;
    return`<div class="card">
      <span style="font-size:1rem">${u.emoji}</span> <span class="cn">${u.name}${isSpy?' (Active)':''}</span>
      <div class="cg">${isSpy?'One-time use — deploys spy':'Count: '+u.count}</div>
      <div class="cg" style="font-size:9px">ATK ${u.attack+G.flatAtk} · DEF ${u.defense} · ${u.desc}</div>
      <div class="cc">Cost: ${u.cost}${ICO_FISH} + ${u.catCost}${ICO_PAW} pop${u.catnipCost?' + '+u.catnipCost+'<i class="bi bi-flower2"></i>':''}</div>
      ${locked?`<button class="btn-sm" disabled>Research needed</button>`
        :!catOk?`<button class="btn-sm" disabled>Need ${u.catCost} cat pop</button>`
        :`<button class="btn-sm" onclick="recruitUnit('${u.id}')">${isSpy?'<i class="bi bi-eye-fill"></i> Deploy Spy':'+ Recruit'}</button>`}
    </div>`;}).join('');
}

function renderResearch(){
  document.getElementById('tech-list').innerHTML=G.techs.map(t=>`
    <div class="card ${t.done?'done':''}" onclick="doResearch('${t.id}')">
      <div class="cn">${t.name}</div>
      <div class="cs">${t.effect}</div>
      ${t.done?`<div style="font-size:9px;color:#3a7a3a;margin-top:2px">Researched</div>`:`<div class="cc">${t.cost} ${ICO_FISH}</div>`}
    </div>`).join('');
}

function renderDiplomacy(){
  const wars=G.territories.filter(t=>!t.owned&&t.atWar);
  const invThresh={kitten:4,tomcat:3,lion:2}[G.diff];
  document.getElementById('war-list').innerHTML=wars.length===0
    ?'<div style="color:#444;font-size:10px;padding:4px">No active wars.</div>'
    :wars.map(t=>{
      const turnsLeft=Math.max(0,invThresh-(t.warTurns||0));
      return `<div class="card" style="border-color:#6b1a1a">
        <div class="cn">${t.flag} ${t.displayName}</div>
        <div style="font-size:10px;color:#cc4444"><i class="bi bi-shield-fill-check"></i> At War · Army: ${t.army}</div>
        <div style="font-size:9px;color:#e0a83c"><i class="bi bi-hourglass-split"></i> Invasion in ~${turnsLeft} turn${turnsLeft===1?'':'s'} if unresolved</div>
        <button class="btn-sm" onclick="selectTer('${t.id}')">Open on map</button>
      </div>`;
    }).join('');
  const neutral=G.territories.filter(t=>!t.owned&&!t.atWar).slice(0,10);
  document.getElementById('diplo-list').innerHTML=neutral.length===0
    ?'<div style="color:#3a7a3a;font-size:10px;padding:4px">All free nations are at war or allied.</div>'
    :neutral.map(t=>`
    <div class="card">
      <div class="cn">${t.flag} ${t.displayName}</div>
      <div style="font-size:10px;color:${t.relation==='allied'?'#3a7a3a':t.relation==='enemy'?'#7a3a3a':'#555'}">${relL(t.relation)} · Army: ${t.army}</div>
      <button class="btn-sm" onclick="selectTer('${t.id}')">Interact</button>
    </div>`).join('');
}

function renderCouncil(){
  G.council.forEach(c=>{
    if(c.id==='scientist'&&oc()>=15) c.active=true;
    if(c.id==='minstrel'&&oc()>=20) c.active=true;
  });
  document.getElementById('council-list').innerHTML=G.council.map(c=>`
    <div class="council-member">
      <div class="cm-emoji">${c.emoji}</div>
      <div style="flex:1">
        <div class="cm-name">${c.name}</div>
        <div class="cm-role">${c.role}</div>
        <div class="cm-effect">${c.effect}</div>
        ${c.active
          ?'<div style="font-size:9px;color:#3a7a3a;margin-top:2px">● Active</div>'
          :'<div style="font-size:9px;color:#444;margin-top:2px">○ Locked (own more territories)</div>'}
      </div>
    </div>`).join('');
}

function renderAch(){
  document.getElementById('ach-list').innerHTML=G.achievements.map(a=>`
    <div class="card ${a.done?'done':''}">
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:1.1rem;opacity:${a.done?1:.2}">${a.icon}</span>
        <div>
          <div class="cn" style="color:${a.done?'#ffd700':'#777'}">${a.name}</div>
          <div style="font-size:9px;color:#444;margin-top:1px">${a.desc}</div>
        </div>
        ${a.done?'<span style="margin-left:auto;font-size:9px;color:#3a7a3a">Done</span>':''}
      </div>
    </div>`).join('');
}

function checkAch(){
  G.achievements.forEach(a=>{if(!a.done&&a.check()){a.done=true;addLog('<i class="bi bi-trophy-fill"></i> Achievement: '+a.name+'!','ev');showAchToast(a);}});
}

// Pops a small "Achievement Unlocked" toast in from the top of the screen.
// Multiple simultaneous unlocks stack vertically and each dismisses itself.
function showAchToast(a){
  const wrap=document.getElementById('toast-wrap');
  if(!wrap)return;
  const el=document.createElement('div');
  el.className='ach-toast';
  el.innerHTML=`<span class="at-ico">${a.icon}</span><div><div class="at-ttl">Achievement Unlocked</div><div class="at-name">${a.name}</div></div>`;
  wrap.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('show'));
  setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>el.remove(),300);
  },3200);
}

function showEvent(e){
  e.apply();
  document.getElementById('ev-ico').innerHTML=e.icon;
  document.getElementById('ev-ttl').textContent=e.name;
  document.getElementById('ev-txt').textContent=e.text;
  document.getElementById('ev-fx').innerHTML=e.effect;
  document.getElementById('evm').classList.add('show');
  renderTopbar();
}

function showNews(items){
  document.getElementById('news-turn').textContent=G.turn;
  document.getElementById('news-body').innerHTML=items.length===0
    ?'<div class="news-item"><div class="nh"><i class="bi bi-newspaper"></i> All Quiet on the Feline Front</div>Nothing notable this turn. Cats napped loudly.</div>'
    :items.map(n=>`<div class="news-item"><div class="nh">${n.t}</div>${n.b}</div>`).join('');
  document.getElementById('nm').classList.add('show');
}

function addLog(msg,type=''){
  G.log.unshift({msg,type});if(G.log.length>40)G.log.pop();
  document.getElementById('logbar').innerHTML=G.log.slice(0,4).map(l=>`<div class="le ${l.type}">${l.msg}</div>`).join('');
}

function closeM(id){document.getElementById(id).classList.remove('show');}
function closeNews(){closeM('nm');showNextInvasion();}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function checkGameOver(){
  if(G.won||G.lost)return false;
  if(oc()<=0){
    G.lost=true;
    setTimeout(()=>{
      document.getElementById('go-sub').textContent=
        `${G.empireName} has lost its last territory in turn ${G.turn}. The humans have reclaimed the world.`;
      document.getElementById('go-stats').innerHTML=
        '<div class="vs">Turns survived: <span>'+G.turn+'</span></div>'+
        '<div class="vs">Peak prestige: <span>'+G.prestige+'</span></div>'+
        '<div class="vs">Rebellions faced: <span>'+G.rebellions+'</span></div>'+
        '<div class="vs">Perfect battles (3-0): <span>'+G.perfectWins+'</span></div>';
      showScreen('gameover');
    },600);
    return true;
  }
  return false;
}

function checkVictory(){
  if(G.won)return;
  const remaining=G.territories.filter(t=>!t.owned);
  let type=null;
  if(oc()>=40) type='conquest';
  else if(remaining.length>0&&remaining.every(t=>t.relation==='allied')) type='diplomatic';
  else if(G.prestige>=400) type='prestige';
  if(!type)return;
  G.won=true;
  G.winType=type;
  checkAch();
  setTimeout(()=>{
    const titles={
      conquest:'<i class="bi bi-trophy-fill"></i> WORLD DOMINATION ACHIEVED!',
      diplomatic:'<i class="bi bi-handshake"></i> DIPLOMATIC VICTORY!',
      prestige:'<i class="bi bi-gem"></i> PRESTIGE VICTORY!',
    };
    const subs={
      conquest:G.empireName+' has conquered all 40 nations in '+G.turn+' turns.',
      diplomatic:G.empireName+' has united every remaining nation as allies in '+G.turn+' turns, without firing a single shot.',
      prestige:G.empireName+' has become so beloved across the world that all nations bow to its prestige, in '+G.turn+' turns.',
    };
    document.getElementById('vic-title').innerHTML=titles[type];
    document.getElementById('vic-sub').textContent=subs[type];
    document.getElementById('vic-stats').innerHTML=
      '<div class="vs">Empire: <span>'+G.empireName+'</span></div>'+
      '<div class="vs">Fish: <span>'+G.fish+'</span></div>'+
      '<div class="vs">Cat Population: <span>'+G.catPop+'</span></div>'+
      '<div class="vs">Prestige: <span>'+G.prestige+'</span></div>'+
      '<div class="vs">Territories owned: <span>'+oc()+'/40</span></div>'+
      '<div class="vs">Research: <span>'+G.techs.filter(t=>t.done).length+'/13</span></div>'+
      '<div class="vs">Peace deals: <span>'+G.peaceDone+'</span></div>'+
      '<div class="vs">Renamed territories: <span>'+G.renames+'</span></div>'+
      '<div class="vs">Rebellions survived: <span>'+G.rebellions+'</span></div>'+
      '<div class="vs">Memes deployed: <span>'+G.memeUsed+'</span></div>'+
      '<div class="vs">Perfect battles (3-0): <span>'+G.perfectWins+'</span></div>';
    showScreen('victory');
  },600);
}

function restartGame(){showScreen('home');}