(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{458:function(t,v,e){"use strict";e.r(v);var _=e(18),r=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"descriptors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#descriptors"}},[t._v("#")]),t._v(" Descriptors")]),t._v(" "),e("p",[t._v('Descriptors are a compact and semi-standard way to easily encode, or "describe", how scripts (and subsequently, addresses) of a wallet should be generated. They can be especially helpful when working with multisigs or even\nmore complex scripts, where the structure of the script itself is not trivial. They are a big step forward in making wallets more portable across different tools and apps, because for the first time they create a common\nlanguage to describe a full bitcoin script that developers can use and integrate in their software.')]),t._v(" "),e("p",[t._v("The ecosystem around descriptors is still very much in its early stage, but they are starting to see some adoption in "),e("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcoin Core"),e("OutboundLink")],1),t._v(' and other projects. BDK\naims to produce the first "Native Descriptor" Bitcoin library that can be used by developers to build their own '),e("a",{attrs:{href:"https://www.youtube.com/watch?v=xC25NzIjzog",target:"_blank",rel:"noopener noreferrer"}},[t._v('"Native Descriptor Wallets"'),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"compatibility-matrix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-matrix"}},[t._v("#")]),t._v(" Compatibility Matrix")]),t._v(" "),e("p",[t._v("Below are some tables to highlight the differences between Bitcoin Core's descriptor support, rust-miniscript's one and BDK's.")]),t._v(" "),e("h4",{attrs:{id:"key-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-types"}},[t._v("#")]),t._v(" Key Types")]),t._v(" "),e("div",{staticClass:"descriptor-support-table"},[e("table",[e("thead",[e("tr",[e("th",[t._v("Key Type")]),t._v(" "),e("th",[t._v("BDK")]),t._v(" "),e("th",[t._v("rust-miniscript")]),t._v(" "),e("th",[t._v("Bitcoin Core")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Hex PublicKey")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[t._v("WIF PrivateKey")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[t._v("Extended Keys (xpub/xprv)")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")]),t._v(" "),e("td",[t._v("✓")])])])])]),t._v(" "),e("h4",{attrs:{id:"script-types-top-level"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#script-types-top-level"}},[t._v("#")]),t._v(" Script Types (top level)")]),t._v(" "),e("div",{staticClass:"descriptor-support-table"},[e("table",[e("thead",[e("tr",[e("th",[t._v("Script Type")]),t._v(" "),e("th",[t._v("BDK")]),t._v(" "),e("th",[t._v("rust-miniscript")]),t._v(" "),e("th",[t._v("Bitcoin Core")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("pk()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pkh()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("wpkh()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sh(wpkh())")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sh()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("wsh()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sh(wsh())")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("combo()")])]),t._v(" "),e("td",[t._v("✗")]),t._v(" "),e("td",[t._v("✗")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("addr()")])]),t._v(" "),e("td",[t._v("✗")]),t._v(" "),e("td",[t._v("✗")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("raw()")])]),t._v(" "),e("td",[t._v("✗")]),t._v(" "),e("td",[t._v("✗")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[t._v("Bare scripts")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])])])])]),t._v(" "),e("h4",{attrs:{id:"operators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#operators"}},[t._v("#")]),t._v(" Operators")]),t._v(" "),e("div",{staticClass:"descriptor-support-table"},[e("table",[e("thead",[e("tr",[e("th",[t._v("Operator")]),t._v(" "),e("th",[t._v("BDK")]),t._v(" "),e("th",[t._v("rust-miniscript")]),t._v(" "),e("th",[t._v("Bitcoin Core")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("pk()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pk_h()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓ - as "),e("code",[t._v("pkh()")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("older()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("after()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sha256()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hash256()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ripemd160()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hash160()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("andor()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("and_{v,b,n}()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("or_{b,c,d,i}()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("multi()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("thresh()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sortedmulti()")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")])])])])]),t._v(" "),e("h4",{attrs:{id:"modifiers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modifiers"}},[t._v("#")]),t._v(" Modifiers")]),t._v(" "),e("div",{staticClass:"descriptor-support-table"},[e("table",[e("thead",[e("tr",[e("th",[t._v("Script Type")]),t._v(" "),e("th",[t._v("BDK")]),t._v(" "),e("th",[t._v("rust-miniscript")]),t._v(" "),e("th",[t._v("Bitcoin Core")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("a:")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("s:")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("c:")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("t:")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("d:")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("v:")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("j:")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("n:")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("l:")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("u:")])]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("✗")])])])])]),t._v(" "),e("p",[t._v("For a more thorough description of these operators and modifiers see "),e("a",{attrs:{href:"http://bitcoin.sipa.be/miniscript/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sipa's Miniscript Page"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcoin Core's"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("p",[t._v("Some examples of valid BDK descriptors are:")]),t._v(" "),e("div",{staticClass:"descriptor-examples-table"},[e("table",[e("thead",[e("tr",[e("th",[t._v("Spending Policy")]),t._v(" "),e("th",[t._v("Descriptor")]),t._v(" "),e("th",[t._v("Address 0")]),t._v(" "),e("th",[t._v("Address 1")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Static P2PKH")]),t._v(" "),e("td",[e("code",[t._v("pkh(cSQPHDBwXGjVzWRqAHm6zfvQhaTuj1f2bFH58h55ghbjtFwvmeXR)")])]),t._v(" "),e("td",[t._v("mrkwtj5xpYQjHeJe5wsweNjVeTKkvR5fCr")]),t._v(" "),e("td",[t._v("mrkwtj5xpYQjHeJe5wsweNjVeTKkvR5fCr")])]),t._v(" "),e("tr",[e("td",[t._v("Static P2PKH, watch-only")]),t._v(" "),e("td",[e("code",[t._v("pkh(02e96fe52ef0e22d2f131dd425ce1893073a3c6ad20e8cac36726393dfb4856a4c)")])]),t._v(" "),e("td",[t._v("mrkwtj5xpYQjHeJe5wsweNjVeTKkvR5fCr")]),t._v(" "),e("td",[t._v("mrkwtj5xpYQjHeJe5wsweNjVeTKkvR5fCr")])]),t._v(" "),e("tr",[e("td",[t._v("P2WSH 2-of-2 with one private key")]),t._v(" "),e("td",[e("code",[t._v("wsh(multi(2,tprv8ZgxMBicQKsPePmENhT9N9yiSfTtDoC1f39P7nNmgEyCB6Nm4Qiv1muq4CykB9jtnQg2VitBrWh8PJU8LHzoGMHTrS2VKBSgAz7Ssjf9S3P/0/*,tpubDBYDcH8P2PedrEN3HxWYJJJMZEdgnrqMsjeKpPNzwe7jmGwk5M3HRdSf5vudAXwrJPfUsfvUPFooKWmz79Lh111U51RNotagXiGNeJe3i6t/1/*))")])]),t._v(" "),e("td",[t._v("tb1qqsat6c82fvdy73rfzye8f7nwxcz3xny7t56azl73g95mt3tmzvgs9a8vjs")]),t._v(" "),e("td",[t._v("tb1q7sgx6gscgtau57jduend6a8l445ahpk3dt3u5zu58rx5qm27lhkqgfdjdr")])]),t._v(" "),e("tr",[e("td",[t._v("P2WSH-P2SH one key + 10 days timelock")]),t._v(" "),e("td",[e("code",[t._v("sh(wsh(and_v(vc:pk_h(tprv8ZgxMBicQKsPePmENhT9N9yiSfTtDoC1f39P7nNmgEyCB6Nm4Qiv1muq4CykB9jtnQg2VitBrWh8PJU8LHzoGMHTrS2VKBSgAz7Ssjf9S3P/0/*),older(1440))))")])]),t._v(" "),e("td",[t._v("2Mtk2nyS98MCi2P7TkoBGLaJviBy956XxB1")]),t._v(" "),e("td",[t._v("2MuEStKzYhqb5HCFgHz9153tZsL5sVqV5xC")])])])])]),t._v(" "),e("h3",{attrs:{id:"implementation-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation-details"}},[t._v("#")]),t._v(" Implementation Details")]),t._v(" "),e("p",[t._v("BDK extends the capabilities of "),e("a",{attrs:{href:"https://github.com/apoelstra/rust-miniscript",target:"_blank",rel:"noopener noreferrer"}},[t._v("rust-miniscript"),e("OutboundLink")],1),t._v(" by introducing the concept of an "),e("em",[t._v("ExtendedDescriptor")]),t._v(': it represents a descriptor that contains one or more "derivable keys" like '),e("code",[t._v("xpubs")]),t._v(" or "),e("code",[t._v("xprvs")]),t._v('\nand can be "derived" to a normal Descriptor by deriving every single one of its keys. It is currently called "StringDescriptor" in the code, because it\'s implemented as a wrapped '),e("code",[t._v("miniscript::Descriptor<String>")]),t._v(".")]),t._v(" "),e("p",[t._v("ExtendedDescriptors are derived using a single index instead of a full derivation path: this is because normally most of the path is fixed and can be represented right after the xpub/xprv itself, and only the\nfinal index changes for each address. This is what's normally called a "),e("em",[t._v("DescriptorExtendedKey")]),t._v(" in codebase, and it's the represented with a similar syntax to Bitcoin Core's, such as:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[d34db33f/44'/0'/0']xpub6ERApfZwUNrhL.......rBGRjaDMzQLcgJvLJuZZvRcEL/0/*\n")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);