Critiquing DePIN: False Hope or Real Dawn?
==========================================

With a growing emphasis on real-world applications and the rise of Solana, DePin has [regained significant popularity](https://trends.google.com/trends/explore?geo=US&q=depin&hl=en) in 2024. However, DePIN is not a novel concept. In my opinion, the essence of DePIN is about the token economic model that turns participants into stakeholders, rather than creating new productivity.

In the previous bull run, projects like [Arweave](https://www.arweave.org/), [Filecoin](https://filecoin.io/), and [Helium](https://www.helium.com/) stood out, while many others fell short, and even went down to zero. Now, as we approach the cusp of the next bull market, our challenge lies in discerning between fleeting fads and genuinely sustainable innovations that will usher us into a new era of real-world applications.

This piece sets out to provide a balanced critique of DePIN’s historical shortcomings, exploring areas such as regulatory hurdles, lack of demand, flawed tokenomics, and the risk of rugs. Nevertheless, it also highlights the substantial prospects within this space, including overcoming profit margins, value anchors, token incentives, and robust community engagement. And I’ll provide a DePIN evaluation framework, and in-details case studies of DePIN projects. Hopefully this piece can equip readers with insights and tools to build, evaluate and invest in DePIN landscapes.

**Content**

*   Introduction
*   Participants: Hardware, Miner, Protocol, Operator and Users
*   Ecosystem Landscape
*   DePIN Projects: Purpose, Type and Market
*   Blockchain and Middleware: General and DePin-specific chain
*   Essence:
    **Why Didn’t It Work**: Regulation, Demand, Tokenomic, Moat and Rug
    **Why There’s Hope**: Margin, Anchor, Booster and Community
*   Evaluation Criteria:
    Total Value = Product X Tokenomic X Narrative
    Duration = Being proven or disproven
    Last Straw = Compliance X Team
*   Case Study:
    Helium: 5G network
    io.net: AI/ML Sharing GPU

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*QCtaoZpdjy8BFR3g)

Intro
=====

The blockchain domain has focused on infrastructure development, emphasizing scaling solutions (Layer2s, Data Availability), privacy enhancement (Zero-Knowledge), and user experience improvement (Account Abstraction) over the years to prepare for broad adoption. The need for real-world, mass adoption is now more evident than ever. Initiatives such as exchanges working towards compliance and ETFs entering the traditional markets have marked significant progress and are paving the way for us.

DePIN is not a specific area, this term originally brought up by Messari as the short for Decentralized Physical Infrastructure Networks. It represents a community-driven, decentralized hardware network incentivized by token. Its primary goal is to replace the monopolized coordinator and use native tokens to transform participants into stakeholders of the network. Since the last bull market, there has been a significant expansion into high-value sectors such as AI/ML, 5G, WiFi, Bandwidth, Vehicle, Energy and so on.

So, what’s new that DePIN brought to the table in this spectrum?

*   **Assets: Type, distribution, trading methods**
    Looking at successful crypto projects, typically feature assets with generic attributes and continuously refine these assets’ functionalities and use cases. DePIN projects can incorporate physical assets, transforming the services provided or data collected by the hardware into tokenized assets. This tokenization facilitates permissionless trading and staking, paving the way for a broader spectrum of financial activities.
*   **Participants: Roles, amount, stickiness and relationship**
    DePIN enhances the ecosystem by diversifying roles, creating a cohesive network of hardware manufacturers, miners, network applications, consumers and so on. Reducing entry barriers and expanding geographical reach draws a broader range of participants. More importantly, DePIN transforms all parties involved into stakeholders through crypto assets, fostering both labor contribution and consumption. This approach ensures ongoing engagement, increasing the ecosystem’s stickiness and surpassing the traditional, simplistic buy-and-sell relationships. By fostering complex interconnections, DePIN significantly bolsters the robustness and sustainability of its ecosystem.
*   **Scenarios: Premium value, frequency and scalability**
    DePIN is grounded in real-world scenarios, addressing existing needs. Beyond the focus on crypto investors, the network’s generic value can be derived from the number of purchasers, value per transaction, and frequency of transactions. Success could be achieved if any two of these parameters excel. E.g. 5G user base is huge, approximately over 100 million in the U.S. pay once a month for 80 dollars. While individual AI companies may represent a smaller volume of transactions compared to 5G consumers, the high frequency and value of these transactions, propelled by extensive demand, highlight a substantial opportunity.

Beyond the initial excitement, several critical factors warrant attention: Achieving product-market fit remains essential for success, even with sufficient supply; the implementation of protocol designs that ensure partition tolerance and censorship resistance is crucial to avoid new forms of censorship; moreover, incentives must be meticulously crafted to avert unsustainable inflation. We will explore these aspects in more detail below.

Participants
============

This sector examines the roles and objectives of its five principal stakeholders: hardware manufacturers, hosters (referred to as miners for ease of memory), network providers, operators, and end-users.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*6pYloNK6FN3y3-HX)

**Hardware Manufacturer**: **The Physical Devices that Provide Services or Collect Data**

*   **Manufacturer Evolution:**
    Transitioning from centralized, whitelisted manufacturers to a permissionless system is a natural progression. Initially, it’s reasonable to depend on a single entity to produce reliable hardware. However, to prevent a single vendor from becoming a monopoly threat or a bottleneck in network growth, opening the ecosystem to more qualified hardware manufacturers is advisable. Eventually, an open market can foster full competition to offer the best products at fair prices to miners([e.g. Helium HIP19](https://github.com/helium/HIP/blob/main/0019-third-party-manufacturers.md)).

**Miner: Entities That Run Hardware as Nodes in the Network**

*   **Cost Considerations:**
    Miners consider the total cost, including hardware, onboarding, maintenance, and operational (if applicable) fees. The time and attention cost associated with network participation also counts.
*   **Reward System:**
    Beyond the belief in building physical networks, miners prioritize rewards, often calculating the payback period. Immediate incentives for beta versions are attractive, but the protocol should curb the crazy inflation, incorporate a robust deflationary design and staking mechanisms, to ensure long-term revenue for miners. Many projects have been adopting the [Burn-Mint-Equilibrium(BME)](https://twitter.com/rendernetwork/status/1737526639515344971) model.
*   **User Experience:**
    The process should be straightforward, aiming to lower the learning curve for participation, thereby enabling a low-barrier and scalable network.

**Protocol: The Coordination Core of the Network**

*   **Price Structure:**
    The price of commoditized services is fixed at the protocol level, while decisions should be made cautiously to achieve sustainability. Taking [io.net](http://io.net/)’s [pricing model](https://developers.io.net/docs/pricing-model#design-principles) as example: The price is effected by multi-dimensional factors like web2 competitor price, peak hours, hardware performance, internet bandwidth, crypto earnings and so on.
*   **Rule Transparency:**
    Rules like reward mechanisms, at least should be transparent and accessible to the public. Then the executed result should be verifiable even if off-chain and, eventually, the whole process automated. On-chain automation seems optimal so guarantees fairness but it may sacrifice flexibility for evolving adjustments.
*   **Data Integrity and Honesty:**
    Establishing transparent and verifiable procedures for fetching data from hardware, uploading it to databases, and reflecting it into rewards.
*   **Security Measures:**
    Anticipate malicious behavior and implement measures like random liveness checks and effective data validation. KYC might be involved, and a reputation system could reward honest behavior while penalizing dishonesty.
*   **Privacy and Compliance:**
    Collecting data from participants improves the protocol’s robustness and efficiency but comes with privacy risks. While only collecting necessary data, projects should also consider implementing Zero Knowledge Proof (ZKP).

**Operators: Entities That Package Network Resources into Services**

*   **Operator Entity Diversity:**
    Initially, a single operator, possibly from the network foundation may set up a schema for cold start. Over time, allowing more operators to join can enhance market reach, maximize the usage of miner resources, and allow full competition.
*   **Revenue Model:**
    Besides the cost that the operator pays to the miner through the network, the operator usually charges more for the wrapped service. Operators can use profits to invest more in marketing, subsidize users and so on.

**Purchaser: Users of the Network**

*   **Goals and Needs:**
    Different users have varying goals, such as cost efficiency, time savings, security, accessibility, or performance. The network should effectively address these primary needs.
*   **User Experience:**
    Seamless onboarding and payment processes are essential. Whether users need to understand cryptocurrency depends on the service design, but the goal should be to simplify transactions, integrating fiat payment options alongside cryptocurrency.

Ecosystem Landscape
===================

DePIN Network
=============

DePIN projects vary widely, however for better understanding we can categorized DePin projects by Purpose, Type, and Market.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*vhuzqBMuWznlc2Q2)

**Purpose**

*   **Computing:**
    This encompasses processing and communicating information using computational systems. Rollups, for example, address computing challenges for blockchain, while decentralized GPU and CPU resources cater to off-chain computing needs.
*   **Storage:**
    Storage projects ensure data is preserved for future retrieval and use. This broader concept includes file storage solutions like [Arweave](https://www.arweave.org/) and [Filecoin](https://filecoin.io/), as well as databases such as [KwilDB](https://t.co/3ZpQgvnibY).
*   **Network:**
    Network projects facilitate the fetching and transmitting of real-world data across the network, enabling communication among different nodes and connecting them to users. Commonly, projects utilize IoT sensors and wireless networks to gather data and deliver services.

**Type**

*   **Service Network: Core asset is the service**
    At its core, a service network aims to effectively utilize unused or available resources to provide services. The protocol aggregates demand from users, matches it with miners’ resources, and allocates tasks accordingly. Examples include [io.net](https://io.net/), which connects GPU resources with AI companies; [Helium](https://www.helium.com/), linking small cell hosters with 5G users; and [Teleport](https://www.teleport.xyz/), connecting drivers with riders.
*   **Data Network: Core asset is the aggregated dataset**
    Data networks incentivize data contributions to amass a large dataset. They standardize data formats, ensure data validity and quality, and may involve data cleaning and training before wrapping them into datasets, APIs, or other formats for commercial use. For instance, [DIMO](https://drivedimo.com/) collects vehicle data for insights useful to insurance or gas companies; [Hivemapper](https://hivemapper.com/explorer) captures street images to create map data for delivery and smart city projects.

**Market**

*   **AI and ML:**
    The global ML market size was expected to grow from [$26.03 billion in 2023 to $225.91 billion by 2030](https://www.fortunebusinessinsights.com/machine-learning-market-102226). The AI/ML opportunity in web3 lies with data, computing, and models. For data, projects like [grass](https://www.getgrass.io/) enable mass user sharing of bandwidth for AI companies to fetch data at scale; For computing, projects like [io.net](http://io.net/) pool data center computing power at a lower cost compared to web2; For models, projects like [Bittensor](https://bittensor.com/) enable the assetization of models.
*   **5G:**
    The global 5G market size was valued at [USD 84.31 billion in 2023](https://www.grandviewresearch.com/industry-analysis/5g-services-market). The transition to 5G requires more cells, with web2 monopolies capturing significant profit margins. DePIN 5G projects, such as [Helium](https://www.helium.com/), aim to build decentralized, affordable networks by leveraging small cells, free spectrum bands in U.S., and eSIM cards.
*   **Vehicle:**
    The vehicle market is projected to grow from [USD 145.24 billion in 2023](https://www.fortunebusinessinsights.com/internet-of-vehicles-market-105345). DePIN vehicle networks gather data via specialized hardware and software, providing valuable insights for insurance, maintenance, gas and other businesses. Projects like [DIMO](https://drivedimo.com/) leverage token incentives drivers to encourage data sharing.
*   **Hailing:**
    The global ride-hailing service market reached a value of [US$ 176.6 Billion in 2023](https://www.imarcgroup.com/ride-hailing-service-market). DePIN hailing services disrupt the ride-sharing market by using tokens to foster growth, offering fair pricing and lower transaction fees compared to Web2 intermediaries. Notable projects include [Teleport](https://www.teleport.xyz/) and [Drife](https://www.drife.io/?ref=iotex.io).
*   **Map:**
    The global digital map market size was estimated at [USD 18.18 billion in 2022](https://www.grandviewresearch.com/industry-analysis/digital-map-market). DePIN map projects address data fragmentation and over-reliance on major tech firms by rewarding community contributions with tokens, offering an equitable data sharing model. Examples include [Hivemapper](https://hivemapper.com/explorer), [2blox](https://2blox.io/), and [Natix](https://www.natix.io/).

Blockchain and Middleware
=========================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*LxrZLdHtq-Erk9TL)

In the current state, most DePIN projects have only the token on-chain with most of the part off-chain. Helium has transitioned from its proprietary blockchain to Solana since 2023 April. This shift was motivated by the need to address maintenance costs and scalability challenges. The nature of DePIN projects, minor and frequent transactions, and timely rewards, dictate a blockchain infrastructure that is fast, cost-effective, and scalable.

For general-purpose blockchain, the performance, cost, and ecosystem are crucial:

*   [Solana](https://solana.com/), with a notable approximately [$2.4B](https://depinhub.io/projects?depinhub%3Aprojects%5BrefinementList%5D%5Bblockchains%5D%5B0%5D=solana) DePIN Market Cap, has emerged as the most popular choice for major projects like [Helium](https://www.helium.com/5G), [io.net](http://io.net/), Teleport, [Hivemappers](https://depinhub.io/projects/hivemapper), [Render](https://depinhub.io/projects/render), [Nosana](https://rendernetwork.com/), and many more. Solana aligns well with the DePIN projects’ needs for swift and low-cost transactions, because its unique Proof-of-History (PoH) mechanism reduces the computational load, and its high hardware requirements improve the processing performance. Secondly, scalability is crucial, for example, Helium needs millions of transactions each month and minted 900k NFT for subscribers when it migrated to Solana. Solana needs to stay robust during the spikes and enable fast mass minting at a minor price. Projects can interact with other Solana ecosystem projects, and Solana is also upgrading to serve the DePIN needs better. The recent launch of token extension enables advanced customization for SPLs, like threshold transaction, privacy mode, and delegation, which are going to give DePIN protocols more flexibility in how they build their on-chain components.

On the other hand, DePIN-specific blockchains are gaining attention. These blockchains address critical issues such as data trustworthiness, identity management, and verifiability. By providing automation and verifiable data, DePIN projects can save repetitive operational effort, avoid risks, and focus better on network development.

*   [IoTeX](https://iotex.io/) as a Layer 1 blockchain, has introduced its Layer 2 solution “W3bstream,” which enables secure IoT data collection, leverages flexible data availability layers, and aggregates large volumes of off-chain data into verifiable zero-knowledge proofs (ZKPs) and triggers on-chain transactions.
*   [Peaq](https://t.co/BH2xMwiyV1) is a multi-chain Layer1 blockchain for DePIN. While having low cost and high transaction speed, it also provides Modular DePIN Functions like Multi-Chain Machine ID, payment, role-based access for machines, 3-tier data verification, AI agents, data storage and indexing. Peaq is integrated with Wormhole for liquidity and has strong relations with relevant partners such as Bosch. peaq will launch in 2024.

Why Didn’t It Work?
===================

*   **Regulation difficulty:**
    Managing network in the physical realm necessitates navigating a myriad of regulations, with feasibility and costs differing across markets. For example, hailing projects must manage travel data, comply with local governance reporting requirements, and adhere to personal safety standards. Similarly, 5G projects are subject to varying spectrum licensing regulations across different countries.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ATKafd7z5HV905gi)

Helium’s LoRa specification

*   **Demand failure:**
    Supply side growth doesn’t guarantee demand side adoption. DePIN projects utilize tokens to rapidly incentivize miner expansion, with onboarding fees often reinvested to enhance network value. However, a surplus of supply without corresponding usage can be problematic. To prevent this, it’s crucial to ensure genuine product-market fit for each project. Additionally, effective marketing, sales strategies, and business development are key to competing with giant Web2 vendors.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*nMljSkUkdsCJ6C5L)

DePIN Project Users, [https://dune.com/metalight/dewi-project-users](https://dune.com/metalight/dewi-project-users)

*   **Tokenomic Failure:**
    DePIN projects often have their token from day one, with the design of its mechanism being a critical determinant of success. However this tokenomic expertise proposed a challenge for projects originating from Web2 manufacturers, who tend to rely on precedents to formulate their token strategies. Sometimes they tend to have mass incentives to attract participants, which leads to unsustainable inflation. The Work token model (Stake for Access) is commonly employed for commoditized services with fixed protocol-level service fees. BME(Burn-Mint-Equilibrium) can adopt a dual-token system, combining a tradable, value-seeking token with a fiat-pegged payment token, allowing for fixed fiat pricing for the service.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*uuCq6J1hwMHkcJM1)

Token price of a previous notable DePIN project

*   **Performance consideration:**
    Centralization offers the benefits of focused coordination, adaptable management, and high-speed performance. Even though decentralized projects can attract attention with their lower fees, but matching the performance of centralized service remains a significant uncertainty. Taking sharing GPU as an instance, the distribution of GPUs across various locations complicates the task of consolidating them into a single cluster, leading to potential delays for intensive ML applications, compare to a data center. If decentralized systems cannot achieve performance parity with centralized service, their cost advantage will not be sufficient to offer a competitive alternative.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*BtCoC2YEM-KDIW6G)

Akash dashboard

*   **Hard to build a moat:**
    This challenge is particularly acute in commoditized services, where standardized and interchangeable offerings make it easy for both suppliers and customers to switch networks in pursuit of better revenue or lower fees. This lack of a strong moat is evident even in Web2 businesses. However, certain factors can create a competitive edge: Securing a first-mover position to establish brand recognition, delivering the best user experience, and developing proprietary, patent-protected software or hardware.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*h0myEY2ELE4O2-JI)

Helium 5G v.s. RedPocket 5G

*   **RUG: Easily rug after selling narrative:**
    Unlike other fields, DePIN participants (miners) usually need to initially invest significantly in hardware to start earning rewards, although this may be different for use cases. This presents a potential fraud risk, where the foundation could publish a promising roadmap, build a narrative, ask influencers to promote and sell its hardware, and then abruptly rug the money and disappear.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*kN0T6j4GpCPKlM_6)

Price of a rug project

Why There’s Still Hope
======================

*   **Your** **Margin is My Opportunity:**
    Web2 is FAT. In the current Web2 landscape, large companies like Amazon and Microsoft enjoy high gross margins. DePINs can disrupt this by enabling individuals and smaller entities to compete against these giants. By tapping into this margin space, DePINs can offer more cost-effective solutions, undercutting the high-margin models of established players and passing savings onto users.
*   **Value Anchor to Minimize Bubbles:**
    DePINs provide tangible value through **hardware devices, services, and data**. This practical utility acts as a stabilizing factor, anchoring the business model and mitigating the risk of speculative bubbles. By offering real-world applications and benefits, DePINs ensure a grounded and sustainable growth trajectory.
*   **Token as a Business Booster:
    -** Initial Funding: DePINs can **raise significant capital from VC, sell hardware, and launch a narrative-driven token**. This initial funding kickstarts the business.
    - Subsidies for Growth: Using a portion of the raised funds to **subsidize service fees and reward users**, DePINs can rapidly expand their network with more nodes and users, fostering a robust and widespread community.
    - Sustainable Expansion: **While hardware reach has its limits (e.g., a certain number of hotspots needed to cover an area), a well-established network can sustain itself in the long term.** Once the initial funds are utilized, the matured network should be self-sustaining, driven by its own momentum and user base.
*   **Community-Driven, Bottom-Up Approach:**
    By leveraging a community-driven model, DePINs can achieve more **cost-effective and agile development** compared to traditional top-down approaches. This grassroots strategy not only reduces costs but also enhances user engagement and investment in the platform, creating a loyal and active community.

Evaluation Criteria
===================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*2-OvcvsLZ2Blk-kv)

Case study
==========

Helium 5G
=========

In brief, Helium Mobile is tackling the expansive U.S. 5G market, now extending into Mexico, as a forerunner and one of the largest in the DePIN arena. It stands as a significant venture for Solana, DePIN, and 5G innovations. The Helium Mobile offers $20 monthly 5G plan, currently serving over 43,000 subscribers in the U.S. Its BME approach, deflationary token model, and pegged coin concept have set a precedent for numerous projects.

*   **Background:**
    Helium stands as a pioneer and among the largest in the DePIN networks, initially launched to address IoT challenges in 2019. Through effective token incentives, it became the world’s largest IoT network with over 100,000 hotspots across 182 countries within just two years. At its peak during the last bull market, its FDV [hit $11.7 billion](https://coinmarketcap.com/currencies/helium/), marking it as a standout project. Despite [criticisms](https://www.forbes.com/sites/sarahemerson/2022/09/23/helium-crypto-tokens-peoples-network/?sh=631a9e0b7316) over the limited IoT demand, Helium has continued to explore and develop. In 2022, it branched into IoT and mobile via two sub-DAOs and began focusing on the 5G hotspot market. A [partnership with T-Mobile](https://www.fiercewireless.com/5g/t-mobile-allows-helium-mobile-crypto-carrier-ride-its-5g-network) enhanced network accessibility, and its [migration](https://www.notion.so/Critiquing-DePIN-False-Hope-or-Real-Dawn-4824300cd6834bf3a96f56349c33cacd?pvs=21) to Solana in 2023 solidified its position as a major DePIN project on this platform. As of January 2024, Helium has deployed 8,000 5G hotspots and has over 43,000 monthly 5G subscribers.
*   **Network:**
*   **How come the community-driven 5G service possible?**
    Traditional 5G providers such as AT&T, Verizon, and T-Mobile dominate the U.S. wireless market, investing heavily in spectrum licenses and infrastructure. However, DePIN 5G becomes viable through three key opportunities: the rise of eSIM technology allowing users to switch to virtual providers seamlessly; the availability of the CBRS band for public use without the need for costly licenses; and the advent of small cells that individuals can host, providing sufficient coverage when densely deployed.
*   **What’s the goal for Helium 5G network?**
    Considering the limit coverage of small cell- only cover 100 yards to a mile, completely replacing traditional 5G networks isn’t feasible. Instead, Helium’s 5G network aims to serve as a supplementary roaming service, especially in densely populated areas, to offer more affordable connectivity.
*   **How Helium network works?**
    The network comprises five roles: hardware vendors, miners, network, operators, and users. Vendors produce and sell 5G hotspots, which miners purchase at price of $1000–2598 and operate, contributing to the network’s coverage. Miners are rewarded for their active and effective service. The network manages these nodes and maintains a set data price at $0.5/GB. The Operator, Nova Labs packages this infrastructure into a user-friendly service, offering $20 monthly 5G plans for users.
*   **Token:**
*   Token types:
    Helium utilizes $HNT for utility, people need to burn $HNT for Data Credits (DC), a coin that pegged to the USD, for network usage, and $MOBILE and $IOT tokens for rewarding participants in its sub-DAOs.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*gwGOpQB_xHUUrupW)

*   $HNT and BME:
    $HNT is capped at 223 million with a halving event every two years. The constant emissions will eventually decrease to just 1 HNT per month by 2064. To avoid depleting rewards, Helium employs a Burn-and-Mint Equivalence (BME) method without exceeding the max supply. Users must buy $HNT and burn it for Data Credits (DC) to use the network. Burned $HNT is then recycled into a Net Emission Pool. To exert deflationary pressure, a cap ensures that any burned token amount exceeding 1% of the net emission (currently 1,644 per day) is permanently removed.
*   $HNT and $MOBILE:
    The value of $MOBILE is underpinned by $HNT. The daily minting of $HNT includes both the recycled amount from the Net Emission Pool and new emissions, with the total distributed among various stakeholders. Approximately 30% goes to investors, with the remainder split between the two sub-DAOs based on a formula considering DC consumption, the number of hotspots, and ve-HNT holdings. This distribution mechanism determines the allocation to the MOBILE DAO’s treasury, impacting the value of $MOBILE.
*   $MOBILE:
    $MOBILE directly influences rewards for participants, with a maximum supply set at 250 billion and halving every two years. Daily emissions are allocated as follows: 20% to the operator (Nova Labs), 4% to the oracle, 60% to hardware vendors and miners, 10% to mappers (users sharing their location), 3% to stakers, and 3% to operational funds.
*   Theoretical Flywheel Effect:
    A higher $HNT price boosts the value of $MOBILE, which in turn increases the rewards for miners and mappers. This encourages more participants to join, leading to more $HNT being burned, which can further drive up the price of $HNT, creating a positive feedback loop for the ecosystem’s growth and value.
*   **Essence:**
    While investor activity can significantly influence the network’s valuation, the sustainable growth of the network fundamentally relies on increasing its user base and miner participation.
    - **User Growth: Managed by Operators**
    Currently, Helium Mobile, serving as the sole network operator, offers a $20 monthly plan with approximately 43,000 activated SIM cards, generating an estimated monthly revenue of $860,000 (But this is inaccurate since excluding the $5/month Miami plan). However, according to [on-chain data](https://dune.com/killer_whales_dao_levilin2008/helium-mobile-user-data), only 8%-15% of this revenue contributes to the network’s earnings. Assuming the operator has sufficient funds for marketing and covering expenses like the T-Mobile partnership, user attraction strategies include the appealing $20 unlimited 5G offer. Additionally, they’ve introduced innovative incentives, rewarding users with $MOBILE for sharing their location, a program that has seen an 88% participation rate among users. These $MOBILE tokens can directly offset subscription costs. Referral programs are another tactic being utilized.
    - **Miner Growth: Influenced by $MOBILE’s Volatility**
    Miners are primarily concerned with the return on investment and rewards. The initial costs for miners, including hardware purchase and setup, range from $1,025 to $2,624. With 7,672 active hotspots, this represents a significant value generated by miners. However, the rewards fluctuate greatly due to $MOBILE’s volatility; for example, the average daily earnings for a miner in November 2023 were about $12.47, which spiked to $147.63 in December 2023 following a surge in Solana’s value, only to decrease afterwards. Enhancing $MOBILE’s value, and thereby attracting more miners, hinges on increasing $HNT’s value, creating more buying pressure from investors, and exploring other strategies to bolster buying demand.

[IO.NET](http://io.net/) AI/ML
==============================

In short, [io.net](http://io.net/) targets at AI Machine Learning market especially GPU-As-A-Service market. Its high-end GPU is ~82% cheaper compare to web2 providers like AWS and Goggle Cloud, also it has the largest amount of GPU, especially high-end GPU among web3 competitors. It introduced BME similiar to Helium.

*   **Background:**
    Machine learning, as the fundamental algorithm of AI, is experiencing significant market growth. The realm of machine learning training and inference involves computing elements like CPUs, ASICs and especially GPUs stand out as the most foundational resource. However, there’s a notable supply shortage of high-end GPUs needed for large-scale machine learning. Consequently, many AI/ML businesses, especially those lacking the necessary infrastructure and expertise, are increasingly turning to Cloud GPU services. These services offer a rental model that is both cost-effective and practical for running machine learning tasks.
*   **Network:**
*   **Why web3 Cloud GPU service makes sense?**
    ”Your margin is my opportunity”, [io.net’s price](https://cloud.io.net/explorer/home) is A100($0.89/Hour), 522 RTX 3090($0.38/Hour), 301 RTX3080($0.23/Hour), 8426 photos RTX A6000($0.75/Hour), 1988 photos RTX, A4000K8S($0.23/Hour). A100 as an example, **82.45% cheaper** than Google Cloud, **82.62% cheaper** than [Amazon AWS’s](https://cloud-gpus.com/) .
*   **What’s the goal of** [**io.net**](http://io.net/)**?**
    Aiming to become the world’s largest and most cost-effective GPU cloud on-demand with unlimited scalability for AI/ML Training/Inference.
*   **How** [**io.net**](http://io.net/) **network works?**
    [io.net](http://io.net/) solves this cost and availability problem by aggregating GPUs from underutilized sources such as independent data centers, crypto miners, and crypto projects like Filecoin, Render, and others. GPU workers can join the GPU pool, the pool groups GPU by their internet speed, location, chip manufacturer, and model name, GPUs can earn rewards not only for hired time but also for idle time when they are being utilized for inferencing. Consumers can create a cluster in under 90 seconds. First, create a cluster with a customized choice for GPU, pay using Sphere, and use VSCode to deploy ML tasks, monitoring progress.