                else if ("REQUEST_STORE_S_DATA_WTTH_KEY" === e.data.type) { k(e.data.key, e.data.data); window.postMessage({ type: "ON_STORE_S_DATA_WTTH_KEY", key: e.data.key }, "*"); }
