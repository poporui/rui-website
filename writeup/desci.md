Decentralized Science(DeSci): How Blockchain Disrupts the Science Landscape
===========================================================================

*   The challenges faced by traditional scientific research
*   An urgent call for Decentralized Science(DeSci)
*   Infrastructure: Ethereum, scaling L2s, storage
*   Middleware: IP-NFT, legal code, database, ZKP
*   Application: Funding, data market, research tools, publishing, reputation
*   Communities: DeSci NYC, DeSci Berlin, DeSci Tokyo, etc.
*   How I see the future challenges and opportunities
*   Closing thoughts

Before we start, this is how I jumped into this DeSci rabbit hole: We’ve hosted monthly DeSci NYC meetups since 2022, covering everything from AI-powered mushroom observations to longevity and bee neural research.

![DeSci NYC is here](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*B-Y7P-Y9KSg_Xl9V)

💣 The Challenges Facing by Traditional Scientific Research
===========================================================

Scientific research has long been a cornerstone of innovation, driving advancements in a wide range of fields. However, the traditional research landscape has been plagued by several challenges:

*   **Low-accessibility:** Scientific research can be difficult to access for people outside of academic institutions.
*   **Low data transparency and reproducibility:** Difficult for researchers to build on existing work or verify the results of published studies.
*   **Centralized Funding:** In 2019, the top 10 funders of scientific research accounted for 44% of all funding.
*   **Peer Review Bias:** This can be subject to bias, particularly from well-known researchers or institutions.
*   **Gated Publishing:** Researchers face high barriers and need to pay high fees (often five figures $) to publish their work in top-tier journals.

🔥 An urgent call for Decentralized Science(DeSci)
==================================================

As the limitations of the traditional scientific “ivory tower” become more apparent, the urgency for DeSci solutions intensifies. DeSci empowers scientists to access resources, share data, receive funding, conduct peer reviews, and publish research transparently and collaboratively. This groundbreaking alternative to the traditional approach is paving the way for a more accessible, decentralized, and inclusive scientific community.

I will embark on the DeSci journey with the following structure:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*e2ZLycgsf15p-ForlqU3cw.png)

⛓️ Infrastructure
=================

DeSci projects typically rely on the Ethereum blockchain as their foundation, allowing people to develop applications, carry out transactions, and utilize storage. To optimize performance and minimize costs, scaling solutions like Optimistic Rollups (OP) and zkSync are frequently implemented, they handle transactions off-chain and periodically commit aggregated results to the Ethereum mainchain. Additionally, storage protocols such as Arweave offer unstructured data or file system storage, presenting advantages over conventional centralized systems in terms of security, reliability, and censorship resistance. It is likely that most DeSci projects are built on this robust infrastructure. [_More about infras._](https://ethereum.org/en/what-is-ethereum/)

⚙️ Middleware
=============

Database: Structured data format
--------------------------------

> A database provides the ability to store data in a structured format, enforce access controls and permission policies, and ensure data consistency and integrity.

There’s a call for a cost-efficient decentralized storage solution for structured data like graphs or form since developers are forced to rely on centralized solutions, will ultimately cause problems of a single point of failure, accessibility, and management issues.

[DBDAO](https://www.dbdao.xyz/) is an innovative database structure, it turns each row of data as an NFT, where the contributors can receive a share of the profits when the database monetizes. Moreover, DBDAO turns every database into a DAO, allowing the curator to manage access and review control efficiently. As it develops, we can see the interesting potential of using ZK (Zero-Knowledge) technology to protect data while ensuring that the purchaser recognizes the value of the database.

[DBDAO — The open source database for web3 apps
----------------------------------------------

### DBDAO turns each database into a DAO and every row into an NFT. This allowing people to create unique, verifiable, and…

www.dbdao.xyz](https://www.dbdao.xyz/?source=post_page-----64d4cf283e17---------------------------------------)

Legal: Agreements in smart contract
-----------------------------------

> Legal agreement in code is a secure way to solve complex IP issues of NFTs.

By incorporating a legally binding agreement into the smart contract of an NFT, parties can safeguard their interests and maintain compliance with applicable laws and regulations. For accessibility, the legal agreement should be comprehensible to both legal professionals and blockchain engineers.

[OpenLaw](https://docs.openlaw.io/markup-language/), is building a technology stack to help power smart legal agreements using marked-up legal templates. This approach may be beneficial for those who prefer a more traditional contract creation process. However, it may not be as customizable or user-friendly as some other options.

[Markup Language | OpenLaw Docs
------------------------------

### The OpenLaw protocol relies on a markup language to transform natural language agreements into machine-readable objects…

docs.openlaw.io](https://docs.openlaw.io/markup-language/?source=post_page-----64d4cf283e17---------------------------------------)

**Ownership: IP-NFTs**
----------------------

> IP-NFTs serve as the proof-of-intellectual property.

It is crucial to recognize and establish the ownership of intellectual property (IP) in the science field. This can be achieved through Non-Fungible Tokens (NFTs), which are secure and reliable digital assets on the blockchain, enhancing accountability and mitigating fraud. Furthermore, NFTs contribute to the creation of a dynamic IP market by adding liquidity and commercialization opportunities. This enables the sale or fractionalization of IP licenses among various entities and partners while ensuring that researchers continue to receive their fair share of royalties.

[Molecule](https://www.molecule.to/blog/molecules-biopharma-ip-nfts-a-technical-description) publishes its standard IP-NFTs, they have unique identifiers to verify ownership and authenticity of an IP asset, implement legal agreements, and enable customized smart contract functionality and fractional ownership. Technically the metadata is stored on Arweave, while IP and license are stored on Nevermind (a centralized data storage), ideally, a decentralized data storage layer that allows restrictive access management should be used.

[Molecule's Biopharma IP-NFTs - A Technical Description
------------------------------------------------------

### Globally, early-stage biopharma research suffers from chronic underfunding, leading to discontinued research in the…

www.molecule.to](https://www.molecule.to/blog/molecules-biopharma-ip-nfts-a-technical-description?source=post_page-----64d4cf283e17---------------------------------------)

Privacy: Zero-knowledge Proof
-----------------------------

> Zero-knowledge proofs (ZKP) enable proving a statement’s truth without revealing any additional information.

When we mention the importance of open-source, we should also emphasize on privacy control of the research, that DeSci should strike a balance between promoting transparency and collaboration while simultaneously ensuring data confidentiality.

Here comes Zero-knowledge Proofs (ZKP), it is a cryptographic technique that is essential for decentralized science research that could preserve privacy, allows researchers to build upon each other’s work without compromising data confidentiality, and helps researchers adhere to privacy regulations.

[Introduction to zk-SNARKS | ConsenSys
-------------------------------------

### In this post we aim to give an overview of zk-SNARKs from a practical viewpoint. We will treat the actual math as a…

consensys.net](https://consensys.net/blog/developers/introduction-to-zk-snarks/?source=post_page-----64d4cf283e17---------------------------------------)

🛠️ Application
===============

Funding
-------

> DeSci promotes community-based decision-making to fund research, primarily through DAOs.

Decentralized funding has emerged as a revolutionary new way to finance projects, enabling individuals and organizations to contribute funds directly to projects they believe in. It eliminates the intermediaries and provides greater transparency, allowing contributors to see how their funds are being used and have a say in the decision-making process.

The most well-known web3 funding platform [Gitcoin](https://www.gitcoin.co/) was founded in 2017, and aimed at supporting and monetizing open source projects through bounties, the platform is based on [quadratic funding](https://wtfisqf.com/?grant=&match=1000), a novel mechanism for democratically allocating philanthropic funds that allows smaller contributors to have a greater impact. To date, Gitcoin Grants has generated $50+ million of funding.

[Gitcoin
-------

### Gitcoin creates solutions that empower digitally native communities to fund, build, and protect what matters. Through…

www.gitcoin.co](https://www.gitcoin.co/?source=post_page-----64d4cf283e17---------------------------------------)

[Molecule](https://discover.molecule.to/) is a popular DeSci funding platform that focuses on biopharma fields, provides a protocol that creates a hybrid legal-smart contract primitive IP-NFT, a marketplace that enables matchmaking between researchers and funders and incubates bioDAOs, using BioDAO as a launchpad. Now has 250+ listed research projects, with 6 Bio DAOs. [Valley DAO](https://www.valleydao.bio/) also uses a similar approach.

[Discover Research Projects
--------------------------

### Molecule is a collaborative platform, where stakeholders in drug development work together to accelerate the process of…

discover.molecule.to](https://discover.molecule.to/?source=post_page-----64d4cf283e17---------------------------------------)

[Bio.xyz](http://bio.xyz/) provides a launchpad, resources, mentorship, a shared network, and a suite of legal and smart contracts for DeSci DAOs. Their goal is to enable DeSci DAOs to utilize IP-NFTs to fund, govern, and develop intellectual property from universities, companies, and researchers worldwide, catalyzing a Cambrian explosion of digital IP assets. Now has 6 DAOs in the network.

[Bio.xyz
-------

### Leading biotech DAO talent and capital network Join our community of succesful DAO operators, co-initiators…

www.bio.xyz](https://www.bio.xyz/?source=post_page-----64d4cf283e17---------------------------------------)

[DeSciWorld](https://desci.world/) is like a one-stop shop for users to view, engage with, and understand all that is happening in the World of Decentralised Science. They have 69 DeSci projects listed and trying to build a P2P funding marketplace.

There are lots of interesting sub-focus DAOs. [VitaDAO](https://www.vitadao.com/) is focusing on longevity research using $vita as incentives, and has built its whole incentive mechanism. [HairDAO](https://www.hairdao.xyz/) is for hair loss treatment research, they ideate studies internally, execute those studies via key community members and also provide funds for early-stage research; [AthenaDAO](https://www.athenadao.co/) is interested in transformational contributions to women’s health; [PsyDAO](https://psydao.io/) provides micro-grant for early research for Psychedelics; [CryoDAO](https://www.cryodao.org/) funds cryopreservation field to push forward the cutting-edge medical technology; [FrontierDAO](https://www.frontierdao.xyz/) focus on Space, fusion energy and develop space metaverse.

Data Marketplace
----------------

Many researchers face challenges due to limited and expensive data resources, primarily resulting from Web2 companies tightly guarding their data. Imagine the potential of an open data market- a bold idea: enable individuals to monetize their data while granting researchers improved access, fostering collaboration, and paving the way for novel discoveries.

As we mentioned above, [DBDAO](https://www.dbdao.xyz/) is an innovative database structure, the core idea is enabling people to monetize their own data. In my eye, DBDAO is not just a database structure, it’s also a significant shift from the traditional data contribution model, as it prevents curators from pre-paying for data before earning any money and provides contributors with a solid in-code promise of future reward.

[DBDAO — The open source database for web3 apps
----------------------------------------------

### DBDAO turns each database into a DAO and every row into an NFT. This allowing people to create unique, verifiable, and…

www.dbdao.xyz](https://www.dbdao.xyz/?source=post_page-----64d4cf283e17---------------------------------------)

[Fleming Protocol](https://flemingprotocol.io/) is an open-source data economy designed to drive collaborative biomedical discovery by incentivizing patients, with a primary focus on health data ownership. Fleming Protocol provides the infrastructure for patients to store their data in IPFS, ensuring they maintain full custody and control. Moreover, it enables patient users to monetize their data, allowing them to directly capture the value they generate. A small transaction fee for marketplace activities will contribute to the FlemingDAO treasury.

[Decentralized Science for the Win
---------------------------------

### Fleming Protocol is an open-source data economy for biomedical discovery which incentivizes patients and hackers to…

flemingprotocol.io](https://flemingprotocol.io/?source=post_page-----64d4cf283e17---------------------------------------)

Research Tools
--------------

> Designed to improve the efficiency and quality of research.

When conducting research, various formats such as reports, charts, code, and external APIs are often involved. A versatile platform is needed to seamlessly connect all aspects of the research process while enabling dynamic publishing.

[DeSci Node](https://nodes.desci.com/web) is an application that allows researchers to link tables and figures in manuscripts with data and code and create a dynamic interoperable record of versions that elevates the research process. The beta version is released on Feb 21, 2023, now the nodes are stored on an open state repository on IPFS and their future roadmap is integrating compute that enables seamless publishing, integrating funding with Gitcoin and Hypercerts, and adding verifiable attestations of quality.

[DeSci Nodes: Research Object Creator
------------------------------------

### DeSci Nodes enables the creation and validation of Research Objects on an open append-only data store. Combine research…

nodes.desci.com](https://nodes.desci.com/web?source=post_page-----64d4cf283e17---------------------------------------)

[LabDAO](https://labdao.xyz/) is a new research organization, not only allows you to publish without permission, get grants but also using research tools. The tools varies from Notebooks for small-molecule docking, computed infrastructure and wet-lab access.

[LabDAO | Tools for the Next Frontier
------------------------------------

### LabDAO builds and uses open tools for digital life science research. We want to see a world where every inventor can…

labdao.xyz](https://labdao.xyz/?source=post_page-----64d4cf283e17---------------------------------------)

Publish platform
----------------

> Decentralized platform allows open publishing, funding, credit, collaborate, peer review and cross-platform discovery.

No more publish or perish. Traditional scientific publication and its peer review system strongly rely on a few major industry players controlling most journals, databases, and metrics, while keeping most research behind paywalls. The rising concern about fairness, quality, cost, unpaid labor, and transparency is growing loud.

The [ResearchHub](https://www.researchhub.com/), co-founded by Brian the co-founder of Coinbase, is a platform for researchers to share works without gate, browse personalized feeds, conduct peer reviews, post scientific question bounty, use research tools and receive rewards. They have a native token RSC to incentivize content creation, tip valuable content, and vote on key decisions for the community.

[ResearchHub | Open Science Community
------------------------------------

### We're a community seeking to improve prioritization, collaboration, reproducibility, and funding of scientific…

www.researchhub.com](https://www.researchhub.com/?source=post_page-----64d4cf283e17---------------------------------------)

Reputation system
-----------------

> Decentralized Identity is an approach gives individuals control of their digital identities.

To foster a high-quality and trustworthy community, the DeSci platform should implement a robust reputation system, like those Web2 forums, to promote individuals with genuine expertise. However, one significant challenge is the inherent anonymity of blockchain technology, where wallet addresses representing users cannot be directly linked to their real-world identities.

First, we need to track user interactions on the decentralized platform, such as likes, comments, and publications, to help establish credibility and expertise. Secondly, utilize decentralized publishing tools to connect users’ scientific work, promoting transparency and accountability. Moreover integrate off-chain, traditional academic identities with on-chain records to create a seamless reputation system that acknowledges and validates users’ credentials and achievements.

[DeSci Labs
----------

### DeSoc Forum: a plugin for Discourse forum that allows wallet-linked attestations to surface in your community member's…

www.desci.com](https://www.desci.com/desoc?source=post_page-----64d4cf283e17---------------------------------------)

🏠 DeSci Communities
====================

![Made by DBDAO, DeSci NYC](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*PTDlNmN3vUcS6OcNWpnjWA.png)

Till now, we’ve seen energetic communities from all over the world trying to gather resources and talents to build a DeSci future. Shout-out to [DeSci NYC](https://twitter.com/db_dao), [DeSci Berlin](https://twitter.com/DeSciBerlin), [DeSci Tokyo](https://twitter.com/descitokyo), and many.

✨ How I see the future challenges and opportunities
===================================================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*akXeeBG0gpFrounY4Bf9JA.png)

Glad to see Messari research shows that there are 85 operational DeSci projects, with over 50% launching in the past year. However, challenges are coming along with this process:

1.  **Mastering the token game and building sustainable models**

While some platforms have already introduced tokens as incentives, the relatively low value of these tokens poses a challenge. The current value of these tokens is significantly lower than traditional compensation for similar tasks, which might initially attract users for reputation-building but could ultimately discourage long-term participation and growth. Actions like increasing token utility, re-evaluating tokenomics, raising awareness to build consensus, and developing strategic partnerships are essential. Tokenomics can be a double-edged sword; to fulfill the commercialization promise, platforms or DAOs must master the game.

**2. Establishing new rules for the DeSci era**

The traditional science ecosystem, with its gatekeeping centralization, has, in some ways, maintained research quality. As we endeavor to create an open decentralized science platform, it’s essential to prevent an influx of low-quality and chaos. Our focus should be on developing a robust framework that ensures accessibility while also guaranteeing that individuals with genuine talent and knowledge receive appropriate recognition and rewards. Achieving this requires to implementation of sound tokenomics, effective DAO review mechanisms, reputation-based priority systems and so on.

3. **Onboard all scientific parties**

Crafting a new scientific workflow that accommodates funders, research institutions, researchers, industry, journals, and the public is crucial to the success of DeSci. DeSci may initially serve as a complementary method and need to integrate and collaborate with existing frameworks before eventually taking its place.

**4. Watch out the dark side of the forest**

We must know the advantage of decentralization can be exploited by malicious parties to violate ethics and law, i.e. decentralized storage could be used to preserve and distribute forbidden research content. This is the moral issue rather than a technical one, to protect the long-term value of decentralization and ensure its acceptance by society, we must implement regulations that are led by DAOs, funders, or other mechanisms. By doing so, we can safeguard the integrity of scientific research and ensure that the benefits of decentralization are enjoyed by all.

🐈‍⬛ Closing Thoughts
=====================

There are still many complaints about today’s blockchain infrastructure performance, however, with many intelligent individuals dedicated to building, the scalability, safety, performance, and cost will be improved, till one day we don’t need to sacrifice anything for better infrastructure.

Middleware providers must establish new standards for legal problems, intellectual property ownership, privacy, and data storage and so on. To achieve mass use and long-term value, they should also focus on building industry consensus, which may involve a period of middleware performance battles before relatively stable standards are settled.

DApps can adopt the same standard to achieve interoperability, prioritize the user experience to onboard all parties, create a sustainable incentive model, and design the interface with their vision in mind. The product’s design can shape industry focus, whether profit or reputation-focused, whether encouraging mass researchers or incentivizing elites, the way the product is crafted will change the game.

I love how we organize different DeSci DAOs in the world now, to raise awareness, and gather talents, funds, and resources for revolution. DeSci summits are a great start, we can also step into campuses, institutions, and different countries to further movement.

This task is massive, leveraging decentralized technology, migrating existing science researchers, and setting up new journals and many. But with the DeSci expansion, I believe we are on the cusp of a tipping point.

Interested in DeSci? Have a different opinion? Happy to talk!

[Twitter](https://twitter.com/popolandRuii)@ruisnakes
[DeSci NYC](https://twitter.com/db_dao)