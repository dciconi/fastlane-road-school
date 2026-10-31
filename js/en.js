/* ======================================================================
   ENGLISH
   ====================================================================== */
const EN = {
ui:{
  brand:'Fastlane Road School', homeAria:'Fastlane Road School home', exitsCleared:'Exits cleared', route:'Route', routeMap:'Route map', courseRoute:'Course route', langAria:'Language',
  railNote:'Pass each checkpoint quiz to clear an exit. Progress is saved in this browser.',
  foot:'An unofficial study companion to <i>The Millionaire Fastlane</i> (2011) by MJ DeMarco. It summarizes the book\'s ideas in its own words; read the book for the full argument. Educational only, not financial advice.',
  reset:'Reset my progress', resetConfirm:'Click again to erase progress', resetDone:'Progress erased',
  exit:'Exit', min:'min', cleared:'Cleared', notCleared:'Not cleared',
  signs:[['SIDEWALK','Poverty'],['SLOWLANE','Wealth at 65'],['FASTLANE','Wealth in years']],
  gantryAria:'Overhead highway sign: Sidewalk exit to poverty, Slowlane exit to wealth at 65, Fastlane straight ahead to wealth in years',
  lede:'A nine-exit interactive course on the ideas in MJ DeMarco\'s <i>The Millionaire Fastlane</i>: the three roads to wealth, the equations behind them, the CENTS test for a real business and the five systems that can earn without you.',
  start:'Start at Exit 1', cont:n => `Continue at Exit ${n}`, viewLicense:'View your license', meta:'About 80 minutes · 9 checkpoints · 12 tools',
  routeH:'The route', routeSub:'Each exit has a short lesson, a hands-on tool and a checkpoint quiz. Drive them in order.',
  howH:'How the course works', how:[['Read the lesson','Each exit condenses one part of the book into a few minutes of reading, in plain language.'],['Use the tool','Calculators and exercises put your own numbers into the wealth equations and the CENTS test.'],['Clear the checkpoint','Get 2 of 3 quiz questions right to clear an exit. Pass the final exam to earn your license.']],
  exitOf:(n, t, m) => `Exit ${n} of ${t} · ${m} min`,
  checkpoint:'Checkpoint', finalExam:'Final exam', cpNote:'Answer 2 of 3 correctly to clear this exit.', finalNote:'Score 8 of 10 to earn your license.',
  yourLicense:'Your license', licNote:'Your name and plan stay in this browser.', startLbl:'Start', overview:'Course overview', navAria:'Lesson navigation',
  correct:'Correct.', notQuite:'Not quite.', score:(r, n) => `${r} of ${n} correct`, exitCleared:'Exit cleared.', licEarned:'License earned.', need:p => `You need ${p} to clear this exit.`, continueTo:n => `Continue to Exit ${n}`, retake:'Retake',
  lic:{ locked:'<b>License locked.</b> Pass the final exam with 8 or more correct to print your Fastlane driver\'s license here.', nameLbl:'Name on license', namePh:'Your name', top:['Fastlane Road School','Driver license'], aria:'Fastlane driver\'s license',
    name:'Name', cls:'Class', clsVal:'F · Fastlane', no:'DL no.', issued:'Issued', score:'Exam score', exits:'Exits cleared', endorse:'Endorsements', tree:'Money tree', treeNone:'Not chosen yet', act:'First action', actNone:'Add one in the Exit 8 worksheet' }
},
mod:{
'road-trip':{ title:'The Road Trip', sub:'Wealth is a journey, and there are three roads',
body:`
<p class="lede">Most people are handed one map to wealth: work, save, invest, wait. <i>The Millionaire Fastlane</i> argues that this map has a built-in flaw, and that there are really three maps in circulation, each producing a predictable result.</p>
<h3>A Lamborghini and a question</h3>
<p>As a teenager, DeMarco saw a Lamborghini Countach and asked its owner what he did for a living. The owner was young, and the answer was that he was an inventor. That one exchange broke the script DeMarco had been given. Nobody gets rich young by climbing a career ladder or saving 10% of a paycheck. The young rich people he went on to study had built something that earned money for them. The book is his map of how they did it.</p>
<h3>Wealth in a wheelchair</h3>
<p>The conventional plan does work, eventually. Save diligently for forty years and you may retire with a comfortable nest egg. The catch is timing. The plan delivers freedom at the end of your life, when your health, energy and best years are mostly spent. DeMarco calls this <b>wealth in a wheelchair</b>. The question behind this course is how to get freedom while you are young enough to use it.</p>
${key('Key idea', 'Wealth is a process, not an event. Lottery wins, viral hits and big exits are the visible events. Behind every real fortune is a long, unglamorous process of building something the market eventually rewards.')}
<h3>What wealth actually is</h3>
<p>DeMarco defines wealth with three Fs, which he calls the <b>Wealth Trinity</b>:</p>
<ul><li><b>Family:</b> strong relationships, and the time to invest in them.</li><li><b>Fitness:</b> health, energy and vitality.</li><li><b>Freedom:</b> the ability to choose how you spend your days.</li></ul>
<p>Money matters because it buys freedom. A big income that comes with big payments and no free time doesn't count as wealth by this definition.</p>
<h3>The three roadmaps</h3>
<p>Everyone follows one of three financial roadmaps, whether they chose it or not. Each comes with its own mindset and its own math. Pick a road to compare them.</p>
${W('roads')}
<p>The rest of this course drives each road in turn, then gives you the tools to build a Fastlane of your own.</p>`,
quiz:[
 ['What does DeMarco mean by "wealth in a wheelchair"?', ['Wealth that arrives late in life, after decades of saving','Money lost to medical bills','Wealth inherited from older relatives','Income from disability insurance'], 'The conventional plan pays off around retirement age, when much of your health and time is already spent.'],
 ['"Wealth is a process, not an event." Which of these is the process?', ['Winning a lottery jackpot','A stock doubling in one week','Years spent building and improving a product people pay for','Receiving a large year-end bonus'], 'Events are the visible moments. The process is the sustained building that makes those moments possible.'],
 ['Which of these is not part of the Wealth Trinity?', ['Family','Fame','Fitness','Freedom'], 'The trinity is Family, Fitness and Freedom. Fame and status are closer to Sidewalk thinking.']
]},
'sidewalk':{ title:'The Sidewalk', sub:'The default road, and why income alone never saves you',
body:`
<p class="lede">The Sidewalk is the road people end up on by default. There is no plan and no direction, and every raise is absorbed by a bigger lifestyle. It leads to poverty, or to a high income that never turns into freedom.</p>
<h3>Income is not the same as wealth</h3>
<p>Sidewalkers come in every income bracket. The cashier who puts a new phone on a credit card and the surgeon leasing a sports car and a house they can barely afford are on the same road. Both convert income into consumption and debt, so nothing accumulates.</p>
${eq('stop', 'Sidewalk wealth equation', 'Wealth = Income + Debt', '"Wealth" here is whatever a paycheck can buy plus whatever can be borrowed')}
<p>From the outside it looks like wealth: the car, the clothes, the vacations. It disappears the moment the paycheck stops, because none of it produces income. DeMarco draws a sharp line between looking rich and being wealthy.</p>
<h3>Signs you're on the Sidewalk</h3>
<ul>
<li><b>Instant gratification</b> wins most decisions.</li>
<li><b>Debt buys appearances</b> instead of building anything.</li>
<li><b>Money problems get solved with more money</b>, such as a raise, a loan or a windfall, rather than with changed behavior.</li>
<li><b>Hope is pinned on luck:</b> the lottery, a lawsuit, a lucky break.</li>
<li><b>The future is someone else's problem:</b> the boss, the government, the economy.</li>
</ul>
${warn('Caution', 'Looking rich is the most expensive hobby there is. Every dollar spent signalling wealth is a dollar that can no longer buy freedom.')}
<h3>Leaving the Sidewalk</h3>
<p>The exit starts with accountability. Your current position is the sum of your past choices, and your future will be the sum of the next ones. The first practical moves: stop financing lifestyle with debt, delay gratification, and start seeing yourself as a <b>producer</b> of things others buy rather than a <b>consumer</b> of things others sell.</p>
<p>Test your eye. Each statement below comes from one of the three roads.</p>
${W('sorter')}`,
quiz:[
 ['Which equation describes the Sidewalk?', ['Wealth = Primary Income + Market Investments','Wealth = Income + Debt','Wealth = Net Profit + Asset Value','Wealth = Savings × Time'], 'On the Sidewalk, spending power comes from the paycheck plus borrowed money.'],
 ['A doctor earns $400,000 a year, leases a Porsche, carries maxed-out credit lines and has no savings. Which road are they on?', ['Fastlane, because the income is high','Slowlane, because they have a professional job','Sidewalk, because income goes straight to consumption and debt','None of them'], 'Income does not decide the road. What happens to the income does.'],
 ['What is the first step off the Sidewalk?', ['Getting a raise','Taking accountability for your choices','Finding a better boss','Buying fewer lottery tickets'], 'Accountability puts you back in the driver\'s seat. Everything else follows from it.']
]},
'slowlane':{ title:'The Slowlane', sub:'The respectable plan, and the two variables it caps',
body:`
<p class="lede">The Slowlane is the plan you've heard from parents, teachers and financial advisors: get an education, get a good job, save 10%, invest in index funds and your 401(k), live frugally, and retire wealthy at 65. It's a respectable road. DeMarco's complaint is that it is slow by design and controlled by everyone except you.</p>
${eq('warn', 'Slowlane wealth equation', 'Wealth = Primary Income + Market Investments', 'Primary Income = your hourly value × hours worked · Market Investments grow by compound interest')}
<h3>Two capped variables</h3>
<p>Look at what the equation lets you change. <b>Hours worked</b> has a hard ceiling: there are 168 hours in a week, and nobody sells more than 60 to 80 of them for long. <b>Hourly value</b> is capped by your employer, your industry and the market for your skills. A great raise is 10% or 20%. Neither variable can grow a hundredfold.</p>
<h3>Who controls the Slowlane</h3>
<p>Even the variables you can push are in other people's hands. Your employer decides whether you have a job. The market decides what your investments return. Inflation, taxes and recessions decide what the money is worth. A plan that depends on forty uninterrupted years of employment and cooperative markets is hope presented as a strategy.</p>
${warn('The 5-for-2 trade', 'Five days of work for two days of freedom, repeated for four decades, in exchange for the promise of freedom when you are old.')}
${W('week')}
<h3>Compound interest is slow</h3>
<p>Compound interest is powerful with large sums and long horizons. That is exactly the problem: a modest saver needs both, so the payoff lands at the end of the timeline. Compounding is a great accelerator for people who already have money, and a slow one for people who don't. Try it with your own numbers.</p>
${W('slowcalc')}
<p>None of this makes saving and investing bad. The Fastlane uses them too, at the end, once there's a large sum to invest. The mistake is treating them as the engine of wealth instead of the place where wealth is parked.</p>`,
quiz:[
 ['Slowlane primary income is the product of which two variables?', ['Units sold × unit profit','Hourly value × hours worked','Net profit × industry multiple','Savings rate × interest rate'], 'Both are capped: hours by the clock, hourly value by employers and the market for your skills.'],
 ['Why does DeMarco call the Slowlane uncontrollable?', ['Because investing is too complicated','Because employers, markets and the economy decide the outcome','Because 401(k) accounts are illegal in some countries','Because you can\'t choose your job'], 'Your job, your returns and your money\'s value all depend on forces you don\'t control.'],
 ['When is compound interest a strong wealth tool?', ['When you start with $100 a month','When you already have a large sum to invest','When interest rates are near zero','When you check your balance daily'], 'Compounding magnifies what you already have. Large principal plus time is what makes it fast.']
]},
'fastlane':{ title:'The Fastlane', sub:'New variables, the Law of Effection and the money system',
body:`
<p class="lede">The Fastlane is a business and lifestyle strategy built on owning a system that produces income without your direct time. Its goal is wealth in years rather than decades, and it gets there by changing the variables in the wealth equation.</p>
${eq('', 'Fastlane wealth equation', 'Wealth = Net Profit + Asset Value', 'Net Profit = Units Sold × Unit Profit · Asset Value = Net Profit × Industry Multiple')}
<h3>Variables without a ceiling</h3>
<p>Compare this to the Slowlane. <b>Units sold</b> has no ceiling: a product can sell ten copies or ten million. <b>Unit profit</b> is something you set and improve. And the business itself becomes an <b>asset</b> that buyers value at a multiple of its profit, so a company netting $1 million a year might sell for several times that. These variables are yours to control, and they can be multiplied instead of nudged.</p>
${W('fastcalc')}
<h3>Become a producer</h3>
<p>The Fastlane flips your relationship with the market. Consumers buy the products, the financing and the subscriptions; producers create them. To get on the Fastlane, start looking at every product, service and complaint and asking how it's made, who profits and what could be better.</p>
<h3>The Law of Effection</h3>
<p>DeMarco's central principle: <b>the more lives you touch, in scale or in magnitude, the more money you will make.</b> Scale means many people, each served a little, like an app with a million users. Magnitude means few people, each served a lot, like a developer selling an office building. A job affects one employer. A system can affect millions.</p>
${W('effection')}
<h3>The money system</h3>
<p>The Fastlane ends somewhere surprisingly conservative. Once the business system produces a large lump sum, through profits or a sale, that money goes into safe, income-producing investments, and the interest replaces the paycheck. This second system is what makes wealth permanent instead of a lucky streak.</p>
${key('Key idea', 'The Fastlane is two systems. The business system creates the lump sum quickly. The money system turns it into income for life.')}
${W('moneysys')}`,
quiz:[
 ['What is the Fastlane wealth equation?', ['Wealth = Income + Debt','Wealth = Net Profit + Asset Value','Wealth = Primary Income + Market Investments','Wealth = Hours × Rate'], 'Net profit is units × unit profit, and asset value is net profit × the industry multiple.'],
 ['Which statement is the Law of Effection?', ['Spend less than you earn','The more lives you touch, in scale or magnitude, the more money you make','Every dollar saved is a dollar earned','Work smarter, not harder'], 'Money follows the size of the effect you have on other people.'],
 ['What does the money system do?', ['Pays for marketing','Turns a lump sum into income through safe investments','Replaces the need for a business','Funds lifestyle purchases'], 'Once the business produces a lump sum, the money system makes that wealth last.']
]},
'driver':{ title:'The Driver', sub:'You are the vehicle, and time is the fuel',
body:`
<p class="lede">In DeMarco's metaphor, you are the vehicle. No business, product or system outperforms the person driving it, so the Fastlane starts with how you think and how you spend your time.</p>
<h3>You own the wheel</h3>
<p>Your current situation is the result of choices, and your future is the result of choices you haven't made yet. Blaming the economy, a boss or bad luck hands the steering wheel to someone else. Ownership doesn't mean everything is your fault. It means everything is your responsibility to change.</p>
<h3>Time is the fuel</h3>
<p>Time is the one resource you can't earn back. DeMarco separates the time that is truly yours from the time you spend earning money, getting to work and recovering from it. Commutes, errands and the evenings spent unwinding all belong to the job. The real purpose of the Fastlane is to move hours from the second column into the first.</p>
${W('timeaudit')}
<h3>Maintain the vehicle</h3>
<ul>
<li><b>Beliefs.</b> Old scripts such as "money is evil," "rich people got lucky" or "I'm not a business person" act as speed governors. Name them and test them against evidence.</li>
<li><b>Associations.</b> The people you spend time with set your idea of normal. Seek out builders, mentors and examples of the life you want.</li>
<li><b>Education.</b> Graduation is not the end of learning. Fastlaners learn constantly through books, courses, experiments and failures, because the business demands it.</li>
</ul>
${warn('The toll', 'Building a Fastlane often costs a few hard years of evenings, weekends and lifestyle restraint. The Slowlane asks for a similar sacrifice for forty years.')}`,
quiz:[
 ['In the book\'s road-trip metaphor, what is the vehicle?', ['Your business','Your car','You','Your bank account'], 'You are the vehicle and the driver. Your beliefs, habits and choices set the speed limit.'],
 ['Why does DeMarco treat time as the most important asset?', ['It\'s easy to buy more','It can\'t be replaced once spent','Employers value it highly','It compounds like interest'], 'Money can be earned back. Time can\'t, which is why trading it cheaply is so costly.'],
 ['Which is an example of maintaining the vehicle?', ['Upgrading to a luxury car on credit','Replacing a limiting belief after testing it against evidence','Avoiding all new information','Waiting for the right moment'], 'Beliefs, associations and constant learning are the maintenance work.']
]},
'cents':{ title:'The CENTS Test', sub:'Five commandments that separate a Fastlane business from a job',
body:`
<p class="lede">Not every business is a Fastlane. Many businesses are jobs wearing a costume: you own them, but they own your time. DeMarco's filter for a true Fastlane business is five commandments, abbreviated <b>CENTS</b>.</p>
<div class="commandments">
${cmd('C', 'Control', 'Do you control the operation? If a franchisor, a single platform or one supplier can change the rules overnight, you\'re a passenger, not a driver.', 'Red flags', 'strict franchise agreements, dependence on one marketplace or search algorithm, MLM distributorships')}
${cmd('E', 'Entry', 'How easy is it for anyone to start? As barriers to entry fall, so does the opportunity. If anyone can begin tomorrow for $99, thousands already have.', 'Red flags', '"turnkey" opportunities, starter kits, anything sold as easy money')}
${cmd('N', 'Need', 'Does it solve a need people will pay for? Fastlane businesses are built around the customer, not around the owner\'s passion.', 'Red flags', '"I love it, so others will too," nobody asking for it, a solution looking for a problem')}
${cmd('T', 'Time', 'Can it run without your hours? If income stops when you stop, it\'s a job you own.', 'Red flags', 'revenue tied to hours billed, the owner is the product, no plan to systemize')}
${cmd('S', 'Scale', 'Can it reach many people, or deliver very large value to a few? Single-location, local-only and one-to-one businesses hit a ceiling.', 'Red flags', 'limited geography, can\'t be replicated, capacity limited by your own hands')}
</div>
<p>A business doesn't need a perfect score on day one. The commandments show where the ceiling is and what to fix. Need is the foundation: without it nothing else matters. Run some examples through the inspector, then try an idea of your own.</p>
${W('cents')}`,
quiz:[
 ['What does the E in CENTS stand for?', ['Effort','Equity','Entry','Execution'], 'Entry: the easier it is for anyone to start, the weaker the opportunity.'],
 ['A freelance designer billing by the hour most clearly violates which commandment?', ['Need','Time','Control','Entry'], 'When income stops the moment you stop working, the business hasn\'t detached from your time.'],
 ['Why does the book treat MLM distributorships as weak Fastlanes?', ['The products are always bad','Anyone can join, and the parent company controls the rules','They are too hard to start','They require a college degree'], 'Low barriers to entry and little control fail two commandments at once.']
]},
'money-trees':{ title:'Money Trees', sub:'The five business systems that can grow without you',
body:`
<p class="lede">A money tree is a business system that keeps producing income after you plant and tend it. DeMarco names five kinds of systems, or seeds, that can grow into money trees. Most Fastlane fortunes come from one of them or a combination.</p>
<div class="seeds">
${seed('Rental systems', 'Own something others pay to use.', 'Real estate, equipment, licensed intellectual property and royalties. The asset earns while you sleep, and real estate adds magnitude.')}
${seed('Computer systems', 'Software, apps, websites and online platforms.', 'Built once and used by many, at almost no cost per extra customer. The strongest scale of any seed.')}
${seed('Content systems', 'Information and entertainment.', 'Books, newsletters, courses, video and podcasts. Created once, consumed repeatedly, paid for by sales, subscriptions or advertising.')}
${seed('Distribution systems', 'Getting products to many people.', 'Inventing and manufacturing a product, selling through retailers and networks, or distributing other companies\' goods.')}
${seed('Human resource systems', 'A business run by people you employ.', 'Teams, managers and processes do the work. The hardest to build, and the way a service business escapes the owner\'s hours.')}
</div>
<p>Combinations are common and strong: a software company that publishes content to attract customers, or a product company that licenses its designs. Pick your seed by Need first, then by how well the system satisfies CENTS.</p>
${W('seeds')}`,
quiz:[
 ['Owning a portfolio of apartment buildings is which kind of system?', ['Content','Rental','Distribution','Computer'], 'Tenants pay to use something you own.'],
 ['Why are computer systems so powerful?', ['They need no customers','Each extra customer costs almost nothing to serve','They are immune to competition','They never need updates'], 'Near-zero marginal cost lets software reach huge scale.'],
 ['Which system lets a service business detach from the owner\'s time?', ['Human resource systems','Content systems','Rental systems','None of them'], 'Hiring and training people to deliver the service, with processes and managers, frees the owner\'s hours.']
]},
'accelerate':{ title:'Accelerate', sub:'Execution, need, and the road to a liquidity event',
body:`
<p class="lede">Knowing the map isn't the same as driving. The last stretch of the book is about speed: how Fastlaners turn an idea into a working system, and the system into freedom.</p>
<h3>Execution beats ideas</h3>
<p>Ideas are cheap and plentiful. Value lives in execution: building, launching, selling and improving. A modest idea executed relentlessly beats a brilliant one that stays in a notebook. Stop waiting for the perfect idea.</p>
<h3>Need beats passion</h3>
<p>"Do what you love and the money will follow" leaves out the customer. Fastlane businesses start with what people need and will pay for. Passion often follows success, once you love being good at something and being free.</p>
<h3>Listen for complaints</h3>
<p>Every complaint is a need nobody has solved well. Frustrations at work, bad service, slow processes and products that almost work are all openings. Practice turning one into an opportunity.</p>
${W('opportunity')}
<h3>Be different, then be better</h3>
<p>Customers choose among options, so give them a reason: better service, better design, a clear brand, more value than the price suggests. Treat the customer's experience as the product, and keep improving it based on what they tell you.</p>
<h3>Exit with a liquidity event</h3>
<p>The Fastlane equation counts asset value for a reason. Selling all or part of a business turns years of profit into one lump sum. That lump sum feeds the money system, and the trip reaches its destination: income from investments, and time that belongs to you.</p>
<h3>Plan your first stretch</h3>
<p>Write down your route. Your plan is saved in this browser and appears on your license at the end of the course.</p>
${W('plan')}`,
quiz:[
 ['According to the book, which matters more?', ['A brilliant idea','Execution','A perfect business plan','Timing the market'], 'Ideas are worth little until someone executes them.'],
 ['What is the book\'s view on passion?', ['Follow your passion and money follows','Start with need; passion often follows success','Passion is irrelevant to happiness','Only passionate people succeed'], 'Need is the foundation. Passion is welcome, but customers pay for solutions.'],
 ['What is a liquidity event?', ['A sudden market crash','Selling all or part of a business, turning asset value into cash','Paying off a credit card','Moving savings into a checking account'], 'It converts the asset-value half of the Fastlane equation into a lump sum.']
]},
'final-exam':{ title:'Final Exam', sub:'Ten questions across the whole route, and your license',
body:`<p class="lede">Ten questions covering every exit. Score 8 or better to earn your Fastlane driver's license.</p>`,
quiz:[
 ['Which road treats debt as a way to look rich?', ['Sidewalk','Slowlane','Fastlane'], 'Sidewalk wealth is income plus debt, spent on appearances.'],
 ['Slowlane primary income equals:', ['Units sold × unit profit','Hourly value × hours worked','Net profit × multiple','Savings × interest rate'], 'Both variables are capped, which is why the Slowlane is slow.'],
 ['In the Fastlane equation, asset value equals:', ['Revenue minus costs','Net profit × industry multiple','Units sold × price','Your salary × 40 years'], 'Buyers pay a multiple of profit for a business that keeps producing it.'],
 ['A business nets $400,000 a year in an industry that sells at 4× profit. Roughly what is its asset value?', ['$400,000','$1.6 million','$4 million','$100,000'], '$400,000 × 4 = $1.6 million, on top of the year\'s net profit.'],
 ['A business that stops earning the moment you stop working fails which commandment?', ['Control','Entry','Time','Need'], 'Time: a Fastlane business must detach from your hours.'],
 ['A newsletter with 20,000 paying subscribers is which kind of money tree?', ['Rental system','Content system','Distribution system','Human resource system'], 'Information created once and consumed repeatedly is a content system.'],
 ['A developer who sells a few $10 million buildings is using which side of the Law of Effection?', ['Scale','Magnitude','Neither'], 'Few people, very large value each: magnitude.'],
 ['"Wealth is a process, not an event" means:', ['Wealth comes from sustained building, not a single lucky moment','You should wait for the right event','Events are irrelevant to wealth','Only slow wealth is real'], 'The visible event is the result of a long process.'],
 ['The Fastlane combines which two systems?', ['A job and a side hustle','A business system and a money system','A 401(k) and an IRA','Real estate and stocks'], 'The business system builds the lump sum; the money system turns it into lasting income.'],
 ['The Wealth Trinity is:', ['Family, Fitness, Freedom','Faith, Fame, Fortune','Focus, Finance, Freedom','Family, Fortune, Fame'], 'Relationships, health and choice.']
]}
},
w:{
  roads:{ label:'Compare', title:'Three roadmaps', roads:[
    { name:'Sidewalk', dest:'Destination: poverty', eq:'Wealth = Income + Debt', rows:[['Money is for','Spending, and looking rich'],['Debt is','A way to have it now'],['Time is','Plentiful, so it gets sold cheaply'],['Education','Ends at graduation'],['Income comes from','A job, spent as fast as it arrives'],['Who controls it','Nobody. One setback away from crisis']] },
    { name:'Slowlane', dest:'Destination: mediocrity, wealth around 65', eq:'Wealth = Primary Income + Market Investments', rows:[['Money is for','Saving, and investing passively'],['Debt is','The enemy'],['Time is','Traded freely now for freedom later'],['Education','Credentials to raise your pay'],['Income comes from','A job, plus compound interest'],['Who controls it','Employers, markets and the calendar']] },
    { name:'Fastlane', dest:'Destination: wealth, potentially in years', eq:'Wealth = Net Profit + Asset Value', rows:[['Money is for','Building systems and buying back time'],['Debt is','Avoided for consumption, used carefully to build assets'],['Time is','The most valuable asset, never sold cheaply'],['Education','Lifelong and self-directed'],['Income comes from','A business system, then a money system'],['Who controls it','You']] } ] },
  sorter:{ label:'Try it', title:'Spot the road', names:['Sidewalk','Slowlane','Fastlane'],
    items:['"I\'ll finance the new truck. The payment is only $650 a month."','"If I max out my 401(k) and keep expenses low, I can retire at 62."','"Everyone in my industry complains about this. It could be a product."','"Somebody has to win the lottery. Why not me?"','"I\'ll get a master\'s degree so my employer pays me more per hour."','"I\'d rather earn nothing for a year building something that sells without me."','"I deserve this vacation. I\'ll put it on the card."','"An 8% average return will make me rich eventually."','"Instead of buying another app, what would it take to build one?"'],
    why:['Debt and instant gratification: classic Sidewalk.','Job, savings and compounding over decades: Slowlane.','Thinking like a producer who builds systems: Fastlane.'],
    left:n => `${n} left`, todo:n => `${n} statements to sort`, again:'Start over' },
  week:{ label:'Visualize', title:'A working life in 5-for-2 weeks', days:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], sold:'SOLD', yours:'YOURS', years:'Years of full-time work', yearsOut:y => `${y} years`,
    stats:['Workdays sold','Hours sold (at 40/wk)','Weekend days','Vacation days (2 wks/yr)'] },
  slow:{ label:'Calculator', title:'The Slowlane time machine', fields:['Your age','Annual income ($)','Saved each year (%)','Annual return (%)','Yearly spending when free ($)','Safe yield on savings (%)'],
    stats:['Freedom number','Freedom age','Years of 5-for-2','Growth vs. deposits'], never:'Not by 85', target:'Freedom number', freeAt:a => `Free at ${a}`, aria:'Portfolio growth chart',
    note:'Sample numbers. Assumes a flat income in today\'s dollars with no raises, taxes or market crashes. Your freedom number is the portfolio whose yield covers your yearly spending.' },
  fast:{ label:'Calculator', title:'Build a Fastlane equation', units:'Units sold per year', profit:'Profit per unit', mult:'Industry multiple', salary:'Compare with a salary of ($/yr)',
    stats:['Net profit / yr','Asset value','Wealth','Years of salary to match'], barF:'Fastlane: one year\'s profit + asset value', barS:'Slowlane: 40 years of gross salary',
    note:'Units and unit profit have no ceiling; hours and hourly pay do. Multiples vary by industry, size and growth.' },
  eff:{ label:'Explore', title:'The Law of Effection', presets:['A job','Freelancer','Local restaurant','Bestselling book','Mobile app','Property developer'], lives:'People affected per year', value:'Value to each person',
    stats:['Total effect','Leaning on'], lean:['One person','Scale','Magnitude','Both'], axis:'Scale: people affected →', iso:['$1K','$1M','$1B','$1T'], aria:'Scale versus magnitude plot',
    note:'Effect = people × value to each. Scale moves you right, magnitude moves you up. Dashed lines mark equal total effect.' },
  money:{ label:'Calculator', title:'The money system', sum:'Lump sum from the business', yield:'Yield from safe investments', stats:['Income per year','Per month','Hours of work required'],
    note:'Illustrative only. Real yields change with interest rates, and taxes and inflation reduce what you keep.' },
  time:{ label:'Audit', title:'Where your 168 hours go', cats:['Sleep','Job','Commute','Chores & recovering from work','TV, scrolling & games','Family, friends & fitness','Learning','Building your system'],
    legend:['Sold to the job','Consuming','Building','Life & rest','Unassigned'], note:'Sample week. Replace the numbers with your own.',
    over:t => `<b>That adds up to ${t} hours.</b> A week only has 168. Trim a category to see your audit.`,
    out:(s, c, b, m, w) => `You sell <b>${s}</b> hours a week to your job and spend <b>${c}</b> consuming, against <b>${b}</b> building something you own. Moving half of your screen time into building gives you <b>${m} hours a year</b>, about ${w} full-time work weeks pointed at your Fastlane.` },
  cents:{ label:'Inspector', title:'Run the CENTS test', names:['Control','Entry','Need','Time','Scale'], seg:['Pass','Weak','Fail'], restore:'Restore the suggested ratings',
    presets:{
      saas:['Scheduling software for dental clinics',['You own the code, pricing and roadmap.','Building good software takes skill and time, which keeps competitors out.','Missed appointments cost clinics real money.','Software runs around the clock; support can be staffed.','Thousands of clinics, each served at almost no extra cost.']],
      coffee:['Neighborhood coffee shop',['You run it, though the landlord holds a lot of power.','A lease and an espresso machine. Many people open one every year.','People want good coffee nearby.','Owners often work the counter. Income needs staffing to detach.','One location serves one neighborhood.']],
      mlm:['Supplement MLM distributorship',['The parent company sets the products, prices and rules.','Anyone can join for a starter kit fee.','Some need for the product, but sales are driven by recruiting.','Income depends on your constant selling and recruiting.','Limited by your personal network.']],
      freelance:['Freelance graphic design',['You choose clients and prices.','A laptop and a portfolio. Competition is global.','Businesses need design.','You are the product. Income stops when you stop.','Capped by your hours.']],
      rental:['Small rental property portfolio',['You own the asset and set the terms within the law.','Capital and credit are real barriers, though many investors compete.','Everyone needs housing.','A property manager can run it without you.','Grows by magnitude, one property at a time.']],
      mine:['Your own idea',['Who could change your rules overnight?','Could anyone start this tomorrow for $99?','Who is asking for this, and will they pay?','Does income stop when you stop?','Can it serve many, or deliver big value to a few?']] },
    v:{ rate:['Rate all five','Choose Pass, Weak or Fail for each commandment.'], noneed:['No need, no business','Without a real need, nothing else matters. Find a problem people will pay to solve.'], fast:['Fastlane road','This system can detach from your time and grow without a ceiling.'], pot:['Fastlane with potholes','There is a real business here. Fix the weak commandments before you floor it.'], job:['A job you own','You may be the boss, but the business owns your time or someone else owns the rules.'], trap:['Sidewalk trap','This fails most commandments. It is unlikely to produce freedom.'] } },
  seeds:{ label:'Try it', title:'Name the money tree', names:['Rental','Computer','Content','Distribution','Human resource'],
    items:['A subscription mobile app for tracking workouts','A 12-unit apartment building','A podcast and newsletter paid for by sponsors','Designing a kitchen gadget, manufacturing it and selling through big-box retailers','A commercial cleaning company with 40 staff and two managers','Licensing a patented design to a manufacturer for royalties','An online marketplace connecting tutors and students','A series of e-books on niche woodworking','Renting construction equipment to contractors'],
    fb:(ok, s) => `${ok ? 'Correct' : 'Not quite'}: ${s.toLowerCase()} system.`, left:n => `${n} left`, todo:n => `${n} businesses to classify`, again:'Start over' },
  opp:{ label:'Exercise', title:'Turn a complaint into an opportunity', fields:['Who is frustrated?','What frustrates them?','How do they cope today?'],
    defaults:['Small dental clinics','patients miss appointments and staff spend hours rescheduling','phone calls and paper reminder cards'], fallback:['Some group of people','something keeps going wrong','workarounds'],
    out:(who, pain, now) => `<b>Opportunity:</b> ${who} lose time or money because ${pain}. Today they rely on ${now}. A system that fixes this for thousands of them, without needing your hours, is a Fastlane candidate.`,
    list:['<b>Need:</b> would they pay to make this go away?','<b>Entry:</b> what would stop a competitor from copying you next month?','<b>Scale:</b> how many others share this problem?','<b>Next:</b> <a href="#cents">run it through the CENTS inspector</a>.'],
    note:'Example filled in. Replace it with a complaint you heard this week.' },
  plan:{ label:'Worksheet', title:'My Fastlane plan', need:'The need I\'ll serve', needPh:'Who has the problem, and what is it?', seed:'My money tree', weak:'Weakest commandment', hours:'Hours a week I\'ll reclaim',
    fix:'How I\'ll fix the weak commandment', fixPh:'e.g. build a version that runs without me', act:'My first action this week', actPh:'e.g. interview five clinic managers about missed appointments', saved:'Saved on this device',
    seeds:['Choose a system','Rental system','Computer system','Content system','Distribution system','Human resource system'], cmds:['Choose one','Control','Entry','Need','Time','Scale'] }
}
};

