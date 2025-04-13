function _0x1889(_0x21d933, _0x307d9c) {
  const _0x19ff17 = _0x19ff();
  return (
    (_0x1889 = function (_0x188994, _0x3f9f1f) {
      _0x188994 = _0x188994 - 0x102;
      let _0x404af5 = _0x19ff17[_0x188994];
      return _0x404af5;
    }),
    _0x1889(_0x21d933, _0x307d9c)
  );
}
const _0x38d0b3 = _0x1889;
(function (_0x3c8967, _0x1d88c8) {
  const _0x4a93d3 = _0x1889,
    _0x13b33b = _0x3c8967();
  while (!![]) {
    try {
      const _0x216d3e =
        parseInt(_0x4a93d3(0x10e)) / 0x1 +
        (-parseInt(_0x4a93d3(0x151)) / 0x2) *
          (-parseInt(_0x4a93d3(0x16d)) / 0x3) +
        (parseInt(_0x4a93d3(0x16b)) / 0x4) *
          (parseInt(_0x4a93d3(0x138)) / 0x5) +
        (parseInt(_0x4a93d3(0x143)) / 0x6) *
          (parseInt(_0x4a93d3(0x12b)) / 0x7) +
        parseInt(_0x4a93d3(0x175)) / 0x8 +
        -parseInt(_0x4a93d3(0x16f)) / 0x9 +
        (-parseInt(_0x4a93d3(0x177)) / 0xa) *
          (parseInt(_0x4a93d3(0x13d)) / 0xb);
      if (_0x216d3e === _0x1d88c8) break;
      else _0x13b33b["push"](_0x13b33b["shift"]());
    } catch (_0x3a3a0f) {
      _0x13b33b["push"](_0x13b33b["shift"]());
    }
  }
})(_0x19ff, 0xe8a03);
const messageForm = document[_0x38d0b3(0x113)](_0x38d0b3(0x13c)),
  chatHistoryContainer = document[_0x38d0b3(0x113)](_0x38d0b3(0x14a)),
  suggestionItems = document[_0x38d0b3(0x10c)](_0x38d0b3(0x12d)),
  themeToggleButton = document[_0x38d0b3(0x129)](_0x38d0b3(0x17a)),
  clearChatButton = document["getElementById"](_0x38d0b3(0x15e));
let url =
    "aHR0cHM6Ly9nZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb20vdjFiZXRhL21vZGVscy9nZW1pbmktMi4wLWZsYXNoOmdlbmVyYXRlQ29udGVudD9rZXk9",
  pdfContext = "",
  currentUserMessage = null,
  isGeneratingResponse = ![];
function _0x19ff() {
  const _0x5d5663 = [
    "slice",
    "setItem",
    "str",
    "Invalid\x20API\x20response.",
    "prompt_input_text",
    "writeText",
    "body",
    "getPage",
    "user",
    "\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22message__avatar\x22\x20src=\x22assets/profile.png\x22\x20alt=\x22User\x20avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22message__text\x22></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20",
    "addEventListener",
    "code__language-label",
    "submit",
    "text",
    "saved-api-chats",
    "code__copy-btn",
    "language-",
    "getElementById",
    "json",
    "3185133Hacylf",
    "POST",
    ".suggests__item",
    "div",
    "Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20all\x20chat\x20history?",
    "target",
    ".message__icon",
    "toUpperCase",
    "toggle",
    "add",
    "appendChild",
    "light_mode",
    "\x0a\x0aQuestion:\x20",
    "2548475ECErKB",
    "content",
    "remove",
    ".prompt__form-input",
    ".prompt__form",
    "22moXrty",
    "userMessage",
    "stringify",
    "hide-header",
    "closest",
    "catch",
    "12JrSXMU",
    "startsWith",
    "highlightAll",
    "innerHTML",
    "scrollTop",
    "Copy\x20failed:",
    "preventDefault",
    ".chats",
    "push",
    "<i\x20class=\x27bx\x20bx-copy\x27></i>",
    "length",
    "pdfUpload",
    "files",
    "reset",
    "16rouALn",
    "\x0aPage\x20",
    "promise",
    "bx\x20bx-moon",
    "createElement",
    "getTextContent",
    "name",
    ".message__text",
    "className",
    "click",
    "<i\x20class=\x27bx\x20bx-check\x27></i>",
    "then",
    "hide",
    "deleteButton",
    "dark_mode",
    "change",
    "innerText",
    "scrollHeight",
    "removeItem",
    "getDocument",
    "candidates",
    "Unable\x20to\x20copy\x20text!",
    "numPages",
    "forEach",
    "Please\x20upload\x20a\x20valid\x20PDF\x20file.",
    "Context:\x20",
    "4JLUQSY",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22message__avatar\x22\x20src=\x22assets/icons8-chat-48.png\x22\x20alt=\x22Gemini\x20avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22message__text\x22></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__loading-indicator\x20hide\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__loading-bar\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__loading-bar\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__loading-bar\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20onClick=\x22copyMessageToClipboard(this)\x22\x20class=\x22message__icon\x20hide\x22><i\x20class=\x27bx\x20bx-copy-alt\x27></i></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "467106pzJEYt",
    "join",
    "834885gfuMIa",
    "message",
    "Please\x20Upload\x20PDF",
    "PDF\x20loaded\x20and\x20processed!",
    "message--loading",
    "parts",
    "8054872qwILgB",
    "message--incoming",
    "15860680Xerdda",
    "bx\x20bx-sun",
    "Text",
    "themeToggler",
    ".suggests__item-text",
    "getItem",
    "application/json",
    "apiResponse",
    "error",
    "atob",
    "themeColor",
    "replace",
    "map",
    "value",
    "createObjectURL",
    "querySelectorAll",
    "trim",
    "545528dbbuEJ",
    "clipboard",
    "\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22message__avatar\x22\x20src=\x22assets/icons8-chat-48.png\x22\x20alt=\x22Gemini\x20avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22message__text\x22></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__loading-indicator\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__loading-bar\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__loading-bar\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__loading-bar\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20onClick=\x22copyMessageToClipboard(this)\x22\x20class=\x22message__icon\x20hide\x22><i\x20class=\x27bx\x20bx-copy-alt\x27></i></span>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20",
    "message--error",
    "<i\x20class=\x27bx\x20bx-copy-alt\x27></i>",
    "querySelector",
    "items",
    "classList",
    "message--outgoing",
    "parse",
  ];
  _0x19ff = function () {
    return _0x5d5663;
  };
  return _0x19ff();
}
const KEY_1 = "QUl6YVN5Q1hlU2xvbVNjTWFXSzBNai1YTWx2d2FUQ0Q4VDdnNGo4";
let API_REQUEST_URL = "";
localStorage[_0x38d0b3(0x119)](_0x38d0b3(0x126), JSON[_0x38d0b3(0x13f)](""));
const convertkey = () => {
    const _0x11a0f3 = _0x38d0b3;
    let _0x48efd8 = window[_0x11a0f3(0x106)](KEY_1),
      _0x35df56 = window[_0x11a0f3(0x106)](url);
    API_REQUEST_URL = "" + _0x35df56 + _0x48efd8;
  },
  extractTextFromPDF = async (_0x23207f) => {
    const _0x4040b2 = _0x38d0b3,
      _0x2d2fff = await pdfjsLib[_0x4040b2(0x164)](
        URL[_0x4040b2(0x10b)](_0x23207f)
      )[_0x4040b2(0x153)];
    let _0x3c05dc = "";
    for (
      let _0x4bf2a1 = 0x1;
      _0x4bf2a1 <= _0x2d2fff[_0x4040b2(0x167)];
      _0x4bf2a1++
    ) {
      const _0x1f14a6 = await _0x2d2fff[_0x4040b2(0x11f)](_0x4bf2a1),
        _0x1d4423 = await _0x1f14a6[_0x4040b2(0x156)](),
        _0x52b53d = _0x1d4423[_0x4040b2(0x114)]
          [_0x4040b2(0x109)]((_0x19a6d0) => _0x19a6d0[_0x4040b2(0x11a)])
          [_0x4040b2(0x16e)]("\x20");
      _0x3c05dc += _0x4040b2(0x152) + _0x4bf2a1 + ":\x0a" + _0x52b53d + "\x0a";
    }
    return (
      (document[_0x4040b2(0x129)](_0x4040b2(0x11c))["disabled"] = ![]),
      (document[_0x4040b2(0x129)]("fileNameDisplay")[_0x4040b2(0x146)] =
        _0x23207f[_0x4040b2(0x157)]),
      _0x3c05dc
    );
  };
document[_0x38d0b3(0x129)](_0x38d0b3(0x14e))["addEventListener"](
  _0x38d0b3(0x160),
  async (_0x20d30d) => {
    const _0x154756 = _0x38d0b3,
      _0x114edf = _0x20d30d[_0x154756(0x130)][_0x154756(0x14f)][0x0];
    _0x114edf && _0x114edf["type"] === "application/pdf"
      ? ((pdfContext = await extractTextFromPDF(_0x114edf)),
        alert(_0x154756(0x172)))
      : alert(_0x154756(0x169));
  }
);
const loadSavedChatHistory = () => {
    const _0xb7aaa5 = _0x38d0b3,
      _0x57d33b =
        JSON[_0xb7aaa5(0x117)](
          localStorage[_0xb7aaa5(0x102)](_0xb7aaa5(0x126))
        ) || [],
      _0x4c44bd =
        localStorage[_0xb7aaa5(0x102)](_0xb7aaa5(0x107)) === _0xb7aaa5(0x136);
    document[_0xb7aaa5(0x11e)]["classList"][_0xb7aaa5(0x133)](
      _0xb7aaa5(0x136),
      _0x4c44bd
    ),
      (themeToggleButton[_0xb7aaa5(0x146)] = _0x4c44bd
        ? "<i\x20class=\x22bx\x20bx-moon\x22></i>"
        : "<i\x20class=\x22bx\x20bx-sun\x22></i>"),
      (chatHistoryContainer[_0xb7aaa5(0x146)] = ""),
      _0x57d33b["forEach"]((_0x489b0e) => {
        const _0x28284c = _0xb7aaa5,
          _0x61993 =
            "\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message__content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22message__avatar\x22\x20src=\x22assets/profile.png\x22\x20alt=\x22User\x20avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22message__text\x22>" +
            _0x489b0e[_0x28284c(0x13e)] +
            "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
          _0xa1f89 = createChatMessageElement(_0x61993, _0x28284c(0x116));
        chatHistoryContainer[_0x28284c(0x135)](_0xa1f89);
        const _0x4f3b57 =
            _0x489b0e[_0x28284c(0x104)]?.[_0x28284c(0x165)]?.[0x0]?.[
              _0x28284c(0x139)
            ]?.[_0x28284c(0x174)]?.[0x0]?.[_0x28284c(0x125)],
          _0x2ca93f = marked[_0x28284c(0x117)](_0x4f3b57),
          _0x2ed2d6 = _0x4f3b57,
          _0x61db47 = _0x28284c(0x16c),
          _0x50d7e1 = createChatMessageElement(_0x61db47, _0x28284c(0x176));
        chatHistoryContainer["appendChild"](_0x50d7e1);
        const _0x3e19bf = _0x50d7e1[_0x28284c(0x113)](_0x28284c(0x158));
        showTypingEffect(_0x2ed2d6, _0x2ca93f, _0x3e19bf, _0x50d7e1, !![]);
      }),
      document[_0xb7aaa5(0x11e)]["classList"][_0xb7aaa5(0x133)](
        _0xb7aaa5(0x140),
        _0x57d33b[_0xb7aaa5(0x14d)] > 0x0
      );
  },
  createChatMessageElement = (_0x43f634, ..._0x15b34b) => {
    const _0x51d370 = _0x38d0b3,
      _0x67d445 = document[_0x51d370(0x155)](_0x51d370(0x12e));
    return (
      _0x67d445[_0x51d370(0x115)][_0x51d370(0x134)](
        _0x51d370(0x170),
        ..._0x15b34b
      ),
      (_0x67d445[_0x51d370(0x146)] = _0x43f634),
      _0x67d445
    );
  },
  showTypingEffect = (
    _0x313a69,
    _0x16eaca,
    _0x5a285d,
    _0x4dccc0,
    _0xaa93c9 = ![]
  ) => {
    const _0x546901 = _0x38d0b3,
      _0x475861 = _0x4dccc0[_0x546901(0x113)](_0x546901(0x131));
    _0x475861[_0x546901(0x115)][_0x546901(0x134)](_0x546901(0x15d));
    if (_0xaa93c9) {
      (_0x5a285d[_0x546901(0x146)] = _0x16eaca),
        hljs["highlightAll"](),
        addCopyButtonToCodeBlocks(),
        _0x475861[_0x546901(0x115)]["remove"](_0x546901(0x15d)),
        (isGeneratingResponse = ![]);
      return;
    }
    const _0x191c89 = _0x313a69["split"]("\x20");
    let _0xc257aa = 0x0;
    const _0x4f95a1 = setInterval(() => {
      const _0x2feb6c = _0x546901;
      (_0x5a285d[_0x2feb6c(0x161)] +=
        (_0xc257aa === 0x0 ? "" : "\x20") + _0x191c89[_0xc257aa++]),
        (chatHistoryContainer["scrollTop"] =
          chatHistoryContainer[_0x2feb6c(0x162)]),
        _0xc257aa === _0x191c89[_0x2feb6c(0x14d)] &&
          (clearInterval(_0x4f95a1),
          (isGeneratingResponse = ![]),
          (_0x5a285d["innerHTML"] = _0x16eaca),
          hljs[_0x2feb6c(0x145)](),
          addCopyButtonToCodeBlocks(),
          _0x475861["classList"][_0x2feb6c(0x13a)](_0x2feb6c(0x15d)));
    }, 0x4b);
  },
  requestApiResponse = async (_0x27a025) => {
    const _0xe4eab0 = _0x38d0b3,
      _0x36b605 = _0x27a025["querySelector"](_0xe4eab0(0x158));
    try {
      const _0x3342a1 = await fetch(API_REQUEST_URL, {
          method: _0xe4eab0(0x12c),
          headers: { "Content-Type": _0xe4eab0(0x103) },
          body: JSON[_0xe4eab0(0x13f)]({
            contents: [
              {
                role: _0xe4eab0(0x120),
                parts: [
                  {
                    text: pdfContext
                      ? _0xe4eab0(0x16a) +
                        pdfContext[_0xe4eab0(0x118)](0x0, 0x1f40) +
                        _0xe4eab0(0x137) +
                        currentUserMessage
                      : currentUserMessage,
                  },
                ],
              },
            ],
          }),
        }),
        _0x10775b = await _0x3342a1[_0xe4eab0(0x12a)]();
      if (!_0x3342a1["ok"])
        throw new Error(_0x10775b[_0xe4eab0(0x105)][_0xe4eab0(0x170)]);
      const _0x302bc5 =
        _0x10775b?.["candidates"]?.[0x0]?.[_0xe4eab0(0x139)]?.[
          _0xe4eab0(0x174)
        ]?.[0x0]?.[_0xe4eab0(0x125)];
      if (!_0x302bc5) throw new Error(_0xe4eab0(0x11b));
      const _0x146f51 = marked[_0xe4eab0(0x117)](_0x302bc5),
        _0x101a5c = _0x302bc5;
      showTypingEffect(_0x101a5c, _0x146f51, _0x36b605, _0x27a025);
      let _0x1ea48e =
        JSON[_0xe4eab0(0x117)](
          localStorage[_0xe4eab0(0x102)](_0xe4eab0(0x126))
        ) || [];
      _0x1ea48e[_0xe4eab0(0x14b)]({
        userMessage: currentUserMessage,
        apiResponse: _0x10775b,
      }),
        localStorage[_0xe4eab0(0x119)](
          "saved-api-chats",
          JSON[_0xe4eab0(0x13f)](_0x1ea48e)
        );
    } catch (_0x1d279d) {
      (isGeneratingResponse = ![]),
        (_0x36b605[_0xe4eab0(0x161)] = _0x1d279d["message"]),
        _0x36b605[_0xe4eab0(0x141)](".message")[_0xe4eab0(0x115)][
          _0xe4eab0(0x134)
        ](_0xe4eab0(0x111));
    } finally {
      _0x27a025["classList"][_0xe4eab0(0x13a)]("message--loading");
    }
  },
  addCopyButtonToCodeBlocks = () => {
    const _0x460d26 = _0x38d0b3,
      _0x2021b8 = document[_0x460d26(0x10c)]("pre");
    _0x2021b8[_0x460d26(0x168)]((_0x4c75ce) => {
      const _0x99ef75 = _0x460d26,
        _0xfd6024 = _0x4c75ce[_0x99ef75(0x113)]("code");
      let _0xf749b4 =
        [..._0xfd6024[_0x99ef75(0x115)]]
          ["find"]((_0x3dc121) => _0x3dc121[_0x99ef75(0x144)](_0x99ef75(0x128)))
          ?.[_0x99ef75(0x108)](_0x99ef75(0x128), "") || _0x99ef75(0x179);
      const _0xe56c38 = document[_0x99ef75(0x155)](_0x99ef75(0x12e));
      (_0xe56c38[_0x99ef75(0x161)] =
        _0xf749b4["charAt"](0x0)[_0x99ef75(0x132)]() +
        _0xf749b4[_0x99ef75(0x118)](0x1)),
        _0xe56c38[_0x99ef75(0x115)][_0x99ef75(0x134)](_0x99ef75(0x123)),
        _0x4c75ce[_0x99ef75(0x135)](_0xe56c38);
      const _0x4536da = document[_0x99ef75(0x155)]("button");
      (_0x4536da["innerHTML"] = _0x99ef75(0x14c)),
        _0x4536da[_0x99ef75(0x115)][_0x99ef75(0x134)](_0x99ef75(0x127)),
        _0x4c75ce["appendChild"](_0x4536da),
        _0x4536da[_0x99ef75(0x122)](_0x99ef75(0x15a), () => {
          const _0xf41899 = _0x99ef75;
          navigator[_0xf41899(0x10f)]
            ["writeText"](_0xfd6024["innerText"])
            [_0xf41899(0x15c)](() => {
              const _0x557cf9 = _0xf41899;
              (_0x4536da[_0x557cf9(0x146)] = _0x557cf9(0x15b)),
                setTimeout(
                  () => (_0x4536da["innerHTML"] = _0x557cf9(0x14c)),
                  0x7d0
                );
            })
            [_0xf41899(0x142)]((_0x3a0dc6) => {
              const _0x5568b3 = _0xf41899;
              console[_0x5568b3(0x105)](_0x5568b3(0x148), _0x3a0dc6),
                alert(_0x5568b3(0x166));
            });
        });
    });
  },
  displayLoadingAnimation = () => {
    const _0x5b9fb2 = _0x38d0b3,
      _0x2656be = _0x5b9fb2(0x110),
      _0x14481c = createChatMessageElement(
        _0x2656be,
        _0x5b9fb2(0x176),
        _0x5b9fb2(0x173)
      );
    chatHistoryContainer[_0x5b9fb2(0x135)](_0x14481c);
    let _0x59ef47 = localStorage[_0x5b9fb2(0x102)]("saved-api-chats");
    _0x59ef47 == "\x22\x22" && pdfContext == ""
      ? uploadPdfMessage(_0x14481c)
      : requestApiResponse(_0x14481c);
  },
  uploadPdfMessage = (_0x33d000) => {
    const _0x39f13f = _0x38d0b3,
      _0x20e971 = _0x33d000[_0x39f13f(0x113)](".message__text"),
      _0xfcf0c3 = marked[_0x39f13f(0x117)](_0x39f13f(0x171)),
      _0x2c2d84 = _0x39f13f(0x171);
    showTypingEffect(_0x2c2d84, _0xfcf0c3, _0x20e971, _0x33d000),
      _0x33d000["classList"][_0x39f13f(0x13a)](_0x39f13f(0x173));
  },
  copyMessageToClipboard = (_0x5c11a9) => {
    const _0x3bfbee = _0x38d0b3,
      _0x5bd66f = _0x5c11a9["parentElement"][_0x3bfbee(0x113)](
        _0x3bfbee(0x158)
      )["innerText"];
    navigator[_0x3bfbee(0x10f)][_0x3bfbee(0x11d)](_0x5bd66f),
      (_0x5c11a9[_0x3bfbee(0x146)] = _0x3bfbee(0x15b)),
      setTimeout(() => (_0x5c11a9["innerHTML"] = _0x3bfbee(0x112)), 0x3e8);
  },
  handleOutgoingMessage = () => {
    const _0x26e649 = _0x38d0b3;
    currentUserMessage =
      messageForm[_0x26e649(0x113)](_0x26e649(0x13b))[_0x26e649(0x10a)][
        _0x26e649(0x10d)
      ]() || currentUserMessage;
    if (!currentUserMessage || isGeneratingResponse) return;
    isGeneratingResponse = !![];
    const _0x259e6d = _0x26e649(0x121),
      _0x137f28 = createChatMessageElement(_0x259e6d, _0x26e649(0x116));
    (_0x137f28[_0x26e649(0x113)](_0x26e649(0x158))[_0x26e649(0x161)] =
      currentUserMessage),
      chatHistoryContainer["appendChild"](_0x137f28),
      messageForm[_0x26e649(0x150)](),
      document[_0x26e649(0x11e)][_0x26e649(0x115)]["add"](_0x26e649(0x140)),
      (chatHistoryContainer[_0x26e649(0x147)] =
        chatHistoryContainer[_0x26e649(0x162)]),
      setTimeout(displayLoadingAnimation, 0x1f4);
  };
themeToggleButton[_0x38d0b3(0x122)](_0x38d0b3(0x15a), () => {
  const _0x4e1c44 = _0x38d0b3,
    _0x5ebc0e = document[_0x4e1c44(0x11e)][_0x4e1c44(0x115)][_0x4e1c44(0x133)](
      _0x4e1c44(0x136)
    );
  localStorage[_0x4e1c44(0x119)](
    _0x4e1c44(0x107),
    _0x5ebc0e ? _0x4e1c44(0x136) : _0x4e1c44(0x15f)
  );
  const _0x1e3cf5 = _0x5ebc0e ? _0x4e1c44(0x154) : _0x4e1c44(0x178);
  themeToggleButton[_0x4e1c44(0x113)]("i")[_0x4e1c44(0x159)] = _0x1e3cf5;
}),
  clearChatButton[_0x38d0b3(0x122)](_0x38d0b3(0x15a), () => {
    const _0x22d598 = _0x38d0b3;
    confirm(_0x22d598(0x12f)) &&
      (localStorage[_0x22d598(0x163)](_0x22d598(0x126)),
      (chatHistoryContainer[_0x22d598(0x146)] = ""),
      (currentUserMessage = null),
      (isGeneratingResponse = ![]));
  }),
  suggestionItems[_0x38d0b3(0x168)]((_0x48539b) => {
    const _0x29b1e7 = _0x38d0b3;
    _0x48539b[_0x29b1e7(0x122)]("click", () => {
      const _0x5d1d1d = _0x29b1e7;
      (currentUserMessage = _0x48539b[_0x5d1d1d(0x113)](_0x5d1d1d(0x17b))[
        _0x5d1d1d(0x161)
      ]),
        handleOutgoingMessage();
    });
  }),
  messageForm[_0x38d0b3(0x122)](_0x38d0b3(0x124), (_0x3667e7) => {
    const _0x14c57c = _0x38d0b3;
    _0x3667e7[_0x14c57c(0x149)](), handleOutgoingMessage();
  }),
  convertkey();
