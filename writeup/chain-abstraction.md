How Close Are We to a Chain Abstraction Future?
===============================================

## **How Close Are We to a Chain Abstraction Future?**


In the midst of the Rollup craze, we can only make it by simplifying infrastructure complexity for users. This entails utilizing one account, one signature, and one gas for all cross-chain operations. However, challenges persist such as account state synchronization, signature aggregation, atomic execution, and delayed finality. Let’s dive into different approaches from major players.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8gxnYc9jIvNfXCR-kJzKlw.png)

**01/ What is Chain Abstraction:**
----------------------------------

In the ultimate stage, end users won’t need any infrastructure knowledge. They’ll simply express their intent or specify the order, sign a transaction, and leave the rest — routing, gas conversion, construction, ordering, and cross-chain ops — to be handled automatically. P.S. This tweet focuses specifically on cross-domain abstraction.

**02/ Why Chain Abstraction Matters:**
--------------------------------------

With the fat protocol theory, blockchain rollup or alt l1 builders are multiplying and Rollup-As-A-Service is accelerating new blockchain creation to under a day. That being said, those blockchains that lack activity will fade in 6–18 months. Despite this, achieving a unified blockchain monopoly seems unlikely due to the persistent need for flexibility. Even in a more concentrated long-term scenario, the presence of various blockchains will continue to lead to UX and liquidity fragmentation.

**03/ Why it wasn’t possible before:**
--------------------------------------

*   Logic and execution tied to each other -> 💡Contract account
*   Account system difference on chains -> 💡Address derivation
*   Varied chain verification methods -> 💡Agnostic signature

**05/ High-level breakdown:**
-----------------------------

1.  **Unified address**: Wallet consolidates different EVM and non-EVM addresses into one.
2.  **Signature aggregation**: Smart contract accounts (EVM) or MPC signer contracts (non-EVM) manage signature aggregation.
3.  **State sync:** Keystore Rollup or a Hub facilitates wallet state sync across chains.
4.  **Single Gas**: Paymaster contracts enable payment in ERC20 or even sponsor all.
5.  **Block-building & Relaying**: Mempool builders verify, sequence, and batch transactions, while RPC monitors each tx state on each chain and coordinates execution in sequence.
6.  **Unified liquidity**: Cross-chain liquidity is handled by solvers such as UniswapX or liquidity hubs.

**06/ Who are the main players:**
---------------------------------

Chain Abstraction intersects with wallets, intent-based systems, MEV solutions, and bridges. Key projects like @SAFE, @Clave, @SUAVE, @Layer0, @Union and others play active or passive roles. This year, specific chain abstraction players have aimed to consolidate various modules into a unified front-end solution. For instance, @Particle developed a layer 1 solution using Cosmos SDK, allowing users to use any token or $PARTI as gas for transactions across EVM, Solana, and BTC. @Light offers a 4337-compatible cross-chain smart contract wallet supporting state synchronization and signature aggregation, @XION is a general Chain Abstraction protocol with meta account design that allows agnostic signature, parameterized fee layer, and state machine updates. @NEAR integrates an MPC layer to address cross-chain transactions.

**07/ Multi-chain Unified Address:**
------------------------------------

Maintaining separate accounts for each chain is burdensome for both users and developers, requiring the latter to manage multiple codebases. For Smart contract wallet projects inside EVM, they can use a deterministic deployment proxy that can be deployed to any chain at the same address, deploy any contract at a deterministic location using CREATE2. For foreign blockchains, the address can be derived from the EVM address, chainID, and provided path, and each account receives an infinite number of remote addresses on each chain. For EOA accounts like @NEAR, they derive a foreign address from NEAR address(example.near), a derivation path(a string such as Ethereum-1) and the MPC service’s public key.

[GitHub - Arachnid/deterministic-deployment-proxy: An Ethereum proxy contract that can be used for…
--------------------------------------------------------------------------------------------------

* An Ethereum proxy contract that can be used for deploying contracts to a deterministic address on any chain. …

github.com](https://github.com/Arachnid/deterministic-deployment-proxy?source=post_page-----ba46269be7b2---------------------------------------)*

[Chain Signatures | NEAR Documentation
* Chain signatures enable NEAR accounts, including smart contracts, to sign and execute transactions across many…

docs.near.org](https://docs.near.org/build/chain-abstraction/chain-signatures?source=post_page-----ba46269be7b2---------------------------------------)

**08/ Wallet State Sync Across Chains:**
----------------------------------------

When a user changes a signing key on one Layer 2, how does the change synchronize to other chains? It requires real-time updates, minimal updating cost, and reasonable propagating time. Here are three current solutions: keystore rollup, light sync, MPC contract, and keystore hub.

**09/ State Sync- Keystore Rollup:**
------------------------------------

A minimal Keystore Rollup is an L1-sequencing based rollup that stores its Merkle Tree state root on L1. To create a wallet, users create a zk circuit that defines the logic for verifying and updating their signer, each user has data + verification key(vk). Users create a SCW that hardcodes their key as an immutable value. To change an SCW signer through this l2, the user can submit their original key, a new key, current vk, the value of data encoded in IMT, and a proof that is verified against the current vk. Alternatively, the user can submit tx directly to the Keystore contract on L1. This method is neutral and trustless, however, incentives can be challenging, assuming updating the signer is not a frequent behavior, the user has to pay for the tx proof upfront to subsidy Rollup prover otherwise no value is provided to the prover.

[Based rollups-superpowers from L1 sequencing
--------------------------------------------

### TLDR: We highlight a special subset of rollups we call "based" or "L1-sequenced". The sequencing of such rollups-based…

ethresear.ch](https://ethresear.ch/t/based-rollups-superpowers-from-l1-sequencing/15016?source=post_page-----ba46269be7b2---------------------------------------)

[Minimal KeyStore Rollup spec - HackMD
-------------------------------------

### A spec for Vitalik's Dedicated minimal rollup for keystores.

hackmd.io](https://hackmd.io/@mdehoog/mksr?source=post_page-----ba46269be7b2---------------------------------------)

**10/ State Sync- Light State Sync:**
-------------------------------------

Light wallet sync, invented by Agus from 0xSequence. It enables the wallet to create a custom message schema in SCA that isn’t attached to the network chainID, allowing signing a ‘delegation of control’ signature to a new set of signers, and those signers can later be used to sign any regular transaction or message. However the state doesn’t update until the user operates on any of the chains, another transaction can tag along as one of the baching tx to update the chain state to match the latest ‘pre-signed’ state. This method realizes real-time and cost-efficiency, however, it relies heavily on off-chain data availability, if the data were to be lost, the wallet lose access to its latest state or even become non-functional, so the wallet clients usually be responsible for storing a copy of all data. Also, this method doesn’t provide strong guarantees when removing signers, since it didn’t disable anything on-chain.

[Sequence Wallet - Introducing Light State Sync and full merkle wallets
----------------------------------------------------------------------

### The Sequence Wallet has just undergone a substantial infrastructure upgrade, bringing numerous improvements and…

sequence.xyz](https://sequence.xyz/blog/sequence-wallet-light-state-sync-full-merkle-wallets?source=post_page-----ba46269be7b2---------------------------------------)

**11/ State Sync- Keystore Hub:**
---------------------------------

For a Keystore hub, the code logic and storage of the smart accounts are separated, a keystore hub stores the signer information, and users ensure the consistency of multi-chain states through Hub deployment and updates. Simply put, the Keystore hub is in charge of sending updated transactions to different chains. This method is the most straightforward approach, assuming the updating signer operation is not a frequent operation, so the batched tx fee is acceptable, however, it requires trust and some delays.

**12/ Signature Aggregation:**
------------------------------

Users can now initiate multi-chain transactions with a single signature. Project like @Light utilizes a Merkle Tree-based full-chain signature aggregation ensures the user only needs to sign once. However, when it comes to non-EVM, projects like @NEAR utilize MPC signer contracts, the contract will return the elements needed to reconstruct the signature instead of the signature of tx itself, allowing them to generalize the signing process for multiple blockchains(i.e. In Bitcoin, r and s values returned), and relay it to the corresponding network. To be noticed, the signature of the paymaster(sponsor gas) needs to be collected and aggregated in this process if needed.

**13/ Gas Abstraction:**
------------------------

A better experience is the gas being sponsored by other parties(wallet or dApps) or paid in erc20, and more importantly in a cross-chain scenario, unified gas reduces complexity. The gas includes an execution fee on all involved chains. During the constructing tx process, a paymaster contracts participants by providing its own signature, when the bundler does off-chain simulation, the balance of the Paymaster will be checked, and gas is returned directly to the Bundler by the Paymaster when it executes on the target chain. Layer1 like @Particle allows user pay in $PARTI and handle cross-chain gas; @Light enables pay in any token and custom paymaster to fully sponsor gas for specific order flow; @Clave currently sponsors “all” of users’ transactions gas.

**14/ Block building:**
-----------------------

From a high level, we’ll have a plug-and-play mempool and decentralized block builder to handle the transactions. User preferences span from straightforward transfers within a single domain to intricate sequences across multiple blockchains. Users can specify execution details within a domain or provide abstract instructions, leaving optimal routing to executors. The concept of SUAVE paints an ideal scenario: multiple chains sharing a decentralized sequencing layer, maximizing network resilience and block space revenue for validators while ensuring open access for builders and searchers.

**15/ Relaying:**
-----------------

To achieve cross-chain atomicity, relaying work with block building hand-in-hand, monitoring tx execution on each chain through relayer nodes/ like Flashbots RPC, and coordinating the bundler/builder to send the next tx to corresponding chains. The process repeats until all tx are executed on the target chain and unused gas fees are handled. In theory, the waiting time is the blockchain’s block-generating time, when the block is produced too slowly, the signature will be invalid. We can set tx as atomic, so when one tx fails, the whole tx turned failed.