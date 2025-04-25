# WebAuthn and Passkey, Key Management for Daily Crypto Users
---

## TL;DR


The private key is the core that allows us to sign transactions on Ethereum, but managing it has been a nightmare, even in the readable form of “seed phrases”. Yet our goal was never to turn blockchain into a sophisticated game.

Authenticating authorized users is crucial for secure transactions. With the evolution of internet security and UX, we’ve moved from password authentication to biometrics like facial recognition and fingerprints. WebAuthn is a key development in this progression. This article closely discusses three terms:

1.  **WebAuthn:** A web authentication standard uses public key-based credentials, often created by external authenticators. It eliminates the need for passwords and enables secure user authentication.
2.  **Secure Enclave:** A hardware-based secure area within computing devices, the Secure Enclave is designed to protect sensitive data. Versions of a Secure Enclave are found in iOS, Android, and Windows devices. It can serve as a secure authenticator by implementing WebAuthn, but the private key, tied to the SE, often presents cross-device challenges.
3.  **Passkey:** An implementation of WebAuthn at the operating system level, customized by various device and system providers. For instance, [Apple’s Passkey](https://support.apple.com/en-sg/102195) uses the key stored in the iCloud Keychain for cross-device synchronization. However, this approach is typically locked to specific platforms or systems.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*A2KiJN0DaMZlG2se)

As described above, the webAuthn implementations align with our goal for **daily blockchain users**, to achieve high-level anti-phishing security and a friendly experience. Here’s the idea to merge them into blockchain:

*   **Key Layer**: Users authenticate using seamless biometric methods like facial recognition or fingerprint. Under the hood, it is the hardware-based security processor like Secure Enclave or cloud services like iCloud and Google Cloud that handle the key management. I’ll dive into addressing cross-device and cross-platform issues later.
*   **Account Layer**: A Smart Contract Account (SCA) offers the ability to assign arbitrary signers(e.g. SE and Passkey) and threshold mechanisms. Moreover, its modular design enhances flexibility and upgradability. For example, an SCA can adapt its signing requirements dynamically based on factors such as transaction amount, time, or IP address. On the other hand, a traditional External-Owned Account (EOA) can be augmented with MPC services, their combination offers better interoperability and cost-effectiveness compared to SCA, though it lacks advanced functionalities that SCAs provide, especially for key rotation.
*   **Signing Layer**: Ethereum natively supports the k1 curve, but WebAuthn’s signature verification incurs higher costs, since it uses the r1 curve for key generation. Therefore, some Layer 2 solutions like zkSync, planning on [native EIP-7212 r1 curve precompiles](https://eips.ethereum.org/EIPS/eip-7212). Additionally, there are third-party services, Solidity verifiers, Zero-Knowledge (ZK) verifiers, and distributed key management systems, to facilitate r1 curve signing more cost-effectively.

**_Disclaimer:_**

_Technological advancement doesn’t guarantee market success; Not all devices and platforms have adopted Passkey; Using SCA can be more expensive than EOA; The proposed solution evolves with technological progress._

## Crypto UX sucks? Key management sucks!

In the blockchain realm, the real control of blockchain assets is not in the hands of the user or the wallet provider, but rather lies with the private key. This key is the most integral to the entire process of executing a transaction on Ethereum. To understand this better, let’s take EOA as an example:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*0e3gRMl_aAiPVZst)

*   Key Generation: A random number selected from the secp256k1 elliptic curve serves as the private key. This key is then multiplied by a predefined point on the curve to generate the public key. The Ethereum address is derived from the last 20 bytes of the hashed public key. The ‘seed phrase’ is usually introduced for human-readable backup, enabling the deterministic derivation of private and public keys.
*   Signing Transactions: A transaction, containing details such as nonce(a sequential number), amount, gas price, and recipient address, is signed using the private key. This process, involving the ECDSA, a digital signature algorithm that uses elliptic curve cryptography and adopts secp256k1 as the curve, generates a signature consisting of values (r, s, v). The signature and the original transaction are then broadcast on the network.
*   Verifying Transactions: Once a transaction reaches Ethereum nodes, it undergoes a validation process in the node’s mempool. To verify the signer, the nodes use the signature and hashed transaction to derive the sender’s public key and confirm the transaction’s authenticity by matching the derived address with the sender’s.

As described above, the private key is an essential entity on-chain. Originally, Ethereum accounts, known as External Owned Accounts (EOAs), relied solely on a single private key, which posed significant risks, as losing the key meant losing access to the account.

Many may think Account Abstraction(AA) is the solution to everything related the bad user experience, which I’ll say not exactly. AA is about changing the validity rules to be programmable, and the programmability of a Smart Contract Account (SCA) makes it possible. AA is powerful, enables sending multiple transactions in parallel(abstract nonce), gas sponsorship, and pay gas in ERC20(abstract gas), and is more relevant to this article’s topic, to break the fixed signature validation(abstract ECDSA signature). Instead of EOA, SCAs can assign arbitrary signers and signing mechanisms like multi-signature(multisigs) or scoped keys(session keys). However, **despite the flexibility and upgradability advancement of AA, the fundamental reliance on key(s) for transaction signing remains unchanged.**

Even when converted into a 12-word seed phrase, managing a private key remains challenging, posing risks of loss or phishing attacks. Users must navigate between complex layers of decentralized solutions or the warm embrace of centralized service, neither of them is ideal.

Why crypto experience sucks? A large part of it is because key management sucks. It always requires tradeoffs in experience, security, and decentralization. This article explores potential optimal solutions for managing the key.

## Key Management Layers

There’ll never be a one-size-fits-all solution, the best way to preserve the key is tailored to specific user scenarios, influenced by factors like user type (institutional or individual), capital amount, transaction frequency, and interaction types.

To clarify ahead, I avoid using the popular ‘self, semi, and fully custody’ methods to catalog. In my view, true self-custody means signing a transaction independently, without relying on another party, this holds even if the solution isn’t custodial in the traditional sense (like being stored in decentralized nodes’ TEE). Categorizing solutions as merely ‘good’ or ‘bad’ based on custody type is overly simplistic and doesn’t account for their varying suitability. For a more nuanced assessment of key management methods, I suggest analyzing them through three distinct layers:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*49LUfv5gE6AuLr5r)

### Responsibility

> _Whether to split the responsibility of managing a key into different parties._

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*VrNxe4mH6AV_9n5s)

Given that individuals often face challenges in managing the key, distributing the responsibility of safeguarding the key emerges as a natural risk mitigation strategy. This category includes methods like using multiple keys to collaboratively sign, as seen in Multi-Signature (Multi-sig) systems, and dividing the private key into shares through a Secret Sharing Scheme(SSS) or Multi-Party Computation (MPC).

*   Multi-sig: Requiring multiple complete private keys to generate transaction signatures. This method necessitates on-chain communication about the different signers, incurring higher transaction fees, and impacting privacy because the number of signers is visible on-chain.
*   SSS: a private key is generated at a single location, and a dealer distributes pieces of this key to different parties. All parties must reconstruct the full private key to sign a transaction. However, this temporary reconstruction may introduce vulnerability.
*   MPC-TSS(Threshold Signature Scheme): as an implementation of MPC, a cryptographic approach enabling several parties to perform computations while keeping their inputs private jointly. Each party independently creates a secret key share, and transactions are signed without these parties ever needing to physically meet. It introduces lower fees because it’s off-chain, and no single point of failure risk as SSS.

### Storage

> _Store the key or shares, affected by security, accessibility, cost and decentralization factors._

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*bozOvEzZxbszANDx)

*   Centralized cloud services like AWS, iCloud and other servers. They’re convenient for frequent transactions, but more vulnerable to censorship.
*   Decentralized storage like [IPFS](https://ipfs.tech/) and [Filecoin](https://filecoin.io/).
*   Local computer/mobile: Keys are stored locally within the browser’s secure storage.
*   Paper wallets: Physical printout of private keys or QR codes.
*   Trusted Execution Environment (TEE): [TEE](https://en.wikipedia.org/wiki/Trusted_execution_environment) provides a secure area within the main processor to execute or store sensitive data, isolated from the main operating system.
*   Secure Enclave: The Secure Enclave on modern devices is isolated from the main processor to provide an extra layer of security and is designed to keep sensitive user data secure even when the Application Processor kernel becomes compromised.
*   Hardware wallets: Physical devices like [Ledger](https://www.ledger.com/) and [Trezor](https://trezor.io/), specifically designed to securely store private keys.
*   Hardware Security Module (HSM): HSMs are specialized hardware devices designed for secure key management and cryptographic operations. They are typically used in enterprise environments and offer high-grade security features.

### Access

> _How to verify user identity to access the stored key_

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*PcAS3fYhLBuwJe7H)

Authentication is involved in accessing the stored key. It’s about validating that the individual attempting access is indeed authorized to do so. Looking back to history, we can categorize the history like this:

1.  Something You Know:
    Passwords, PINs, answers to security questions, or specific patterns.
2.  Something You Have:
    Include smart cards, hardware tokens (Time-based one-time passwords), or digital factors like social account verifications and SMS codes sent to a phone.
3.  Someone You Are:
    Involve unique physical characteristics of the user, such as fingerprints, facial recognition (like Apple’s Face ID or Windows Hello), voice recognition, or iris/retina scans.

Upon these, 2FA and MFA are methods that combine two or more factors, like SMS combined push notification, to add more security layers to user accounts.

## Existing Players Analysis

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Zdu5qI0LtjrIJpSe)

[MetaMask](https://metamask.io/) allows users to use a password to access the key stored in the user’s local browser’s storage.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*dM6OzILdVPH0F_oZ)

[Trust Wallet](https://trustwallet.com/) allows users to use a password or faceID to access the key stored in the user’s local browser’s storage, the user also can choose cloud service to back up the private key.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*_5SiEHEtHNcmpVGH)

[Privy](https://www.privy.io/) allows users to use multiple social login methods like email, using SSS to split three shares:

*   Device share: Browser-iFrame, mobile-secure enclave.
*   Auth share: Stored by privy, link to privy id).
*   Recovery share: User password or encrypted by Privy stored in [hardware security module (HSM)](https://en.wikipedia.org/wiki/Hardware_security_module).

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*UMGxNDq2l2rKIMyy)

[Particle](https://wallet-debug.particle.network/) allows users to use social login, using MPC-TSS that has two shares:

*   Device share: browser-iFrame
*   Server key share: Particle’s server

## New Solution


### Key layer: WebAuthn, Secure Enclave and Passkey

The existing solutions above have been pivotal in introducing users to web3. However, they often come with challenges: passwords can be forgotten or targeted in phishing attacks, and even 2FA, though more secure, can be cumbersome with its multiple steps. Additionally, not everyone is comfortable entrusting a third party with key management, users still depend on their system availability and liveness while some services ensure they can’t access the key.

This brings us to ponder whether there’s a more effective solution — one that offers the closest solution to a trustless, high-security, and seamless user experience. This search leads us to the optimal web2 methods. Several terms are tightly related to the topic, as I described at the beginning of the article, WebAuthn is the authentication standard itself, while Secure Enclave and Passkey are implementations or components related to this standard.

**WebAuthn**

WebAuthn standardizes the interface of authenticating users to web-based applications. It allows users to log in to internet accounts using external authenticators instead of a password. Authenticators could be Roaming Authenticators (Yubikey, Titan key) , or a Platform Authenticator (Built-in keychain on Apple devices), and so on.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*3Wnv2FNhYlL9QC15)

The FIDO (Fast IDentity Online) Alliance initially developed the technologies behind WebAuthn. It was officially declared a web standard by the W3C in March 2019 and along with its standardization, major browsers like Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari have adopted WebAuthn, significantly increasing its reach and usability. Now it is supported by [many advanced devices](https://passkeys.dev/device-support/).

Benefits of webAuthn:

*   **Enhanced Security**: Eliminates reliance on passwords, reducing vulnerability to phishing, brute force, and replay attacks.
*   **Improved User Experience**: Offers a simpler and quicker login process, often with just a tap or biometric verification.
*   **Privacy Protection**: No shared secrets are transmitted during authentication, and individual websites don’t receive any personally identifiable information.
*   **Scalability and Standardization**: As a web standard, WebAuthn ensures consistency and interoperability across different browsers and platforms.

**Device-bound WebAuthn, eg. Secure Enclave**

In modern cases, we can use the hardware processor as the authenticator, like Secure Enclave for Apple devices, Trustzone for Android, and Strongbox for Google Pixel.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*BXW72r_fs7k65zsy)

1.  Key Generation: Using [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), a key pair is generated by WebAuthn standards, typically using the P-256 r1 curve. The public key is sent to the service, while the private key **NEVER** leaves Secure Enclave. The user never handles the plain-text key, making it difficult for the private key to become compromised.
2.  Key Storage: The private key is securely stored within the device’s [Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/web), a fortified subsystem segregated from the main processor. It safeguards sensitive data, ensuring that even if the main system is compromised, the raw key material remains inaccessible. The bar to compromise the Secure Enclave is extremely high, and therefore the most sensitive data types such as Apple Pay and FaceID data are stored there. Here’s an in-depth explanation of [how SE works](https://www.blackhat.com/docs/us-16/materials/us-16-Mandt-Demystifying-The-Secure-Enclave-Processor.pdf).
3.  Authentication: Users use their facial recognition or fingerprint to get access, the Secure Enclave uses the private key to sign a challenge from the service, and the service verifies using the public key.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*haHUtMty7s9kfaCy)

Device-based webAuthn pros:

*   **Hardware-level security:** Using Secure Enclave, an isolated hardware-based key manager to provide an extra layer of security.
*   **Phishing resistance:** Do not involve entering any information on potentially compromised devices or websites.
*   **Convenient experience**: They provide a more user-friendly experience. Users no longer need to remember complex passwords for different sites.

Device-based webAuthn cons:

*   **Device constraints:** The private key can not be exported or retrieved if the device is lost or damaged, cross-device operation is impossible.

**Cloud-based WebAuthn, Passkey**

Addressing the challenge of cross-device functionality, tech giants have introduced cloud-based webAuthn implementation, Passkey is broadly familiar because of Apple.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*XoRHgt0GfNfUtiwu)

Let’s take Apple’s Passkey as an example:

1.  Key generation: The user’s macOS, iOS, or iPadOS device, as the authenticator, generates a public-private key pair when the user creates the account. Then sends the public key to the server, and the private key is stored on the device’s iCloud keychain. iCloud Keychain data is encrypted with a hardware-bound keypair, and stored in a hardware security module (HSM). The key is inaccessible to Apple.
2.  Synchronization across devices: This process will be the same as accessing iCloud. Authenticate to the iCloud account, receive an SMS code, and enter the passcode of one of the devices.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*udyrqUGEtU219x56)

Cloud-based webAuthn pros:

*   **Cross-device:** Passkeys were designed to be convenient and accessible from all devices used regularly. But currently limited to Apple devices, for Android it’s more challenging because of its diverse versions and hardware variations.
*   **Phishing Resistance:** Same as above.
*   **Convenient Experience**: Same as above.

Cloud-based Passkey cons:

*   **Rely on cloud service:** Compared to device-based webAuthn, cloud-based passkey moves the security level from Secure Enclave’s hardware to iCloud keychain, some can argue it’s custodial to your cloud service. Some key aspects to consider include the user’s AppleID account used with iCloud being compromised; While iCloud Keychain employs end-to-end encryption to protect data, operational errors or vulnerabilities pose a risk.
*   **Restrict to platform:** For example, using an iCloud-based passkey on an Android device is extremely challenging. Furthermore, unlike traditional methods, Apple and Google do not send device-specific assertions. This means it’s currently impossible to verify the type of device that generated a key, which raises questions about the reliability of the key and its associated metadata.

### Account Layer: SCA and EOA

So far, we can see maintaining hardware-level security while addressing cross-device and cross-platform compatibility is challenging. Equally crucial is the social recovery option, such as adding multiple guardians for enhanced security. In this context, blockchain can show us a way.

> _A notable gap when we try to implement web2 webAuthn to web3: Web2 only requires proving ownership, whereas web3 also necessitates authorizing the transaction simultaneously. With Passkey, developers lack control over the signing message, which is typically generic, like ‘sign in.’ This can lead to potential front-end manipulation, users signing messages blindly — a seemingly minor but crucial concern._

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*sieSzeHuqrQBCG6f)

Smart Contract Accounts(SCA), inherently smart contracts themselves, function as on-chain entities, capable of assigning arbitrary signers. This flexibility allows for programming various devices and platforms — such setting an Android phone, a Macbook, and an iPhone — as signers. Even further, a Modular Smart Contract Account allows upgradability, swapping out new signers, and changing the signing threshold from 2 out of 3 to even more intricate configurations.

Envision a wallet that adapts its security requirements based on context: it allows single-signer authentication when the user is on a familiar local IP address, but requires multiple signers for transactions from unknown IP addresses or above a certain value. With modularity and programmability, our imagination is the only limit to such innovations. Many SCA service providers actively build this space, including [Safe](https://safe.global/), [Zerodev](https://zerodev.app/), [Biconomy](https://www.biconomy.io/), [Etherspots](https://etherspot.io/), [Rhinestone](https://www.rhinestone.wtf/), etc. Also shout out to infrastructure like [Stackup](https://www.stackup.sh/), [Plimico](https://www.pimlico.io/), and [Alchemy](https://www.alchemy.com/) make it possible.

_Please check_ [_my previous research_](https://mirror.xyz/sevenxventures.eth/Uz8JtwdbTvHMjiqj3n0t-qRA7RpSIyQWPLgFntdKoFg) _provides more comprehensive context around SCA._

EOAs can achieve social recovery and cross-device/platform compatibility through MPC services. Despite EOAs having fixed signers, MPC providers can split keys into shares for enhanced security and flexibility. This method lacks SCA’s programmable and upgradable features, such as timelock recovery and easy key deactivation. However, it still offers superior cross-chain capabilities by being chain-agnostic and is currently more cost-effective than SCAs. Notable MPC providers including [Privy](https://www.privy.io/), [Particle Network](https://particle.network/), [web3Auth](https://web3auth.io/), [OKX wallet](https://www.okx.com/), [Binance wallet](https://www.binance.com/en/support/faq/why-do-i-need-to-backup-my-binance-web3-wallet-and-how-to-do-it-4efebcb9a937417ca31baa2f7754c50f), etc.

### Signing Layer: R1 support


Let’s take a step back to understand the context: On Ethereum, private keys are random numbers selected from the k1 curve, and the signing process also utilizes this curve.

However, the key pairs generated according to WebAuthn standards, use the r1 curve. Therefore, verifying an r1 signature on Ethereum is approximately three times more expensive than a k1 signature. Here are some approaches to address this:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*cwP4jCUuCceOaGoB)

Credit to Dogan, for more in-depth knowledge please check his research.

**Protocol Solution:**

*   Solution: [EIP7212](https://eips.ethereum.org/EIPS/eip-7212), Precompiled for secp256r1 Curve Support proposed by [Clave](https://www.getclave.io/) team.
*   Evaluation: This proposal creates a precompiled contract that performs signature verifications in the “secp256r1” elliptic curve by given parameters of message hash, `r` and `s` components of the signature, and `x`, `y` coordinates of the public key. So that, any EVM chain - principally Ethereum rollups - will be able to integrate this precompiled contract easily. By far, protocol precompile maybe the most gas efficient solution.
*   Implementation: [zkSync](https://zksync.io/)

**Third-party Service**

*   Solution: [Turnkey](https://www.turnkey.com/)
*   Evaluation: a Turkey TEE ensures the private key is accessible only to the user via their PassKey and never accessible for the Turnkey themselves, however this still requires the liveness of the service.
*   Implementation: [Goldfinch](https://goldfinch.finance/)

**Solidity Verifier Solutions:**

*   Solution: FCL’s Solidity Verifier, FCL’s Solidity Verifier With Precomputation, Daimo’s P256Verifier
*   Implementation: [Clave](https://www.getclave.io/), [Obvious Wallet](https://www.obvious.technology/)

**Zero-Knowledge(ZK) Verifier:**

*   Solution: [Risc0 Bonsai](https://dev.risczero.com/api/bonsai/), Axiom’s [halo2-ecc](https://github.com/axiom-crypto/halo2-lib)
*   Evaluation: This approach leverages zero-knowledge proofs to verify computations outside the Ethereum Virtual Machine (EVM), reducing on-chain computational costs.
*   Implementation: [Bonfire Wallet](https://learn.bonfire.xyz/bonfire-wallet)(Risc0), [Know Nothing Labs](https://www.knownothinglabs.xyz/)(Axiom)

Each of these solutions offers a different method to empower cheaper and feasible r1 signature verification in Ethereum’s ecosystem, and here’s an assessment by [Dogan](https://twitter.com/doganeth_en/status/1704870326952243237).

## Implementation Case Study


![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*lu02XviWyYLX2H2P)

*_Please note that as of December 2023, most of these solutions are in their early stages and may change or improve at any time. These examples are only for learning purposes; always refer to their official websites for accurate information._

### Clave wallet: (Secure Enclave webAuthn) + (SCA)

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*BKTzm3X2F0WH3CFb)

**Basics:**

*   Demo: [https://getclave.io/](https://getclave.io/)
*   Account: SCA
*   Chain: ZkSync

**Transaction process:**

*   Key creation: User provide biometric authentication like fingerprint or facial recognition, a key pair is generated inside the Secure Enclave, which never reveal or leave outside.
*   Key signing: The app takes a required transaction message and forwards a signing request to Secure Enclave, user provide bio-auth to approve signing, and the Secure Enclave signs the message with the key, and to be broadcast to blockchain nodes.
*   Additional functions: Smart contract account enables many powerful functions. First, gas sponsorship. Due to the paymaster, other parties like dApp or advertisers can pay for user’s gas fee, making the transaction process smoother, and also they are able to allow users pay gas in ERC20 instead of Ether or native token. And using session key, user can conduct signless transaction in a period of time.

**Recovery mechanism:**

The recovery process is conduct by Clave’s smart contract on zkSync, user is able to cancel the recovery during a 48-hour time lock, to prevent unauthorized and malicious activities.

*   Cloud backup: A EOA will be created when user choose the cloud backup, the private key of the EOA is stored in either iCloud or Google Drive, user can use this cloud-stored private key to access their account from different device, and users can remove or overwrite this backup section at any time.
*   Social recovery: User can assign their family or friend’s clave address as backup, if M of N guardians give a confirmation for recovery, the recovery will be executed after 48hrs lockdown if without cancel.

### Soul wallet: (Passkey) + (4337 SCA)

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*70KvQipI0U5kOpHZ)

**Basics:**

*   Demo: [https://alpha.soulwallet.io/wallet](https://alpha.soulwallet.io/wallet)
*   Account: ERC4337 SCA
*   Chain: Ethereum, Optimism, Arbitrum, and soon all EVM layer2

**Transaction process:**

*   Key creation: Users provide biometric authentication like fingerprint or facial recognition, and the operating system generates Passkey and backs it up using cloud service. You can add more than one passkey cross-device and cross-platform.
*   Add gardians(Optional): User can assign different EVM EOA address as guardians and set up a threshold for account recovery.
*   Account generation: Using counterfactual deployment, users don’t need to pay any fee until the first transaction

**Recovery mechanism:**

*   Passkey: Use any defined passkey to log into the wallet using an arbitrary device.
*   Guardians recovery: The assigned guardians can rotate the wallet according to the threshold, and a time lock may addressed later to prevent malicious behavior.

### OKX wallet:(MPC-TSS + Passkey) + (4337 SCA)

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ygL0ElD5I2IZRUq6)

**Basics:**

*   Demo: [https://www.okx.com/help/what-is-an-aa-smart-contract-wallet](https://www.okx.com/help/what-is-an-aa-smart-contract-wallet)
*   Chain: 30+ chains
*   Key: MPC-TSS, 2/3
*   Account: 4337 SCA

**Transaction process:**

*   Key creation: By creating a wallet, the OKX transforms a single private key into three separate shares. Share 1 is stored in the OKX server, share 2 is stored on user’s device local storage, and share 3 is generated by device, encrypted and can be backed up to the device’s preferred cloud services, like Google Cloud, iCloud and Huawei Cloud.
*   Key signing: OKX using the MPC-TSS technology, user can obtain the full signature by using two out of three the private key shares when signing the transaction, the key shares never meet each other during this process.

**Recovery mechanism:**

*   2/3 mechanism: When user logged out, device is unavailable or one of the keys on the device is compromised, you can use new device to login OKX wallet(get the server share) and get the cloud service share, combine these2 shares to recover the wallet, OKX wallet will generate new secret shares.

### Web3Auth: (MPC-TSS + Passkey)+ (EOA/SCA)


![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*xmFLrwADJlcubYl4)

**Basics:**

*   Demo: [https://w3a.link/passkeysDemo](https://w3a.link/passkeysDemo)
*   Chain: All EVM and Solana
*   Key: MPC-TSS, usually 2/3
*   Account: Any account like EOA, 4337 SCA or general SCA

**Transaction process:**

*   Key creation: By creating a wallet, three key shares generated. Share1 is social login share, user can type in their email, and a decentralized network of nodes the store the key for each user; Share2 is device share that stored on user’s device local storage; Share3 is generated by local computer and backed up by user’s preferred cloud services.
*   Key signing: The Web3Auth MPC-TSS architecture ensures that the user’s key is always available, even using the threshold signing, keys never reconstruct or stored in a single place.

**Recovery mechanism:**

*   Threshold recovery When user logged out, device is unavailable or one of the keys on the device is compromised, you can use social login method to login webAuthn account and get the passkey cloud share, combine these2 shares to recover the wallet.

### Lit Protocol(MPC-TSS + Decentralized nodes + Passkey)+ (EOA/SCA)

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*iPMUxShRMG7ddIBX)

**Basic information:**

*   Demo: [https://lit-pkp-auth-demo.vercel.app/](https://lit-pkp-auth-demo.vercel.app/)
*   Chain: [Most of the EVM, Cosmos, Solana](https://developer.litprotocol.com/v2/resources/supportedchains/).
*   Account: MPC-TSS, 20 of 30 network, can be adopted by both SCA and EOA.

**Transaction process:**

*   Key creation: When user want to create a wallet, use first select an auth method(passkey, oAuth social login supported), a request then sent to relayer to create key pairs and store the auth logic to smart contract. Each key pair is generated collectively by the Lit nodes through a process called [Distributed Key Generation](https://developer.litprotocol.com/v2/resources/howItWorks#threshold-cryptography) (DKG). Operating as a decentralized network, 30 Lit nodes running inside TEE, each node holds a share of the key but the private key never exists in its entirely.
*   Key signing: Receiving the request, Lit nodes independently validate or reject the request against the assigned authentication method, and using the MPC-TSS technology,1. Key shares are collected above the threshold(20 out of 30) to generate a signature and combined by client to fulfill the request.

**Recovery mechanism:**

*   2/3 mechanism: Use the auth methods stored in the smart contract to access the account, Lit nodes validate the requests and it will proceed if over 2/3 of nodes confirm.

## Conclusion:

Fueled by enthusiasm for Layer2, Layer3, and Data availability solutions, we are keen to improve the performance of blockchain. Also, pursuing real security, combining Zero Knowledge Proof Privacy with a transparency nature. All efforts are targeting one goal: To be ready for real users that frequently interact with blockchain and adopt crypto into their lives.

It’s easy to be trapped in an optimal technology dream, but we must ask: what kind of experience are we aiming for? We envision a world where crypto is about intuition rather than daunting tech terms, where a user jumps into the rabbit hole without hesitation and hassle.

Picture a user Rui: She discovers a fantastic dApp, and easily signs up using facial recognition or a fingerprint, with the option to set up backups or guardians. As she engages with the dApp, she smoothly executes transactions, possibly with small ERC20 fees or even none at all. Later, she customizes her wallet settings — perhaps activating a time-lock for automated transactions, adding another device as a backup signer, or revising her guardian list.

Our builders make that happen. Integrating WebAuthn and Passkey, we enhance private key management, making it both secure and user-friendly. On top of the key, SCA as an entity opens a realm of personalized security and functionality. And as for gas fees? They become less burdensome, thanks to Paymaster providers who can create a ‘vault’ for swaps or even allow advertisers to cover fees for users. At the heart of this evolution, particularly for Ethereum mainnet and its equivalent Layer2s, is ERC4337. It introduces an alternative mempool that sets apart SCA transactions from EOAs, without major protocol overhauls. On the other hand, some Layer 2 networks are even embracing SCAs natively, seamlessly incorporating them into their systems.

It requires tremendous effort to make everything easy. Many challenges exist like lowering deployment, validation, and execution fees for SCA; Standardizing the interface to increase account interoperability; Syncing account state cross-chain; and many more. Credit to all the builders, we’re getting closer to solving the puzzle day by day. Crypto ventures like us- [SevenX](https://www.7xvc.com/), are ready to help great firms realize their vision.

If all of these interest you, there are my other pieces provide more comprehensive context :

*   04/ Account: [**Modular Smart Contract Account Architecture and Challenges**](https://mirror.xyz/sevenxventures.eth/Uz8JtwdbTvHMjiqj3n0t-qRA7RpSIyQWPLgFntdKoFg)
*   03/ Key(this article): WebAuthn and Passkey, Key Management for Daily Crypto Users
*   02/ Infrastructure: [**Ethereum Account Evolution brought by ERC4337**](https://mirror.xyz/sevenxventures.eth/LM9qZcx9M1ALIPNz15_mqgGSHxPD3ctKMDOXsjxSpzI)

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*rLsUDe22FS3NqN7L)

Acknowledges:
=============

Acknowledgment to my dearest friends for their review:

*   [David Sneider](https://twitter.com/davidlsneider), co-founder of [Lit](https://www.litprotocol.com/) [Protocol](https://www.litprotocol.com/)
*   [Henri Stern](https://twitter.com/henri_stern), co-founder of [Privy](https://www.privy.io/)
*   [Zhen](https://twitter.com/zenzhenyu), co-founder of [Web3Auth](https://web3auth.io/)
*   [Dogan](https://twitter.com/doganeth_en) and [Rafi](https://twitter.com/rafierszl), founding members of [Clave](https://getclave.io/)
*   [Ivo,](https://twitter.com/Ivshti) founder of [Ambire](https://www.ambire.com/)
*   [Itmar](https://twitter.com/itamarl), founder of [Argent](https://www.argent.xyz/)
*   [Kurt Larsen](https://twitter.com/larsen_kf) and [Konrad](https://twitter.com/abstractooor), co-founders of [Rhinestone](https://www.rhinestone.wtf/)
*   [Pengyu Wang](https://twitter.com/0xpengyu) and [Peter Pan](https://twitter.com/pantaovay), co-founders of [Particle network](https://twitter.com/ParticleNtwrk)
*   [OKX Wallet team](https://www.okx.com/cn)
*   [David Kim](https://twitter.com/0xDavidKim), eng lead of [Trust Wallet](https://trustwallet.com/)
*   [Vivian Phung](https://twitter.com/vivianphung), founder of [Snowball Tools](https://t.co/Ef5hvSvzsQ)
*   [evmBrahmin](https://twitter.com/evmBrahmin), founder of [HopeSec](https://twitter.com/hopesec_)
*   [Jose Aguinaga](https://twitter.com/0xjjpa)

Reference:
==========

[Keychain services | Apple Developer Documentation](https://developer.apple.com/documentation/security/keychain_services)

[Securely store small chunks of data on behalf of the user.](https://developer.apple.com/documentation/security/keychain_services)

[developer.apple.com](https://developer.apple.com/documentation/security/keychain_services)

[Supporting passkeys | Apple Developer Documentation](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_passkeys/)

[Eliminate passwords for your users when they sign in to apps and websites.](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_passkeys/)

[developer.apple.com](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_passkeys/)

[The good, the bad and the ugly of Apple Passkeys | SlashID Blog](https://www.slashid.dev/blog/passkeys-deepdive/)

[The widely anticipated Apple passkeys launch happened just a few weeks ago with the iOS 16 release.](https://www.slashid.dev/blog/passkeys-deepdive/)

[www.slashid.dev](https://www.slashid.dev/blog/passkeys-deepdive/)

[Meet with Clave #3 : Recovery for Everyone](https://blog.getclave.io/p/recovery-for-everyone-cloud-and-guardians?utm_source=profile&utm_medium=reader2)

[Clave offers different recovery options for different user segments: Cloud Backup and Guardians](https://blog.getclave.io/p/recovery-for-everyone-cloud-and-guardians?utm_source=profile&utm_medium=reader2)

[blog.getclave.io](https://blog.getclave.io/p/recovery-for-everyone-cloud-and-guardians?utm_source=profile&utm_medium=reader2)