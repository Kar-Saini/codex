"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS({
  "../../node_modules/@prisma/client/runtime/library.js"(exports, module) {
    "use strict";
    var Fl = Object.create;
    var Rt = Object.defineProperty;
    var Ml = Object.getOwnPropertyDescriptor;
    var $l = Object.getOwnPropertyNames;
    var ql = Object.getPrototypeOf;
    var Bl = Object.prototype.hasOwnProperty;
    var X = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
    var Or = (e, r) => {
      for (var t in r) Rt(e, t, { get: r[t], enumerable: true });
    };
    var no = (e, r, t, n) => {
      if (r && typeof r == "object" || typeof r == "function") for (let i of $l(r)) !Bl.call(e, i) && i !== t && Rt(e, i, { get: () => r[i], enumerable: !(n = Ml(r, i)) || n.enumerable });
      return e;
    };
    var _ = (e, r, t) => (t = e != null ? Fl(ql(e)) : {}, no(r || !e || !e.__esModule ? Rt(t, "default", { value: e, enumerable: true }) : t, e));
    var Vl = (e) => no(Rt({}, "__esModule", { value: true }), e);
    var Ao = X((Od, Un) => {
      "use strict";
      var v = Un.exports;
      Un.exports.default = v;
      var D = "\x1B[", Br = "\x1B]", dr = "\x07", Ft = ";", So = process.env.TERM_PROGRAM === "Apple_Terminal";
      v.cursorTo = (e, r) => {
        if (typeof e != "number") throw new TypeError("The `x` argument is required");
        return typeof r != "number" ? D + (e + 1) + "G" : D + (r + 1) + ";" + (e + 1) + "H";
      };
      v.cursorMove = (e, r) => {
        if (typeof e != "number") throw new TypeError("The `x` argument is required");
        let t = "";
        return e < 0 ? t += D + -e + "D" : e > 0 && (t += D + e + "C"), r < 0 ? t += D + -r + "A" : r > 0 && (t += D + r + "B"), t;
      };
      v.cursorUp = (e = 1) => D + e + "A";
      v.cursorDown = (e = 1) => D + e + "B";
      v.cursorForward = (e = 1) => D + e + "C";
      v.cursorBackward = (e = 1) => D + e + "D";
      v.cursorLeft = D + "G";
      v.cursorSavePosition = So ? "\x1B7" : D + "s";
      v.cursorRestorePosition = So ? "\x1B8" : D + "u";
      v.cursorGetPosition = D + "6n";
      v.cursorNextLine = D + "E";
      v.cursorPrevLine = D + "F";
      v.cursorHide = D + "?25l";
      v.cursorShow = D + "?25h";
      v.eraseLines = (e) => {
        let r = "";
        for (let t = 0; t < e; t++) r += v.eraseLine + (t < e - 1 ? v.cursorUp() : "");
        return e && (r += v.cursorLeft), r;
      };
      v.eraseEndLine = D + "K";
      v.eraseStartLine = D + "1K";
      v.eraseLine = D + "2K";
      v.eraseDown = D + "J";
      v.eraseUp = D + "1J";
      v.eraseScreen = D + "2J";
      v.scrollUp = D + "S";
      v.scrollDown = D + "T";
      v.clearScreen = "\x1Bc";
      v.clearTerminal = process.platform === "win32" ? `${v.eraseScreen}${D}0f` : `${v.eraseScreen}${D}3J${D}H`;
      v.beep = dr;
      v.link = (e, r) => [Br, "8", Ft, Ft, r, dr, e, Br, "8", Ft, Ft, dr].join("");
      v.image = (e, r = {}) => {
        let t = `${Br}1337;File=inline=1`;
        return r.width && (t += `;width=${r.width}`), r.height && (t += `;height=${r.height}`), r.preserveAspectRatio === false && (t += ";preserveAspectRatio=0"), t + ":" + e.toString("base64") + dr;
      };
      v.iTerm = { setCwd: (e = process.cwd()) => `${Br}50;CurrentDir=${e}${dr}`, annotation: (e, r = {}) => {
        let t = `${Br}1337;`, n = typeof r.x < "u", i = typeof r.y < "u";
        if ((n || i) && !(n && i && typeof r.length < "u")) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replace(/\|/g, ""), t += r.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", r.length > 0 ? t += (n ? [e, r.length, r.x, r.y] : [r.length, e]).join("|") : t += e, t + dr;
      } };
    });
    var Qn = X((Fd, Io) => {
      "use strict";
      Io.exports = (e, r = process.argv) => {
        let t = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = r.indexOf(t + e), i = r.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var Do = X((Md, ko) => {
      "use strict";
      var Ru = require("os"), _o = require("tty"), pe = Qn(), { env: G } = process, je;
      pe("no-color") || pe("no-colors") || pe("color=false") || pe("color=never") ? je = 0 : (pe("color") || pe("colors") || pe("color=true") || pe("color=always")) && (je = 1);
      "FORCE_COLOR" in G && (G.FORCE_COLOR === "true" ? je = 1 : G.FORCE_COLOR === "false" ? je = 0 : je = G.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(G.FORCE_COLOR, 10), 3));
      function Gn(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function Jn(e, r) {
        if (je === 0) return 0;
        if (pe("color=16m") || pe("color=full") || pe("color=truecolor")) return 3;
        if (pe("color=256")) return 2;
        if (e && !r && je === void 0) return 0;
        let t = je || 0;
        if (G.TERM === "dumb") return t;
        if (process.platform === "win32") {
          let n = Ru.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in G) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in G) || G.CI_NAME === "codeship" ? 1 : t;
        if ("TEAMCITY_VERSION" in G) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(G.TEAMCITY_VERSION) ? 1 : 0;
        if (G.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in G) {
          let n = parseInt((G.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (G.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(G.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(G.TERM) || "COLORTERM" in G ? 1 : t;
      }
      function Su(e) {
        let r = Jn(e, e && e.isTTY);
        return Gn(r);
      }
      ko.exports = { supportsColor: Su, stdout: Gn(Jn(true, _o.isatty(1))), stderr: Gn(Jn(true, _o.isatty(2))) };
    });
    var Oo = X(($d, No) => {
      "use strict";
      var Au = Do(), fr = Qn();
      function Lo(e) {
        if (/^\d{3,4}$/.test(e)) {
          let t = /(\d{1,2})(\d{2})/.exec(e);
          return { major: 0, minor: parseInt(t[1], 10), patch: parseInt(t[2], 10) };
        }
        let r = (e || "").split(".").map((t) => parseInt(t, 10));
        return { major: r[0], minor: r[1], patch: r[2] };
      }
      function Hn(e) {
        let { env: r } = process;
        if ("FORCE_HYPERLINK" in r) return !(r.FORCE_HYPERLINK.length > 0 && parseInt(r.FORCE_HYPERLINK, 10) === 0);
        if (fr("no-hyperlink") || fr("no-hyperlinks") || fr("hyperlink=false") || fr("hyperlink=never")) return false;
        if (fr("hyperlink=true") || fr("hyperlink=always") || "NETLIFY" in r) return true;
        if (!Au.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in r || "TEAMCITY_VERSION" in r) return false;
        if ("TERM_PROGRAM" in r) {
          let t = Lo(r.TERM_PROGRAM_VERSION);
          switch (r.TERM_PROGRAM) {
            case "iTerm.app":
              return t.major === 3 ? t.minor >= 1 : t.major > 3;
            case "WezTerm":
              return t.major >= 20200620;
            case "vscode":
              return t.major > 1 || t.major === 1 && t.minor >= 72;
          }
        }
        if ("VTE_VERSION" in r) {
          if (r.VTE_VERSION === "0.50.0") return false;
          let t = Lo(r.VTE_VERSION);
          return t.major > 0 || t.minor >= 50;
        }
        return false;
      }
      No.exports = { supportsHyperlink: Hn, stdout: Hn(process.stdout), stderr: Hn(process.stderr) };
    });
    var Mo = X((qd, Vr) => {
      "use strict";
      var Iu = Ao(), Wn = Oo(), Fo = (e, r, { target: t = "stdout", ...n } = {}) => Wn[t] ? Iu.link(e, r) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, r) : `${e} (\u200B${r}\u200B)`;
      Vr.exports = (e, r, t = {}) => Fo(e, r, t);
      Vr.exports.stderr = (e, r, t = {}) => Fo(e, r, { target: "stderr", ...t });
      Vr.exports.isSupported = Wn.stdout;
      Vr.exports.stderr.isSupported = Wn.stderr;
    });
    var qo = X((Kd, _u) => {
      _u.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
    });
    var Vo = X((zd, $t) => {
      "use strict";
      var ku = require("fs"), Bo = require("path"), Du = require("os"), Lu = qo(), Nu = Lu.version, Ou = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function Fu(e) {
        let r = {}, t = e.toString();
        t = t.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = Ou.exec(t)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), r[i] = o;
        }
        return r;
      }
      function zn(e) {
        console.log(`[dotenv@${Nu}][DEBUG] ${e}`);
      }
      function Mu(e) {
        return e[0] === "~" ? Bo.join(Du.homedir(), e.slice(1)) : e;
      }
      function $u(e) {
        let r = Bo.resolve(process.cwd(), ".env"), t = "utf8", n = !!(e && e.debug), i = !!(e && e.override);
        e && (e.path != null && (r = Mu(e.path)), e.encoding != null && (t = e.encoding));
        try {
          let o = Mt.parse(ku.readFileSync(r, { encoding: t }));
          return Object.keys(o).forEach(function(s) {
            Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && zn(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
          }), { parsed: o };
        } catch (o) {
          return n && zn(`Failed to load ${r} ${o.message}`), { error: o };
        }
      }
      var Mt = { config: $u, parse: Fu };
      $t.exports.config = Mt.config;
      $t.exports.parse = Mt.parse;
      $t.exports = Mt;
    });
    var Ho = X((nf, Jo) => {
      "use strict";
      Jo.exports = (e) => {
        let r = e.match(/^[ \t]*(?=\S)/gm);
        return r ? r.reduce((t, n) => Math.min(t, n.length), 1 / 0) : 0;
      };
    });
    var Ko = X((of, Wo) => {
      "use strict";
      var ju = Ho();
      Wo.exports = (e) => {
        let r = ju(e);
        if (r === 0) return e;
        let t = new RegExp(`^[ \\t]{${r}}`, "gm");
        return e.replace(t, "");
      };
    });
    var Xn = X((sf, Uu) => {
      Uu.exports = { name: "@prisma/engines-version", version: "5.11.0-15.efd2449663b3d73d637ea1fd226bafbcf45b3102", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "efd2449663b3d73d637ea1fd226bafbcf45b3102" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.22", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var ei = X((Bt) => {
      "use strict";
      Object.defineProperty(Bt, "__esModule", { value: true });
      Bt.enginesVersion = void 0;
      Bt.enginesVersion = Xn().prisma.enginesVersion;
    });
    var oi = X((_f, Zo) => {
      "use strict";
      Zo.exports = (e, r = 1, t) => {
        if (t = { indent: " ", includeEmptyLines: false, ...t }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof r != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof r}\``);
        if (typeof t.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);
        if (r === 0) return e;
        let n = t.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, t.indent.repeat(r));
      };
    });
    var ts = X((Lf, rs) => {
      "use strict";
      rs.exports = ({ onlyFirst: e = false } = {}) => {
        let r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(r, e ? void 0 : "g");
      };
    });
    var ui = X((Nf, ns) => {
      "use strict";
      var Xu = ts();
      ns.exports = (e) => typeof e == "string" ? e.replace(Xu(), "") : e;
    });
    var is = X((Mf, jt) => {
      "use strict";
      jt.exports = (e = {}) => {
        let r;
        if (e.repoUrl) r = e.repoUrl;
        else if (e.user && e.repo) r = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let t = new URL(`${r}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            t.searchParams.set(i, o);
          }
        }
        return t.toString();
      };
      jt.exports.default = jt.exports;
    });
    var Wi = X((C0, Va) => {
      "use strict";
      Va.exports = /* @__PURE__ */ function() {
        function e(r, t, n, i, o) {
          return r < t || n < t ? r > n ? n + 1 : r + 1 : i === o ? t : t + 1;
        }
        return function(r, t) {
          if (r === t) return 0;
          if (r.length > t.length) {
            var n = r;
            r = t, t = n;
          }
          for (var i = r.length, o = t.length; i > 0 && r.charCodeAt(i - 1) === t.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && r.charCodeAt(s) === t.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, l, u, c, p, m, f, g, h, A, T, C, E, I = [];
          for (l = 0; l < i; l++) I.push(l + 1), I.push(r.charCodeAt(s + l));
          for (var me = I.length - 1; a < o - 3; ) for (A = t.charCodeAt(s + (u = a)), T = t.charCodeAt(s + (c = a + 1)), C = t.charCodeAt(s + (p = a + 2)), E = t.charCodeAt(s + (m = a + 3)), f = a += 4, l = 0; l < me; l += 2) g = I[l], h = I[l + 1], u = e(g, u, c, A, h), c = e(u, c, p, T, h), p = e(c, p, m, C, h), f = e(p, m, f, E, h), I[l] = f, m = p, p = c, c = u, u = g;
          for (; a < o; ) for (A = t.charCodeAt(s + (u = a)), f = ++a, l = 0; l < me; l += 2) g = I[l], I[l] = f = e(g, u, f, A, I[l + 1]), u = g;
          return f;
        };
      }();
    });
    var ld = {};
    Or(ld, { Debug: () => On, Decimal: () => Te, Extensions: () => kn, MetricsClient: () => yr, NotFoundError: () => Le, PrismaClientInitializationError: () => R, PrismaClientKnownRequestError: () => V, PrismaClientRustPanicError: () => ue, PrismaClientUnknownRequestError: () => j, PrismaClientValidationError: () => K, Public: () => Dn, Sql: () => oe, defineDmmfProperty: () => ss, empty: () => ls, getPrismaClient: () => Ll, getRuntime: () => fn, join: () => as, makeStrictEnum: () => Nl, objectEnumValues: () => Gt, raw: () => Ei, sqltag: () => bi, warnEnvConflicts: () => Ol, warnOnce: () => Hr });
    module.exports = Vl(ld);
    var kn = {};
    Or(kn, { defineExtension: () => io, getExtensionContext: () => oo });
    function io(e) {
      return typeof e == "function" ? e : (r) => r.$extends(e);
    }
    function oo(e) {
      return e;
    }
    var Dn = {};
    Or(Dn, { validator: () => so });
    function so(...e) {
      return (r) => r;
    }
    var St = {};
    Or(St, { $: () => po, bgBlack: () => Yl, bgBlue: () => ru, bgCyan: () => nu, bgGreen: () => Xl, bgMagenta: () => tu, bgRed: () => Zl, bgWhite: () => iu, bgYellow: () => eu, black: () => Hl, blue: () => Ze, bold: () => W, cyan: () => _e, dim: () => Ie, gray: () => Fr, green: () => $e, grey: () => zl, hidden: () => Gl, inverse: () => Ql, italic: () => Ul, magenta: () => Wl, red: () => ce, reset: () => jl, strikethrough: () => Jl, underline: () => ee, white: () => Kl, yellow: () => de });
    var Ln;
    var ao;
    var lo;
    var uo;
    var co = true;
    typeof process < "u" && ({ FORCE_COLOR: Ln, NODE_DISABLE_COLORS: ao, NO_COLOR: lo, TERM: uo } = process.env || {}, co = process.stdout && process.stdout.isTTY);
    var po = { enabled: !ao && lo == null && uo !== "dumb" && (Ln != null && Ln !== "0" || co) };
    function F(e, r) {
      let t = new RegExp(`\\x1b\\[${r}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${r}m`;
      return function(o) {
        return !po.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(t, i + n) : o) + i;
      };
    }
    var jl = F(0, 0);
    var W = F(1, 22);
    var Ie = F(2, 22);
    var Ul = F(3, 23);
    var ee = F(4, 24);
    var Ql = F(7, 27);
    var Gl = F(8, 28);
    var Jl = F(9, 29);
    var Hl = F(30, 39);
    var ce = F(31, 39);
    var $e = F(32, 39);
    var de = F(33, 39);
    var Ze = F(34, 39);
    var Wl = F(35, 39);
    var _e = F(36, 39);
    var Kl = F(37, 39);
    var Fr = F(90, 39);
    var zl = F(90, 39);
    var Yl = F(40, 49);
    var Zl = F(41, 49);
    var Xl = F(42, 49);
    var eu = F(43, 49);
    var ru = F(44, 49);
    var tu = F(45, 49);
    var nu = F(46, 49);
    var iu = F(47, 49);
    var ou = 100;
    var mo = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var Mr = [];
    var fo = Date.now();
    var su = 0;
    var Nn = typeof process < "u" ? process.env : {};
    globalThis.DEBUG ?? (globalThis.DEBUG = Nn.DEBUG ?? "");
    globalThis.DEBUG_COLORS ?? (globalThis.DEBUG_COLORS = Nn.DEBUG_COLORS ? Nn.DEBUG_COLORS === "true" : true);
    var $r = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let r = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), t = r.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = r.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return t && !n;
    }, log: (...e) => {
      let [r, t, ...n] = e, i;
      typeof require == "function" && typeof process < "u" && typeof process.stderr < "u" && typeof process.stderr.write == "function" ? i = (...o) => {
        let s = require("util");
        process.stderr.write(s.format(...o) + `
`);
      } : i = console.warn ?? console.log, i(`${r} ${t}`, ...n);
    }, formatters: {} };
    function au(e) {
      let r = { color: mo[su++ % mo.length], enabled: $r.enabled(e), namespace: e, log: $r.log, extend: () => {
      } }, t = (...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = r;
        if (n.length !== 0 && Mr.push([o, ...n]), Mr.length > ou && Mr.shift(), $r.enabled(o) || i) {
          let l = n.map((c) => typeof c == "string" ? c : lu(c)), u = `+${Date.now() - fo}ms`;
          fo = Date.now(), globalThis.DEBUG_COLORS ? a(St[s](W(o)), ...l, St[s](u)) : a(o, ...l, u);
        }
      };
      return new Proxy(t, { get: (n, i) => r[i], set: (n, i, o) => r[i] = o });
    }
    var On = new Proxy(au, { get: (e, r) => $r[r], set: (e, r, t) => $r[r] = t });
    function lu(e, r = 2) {
      let t = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (t.has(i)) return "[Circular *]";
          t.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, r);
    }
    function go(e = 7500) {
      let r = Mr.map(([t, ...n]) => `${t} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
      return r.length < e ? r : r.slice(-e);
    }
    function ho() {
      Mr.length = 0;
    }
    var N = On;
    var yo = _(require("fs"));
    function Fn() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && yo.default.existsSync(e)) && process.arch === "ia32") throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    var Mn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
    var At = "libquery_engine";
    function It(e, r) {
      let t = r === "url";
      return e.includes("windows") ? t ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? t ? `${At}.dylib.node` : `${At}-${e}.dylib.node` : t ? `${At}.so.node` : `${At}-${e}.so.node`;
    }
    var xo = _(require("child_process"));
    var Vn = _(require("fs/promises"));
    var Nt = _(require("os"));
    var ke = Symbol.for("@ts-pattern/matcher");
    var uu = Symbol.for("@ts-pattern/isVariadic");
    var kt = "@ts-pattern/anonymous-select-key";
    var $n = (e) => !!(e && typeof e == "object");
    var _t = (e) => e && !!e[ke];
    var we = (e, r, t) => {
      if (_t(e)) {
        let n = e[ke](), { matched: i, selections: o } = n.match(r);
        return i && o && Object.keys(o).forEach((s) => t(s, o[s])), i;
      }
      if ($n(e)) {
        if (!$n(r)) return false;
        if (Array.isArray(e)) {
          if (!Array.isArray(r)) return false;
          let n = [], i = [], o = [];
          for (let s of e.keys()) {
            let a = e[s];
            _t(a) && a[uu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
          }
          if (o.length) {
            if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
            if (r.length < n.length + i.length) return false;
            let s = r.slice(0, n.length), a = i.length === 0 ? [] : r.slice(-i.length), l = r.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
            return n.every((u, c) => we(u, s[c], t)) && i.every((u, c) => we(u, a[c], t)) && (o.length === 0 || we(o[0], l, t));
          }
          return e.length === r.length && e.every((s, a) => we(s, r[a], t));
        }
        return Object.keys(e).every((n) => {
          let i = e[n];
          return (n in r || _t(o = i) && o[ke]().matcherType === "optional") && we(i, r[n], t);
          var o;
        });
      }
      return Object.is(r, e);
    };
    var Ve = (e) => {
      var r, t, n;
      return $n(e) ? _t(e) ? (r = (t = (n = e[ke]()).getSelectionKeys) == null ? void 0 : t.call(n)) != null ? r : [] : Array.isArray(e) ? qr(e, Ve) : qr(Object.values(e), Ve) : [];
    };
    var qr = (e, r) => e.reduce((t, n) => t.concat(r(n)), []);
    function fe(e) {
      return Object.assign(e, { optional: () => cu(e), and: (r) => B(e, r), or: (r) => pu(e, r), select: (r) => r === void 0 ? Eo(e) : Eo(r, e) });
    }
    function cu(e) {
      return fe({ [ke]: () => ({ match: (r) => {
        let t = {}, n = (i, o) => {
          t[i] = o;
        };
        return r === void 0 ? (Ve(e).forEach((i) => n(i, void 0)), { matched: true, selections: t }) : { matched: we(e, r, n), selections: t };
      }, getSelectionKeys: () => Ve(e), matcherType: "optional" }) });
    }
    function B(...e) {
      return fe({ [ke]: () => ({ match: (r) => {
        let t = {}, n = (i, o) => {
          t[i] = o;
        };
        return { matched: e.every((i) => we(i, r, n)), selections: t };
      }, getSelectionKeys: () => qr(e, Ve), matcherType: "and" }) });
    }
    function pu(...e) {
      return fe({ [ke]: () => ({ match: (r) => {
        let t = {}, n = (i, o) => {
          t[i] = o;
        };
        return qr(e, Ve).forEach((i) => n(i, void 0)), { matched: e.some((i) => we(i, r, n)), selections: t };
      }, getSelectionKeys: () => qr(e, Ve), matcherType: "or" }) });
    }
    function k(e) {
      return { [ke]: () => ({ match: (r) => ({ matched: !!e(r) }) }) };
    }
    function Eo(...e) {
      let r = typeof e[0] == "string" ? e[0] : void 0, t = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
      return fe({ [ke]: () => ({ match: (n) => {
        let i = { [r ?? kt]: n };
        return { matched: t === void 0 || we(t, n, (o, s) => {
          i[o] = s;
        }), selections: i };
      }, getSelectionKeys: () => [r ?? kt].concat(t === void 0 ? [] : Ve(t)) }) });
    }
    function Ee(e) {
      return typeof e == "number";
    }
    function Xe(e) {
      return typeof e == "string";
    }
    function qe(e) {
      return typeof e == "bigint";
    }
    var xd = fe(k(function(e) {
      return true;
    }));
    var er = (e) => Object.assign(fe(e), { startsWith: (r) => {
      return er(B(e, (t = r, k((n) => Xe(n) && n.startsWith(t)))));
      var t;
    }, endsWith: (r) => {
      return er(B(e, (t = r, k((n) => Xe(n) && n.endsWith(t)))));
      var t;
    }, minLength: (r) => er(B(e, ((t) => k((n) => Xe(n) && n.length >= t))(r))), maxLength: (r) => er(B(e, ((t) => k((n) => Xe(n) && n.length <= t))(r))), includes: (r) => {
      return er(B(e, (t = r, k((n) => Xe(n) && n.includes(t)))));
      var t;
    }, regex: (r) => {
      return er(B(e, (t = r, k((n) => Xe(n) && !!n.match(t)))));
      var t;
    } });
    var Pd = er(k(Xe));
    var be = (e) => Object.assign(fe(e), { between: (r, t) => be(B(e, ((n, i) => k((o) => Ee(o) && n <= o && i >= o))(r, t))), lt: (r) => be(B(e, ((t) => k((n) => Ee(n) && n < t))(r))), gt: (r) => be(B(e, ((t) => k((n) => Ee(n) && n > t))(r))), lte: (r) => be(B(e, ((t) => k((n) => Ee(n) && n <= t))(r))), gte: (r) => be(B(e, ((t) => k((n) => Ee(n) && n >= t))(r))), int: () => be(B(e, k((r) => Ee(r) && Number.isInteger(r)))), finite: () => be(B(e, k((r) => Ee(r) && Number.isFinite(r)))), positive: () => be(B(e, k((r) => Ee(r) && r > 0))), negative: () => be(B(e, k((r) => Ee(r) && r < 0))) });
    var vd = be(k(Ee));
    var Be = (e) => Object.assign(fe(e), { between: (r, t) => Be(B(e, ((n, i) => k((o) => qe(o) && n <= o && i >= o))(r, t))), lt: (r) => Be(B(e, ((t) => k((n) => qe(n) && n < t))(r))), gt: (r) => Be(B(e, ((t) => k((n) => qe(n) && n > t))(r))), lte: (r) => Be(B(e, ((t) => k((n) => qe(n) && n <= t))(r))), gte: (r) => Be(B(e, ((t) => k((n) => qe(n) && n >= t))(r))), positive: () => Be(B(e, k((r) => qe(r) && r > 0))), negative: () => Be(B(e, k((r) => qe(r) && r < 0))) });
    var Td = Be(k(qe));
    var Cd = fe(k(function(e) {
      return typeof e == "boolean";
    }));
    var Rd = fe(k(function(e) {
      return typeof e == "symbol";
    }));
    var Sd = fe(k(function(e) {
      return e == null;
    }));
    var qn = { matched: false, value: void 0 };
    function mr(e) {
      return new Bn(e, qn);
    }
    var Bn = class e {
      constructor(r, t) {
        this.input = void 0, this.state = void 0, this.input = r, this.state = t;
      }
      with(...r) {
        if (this.state.matched) return this;
        let t = r[r.length - 1], n = [r[0]], i;
        r.length === 3 && typeof r[1] == "function" ? i = r[1] : r.length > 2 && n.push(...r.slice(1, r.length - 1));
        let o = false, s = {}, a = (u, c) => {
          o = true, s[u] = c;
        }, l = !n.some((u) => we(u, this.input, a)) || i && !i(this.input) ? qn : { matched: true, value: t(o ? kt in s ? s[kt] : s : this.input, this.input) };
        return new e(this.input, l);
      }
      when(r, t) {
        if (this.state.matched) return this;
        let n = !!r(this.input);
        return new e(this.input, n ? { matched: true, value: t(this.input, this.input) } : qn);
      }
      otherwise(r) {
        return this.state.matched ? this.state.value : r(this.input);
      }
      exhaustive() {
        if (this.state.matched) return this.state.value;
        let r;
        try {
          r = JSON.stringify(this.input);
        } catch {
          r = this.input;
        }
        throw new Error(`Pattern matching error: no pattern matches value ${r}`);
      }
      run() {
        return this.exhaustive();
      }
      returnType() {
        return this;
      }
    };
    var Po = require("util");
    var mu = { warn: de("prisma:warn") };
    var du = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Dt(e, ...r) {
      du.warn() && console.warn(`${mu.warn} ${e}`, ...r);
    }
    var fu = (0, Po.promisify)(xo.default.exec);
    var te = N("prisma:get-platform");
    var gu = ["1.0.x", "1.1.x", "3.0.x"];
    async function vo() {
      let e = Nt.default.platform(), r = process.arch;
      if (e === "freebsd") {
        let s = await Ot("freebsd-version");
        if (s && s.trim().length > 0) {
          let l = /^(\d+)\.?/.exec(s);
          if (l) return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: r };
        }
      }
      if (e !== "linux") return { platform: e, arch: r };
      let t = await yu(), n = await Cu(), i = bu({ arch: r, archFromUname: n, familyDistro: t.familyDistro }), { libssl: o } = await wu(i);
      return { platform: "linux", libssl: o, arch: r, archFromUname: n, ...t };
    }
    function hu(e) {
      let r = /^ID="?([^"\n]*)"?$/im, t = /^ID_LIKE="?([^"\n]*)"?$/im, n = r.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = t.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = mr({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return te(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    async function yu() {
      let e = "/etc/os-release";
      try {
        let r = await Vn.default.readFile(e, { encoding: "utf-8" });
        return hu(r);
      } catch {
        return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
      }
    }
    function Eu(e) {
      let r = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (r) {
        let t = `${r[1]}.x`;
        return To(t);
      }
    }
    function bo(e) {
      let r = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (r) {
        let t = `${r[1]}${r[2] ?? ".0"}.x`;
        return To(t);
      }
    }
    function To(e) {
      let r = (() => {
        if (Ro(e)) return e;
        let t = e.split(".");
        return t[1] = "0", t.join(".");
      })();
      if (gu.includes(r)) return r;
    }
    function bu(e) {
      return mr(e).with({ familyDistro: "musl" }, () => (te('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: r }) => (te('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${r}-linux-gnu`, `/lib/${r}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (te('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: r, arch: t, archFromUname: n }) => (te(`Don't know any platform-specific paths for "${r}" on ${t} (${n})`), []));
    }
    async function wu(e) {
      let r = 'grep -v "libssl.so.0"', t = await wo(e);
      if (t) {
        te(`Found libssl.so file using platform-specific paths: ${t}`);
        let o = bo(t);
        if (te(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "libssl-specific-path" };
      }
      te('Falling back to "ldconfig" and other generic paths');
      let n = await Ot(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${r}`);
      if (n || (n = await wo(["/lib64", "/usr/lib64", "/lib"])), n) {
        te(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
        let o = bo(n);
        if (te(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "ldconfig" };
      }
      let i = await Ot("openssl version -v");
      if (i) {
        te(`Found openssl binary with version: ${i}`);
        let o = Eu(i);
        if (te(`The parsed openssl version is: ${o}`), o) return { libssl: o, strategy: "openssl-binary" };
      }
      return te("Couldn't find any version of libssl or OpenSSL in the system"), {};
    }
    async function wo(e) {
      for (let r of e) {
        let t = await xu(r);
        if (t) return t;
      }
    }
    async function xu(e) {
      try {
        return (await Vn.default.readdir(e)).find((t) => t.startsWith("libssl.so.") && !t.startsWith("libssl.so.0"));
      } catch (r) {
        if (r.code === "ENOENT") return;
        throw r;
      }
    }
    async function rr() {
      let { binaryTarget: e } = await Co();
      return e;
    }
    function Pu(e) {
      return e.binaryTarget !== void 0;
    }
    async function jn() {
      let { memoized: e, ...r } = await Co();
      return r;
    }
    var Lt = {};
    async function Co() {
      if (Pu(Lt)) return Promise.resolve({ ...Lt, memoized: true });
      let e = await vo(), r = vu(e);
      return Lt = { ...e, binaryTarget: r }, { ...Lt, memoized: false };
    }
    function vu(e) {
      let { platform: r, arch: t, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      r === "linux" && !["x64", "arm64"].includes(t) && Dt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (r === "linux" && i === void 0) {
        let c = mr({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        Dt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (r === "linux" && o === void 0 && te(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), r === "darwin" && t === "arm64") return "darwin-arm64";
      if (r === "darwin") return "darwin";
      if (r === "win32") return "windows";
      if (r === "freebsd") return o;
      if (r === "openbsd") return "openbsd";
      if (r === "netbsd") return "netbsd";
      if (r === "linux" && o === "nixos") return "linux-nixos";
      if (r === "linux" && t === "arm64") return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (r === "linux" && t === "arm") return `linux-arm-openssl-${i || l}`;
      if (r === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || Ro(i) ? c : `${c}-openssl-${i}`;
      }
      return r === "linux" && o && i ? `${o}-openssl-${i}` : (r !== "linux" && Dt(`Prisma detected unknown OS "${r}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    async function Tu(e) {
      try {
        return await e();
      } catch {
        return;
      }
    }
    function Ot(e) {
      return Tu(async () => {
        let r = await fu(e);
        return te(`Command "${e}" successfully returned "${r.stdout}"`), r.stdout;
      });
    }
    async function Cu() {
      return typeof Nt.default.machine == "function" ? Nt.default.machine() : (await Ot("uname -m"))?.trim();
    }
    function Ro(e) {
      return e.startsWith("1.");
    }
    var $o = _(Mo());
    function Kn(e) {
      return (0, $o.default)(e, e, { fallback: ee });
    }
    var Zn = _(Vo());
    var qt = _(require("fs"));
    var gr = _(require("path"));
    function jo(e) {
      let r = e.ignoreProcessEnv ? {} : process.env, t = (n) => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
        let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
        if (!a) return o;
        let l = a[1], u, c;
        if (l === "\\") c = a[0], u = c.replace("\\$", "$");
        else {
          let p = a[2];
          c = a[0].substring(l.length), u = Object.hasOwnProperty.call(r, p) ? r[p] : e.parsed[p] || "", u = t(u);
        }
        return o.replace(c, u);
      }, n) ?? n;
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(r, n) ? r[n] : e.parsed[n];
        e.parsed[n] = t(i);
      }
      for (let n in e.parsed) r[n] = e.parsed[n];
      return e;
    }
    var Yn = N("prisma:tryLoadEnv");
    function jr({ rootEnvPath: e, schemaEnvPath: r }, t = { conflictCheck: "none" }) {
      let n = Uo(e);
      t.conflictCheck !== "none" && qu(n, r, t.conflictCheck);
      let i = null;
      return Qo(n?.path, r) || (i = Uo(r)), !n && !i && Yn("No Environment variables loaded"), i?.dotenvResult.error ? console.error(ce(W("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
    }
    function qu(e, r, t) {
      let n = e?.dotenvResult.parsed, i = !Qo(e?.path, r);
      if (n && r && i && qt.default.existsSync(r)) {
        let o = Zn.default.parse(qt.default.readFileSync(r)), s = [];
        for (let a in o) n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = gr.default.relative(process.cwd(), e.path), l = gr.default.relative(process.cwd(), r);
          if (t === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${ee(a)} and ${ee(l)}
Conflicting env vars:
${s.map((c) => `  ${W(c)}`).join(`
`)}

We suggest to move the contents of ${ee(l)} to ${ee(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (t === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => W(c)).join(", ")} in ${ee(a)} and ${ee(l)}
Env vars from ${ee(l)} overwrite the ones from ${ee(a)}
      `;
            console.warn(`${de("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    function Uo(e) {
      if (Bu(e)) {
        Yn(`Environment variables loaded from ${e}`);
        let r = Zn.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 });
        return { dotenvResult: jo(r), message: Ie(`Environment variables loaded from ${gr.default.relative(process.cwd(), e)}`), path: e };
      } else Yn(`Environment variables not found at ${e}`);
      return null;
    }
    function Qo(e, r) {
      return e && r && gr.default.resolve(e) === gr.default.resolve(r);
    }
    function Bu(e) {
      return !!(e && qt.default.existsSync(e));
    }
    var Go = "library";
    function Ur(e) {
      let r = Vu();
      return r || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : Go);
    }
    function Vu() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    var Qu = _(ei());
    var M = _(require("path"));
    var Gu = _(ei());
    var hf = N("prisma:engines");
    function zo() {
      return M.default.join(__dirname, "../");
    }
    var yf = "libquery-engine";
    M.default.join(__dirname, "../query-engine-darwin");
    M.default.join(__dirname, "../query-engine-darwin-arm64");
    M.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    M.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    M.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    M.default.join(__dirname, "../query-engine-linux-static-x64");
    M.default.join(__dirname, "../query-engine-linux-static-arm64");
    M.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    M.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    M.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    M.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    M.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../query_engine-windows.dll.node");
    var ri = _(require("fs"));
    var Yo = N("chmodPlusX");
    function ti(e) {
      if (process.platform === "win32") return;
      let r = ri.default.statSync(e), t = r.mode | 64 | 8 | 1;
      if (r.mode === t) {
        Yo(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = t.toString(8).slice(-3);
      Yo(`Have to call chmodPlusX on ${e}`), ri.default.chmodSync(e, n);
    }
    function ni(e) {
      let r = e.e, t = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = r.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${Kn("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Ie(e.id)}\`).`, s = mr({ message: r.message, code: r.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${t("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${t("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${t("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${r.message}`;
    }
    var De;
    ((r) => {
      let e;
      ((E) => (E.findUnique = "findUnique", E.findUniqueOrThrow = "findUniqueOrThrow", E.findFirst = "findFirst", E.findFirstOrThrow = "findFirstOrThrow", E.findMany = "findMany", E.create = "create", E.createMany = "createMany", E.update = "update", E.updateMany = "updateMany", E.upsert = "upsert", E.delete = "delete", E.deleteMany = "deleteMany", E.groupBy = "groupBy", E.count = "count", E.aggregate = "aggregate", E.findRaw = "findRaw", E.aggregateRaw = "aggregateRaw"))(e = r.ModelAction || (r.ModelAction = {}));
    })(De || (De = {}));
    var Qr = _(require("path"));
    function ii(e) {
      return Qr.default.sep === Qr.default.posix.sep ? e : e.split(Qr.default.sep).join(Qr.default.posix.sep);
    }
    var Xo = _(oi());
    function ai(e) {
      return String(new si(e));
    }
    var si = class {
      constructor(r) {
        this.config = r;
      }
      toString() {
        let { config: r } = this, t = r.provider.fromEnvVar ? `env("${r.provider.fromEnvVar}")` : r.provider.value, n = JSON.parse(JSON.stringify({ provider: t, binaryTargets: Ju(r.binaryTargets) }));
        return `generator ${r.name} {
${(0, Xo.default)(Hu(n), 2)}
}`;
      }
    };
    function Ju(e) {
      let r;
      if (e.length > 0) {
        let t = e.find((n) => n.fromEnvVar !== null);
        t ? r = `env("${t.fromEnvVar}")` : r = e.map((n) => n.native ? "native" : n.value);
      } else r = void 0;
      return r;
    }
    function Hu(e) {
      let r = Object.keys(e).reduce((t, n) => Math.max(t, n.length), 0);
      return Object.entries(e).map(([t, n]) => `${t.padEnd(r)} = ${Wu(n)}`).join(`
`);
    }
    function Wu(e) {
      return JSON.parse(JSON.stringify(e, (r, t) => Array.isArray(t) ? `[${t.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(t)));
    }
    var Jr = {};
    Or(Jr, { error: () => Yu, info: () => zu, log: () => Ku, query: () => Zu, should: () => es, tags: () => Gr, warn: () => li });
    var Gr = { error: ce("prisma:error"), warn: de("prisma:warn"), info: _e("prisma:info"), query: Ze("prisma:query") };
    var es = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Ku(...e) {
      console.log(...e);
    }
    function li(e, ...r) {
      es.warn() && console.warn(`${Gr.warn} ${e}`, ...r);
    }
    function zu(e, ...r) {
      console.info(`${Gr.info} ${e}`, ...r);
    }
    function Yu(e, ...r) {
      console.error(`${Gr.error} ${e}`, ...r);
    }
    function Zu(e, ...r) {
      console.log(`${Gr.query} ${e}`, ...r);
    }
    function Vt(e, r) {
      if (!e) throw new Error(`${r}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    function tr(e, r) {
      throw new Error(r);
    }
    function ci(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }
    var pi = (e, r) => e.reduce((t, n) => (t[r(n)] = n, t), {});
    function hr(e, r) {
      let t = {};
      for (let n of Object.keys(e)) t[n] = r(e[n], n);
      return t;
    }
    function mi(e, r) {
      if (e.length === 0) return;
      let t = e[0];
      for (let n = 1; n < e.length; n++) r(t, e[n]) < 0 && (t = e[n]);
      return t;
    }
    function w(e, r) {
      Object.defineProperty(e, "name", { value: r, configurable: true });
    }
    var os = /* @__PURE__ */ new Set();
    var Hr = (e, r, ...t) => {
      os.has(e) || (os.add(e), li(r, ...t));
    };
    var V = class extends Error {
      constructor(r, { code: t, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(r), this.name = "PrismaClientKnownRequestError", this.code = t, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    w(V, "PrismaClientKnownRequestError");
    var Le = class extends V {
      constructor(r, t) {
        super(r, { code: "P2025", clientVersion: t }), this.name = "NotFoundError";
      }
    };
    w(Le, "NotFoundError");
    var R = class e extends Error {
      constructor(r, t, n) {
        super(r), this.name = "PrismaClientInitializationError", this.clientVersion = t, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    w(R, "PrismaClientInitializationError");
    var ue = class extends Error {
      constructor(r, t) {
        super(r), this.name = "PrismaClientRustPanicError", this.clientVersion = t;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    w(ue, "PrismaClientRustPanicError");
    var j = class extends Error {
      constructor(r, { clientVersion: t, batchRequestIdx: n }) {
        super(r), this.name = "PrismaClientUnknownRequestError", this.clientVersion = t, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    w(j, "PrismaClientUnknownRequestError");
    var K = class extends Error {
      constructor(t, { clientVersion: n }) {
        super(t);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    w(K, "PrismaClientValidationError");
    var yr = class {
      constructor(r) {
        this._engine = r;
      }
      prometheus(r) {
        return this._engine.metrics({ format: "prometheus", ...r });
      }
      json(r) {
        return this._engine.metrics({ format: "json", ...r });
      }
    };
    function Wr(e) {
      let r;
      return { get() {
        return r || (r = { value: e() }), r.value;
      } };
    }
    function ss(e, r) {
      let t = Wr(() => ec(r));
      Object.defineProperty(e, "dmmf", { get: () => t.get() });
    }
    function ec(e) {
      return { datamodel: { models: di(e.models), enums: di(e.enums), types: di(e.types) } };
    }
    function di(e) {
      return Object.entries(e).map(([r, t]) => ({ name: r, ...t }));
    }
    var Qt = Symbol();
    var fi = /* @__PURE__ */ new WeakMap();
    var Ne = class {
      constructor(r) {
        r === Qt ? fi.set(this, `Prisma.${this._getName()}`) : fi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return fi.get(this);
      }
    };
    var Kr = class extends Ne {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var zr = class extends Kr {
    };
    gi(zr, "DbNull");
    var Yr = class extends Kr {
    };
    gi(Yr, "JsonNull");
    var Zr = class extends Kr {
    };
    gi(Zr, "AnyNull");
    var Gt = { classes: { DbNull: zr, JsonNull: Yr, AnyNull: Zr }, instances: { DbNull: new zr(Qt), JsonNull: new Yr(Qt), AnyNull: new Zr(Qt) } };
    function gi(e, r) {
      Object.defineProperty(e, "name", { value: r, configurable: true });
    }
    function Xr(e) {
      return { ok: false, error: e, map() {
        return Xr(e);
      }, flatMap() {
        return Xr(e);
      } };
    }
    var hi = class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(r) {
        return this.registeredErrors[r];
      }
      registerNewError(r) {
        let t = 0;
        for (; this.registeredErrors[t] !== void 0; ) t++;
        return this.registeredErrors[t] = { error: r }, t;
      }
    };
    var yi = (e) => {
      let r = new hi(), t = nr(r, e.startTransaction.bind(e)), n = { errorRegistry: r, queryRaw: nr(r, e.queryRaw.bind(e)), executeRaw: nr(r, e.executeRaw.bind(e)), provider: e.provider, startTransaction: async (...i) => (await t(...i)).map((s) => rc(r, s)) };
      return e.getConnectionInfo && (n.getConnectionInfo = tc(r, e.getConnectionInfo.bind(e))), n;
    };
    var rc = (e, r) => ({ provider: r.provider, options: r.options, queryRaw: nr(e, r.queryRaw.bind(r)), executeRaw: nr(e, r.executeRaw.bind(r)), commit: nr(e, r.commit.bind(r)), rollback: nr(e, r.rollback.bind(r)) });
    function nr(e, r) {
      return async (...t) => {
        try {
          return await r(...t);
        } catch (n) {
          let i = e.registerNewError(n);
          return Xr({ kind: "GenericJs", id: i });
        }
      };
    }
    function tc(e, r) {
      return (...t) => {
        try {
          return r(...t);
        } catch (n) {
          let i = e.registerNewError(n);
          return Xr({ kind: "GenericJs", id: i });
        }
      };
    }
    var Il = _(Xn());
    var _l = require("async_hooks");
    var kl = require("events");
    var Dl = _(require("fs"));
    var Tt = _(require("path"));
    var oe = class e {
      constructor(r, t) {
        if (r.length - 1 !== t.length) throw r.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${r.length} strings to have ${r.length - 1} values`);
        let n = t.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = r[0];
        let i = 0, o = 0;
        for (; i < t.length; ) {
          let s = t[i++], a = r[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; ) this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else this.values[o++] = s, this.strings[o] = a;
        }
      }
      get text() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `$${t}${this.strings[t++]}`;
        return n;
      }
      get sql() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `?${this.strings[t++]}`;
        return n;
      }
      get statement() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `:${t}${this.strings[t++]}`;
        return n;
      }
      inspect() {
        return { text: this.text, sql: this.sql, values: this.values };
      }
    };
    function as(e, r = ",", t = "", n = "") {
      if (e.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new oe([t, ...Array(e.length - 1).fill(r), n], e);
    }
    function Ei(e) {
      return new oe([e], []);
    }
    var ls = Ei("");
    function bi(e, ...r) {
      return new oe(e, r);
    }
    function et(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(r) {
        return e[r];
      } };
    }
    function ne(e, r) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return r();
      } };
    }
    var xe = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(r) {
        return this._map.get(r)?.value;
      }
      set(r, t) {
        this._map.set(r, { value: t });
      }
      getOrCreate(r, t) {
        let n = this._map.get(r);
        if (n) return n.value;
        let i = t();
        return this.set(r, i), i;
      }
    };
    function ir(e) {
      let r = new xe();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(t) {
        return r.getOrCreate(t, () => e.getPropertyValue(t));
      }, getPropertyDescriptor(t) {
        return e.getPropertyDescriptor?.(t);
      } };
    }
    var Jt = { enumerable: true, configurable: true, writable: true };
    function Ht(e) {
      let r = new Set(e);
      return { getOwnPropertyDescriptor: () => Jt, has: (t, n) => r.has(n), set: (t, n, i) => r.add(n) && Reflect.set(t, n, i), ownKeys: () => [...r] };
    }
    var us = Symbol.for("nodejs.util.inspect.custom");
    function Pe(e, r) {
      let t = nc(r), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = t.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a = t.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = cs(Reflect.ownKeys(o), t), a = cs(Array.from(t.keys()), t);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return t.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = t.get(s);
        return l ? l.getPropertyDescriptor ? { ...Jt, ...l?.getPropertyDescriptor(s) } : Jt : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[us] = function() {
        let o = { ...this };
        return delete o[us], o;
      }, i;
    }
    function nc(e) {
      let r = /* @__PURE__ */ new Map();
      for (let t of e) {
        let n = t.getKeys();
        for (let i of n) r.set(i, t);
      }
      return r;
    }
    function cs(e, r) {
      return e.filter((t) => r.get(t)?.has?.(t) ?? true);
    }
    function rt(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    function Er(e, r) {
      return { batch: e, transaction: r?.kind === "batch" ? { isolationLevel: r.options.isolationLevel } : void 0 };
    }
    var br = class {
      constructor(r = 0, t) {
        this.context = t;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = r;
      }
      write(r) {
        return typeof r == "string" ? this.currentLine += r : r.write(this), this;
      }
      writeJoined(r, t) {
        let n = t.length - 1;
        for (let i = 0; i < t.length; i++) this.write(t[i]), i !== n && this.write(r);
        return this;
      }
      writeLine(r) {
        return this.write(r).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let r = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, r?.(), this;
      }
      withIndent(r) {
        return this.indent(), r(this), this.unindent(), this;
      }
      afterNextNewline(r) {
        return this.afterNextNewLineCallback = r, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(r) {
        return this.marginSymbol = r, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let r = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + r.slice(1) : r;
      }
    };
    function ps(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    function wr(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function Wt(e) {
      return e.toString() !== "Invalid Date";
    }
    var xr = 9e15;
    var Je = 1e9;
    var wi = "0123456789abcdef";
    var zt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var Yt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var xi = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -xr, maxE: xr, crypto: false };
    var gs;
    var Oe;
    var x = true;
    var Xt = "[DecimalError] ";
    var Ge = Xt + "Invalid argument: ";
    var hs = Xt + "Precision limit exceeded";
    var ys = Xt + "crypto unavailable";
    var Es = "[object Decimal]";
    var re = Math.floor;
    var Q = Math.pow;
    var ic = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var oc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var sc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var bs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var he = 1e7;
    var b = 7;
    var ac = 9007199254740991;
    var lc = zt.length - 1;
    var Pi = Yt.length - 1;
    var d = { toStringTag: Es };
    d.absoluteValue = d.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), y(e);
    };
    d.ceil = function() {
      return y(new this.constructor(this), this.e + 1, 2);
    };
    d.clampedTo = d.clamp = function(e, r) {
      var t, n = this, i = n.constructor;
      if (e = new i(e), r = new i(r), !e.s || !r.s) return new i(NaN);
      if (e.gt(r)) throw Error(Ge + r);
      return t = n.cmp(e), t < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
    };
    d.comparedTo = d.cmp = function(e) {
      var r, t, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a) return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
      if (l !== u) return l;
      if (o.e !== e.e) return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, r = 0, t = n < i ? n : i; r < t; ++r) if (s[r] !== a[r]) return s[r] > a[r] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    d.cosine = d.cos = function() {
      var e, r, t = this, n = t.constructor;
      return t.d ? t.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + b, n.rounding = 1, t = uc(n, Ts(n, t)), n.precision = e, n.rounding = r, y(Oe == 2 || Oe == 3 ? t.neg() : t, e, r, true)) : new n(1) : new n(NaN);
    };
    d.cubeRoot = d.cbrt = function() {
      var e, r, t, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero()) return new p(c);
      for (x = false, o = c.s * Q(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (t = z(c.d), e = c.e, (o = (e - t.length + 1) % 3) && (t += o == 1 || o == -2 ? "0" : "00"), o = Q(t, 1 / 3), e = re((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new p(t), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; ) if (a = n, l = a.times(a).times(a), u = l.plus(c), n = O(u.plus(c).times(a), u.plus(l), s + 2, 1), z(a.d).slice(0, s) === (t = z(n.d)).slice(0, s)) if (t = t.slice(s - 3, s + 1), t == "9999" || !i && t == "4999") {
        if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        s += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, e + 1, 1), r = !n.times(n).times(n).eq(c));
        break;
      }
      return x = true, y(n, e, p.rounding, r);
    };
    d.decimalPlaces = d.dp = function() {
      var e, r = this.d, t = NaN;
      if (r) {
        if (e = r.length - 1, t = (e - re(this.e / b)) * b, e = r[e], e) for (; e % 10 == 0; e /= 10) t--;
        t < 0 && (t = 0);
      }
      return t;
    };
    d.dividedBy = d.div = function(e) {
      return O(this, new this.constructor(e));
    };
    d.dividedToIntegerBy = d.divToInt = function(e) {
      var r = this, t = r.constructor;
      return y(O(r, new t(e), 0, 1, 1), t.precision, t.rounding);
    };
    d.equals = d.eq = function(e) {
      return this.cmp(e) === 0;
    };
    d.floor = function() {
      return y(new this.constructor(this), this.e + 1, 3);
    };
    d.greaterThan = d.gt = function(e) {
      return this.cmp(e) > 0;
    };
    d.greaterThanOrEqualTo = d.gte = function(e) {
      var r = this.cmp(e);
      return r == 1 || r === 0;
    };
    d.hyperbolicCosine = d.cosh = function() {
      var e, r, t, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero()) return a;
      t = s.precision, n = s.rounding, s.precision = t + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / rn(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Pr(s, 1, o.times(r), new s(1), true);
      for (var l, u = e, c = new s(8); u--; ) l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return y(o, s.precision = t, s.rounding = n, true);
    };
    d.hyperbolicSine = d.sinh = function() {
      var e, r, t, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero()) return new o(i);
      if (r = o.precision, t = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = Pr(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / rn(5, e)), i = Pr(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; ) s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = r, o.rounding = t, y(i, r, t, true);
    };
    d.hyperbolicTangent = d.tanh = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, O(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s);
    };
    d.inverseCosine = d.acos = function() {
      var e, r = this, t = r.constructor, n = r.abs().cmp(1), i = t.precision, o = t.rounding;
      return n !== -1 ? n === 0 ? r.isNeg() ? ge(t, i, o) : new t(0) : new t(NaN) : r.isZero() ? ge(t, i + 4, o).times(0.5) : (t.precision = i + 6, t.rounding = 1, r = r.asin(), e = ge(t, i + 4, o).times(0.5), t.precision = i, t.rounding = o, e.minus(r));
    };
    d.inverseHyperbolicCosine = d.acosh = function() {
      var e, r, t = this, n = t.constructor;
      return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, x = false, t = t.times(t).minus(1).sqrt().plus(t), x = true, n.precision = e, n.rounding = r, t.ln()) : new n(t);
    };
    d.inverseHyperbolicSine = d.asinh = function() {
      var e, r, t = this, n = t.constructor;
      return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, x = false, t = t.times(t).plus(1).sqrt().plus(t), x = true, n.precision = e, n.rounding = r, t.ln());
    };
    d.inverseHyperbolicTangent = d.atanh = function() {
      var e, r, t, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, r = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? y(new o(i), e, r, true) : (o.precision = t = n - i.e, i = O(i.plus(1), new o(1).minus(i), t + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = r, i.times(0.5))) : new o(NaN);
    };
    d.inverseSine = d.asin = function() {
      var e, r, t, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (r = i.abs().cmp(1), t = o.precision, n = o.rounding, r !== -1 ? r === 0 ? (e = ge(o, t + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = t + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = t, o.rounding = n, i.times(2)));
    };
    d.inverseTangent = d.atan = function() {
      var e, r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, m = c.rounding;
      if (u.isFinite()) {
        if (u.isZero()) return new c(u);
        if (u.abs().eq(1) && p + 4 <= Pi) return s = ge(c, p + 4, m).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s) return new c(NaN);
        if (p + 4 <= Pi) return s = ge(c, p + 4, m).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, t = Math.min(28, a / b + 2 | 0), e = t; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (x = false, r = Math.ceil(a / b), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; ) if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[r] !== void 0) for (e = r; s.d[e] === o.d[e] && e--; ) ;
      return t && (s = s.times(2 << t - 1)), x = true, y(s, c.precision = p, c.rounding = m, true);
    };
    d.isFinite = function() {
      return !!this.d;
    };
    d.isInteger = d.isInt = function() {
      return !!this.d && re(this.e / b) > this.d.length - 2;
    };
    d.isNaN = function() {
      return !this.s;
    };
    d.isNegative = d.isNeg = function() {
      return this.s < 0;
    };
    d.isPositive = d.isPos = function() {
      return this.s > 0;
    };
    d.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    d.lessThan = d.lt = function(e) {
      return this.cmp(e) < 0;
    };
    d.lessThanOrEqualTo = d.lte = function(e) {
      return this.cmp(e) < 1;
    };
    d.logarithm = d.log = function(e) {
      var r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, m = c.rounding, f = 5;
      if (e == null) e = new c(10), r = true;
      else {
        if (e = new c(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1)) return new c(NaN);
        r = e.eq(10);
      }
      if (t = u.d, u.s < 0 || !t || !t[0] || u.eq(1)) return new c(t && !t[0] ? -1 / 0 : u.s != 1 ? NaN : t ? 0 : 1 / 0);
      if (r) if (t.length > 1) o = true;
      else {
        for (i = t[0]; i % 10 === 0; ) i /= 10;
        o = i !== 1;
      }
      if (x = false, a = p + f, s = Qe(u, a), n = r ? Zt(c, a + 10) : Qe(e, a), l = O(s, n, a, 1), tt(l.d, i = p, m)) do
        if (a += 10, s = Qe(u, a), n = r ? Zt(c, a + 10) : Qe(e, a), l = O(s, n, a, 1), !o) {
          +z(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = y(l, p + 1, 0));
          break;
        }
      while (tt(l.d, i += 10, m));
      return x = true, y(l, p, m);
    };
    d.minus = d.sub = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p, m, f = this, g = f.constructor;
      if (e = new g(e), !f.d || !e.d) return !f.s || !e.s ? e = new g(NaN) : f.d ? e.s = -e.s : e = new g(e.d || f.s !== e.s ? f : NaN), e;
      if (f.s != e.s) return e.s = -e.s, f.plus(e);
      if (u = f.d, m = e.d, a = g.precision, l = g.rounding, !u[0] || !m[0]) {
        if (m[0]) e.s = -e.s;
        else if (u[0]) e = new g(f);
        else return new g(l === 3 ? -0 : 0);
        return x ? y(e, a, l) : e;
      }
      if (t = re(e.e / b), c = re(f.e / b), u = u.slice(), o = c - t, o) {
        for (p = o < 0, p ? (r = u, o = -o, s = m.length) : (r = m, t = c, s = u.length), n = Math.max(Math.ceil(a / b), s) + 2, o > n && (o = n, r.length = 1), r.reverse(), n = o; n--; ) r.push(0);
        r.reverse();
      } else {
        for (n = u.length, s = m.length, p = n < s, p && (s = n), n = 0; n < s; n++) if (u[n] != m[n]) {
          p = u[n] < m[n];
          break;
        }
        o = 0;
      }
      for (p && (r = u, u = m, m = r, e.s = -e.s), s = u.length, n = m.length - s; n > 0; --n) u[s++] = 0;
      for (n = m.length; n > o; ) {
        if (u[--n] < m[n]) {
          for (i = n; i && u[--i] === 0; ) u[i] = he - 1;
          --u[i], u[n] += he;
        }
        u[n] -= m[n];
      }
      for (; u[--s] === 0; ) u.pop();
      for (; u[0] === 0; u.shift()) --t;
      return u[0] ? (e.d = u, e.e = en(u, t), x ? y(e, a, l) : e) : new g(l === 3 ? -0 : 0);
    };
    d.modulo = d.mod = function(e) {
      var r, t = this, n = t.constructor;
      return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? y(new n(t), n.precision, n.rounding) : (x = false, n.modulo == 9 ? (r = O(t, e.abs(), 0, 3, 1), r.s *= e.s) : r = O(t, e, 0, n.modulo, 1), r = r.times(e), x = true, t.minus(r));
    };
    d.naturalExponential = d.exp = function() {
      return vi(this);
    };
    d.naturalLogarithm = d.ln = function() {
      return Qe(this);
    };
    d.negated = d.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, y(e);
    };
    d.plus = d.add = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p = this, m = p.constructor;
      if (e = new m(e), !p.d || !e.d) return !p.s || !e.s ? e = new m(NaN) : p.d || (e = new m(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s) return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = m.precision, l = m.rounding, !u[0] || !c[0]) return c[0] || (e = new m(p)), x ? y(e, a, l) : e;
      if (o = re(p.e / b), n = re(e.e / b), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (t = u, i = -i, s = c.length) : (t = c, n = o, s = u.length), o = Math.ceil(a / b), s = o > s ? o + 1 : s + 1, i > s && (i = s, t.length = 1), t.reverse(); i--; ) t.push(0);
        t.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, t = c, c = u, u = t), r = 0; i; ) r = (u[--i] = u[i] + c[i] + r) / he | 0, u[i] %= he;
      for (r && (u.unshift(r), ++n), s = u.length; u[--s] == 0; ) u.pop();
      return e.d = u, e.e = en(u, n), x ? y(e, a, l) : e;
    };
    d.precision = d.sd = function(e) {
      var r, t = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ge + e);
      return t.d ? (r = ws(t.d), e && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
    };
    d.round = function() {
      var e = this, r = e.constructor;
      return y(new r(e), e.e + 1, r.rounding);
    };
    d.sine = d.sin = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + b, n.rounding = 1, t = pc(n, Ts(n, t)), n.precision = e, n.rounding = r, y(Oe > 2 ? t.neg() : t, e, r, true)) : new n(NaN);
    };
    d.squareRoot = d.sqrt = function() {
      var e, r, t, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (x = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (r = z(a), (r.length + l) % 2 == 0 && (r += "0"), u = Math.sqrt(r), l = re((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? r = "5e" + l : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + l), n = new c(r)) : n = new c(u.toString()), t = (l = c.precision) + 3; ; ) if (o = n, n = o.plus(O(s, o, t + 2, 1)).times(0.5), z(o.d).slice(0, t) === (r = z(n.d)).slice(0, t)) if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
        if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        t += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, l + 1, 1), e = !n.times(n).eq(s));
        break;
      }
      return x = true, y(n, l, c.rounding, e);
    };
    d.tangent = d.tan = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = O(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, y(Oe == 2 || Oe == 4 ? t.neg() : t, e, r, true)) : new n(NaN);
    };
    d.times = d.mul = function(e) {
      var r, t, n, i, o, s, a, l, u, c = this, p = c.constructor, m = c.d, f = (e = new p(e)).d;
      if (e.s *= c.s, !m || !m[0] || !f || !f[0]) return new p(!e.s || m && !m[0] && !f || f && !f[0] && !m ? NaN : !m || !f ? e.s / 0 : e.s * 0);
      for (t = re(c.e / b) + re(e.e / b), l = m.length, u = f.length, l < u && (o = m, m = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; ) o.push(0);
      for (n = u; --n >= 0; ) {
        for (r = 0, i = l + n; i > n; ) a = o[i] + f[n] * m[i - n - 1] + r, o[i--] = a % he | 0, r = a / he | 0;
        o[i] = (o[i] + r) % he | 0;
      }
      for (; !o[--s]; ) o.pop();
      return r ? ++t : o.shift(), e.d = o, e.e = en(o, t), x ? y(e, p.precision, p.rounding) : e;
    };
    d.toBinary = function(e, r) {
      return Ci(this, 2, e, r);
    };
    d.toDecimalPlaces = d.toDP = function(e, r) {
      var t = this, n = t.constructor;
      return t = new n(t), e === void 0 ? t : (se(e, 0, Je), r === void 0 ? r = n.rounding : se(r, 0, 8), y(t, e + t.e + 1, r));
    };
    d.toExponential = function(e, r) {
      var t, n = this, i = n.constructor;
      return e === void 0 ? t = ve(n, true) : (se(e, 0, Je), r === void 0 ? r = i.rounding : se(r, 0, 8), n = y(new i(n), e + 1, r), t = ve(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
    };
    d.toFixed = function(e, r) {
      var t, n, i = this, o = i.constructor;
      return e === void 0 ? t = ve(i) : (se(e, 0, Je), r === void 0 ? r = o.rounding : se(r, 0, 8), n = y(new o(i), e + i.e + 1, r), t = ve(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
    };
    d.toFraction = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p, m, f = this, g = f.d, h = f.constructor;
      if (!g) return new h(f);
      if (u = t = new h(1), n = l = new h(0), r = new h(n), o = r.e = ws(g) - f.e - 1, s = o % b, r.d[0] = Q(10, s < 0 ? b + s : s), e == null) e = o > 0 ? r : u;
      else {
        if (a = new h(e), !a.isInt() || a.lt(u)) throw Error(Ge + a);
        e = a.gt(r) ? o > 0 ? r : u : a;
      }
      for (x = false, a = new h(z(g)), c = h.precision, h.precision = o = g.length * b * 2; p = O(a, r, 0, 1, 1), i = t.plus(p.times(n)), i.cmp(e) != 1; ) t = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = r, r = a.minus(p.times(i)), a = i;
      return i = O(e.minus(t), n, 0, 1, 1), l = l.plus(i.times(u)), t = t.plus(i.times(n)), l.s = u.s = f.s, m = O(u, n, o, 1).minus(f).abs().cmp(O(l, t, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, t], h.precision = c, x = true, m;
    };
    d.toHexadecimal = d.toHex = function(e, r) {
      return Ci(this, 16, e, r);
    };
    d.toNearest = function(e, r) {
      var t = this, n = t.constructor;
      if (t = new n(t), e == null) {
        if (!t.d) return t;
        e = new n(1), r = n.rounding;
      } else {
        if (e = new n(e), r === void 0 ? r = n.rounding : se(r, 0, 8), !t.d) return e.s ? t : e;
        if (!e.d) return e.s && (e.s = t.s), e;
      }
      return e.d[0] ? (x = false, t = O(t, e, 0, r, 1).times(e), x = true, y(t)) : (e.s = t.s, t = e), t;
    };
    d.toNumber = function() {
      return +this;
    };
    d.toOctal = function(e, r) {
      return Ci(this, 8, e, r);
    };
    d.toPower = d.pow = function(e) {
      var r, t, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(Q(+a, u));
      if (a = new l(a), a.eq(1)) return a;
      if (n = l.precision, o = l.rounding, e.eq(1)) return y(a, n, o);
      if (r = re(e.e / b), r >= e.d.length - 1 && (t = u < 0 ? -u : u) <= ac) return i = xs(l, a, t, n), e.s < 0 ? new l(1).div(i) : y(i, n, o);
      if (s = a.s, s < 0) {
        if (r < e.d.length - 1) return new l(NaN);
        if (e.d[r] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
      }
      return t = Q(+a, u), r = t == 0 || !isFinite(t) ? re(u * (Math.log("0." + z(a.d)) / Math.LN10 + a.e + 1)) : new l(t + "").e, r > l.maxE + 1 || r < l.minE - 1 ? new l(r > 0 ? s / 0 : 0) : (x = false, l.rounding = a.s = 1, t = Math.min(12, (r + "").length), i = vi(e.times(Qe(a, n + t)), n), i.d && (i = y(i, n + 5, 1), tt(i.d, n, o) && (r = n + 10, i = y(vi(e.times(Qe(a, r + t)), r), r + 5, 1), +z(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = y(i, n + 1, 0)))), i.s = s, x = true, l.rounding = o, y(i, n, o));
    };
    d.toPrecision = function(e, r) {
      var t, n = this, i = n.constructor;
      return e === void 0 ? t = ve(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (se(e, 1, Je), r === void 0 ? r = i.rounding : se(r, 0, 8), n = y(new i(n), e, r), t = ve(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
    };
    d.toSignificantDigits = d.toSD = function(e, r) {
      var t = this, n = t.constructor;
      return e === void 0 ? (e = n.precision, r = n.rounding) : (se(e, 1, Je), r === void 0 ? r = n.rounding : se(r, 0, 8)), y(new n(t), e, r);
    };
    d.toString = function() {
      var e = this, r = e.constructor, t = ve(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + t : t;
    };
    d.truncated = d.trunc = function() {
      return y(new this.constructor(this), this.e + 1, 1);
    };
    d.valueOf = d.toJSON = function() {
      var e = this, r = e.constructor, t = ve(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
      return e.isNeg() ? "-" + t : t;
    };
    function z(e) {
      var r, t, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, r = 1; r < i; r++) n = e[r] + "", t = b - n.length, t && (o += Ue(t)), o += n;
        s = e[r], n = s + "", t = b - n.length, t && (o += Ue(t));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    function se(e, r, t) {
      if (e !== ~~e || e < r || e > t) throw Error(Ge + e);
    }
    function tt(e, r, t, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10) --r;
      return --r < 0 ? (r += b, i = 0) : (i = Math.ceil((r + 1) / b), r %= b), o = Q(10, b - r), a = e[i] % o | 0, n == null ? r < 3 ? (r == 0 ? a = a / 100 | 0 : r == 1 && (a = a / 10 | 0), s = t < 4 && a == 99999 || t > 3 && a == 49999 || a == 5e4 || a == 0) : s = (t < 4 && a + 1 == o || t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == Q(10, r - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? a = a / 1e3 | 0 : r == 1 ? a = a / 100 | 0 : r == 2 && (a = a / 10 | 0), s = (n || t < 4) && a == 9999 || !n && t > 3 && a == 4999) : s = ((n || t < 4) && a + 1 == o || !n && t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == Q(10, r - 3) - 1, s;
    }
    function Kt(e, r, t) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; ) i[o] *= r;
        for (i[0] += wi.indexOf(e.charAt(s++)), n = 0; n < i.length; n++) i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
      }
      return i.reverse();
    }
    function uc(e, r) {
      var t, n, i;
      if (r.isZero()) return r;
      n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / rn(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e.precision += t, r = Pr(e, 1, r.times(i), new e(1));
      for (var o = t; o--; ) {
        var s = r.times(r);
        r = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= t, r;
    }
    var O = /* @__PURE__ */ function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; ) s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      function r(n, i, o, s) {
        var a, l;
        if (o != s) l = o > s ? 1 : -1;
        else for (a = l = 0; a < o; a++) if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
        return l;
      }
      function t(n, i, o, s) {
        for (var a = 0; o--; ) n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; ) n.shift();
      }
      return function(n, i, o, s, a, l) {
        var u, c, p, m, f, g, h, A, T, C, E, I, me, le, Nr, U, ie, Ae, Y, pr, Ct = n.constructor, _n = n.s == i.s ? 1 : -1, Z = n.d, L = i.d;
        if (!Z || !Z[0] || !L || !L[0]) return new Ct(!n.s || !i.s || (Z ? L && Z[0] == L[0] : !L) ? NaN : Z && Z[0] == 0 || !L ? _n * 0 : _n / 0);
        for (l ? (f = 1, c = n.e - i.e) : (l = he, f = b, c = re(n.e / f) - re(i.e / f)), Y = L.length, ie = Z.length, T = new Ct(_n), C = T.d = [], p = 0; L[p] == (Z[p] || 0); p++) ;
        if (L[p] > (Z[p] || 0) && c--, o == null ? (le = o = Ct.precision, s = Ct.rounding) : a ? le = o + (n.e - i.e) + 1 : le = o, le < 0) C.push(1), g = true;
        else {
          if (le = le / f + 2 | 0, p = 0, Y == 1) {
            for (m = 0, L = L[0], le++; (p < ie || m) && le--; p++) Nr = m * l + (Z[p] || 0), C[p] = Nr / L | 0, m = Nr % L | 0;
            g = m || p < ie;
          } else {
            for (m = l / (L[0] + 1) | 0, m > 1 && (L = e(L, m, l), Z = e(Z, m, l), Y = L.length, ie = Z.length), U = Y, E = Z.slice(0, Y), I = E.length; I < Y; ) E[I++] = 0;
            pr = L.slice(), pr.unshift(0), Ae = L[0], L[1] >= l / 2 && ++Ae;
            do
              m = 0, u = r(L, E, Y, I), u < 0 ? (me = E[0], Y != I && (me = me * l + (E[1] || 0)), m = me / Ae | 0, m > 1 ? (m >= l && (m = l - 1), h = e(L, m, l), A = h.length, I = E.length, u = r(h, E, A, I), u == 1 && (m--, t(h, Y < A ? pr : L, A, l))) : (m == 0 && (u = m = 1), h = L.slice()), A = h.length, A < I && h.unshift(0), t(E, h, I, l), u == -1 && (I = E.length, u = r(L, E, Y, I), u < 1 && (m++, t(E, Y < I ? pr : L, I, l))), I = E.length) : u === 0 && (m++, E = [0]), C[p++] = m, u && E[0] ? E[I++] = Z[U] || 0 : (E = [Z[U]], I = 1);
            while ((U++ < ie || E[0] !== void 0) && le--);
            g = E[0] !== void 0;
          }
          C[0] || C.shift();
        }
        if (f == 1) T.e = c, gs = g;
        else {
          for (p = 1, m = C[0]; m >= 10; m /= 10) p++;
          T.e = p + c * f - 1, y(T, a ? o + T.e + 1 : o, s, g);
        }
        return T;
      };
    }();
    function y(e, r, t, n) {
      var i, o, s, a, l, u, c, p, m, f = e.constructor;
      e: if (r != null) {
        if (p = e.d, !p) return e;
        for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
        if (o = r - i, o < 0) o += b, s = r, c = p[m = 0], l = c / Q(10, i - s - 1) % 10 | 0;
        else if (m = Math.ceil((o + 1) / b), a = p.length, m >= a) if (n) {
          for (; a++ <= m; ) p.push(0);
          c = l = 0, i = 1, o %= b, s = o - b + 1;
        } else break e;
        else {
          for (c = a = p[m], i = 1; a >= 10; a /= 10) i++;
          o %= b, s = o - b + i, l = s < 0 ? 0 : c / Q(10, i - s - 1) % 10 | 0;
        }
        if (n = n || r < 0 || p[m + 1] !== void 0 || (s < 0 ? c : c % Q(10, i - s - 1)), u = t < 4 ? (l || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (t == 4 || n || t == 6 && (o > 0 ? s > 0 ? c / Q(10, i - s) : 0 : p[m - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !p[0]) return p.length = 0, u ? (r -= e.e + 1, p[0] = Q(10, (b - r % b) % b), e.e = -r || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = m, a = 1, m--) : (p.length = m + 1, a = Q(10, b - o), p[m] = s > 0 ? (c / Q(10, i - s) % Q(10, s) | 0) * a : 0), u) for (; ; ) if (m == 0) {
          for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
          for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, p[0] == he && (p[0] = 1));
          break;
        } else {
          if (p[m] += a, p[m] != he) break;
          p[m--] = 0, a = 1;
        }
        for (o = p.length; p[--o] === 0; ) p.pop();
      }
      return x && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
    }
    function ve(e, r, t) {
      if (!e.isFinite()) return vs(e);
      var n, i = e.e, o = z(e.d), s = o.length;
      return r ? (t && (n = t - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Ue(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Ue(-i - 1) + o, t && (n = t - s) > 0 && (o += Ue(n))) : i >= s ? (o += Ue(i + 1 - s), t && (n = t - i - 1) > 0 && (o = o + "." + Ue(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - s) > 0 && (i + 1 === s && (o += "."), o += Ue(n))), o;
    }
    function en(e, r) {
      var t = e[0];
      for (r *= b; t >= 10; t /= 10) r++;
      return r;
    }
    function Zt(e, r, t) {
      if (r > lc) throw x = true, t && (e.precision = t), Error(hs);
      return y(new e(zt), r, 1, true);
    }
    function ge(e, r, t) {
      if (r > Pi) throw Error(hs);
      return y(new e(Yt), r, t, true);
    }
    function ws(e) {
      var r = e.length - 1, t = r * b + 1;
      if (r = e[r], r) {
        for (; r % 10 == 0; r /= 10) t--;
        for (r = e[0]; r >= 10; r /= 10) t++;
      }
      return t;
    }
    function Ue(e) {
      for (var r = ""; e--; ) r += "0";
      return r;
    }
    function xs(e, r, t, n) {
      var i, o = new e(1), s = Math.ceil(n / b + 4);
      for (x = false; ; ) {
        if (t % 2 && (o = o.times(r), ds(o.d, s) && (i = true)), t = re(t / 2), t === 0) {
          t = o.d.length - 1, i && o.d[t] === 0 && ++o.d[t];
          break;
        }
        r = r.times(r), ds(r.d, s);
      }
      return x = true, o;
    }
    function ms(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function Ps(e, r, t) {
      for (var n, i = new e(r[0]), o = 0; ++o < r.length; ) if (n = new e(r[o]), n.s) i[t](n) && (i = n);
      else {
        i = n;
        break;
      }
      return i;
    }
    function vi(e, r) {
      var t, n, i, o, s, a, l, u = 0, c = 0, p = 0, m = e.constructor, f = m.rounding, g = m.precision;
      if (!e.d || !e.d[0] || e.e > 17) return new m(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (r == null ? (x = false, l = g) : l = r, a = new m(0.03125); e.e > -2; ) e = e.times(a), p += 5;
      for (n = Math.log(Q(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, t = o = s = new m(1), m.precision = l; ; ) {
        if (o = y(o.times(e), l, 1), t = t.times(++c), a = s.plus(O(o, t, l, 1)), z(a.d).slice(0, l) === z(s.d).slice(0, l)) {
          for (i = p; i--; ) s = y(s.times(s), l, 1);
          if (r == null) if (u < 3 && tt(s.d, l - n, f, u)) m.precision = l += 10, t = o = a = new m(1), c = 0, u++;
          else return y(s, m.precision = g, f, x = true);
          else return m.precision = g, s;
        }
        s = a;
      }
    }
    function Qe(e, r) {
      var t, n, i, o, s, a, l, u, c, p, m, f = 1, g = 10, h = e, A = h.d, T = h.constructor, C = T.rounding, E = T.precision;
      if (h.s < 0 || !A || !A[0] || !h.e && A[0] == 1 && A.length == 1) return new T(A && !A[0] ? -1 / 0 : h.s != 1 ? NaN : A ? 0 : h);
      if (r == null ? (x = false, c = E) : c = r, T.precision = c += g, t = z(A), n = t.charAt(0), Math.abs(o = h.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; ) h = h.times(e), t = z(h.d), n = t.charAt(0), f++;
        o = h.e, n > 1 ? (h = new T("0." + t), o++) : h = new T(n + "." + t.slice(1));
      } else return u = Zt(T, c + 2, E).times(o + ""), h = Qe(new T(n + "." + t.slice(1)), c - g).plus(u), T.precision = E, r == null ? y(h, E, C, x = true) : h;
      for (p = h, l = s = h = O(h.minus(1), h.plus(1), c, 1), m = y(h.times(h), c, 1), i = 3; ; ) {
        if (s = y(s.times(m), c, 1), u = l.plus(O(s, new T(i), c, 1)), z(u.d).slice(0, c) === z(l.d).slice(0, c)) if (l = l.times(2), o !== 0 && (l = l.plus(Zt(T, c + 2, E).times(o + ""))), l = O(l, new T(f), c, 1), r == null) if (tt(l.d, c - g, C, a)) T.precision = c += g, u = s = h = O(p.minus(1), p.plus(1), c, 1), m = y(h.times(h), c, 1), i = a = 1;
        else return y(l, T.precision = E, C, x = true);
        else return T.precision = E, l;
        l = u, i += 2;
      }
    }
    function vs(e) {
      return String(e.s * e.s / 0);
    }
    function Ti(e, r) {
      var t, n, i;
      for ((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), n = 0; r.charCodeAt(n) === 48; n++) ;
      for (i = r.length; r.charCodeAt(i - 1) === 48; --i) ;
      if (r = r.slice(n, i), r) {
        if (i -= n, e.e = t = t - n - 1, e.d = [], n = (t + 1) % b, t < 0 && (n += b), n < i) {
          for (n && e.d.push(+r.slice(0, n)), i -= b; n < i; ) e.d.push(+r.slice(n, n += b));
          r = r.slice(n), n = b - r.length;
        } else n -= i;
        for (; n--; ) r += "0";
        e.d.push(+r), x && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else e.e = 0, e.d = [0];
      return e;
    }
    function cc(e, r) {
      var t, n, i, o, s, a, l, u, c;
      if (r.indexOf("_") > -1) {
        if (r = r.replace(/(\d)_(?=\d)/g, "$1"), bs.test(r)) return Ti(e, r);
      } else if (r === "Infinity" || r === "NaN") return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (oc.test(r)) t = 16, r = r.toLowerCase();
      else if (ic.test(r)) t = 2;
      else if (sc.test(r)) t = 8;
      else throw Error(Ge + r);
      for (o = r.search(/p/i), o > 0 ? (l = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), s = o >= 0, n = e.constructor, s && (r = r.replace(".", ""), a = r.length, o = a - o, i = xs(n, new n(t), o, o * 2)), u = Kt(r, t, he), c = u.length - 1, o = c; u[o] === 0; --o) u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = en(u, c), e.d = u, x = false, s && (e = O(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? Q(2, l) : or.pow(2, l))), x = true, e);
    }
    function pc(e, r) {
      var t, n = r.d.length;
      if (n < 3) return r.isZero() ? r : Pr(e, 2, r, r);
      t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / rn(5, t)), r = Pr(e, 2, r, r);
      for (var i, o = new e(5), s = new e(16), a = new e(20); t--; ) i = r.times(r), r = r.times(o.plus(i.times(s.times(i).minus(a))));
      return r;
    }
    function Pr(e, r, t, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / b);
      for (x = false, l = t.times(t), a = new e(n); ; ) {
        if (s = O(a.times(l), new e(r++ * r++), c, 1), a = i ? n.plus(s) : n.minus(s), n = O(s.times(l), new e(r++ * r++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; ) ;
          if (o == -1) break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return x = true, s.d.length = p + 1, s;
    }
    function rn(e, r) {
      for (var t = e; --r; ) t *= e;
      return t;
    }
    function Ts(e, r) {
      var t, n = r.s < 0, i = ge(e, e.precision, 1), o = i.times(0.5);
      if (r = r.abs(), r.lte(o)) return Oe = n ? 4 : 1, r;
      if (t = r.divToInt(i), t.isZero()) Oe = n ? 3 : 2;
      else {
        if (r = r.minus(t.times(i)), r.lte(o)) return Oe = ms(t) ? n ? 2 : 3 : n ? 4 : 1, r;
        Oe = ms(t) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return r.minus(i).abs();
    }
    function Ci(e, r, t, n) {
      var i, o, s, a, l, u, c, p, m, f = e.constructor, g = t !== void 0;
      if (g ? (se(t, 1, Je), n === void 0 ? n = f.rounding : se(n, 0, 8)) : (t = f.precision, n = f.rounding), !e.isFinite()) c = vs(e);
      else {
        for (c = ve(e), s = c.indexOf("."), g ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, s >= 0 && (c = c.replace(".", ""), m = new f(1), m.e = c.length - s, m.d = Kt(ve(m), 10, i), m.e = m.d.length), p = Kt(c, 10, i), o = l = p.length; p[--l] == 0; ) p.pop();
        if (!p[0]) c = g ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = O(e, m, t, n, 0, i), p = e.d, o = e.e, u = gs), s = p[t], a = i / 2, u = u || p[t + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = t, u) for (; ++p[--t] > i - 1; ) p[t] = 0, t || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l) ;
          for (s = 0, c = ""; s < l; s++) c += wi.charAt(p[s]);
          if (g) {
            if (l > 1) if (r == 16 || r == 8) {
              for (s = r == 16 ? 4 : 3, --l; l % s; l++) c += "0";
              for (p = Kt(c, i, r), l = p.length; !p[l - 1]; --l) ;
              for (s = 1, c = "1."; s < l; s++) c += wi.charAt(p[s]);
            } else c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; ) c = "0" + c;
            c = "0." + c;
          } else if (++o > l) for (o -= l; o--; ) c += "0";
          else o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    function ds(e, r) {
      if (e.length > r) return e.length = r, true;
    }
    function mc(e) {
      return new this(e).abs();
    }
    function dc(e) {
      return new this(e).acos();
    }
    function fc(e) {
      return new this(e).acosh();
    }
    function gc(e, r) {
      return new this(e).plus(r);
    }
    function hc(e) {
      return new this(e).asin();
    }
    function yc(e) {
      return new this(e).asinh();
    }
    function Ec(e) {
      return new this(e).atan();
    }
    function bc(e) {
      return new this(e).atanh();
    }
    function wc(e, r) {
      e = new this(e), r = new this(r);
      var t, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !r.s ? t = new this(NaN) : !e.d && !r.d ? (t = ge(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), t.s = e.s) : !r.d || e.isZero() ? (t = r.s < 0 ? ge(this, n, i) : new this(0), t.s = e.s) : !e.d || r.isZero() ? (t = ge(this, o, 1).times(0.5), t.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, t = this.atan(O(e, r, o, 1)), r = ge(this, o, 1), this.precision = n, this.rounding = i, t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(O(e, r, o, 1)), t;
    }
    function xc(e) {
      return new this(e).cbrt();
    }
    function Pc(e) {
      return y(e = new this(e), e.e + 1, 2);
    }
    function vc(e, r, t) {
      return new this(e).clamp(r, t);
    }
    function Tc(e) {
      if (!e || typeof e != "object") throw Error(Xt + "Object expected");
      var r, t, n, i = e.defaults === true, o = ["precision", 1, Je, "rounding", 0, 8, "toExpNeg", -xr, 0, "toExpPos", 0, xr, "maxE", 0, xr, "minE", -xr, 0, "modulo", 0, 9];
      for (r = 0; r < o.length; r += 3) if (t = o[r], i && (this[t] = xi[t]), (n = e[t]) !== void 0) if (re(n) === n && n >= o[r + 1] && n <= o[r + 2]) this[t] = n;
      else throw Error(Ge + t + ": " + n);
      if (t = "crypto", i && (this[t] = xi[t]), (n = e[t]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = true;
      else throw Error(ys);
      else this[t] = false;
      else throw Error(Ge + t + ": " + n);
      return this;
    }
    function Cc(e) {
      return new this(e).cos();
    }
    function Rc(e) {
      return new this(e).cosh();
    }
    function Cs(e) {
      var r, t, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i)) return new i(o);
        if (u.constructor = i, fs(o)) {
          u.s = o.s, x ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10) s++;
            x ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return Ti(u, o.toString());
        } else if (l !== "string") throw Error(Ge + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), bs.test(o) ? Ti(u, o) : cc(u, o);
      }
      if (i.prototype = d, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Tc, i.clone = Cs, i.isDecimal = fs, i.abs = mc, i.acos = dc, i.acosh = fc, i.add = gc, i.asin = hc, i.asinh = yc, i.atan = Ec, i.atanh = bc, i.atan2 = wc, i.cbrt = xc, i.ceil = Pc, i.clamp = vc, i.cos = Cc, i.cosh = Rc, i.div = Sc, i.exp = Ac, i.floor = Ic, i.hypot = _c, i.ln = kc, i.log = Dc, i.log10 = Nc, i.log2 = Lc, i.max = Oc, i.min = Fc, i.mod = Mc, i.mul = $c, i.pow = qc, i.random = Bc, i.round = Vc, i.sign = jc, i.sin = Uc, i.sinh = Qc, i.sqrt = Gc, i.sub = Jc, i.sum = Hc, i.tan = Wc, i.tanh = Kc, i.trunc = zc, e === void 0 && (e = {}), e && e.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length; ) e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
      return i.config(e), i;
    }
    function Sc(e, r) {
      return new this(e).div(r);
    }
    function Ac(e) {
      return new this(e).exp();
    }
    function Ic(e) {
      return y(e = new this(e), e.e + 1, 3);
    }
    function _c() {
      var e, r, t = new this(0);
      for (x = false, e = 0; e < arguments.length; ) if (r = new this(arguments[e++]), r.d) t.d && (t = t.plus(r.times(r)));
      else {
        if (r.s) return x = true, new this(1 / 0);
        t = r;
      }
      return x = true, t.sqrt();
    }
    function fs(e) {
      return e instanceof or || e && e.toStringTag === Es || false;
    }
    function kc(e) {
      return new this(e).ln();
    }
    function Dc(e, r) {
      return new this(e).log(r);
    }
    function Lc(e) {
      return new this(e).log(2);
    }
    function Nc(e) {
      return new this(e).log(10);
    }
    function Oc() {
      return Ps(this, arguments, "lt");
    }
    function Fc() {
      return Ps(this, arguments, "gt");
    }
    function Mc(e, r) {
      return new this(e).mod(r);
    }
    function $c(e, r) {
      return new this(e).mul(r);
    }
    function qc(e, r) {
      return new this(e).pow(r);
    }
    function Bc(e) {
      var r, t, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : se(e, 1, Je), n = Math.ceil(e / b), this.crypto) if (crypto.getRandomValues) for (r = crypto.getRandomValues(new Uint32Array(n)); o < n; ) i = r[o], i >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (r = crypto.randomBytes(n *= 4); o < n; ) i = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else throw Error(ys);
      else for (; o < n; ) a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= b, n && e && (i = Q(10, b - e), a[o] = (n / i | 0) * i); a[o] === 0; o--) a.pop();
      if (o < 0) t = 0, a = [0];
      else {
        for (t = -1; a[0] === 0; t -= b) a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
        n < b && (t -= b - n);
      }
      return s.e = t, s.d = a, s;
    }
    function Vc(e) {
      return y(e = new this(e), e.e + 1, this.rounding);
    }
    function jc(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function Uc(e) {
      return new this(e).sin();
    }
    function Qc(e) {
      return new this(e).sinh();
    }
    function Gc(e) {
      return new this(e).sqrt();
    }
    function Jc(e, r) {
      return new this(e).sub(r);
    }
    function Hc() {
      var e = 0, r = arguments, t = new this(r[e]);
      for (x = false; t.s && ++e < r.length; ) t = t.plus(r[e]);
      return x = true, y(t, this.precision, this.rounding);
    }
    function Wc(e) {
      return new this(e).tan();
    }
    function Kc(e) {
      return new this(e).tanh();
    }
    function zc(e) {
      return y(e = new this(e), e.e + 1, 1);
    }
    d[Symbol.for("nodejs.util.inspect.custom")] = d.toString;
    d[Symbol.toStringTag] = "Decimal";
    var or = d.constructor = Cs(xi);
    zt = new or(zt);
    Yt = new or(Yt);
    var Te = or;
    function vr(e) {
      return or.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    var nt = class {
      constructor(r, t, n, i, o) {
        this.modelName = r, this.name = t, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let r = this.isList ? "List" : "", t = this.isEnum ? "Enum" : "";
        return `${r}${t}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function Tr(e) {
      return e instanceof nt;
    }
    var tn = class {
      constructor(r) {
        this.value = r;
      }
      write(r) {
        r.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var nn = (e) => e;
    var on = { bold: nn, red: nn, green: nn, dim: nn, enabled: false };
    var Rs = { bold: W, red: ce, green: $e, dim: Ie, enabled: true };
    var Cr = { write(e) {
      e.writeLine(",");
    } };
    var Ce = class {
      constructor(r) {
        this.contents = r;
        this.isUnderlined = false;
        this.color = (r2) => r2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(r) {
        return this.color = r, this;
      }
      write(r) {
        let t = r.getCurrentLineLength();
        r.write(this.color(this.contents)), this.isUnderlined && r.afterNextNewline(() => {
          r.write(" ".repeat(t)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var He = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var Rr = class extends He {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(t) {
        return this.items.push(new tn(t)), this;
      }
      getField(t) {
        return this.items[t];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(t) {
        if (this.items.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithItems(t);
      }
      writeEmpty(t) {
        let n = new Ce("[]");
        this.hasError && n.setColor(t.context.colors.red).underline(), t.write(n);
      }
      writeWithItems(t) {
        let { colors: n } = t.context;
        t.writeLine("[").withIndent(() => t.writeJoined(Cr, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var Ss = ": ";
    var sn = class {
      constructor(r, t) {
        this.name = r;
        this.value = t;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Ss.length;
      }
      write(r) {
        let t = new Ce(this.name);
        this.hasError && t.underline().setColor(r.context.colors.red), r.write(t).write(Ss).write(this.value);
      }
    };
    var J = class e extends He {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(t) {
        this.fields[t.name] = t;
      }
      addSuggestion(t) {
        this.suggestions.push(t);
      }
      getField(t) {
        return this.fields[t];
      }
      getDeepField(t) {
        let [n, ...i] = t, o = this.getField(n);
        if (!o) return;
        let s = o;
        for (let a of i) {
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof Rr && (l = s.value.getField(Number(a))), !l) return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(t) {
        return t.length === 0 ? this : this.getDeepField(t)?.value;
      }
      hasField(t) {
        return !!this.getField(t);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(t) {
        delete this.fields[t];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(t) {
        return this.getField(t)?.value;
      }
      getDeepSubSelectionValue(t) {
        let n = this;
        for (let i of t) {
          if (!(n instanceof e)) return;
          let o = n.getSubSelectionValue(i);
          if (!o) return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(t) {
        let n = this.getSelectionParent();
        if (!n) return;
        let i = n;
        for (let o of t) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e)) return;
          let a = s.getSelectionParent();
          if (!a) return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let t = this.getField("select");
        if (t?.value instanceof e) return { kind: "select", value: t.value };
        let n = this.getField("include");
        if (n?.value instanceof e) return { kind: "include", value: n.value };
      }
      getSubSelectionValue(t) {
        return this.getSelectionParent()?.value.fields[t].value;
      }
      getPrintWidth() {
        let t = Object.values(this.fields);
        return t.length == 0 ? 2 : Math.max(...t.map((i) => i.getPrintWidth())) + 2;
      }
      write(t) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithContents(t, n);
      }
      writeEmpty(t) {
        let n = new Ce("{}");
        this.hasError && n.setColor(t.context.colors.red).underline(), t.write(n);
      }
      writeWithContents(t, n) {
        t.writeLine("{").withIndent(() => {
          t.writeJoined(Cr, [...n, ...this.suggestions]).newLine();
        }), t.write("}"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var H = class extends He {
      constructor(t) {
        super();
        this.text = t;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(t) {
        let n = new Ce(this.text);
        this.hasError && n.underline().setColor(t.context.colors.red), t.write(n);
      }
    };
    var Ri = class {
      constructor(r) {
        this.errorMessages = [];
        this.arguments = r;
      }
      write(r) {
        r.write(this.arguments);
      }
      addErrorMessage(r) {
        this.errorMessages.push(r);
      }
      renderAllMessages(r) {
        return this.errorMessages.map((t) => t(r)).join(`
`);
      }
    };
    function an(e) {
      return new Ri(As(e));
    }
    function As(e) {
      let r = new J();
      for (let [t, n] of Object.entries(e)) {
        let i = new sn(t, Is(n));
        r.addField(i);
      }
      return r;
    }
    function Is(e) {
      if (typeof e == "string") return new H(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new H(String(e));
      if (typeof e == "bigint") return new H(`${e}n`);
      if (e === null) return new H("null");
      if (e === void 0) return new H("undefined");
      if (vr(e)) return new H(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new H(`Buffer.alloc(${e.byteLength})`) : new H(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let r = Wt(e) ? e.toISOString() : "Invalid Date";
        return new H(`new Date("${r}")`);
      }
      return e instanceof Ne ? new H(`Prisma.${e._getName()}`) : Tr(e) ? new H(`prisma.${ps(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Zc(e) : typeof e == "object" ? As(e) : new H(Object.prototype.toString.call(e));
    }
    function Zc(e) {
      let r = new Rr();
      for (let t of e) r.addItem(Is(t));
      return r;
    }
    function _s(e) {
      if (e === void 0) return "";
      let r = an(e);
      return new br(0, { colors: on }).write(r).toString();
    }
    var Xc = "P2037";
    function sr({ error: e, user_facing_error: r }, t, n) {
      return r.error_code ? new V(ep(r, n), { code: r.error_code, clientVersion: t, meta: r.meta, batchRequestIdx: r.batch_request_idx }) : new j(e, { clientVersion: t, batchRequestIdx: r.batch_request_idx });
    }
    function ep(e, r) {
      let t = e.message;
      return (r === "postgresql" || r === "postgres" || r === "mysql") && e.error_code === Xc && (t += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), t;
    }
    var it = "<unknown>";
    function ks(e) {
      var r = e.split(`
`);
      return r.reduce(function(t, n) {
        var i = np(n) || op(n) || lp(n) || mp(n) || cp(n);
        return i && t.push(i), t;
      }, []);
    }
    var rp = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var tp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function np(e) {
      var r = rp.exec(e);
      if (!r) return null;
      var t = r[2] && r[2].indexOf("native") === 0, n = r[2] && r[2].indexOf("eval") === 0, i = tp.exec(r[2]);
      return n && i != null && (r[2] = i[1], r[3] = i[2], r[4] = i[3]), { file: t ? null : r[2], methodName: r[1] || it, arguments: t ? [r[2]] : [], lineNumber: r[3] ? +r[3] : null, column: r[4] ? +r[4] : null };
    }
    var ip = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function op(e) {
      var r = ip.exec(e);
      return r ? { file: r[2], methodName: r[1] || it, arguments: [], lineNumber: +r[3], column: r[4] ? +r[4] : null } : null;
    }
    var sp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var ap = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function lp(e) {
      var r = sp.exec(e);
      if (!r) return null;
      var t = r[3] && r[3].indexOf(" > eval") > -1, n = ap.exec(r[3]);
      return t && n != null && (r[3] = n[1], r[4] = n[2], r[5] = null), { file: r[3], methodName: r[1] || it, arguments: r[2] ? r[2].split(",") : [], lineNumber: r[4] ? +r[4] : null, column: r[5] ? +r[5] : null };
    }
    var up = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function cp(e) {
      var r = up.exec(e);
      return r ? { file: r[3], methodName: r[1] || it, arguments: [], lineNumber: +r[4], column: r[5] ? +r[5] : null } : null;
    }
    var pp = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function mp(e) {
      var r = pp.exec(e);
      return r ? { file: r[2], methodName: r[1] || it, arguments: [], lineNumber: +r[3], column: r[4] ? +r[4] : null } : null;
    }
    var Si = class {
      getLocation() {
        return null;
      }
    };
    var Ai = class {
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let r = this._error.stack;
        if (!r) return null;
        let n = ks(r).find((i) => {
          if (!i.file) return false;
          let o = ii(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function We(e) {
      return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new Si() : new Ai();
    }
    var Ds = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function Sr(e = {}) {
      let r = fp(e);
      return Object.entries(r).reduce((n, [i, o]) => (Ds[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function fp(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    function ln(e = {}) {
      return (r) => (typeof e._count == "boolean" && (r._count = r._count._all), r);
    }
    function Ls(e, r) {
      let t = ln(e);
      return r({ action: "aggregate", unpacker: t, argsMapper: Sr })(e);
    }
    function gp(e = {}) {
      let { select: r, ...t } = e;
      return typeof r == "object" ? Sr({ ...t, _count: r }) : Sr({ ...t, _count: { _all: true } });
    }
    function hp(e = {}) {
      return typeof e.select == "object" ? (r) => ln(e)(r)._count : (r) => ln(e)(r)._count._all;
    }
    function Ns(e, r) {
      return r({ action: "count", unpacker: hp(e), argsMapper: gp })(e);
    }
    function yp(e = {}) {
      let r = Sr(e);
      if (Array.isArray(r.by)) for (let t of r.by) typeof t == "string" && (r.select[t] = true);
      else typeof r.by == "string" && (r.select[r.by] = true);
      return r;
    }
    function Ep(e = {}) {
      return (r) => (typeof e?._count == "boolean" && r.forEach((t) => {
        t._count = t._count._all;
      }), r);
    }
    function Os(e, r) {
      return r({ action: "groupBy", unpacker: Ep(e), argsMapper: yp })(e);
    }
    function Fs(e, r, t) {
      if (r === "aggregate") return (n) => Ls(n, t);
      if (r === "count") return (n) => Ns(n, t);
      if (r === "groupBy") return (n) => Os(n, t);
    }
    function Ms(e, r) {
      let t = r.fields.filter((i) => !i.relationName), n = pi(t, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new nt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...Ht(Object.keys(n)) });
    }
    var $s = (e) => Array.isArray(e) ? e : e.split(".");
    var Ii = (e, r) => $s(r).reduce((t, n) => t && t[n], e);
    var qs = (e, r, t) => $s(r).reduceRight((n, i, o, s) => Object.assign({}, Ii(e, s.slice(0, o)), { [i]: n }), t);
    function bp(e, r) {
      return e === void 0 || r === void 0 ? [] : [...r, "select", e];
    }
    function wp(e, r, t) {
      return r === void 0 ? e ?? {} : qs(r, t, e || true);
    }
    function _i(e, r, t, n, i, o) {
      let a = e._runtimeDataModel.models[r].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
      return (l) => {
        let u = We(e._errorFormat), c = bp(n, i), p = wp(l, o, c), m = t({ dataPath: c, callsite: u })(p), f = xp(e, r);
        return new Proxy(m, { get(g, h) {
          if (!f.includes(h)) return g[h];
          let T = [a[h].type, t, h], C = [c, p];
          return _i(e, ...T, ...C);
        }, ...Ht([...f, ...Object.getOwnPropertyNames(m)]) });
      };
    }
    function xp(e, r) {
      return e._runtimeDataModel.models[r].fields.filter((t) => t.kind === "object").map((t) => t.name);
    }
    var Gs = _(oi());
    var Qs = _(require("fs"));
    var Bs = { keyword: _e, entity: _e, value: (e) => W(Ze(e)), punctuation: Ze, directive: _e, function: _e, variable: (e) => W(Ze(e)), string: (e) => W($e(e)), boolean: de, number: _e, comment: Fr };
    var Pp = (e) => e;
    var un = {};
    var vp = 0;
    var P = { manual: un.Prism && un.Prism.manual, disableWorkerMessageHandler: un.Prism && un.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof ye) {
        let r = e;
        return new ye(r.type, P.util.encode(r.content), r.alias);
      } else return Array.isArray(e) ? e.map(P.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++vp }), e.__id;
    }, clone: function e(r, t) {
      let n, i, o = P.util.type(r);
      switch (t = t || {}, o) {
        case "Object":
          if (i = P.util.objId(r), t[i]) return t[i];
          n = {}, t[i] = n;
          for (let s in r) r.hasOwnProperty(s) && (n[s] = e(r[s], t));
          return n;
        case "Array":
          return i = P.util.objId(r), t[i] ? t[i] : (n = [], t[i] = n, r.forEach(function(s, a) {
            n[a] = e(s, t);
          }), n);
        default:
          return r;
      }
    } }, languages: { extend: function(e, r) {
      let t = P.util.clone(P.languages[e]);
      for (let n in r) t[n] = r[n];
      return t;
    }, insertBefore: function(e, r, t, n) {
      n = n || P.languages;
      let i = n[e], o = {};
      for (let a in i) if (i.hasOwnProperty(a)) {
        if (a == r) for (let l in t) t.hasOwnProperty(l) && (o[l] = t[l]);
        t.hasOwnProperty(a) || (o[a] = i[a]);
      }
      let s = n[e];
      return n[e] = o, P.languages.DFS(P.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, DFS: function e(r, t, n, i) {
      i = i || {};
      let o = P.util.objId;
      for (let s in r) if (r.hasOwnProperty(s)) {
        t.call(r, s, r[s], n || s);
        let a = r[s], l = P.util.type(a);
        l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, t, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, t, s, i));
      }
    } }, plugins: {}, highlight: function(e, r, t) {
      let n = { code: e, grammar: r, language: t };
      return P.hooks.run("before-tokenize", n), n.tokens = P.tokenize(n.code, n.grammar), P.hooks.run("after-tokenize", n), ye.stringify(P.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, r, t, n, i, o, s) {
      for (let h in t) {
        if (!t.hasOwnProperty(h) || !t[h]) continue;
        if (h == s) return;
        let A = t[h];
        A = P.util.type(A) === "Array" ? A : [A];
        for (let T = 0; T < A.length; ++T) {
          let C = A[T], E = C.inside, I = !!C.lookbehind, me = !!C.greedy, le = 0, Nr = C.alias;
          if (me && !C.pattern.global) {
            let U = C.pattern.toString().match(/[imuy]*$/)[0];
            C.pattern = RegExp(C.pattern.source, U + "g");
          }
          C = C.pattern || C;
          for (let U = n, ie = i; U < r.length; ie += r[U].length, ++U) {
            let Ae = r[U];
            if (r.length > e.length) return;
            if (Ae instanceof ye) continue;
            if (me && U != r.length - 1) {
              C.lastIndex = ie;
              var p = C.exec(e);
              if (!p) break;
              var c = p.index + (I ? p[1].length : 0), m = p.index + p[0].length, a = U, l = ie;
              for (let L = r.length; a < L && (l < m || !r[a].type && !r[a - 1].greedy); ++a) l += r[a].length, c >= l && (++U, ie = l);
              if (r[U] instanceof ye) continue;
              u = a - U, Ae = e.slice(ie, l), p.index -= ie;
            } else {
              C.lastIndex = 0;
              var p = C.exec(Ae), u = 1;
            }
            if (!p) {
              if (o) break;
              continue;
            }
            I && (le = p[1] ? p[1].length : 0);
            var c = p.index + le, p = p[0].slice(le), m = c + p.length, f = Ae.slice(0, c), g = Ae.slice(m);
            let Y = [U, u];
            f && (++U, ie += f.length, Y.push(f));
            let pr = new ye(h, E ? P.tokenize(p, E) : p, Nr, p, me);
            if (Y.push(pr), g && Y.push(g), Array.prototype.splice.apply(r, Y), u != 1 && P.matchGrammar(e, r, t, U, ie, true, h), o) break;
          }
        }
      }
    }, tokenize: function(e, r) {
      let t = [e], n = r.rest;
      if (n) {
        for (let i in n) r[i] = n[i];
        delete r.rest;
      }
      return P.matchGrammar(e, t, r, 0, 0, false), t;
    }, hooks: { all: {}, add: function(e, r) {
      let t = P.hooks.all;
      t[e] = t[e] || [], t[e].push(r);
    }, run: function(e, r) {
      let t = P.hooks.all[e];
      if (!(!t || !t.length)) for (var n = 0, i; i = t[n++]; ) i(r);
    } }, Token: ye };
    P.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    P.languages.javascript = P.languages.extend("clike", { "class-name": [P.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    P.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    P.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: P.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: P.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: P.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: P.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    P.languages.markup && P.languages.markup.tag.addInlined("script", "javascript");
    P.languages.js = P.languages.javascript;
    P.languages.typescript = P.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    P.languages.ts = P.languages.typescript;
    function ye(e, r, t, n, i) {
      this.type = e, this.content = r, this.alias = t, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    ye.stringify = function(e, r) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(t) {
        return ye.stringify(t, r);
      }).join("") : Tp(e.type)(e.content);
    };
    function Tp(e) {
      return Bs[e] || Pp;
    }
    function Vs(e) {
      return Cp(e, P.languages.javascript);
    }
    function Cp(e, r) {
      return P.tokenize(e, r).map((n) => ye.stringify(n)).join("");
    }
    var js = _(Ko());
    function Us(e) {
      return (0, js.default)(e);
    }
    var cn = class e {
      static read(r) {
        let t;
        try {
          t = Qs.default.readFileSync(r, "utf-8");
        } catch {
          return null;
        }
        return e.fromContent(t);
      }
      static fromContent(r) {
        let t = r.split(/\r?\n/);
        return new e(1, t);
      }
      constructor(r, t) {
        this.firstLineNumber = r, this.lines = t;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(r, t) {
        if (r < this.firstLineNumber || r > this.lines.length + this.firstLineNumber) return this;
        let n = r - this.firstLineNumber, i = [...this.lines];
        return i[n] = t(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(r) {
        return new e(this.firstLineNumber, this.lines.map((t, n) => r(t, this.firstLineNumber + n)));
      }
      lineAt(r) {
        return this.lines[r - this.firstLineNumber];
      }
      prependSymbolAt(r, t) {
        return this.mapLines((n, i) => i === r ? `${t} ${n}` : `  ${n}`);
      }
      slice(r, t) {
        let n = this.lines.slice(r - 1, t).join(`
`);
        return new e(r, Us(n).split(`
`));
      }
      highlight() {
        let r = Vs(this.toString());
        return new e(this.firstLineNumber, r.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var Rp = { red: ce, gray: Fr, dim: Ie, bold: W, underline: ee, highlightSource: (e) => e.highlight() };
    var Sp = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function Ap({ message: e, originalMethod: r, isPanic: t, callArguments: n }) {
      return { functionName: `prisma.${r}()`, message: e, isPanic: t ?? false, callArguments: n };
    }
    function Ip({ callsite: e, message: r, originalMethod: t, isPanic: n, callArguments: i }, o) {
      let s = Ap({ message: r, originalMethod: t, isPanic: n, callArguments: i });
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production") return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber) return s;
      let l = Math.max(1, a.lineNumber - 3), u = cn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
      if (u && c) {
        let p = kp(c), m = _p(c);
        if (!m) return s;
        s.functionName = `${m.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (g) => g.slice(0, m.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((g, h) => o.gray(String(h).padStart(f)) + " " + g).mapLines((g) => o.dim(g)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let g = p + f + 1;
          g += 2, s.callArguments = (0, Gs.default)(i, g).slice(g);
        }
      }
      return s;
    }
    function _p(e) {
      let r = Object.keys(De.ModelAction).join("|"), n = new RegExp(String.raw`\.(${r})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    function kp(e) {
      let r = 0;
      for (let t = 0; t < e.length; t++) {
        if (e.charAt(t) !== " ") return r;
        r++;
      }
      return r;
    }
    function Dp({ functionName: e, location: r, message: t, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = r ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), r && a.push(s.underline(Lp(r))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(t), a.join(`
`);
    }
    function Lp(e) {
      let r = [e.fileName];
      return e.lineNumber && r.push(String(e.lineNumber)), e.columnNumber && r.push(String(e.columnNumber)), r.join(":");
    }
    function Ar(e) {
      let r = e.showColors ? Rp : Sp, t;
      return t = Ip(e, r), Dp(t, r);
    }
    function Js(e, r, t, n) {
      return e === De.ModelAction.findFirstOrThrow || e === De.ModelAction.findUniqueOrThrow ? Np(r, t, n) : n;
    }
    function Np(e, r, t) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let o = Ar({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new K(o, { clientVersion: r });
        }
        return await t(n).catch((o) => {
          throw o instanceof V && o.code === "P2025" ? new Le(`No ${e} found`, r) : o;
        });
      };
    }
    function Re(e) {
      return e.replace(/^./, (r) => r.toLowerCase());
    }
    var Op = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Fp = ["aggregate", "count", "groupBy"];
    function ki(e, r) {
      let t = e._extensions.getAllModelExtensions(r) ?? {}, n = [Mp(e, r), qp(e, r), et(t), ne("name", () => r), ne("$name", () => r), ne("$parent", () => e._appliedParent)];
      return Pe({}, n);
    }
    function Mp(e, r) {
      let t = Re(r), n = Object.keys(De.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (l) => e._request(l);
        s = Js(o, r, e._clientVersion, s);
        let a = (l) => (u) => {
          let c = We(e._errorFormat);
          return e._createPrismaPromise((p) => {
            let m = { args: u, dataPath: [], action: o, model: r, clientMethod: `${t}.${i}`, jsModelName: t, transaction: p, callsite: c };
            return s({ ...m, ...l });
          });
        };
        return Op.includes(o) ? _i(e, r, a) : $p(i) ? Fs(e, i, a) : a({});
      } };
    }
    function $p(e) {
      return Fp.includes(e);
    }
    function qp(e, r) {
      return ir(ne("fields", () => {
        let t = e._runtimeDataModel.models[r];
        return Ms(r, t);
      }));
    }
    function Hs(e) {
      return e.replace(/^./, (r) => r.toUpperCase());
    }
    var Di = Symbol();
    function ot(e) {
      let r = [Bp(e), ne(Di, () => e), ne("$parent", () => e._appliedParent)], t = e._extensions.getAllClientExtensions();
      return t && r.push(et(t)), Pe(e, r);
    }
    function Bp(e) {
      let r = Object.keys(e._runtimeDataModel.models), t = r.map(Re), n = [...new Set(r.concat(t))];
      return ir({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Hs(i);
        if (e._runtimeDataModel.models[o] !== void 0) return ki(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return ki(e, i);
      }, getPropertyDescriptor(i) {
        if (!t.includes(i)) return { enumerable: false };
      } });
    }
    function Ws(e) {
      return e[Di] ? e[Di] : e;
    }
    function Ks(e) {
      if (typeof e == "function") return e(this);
      if (e.client?.__AccelerateEngine) {
        let t = e.client.__AccelerateEngine;
        this._originalClient._engine = new t(this._originalClient._accelerateEngineConfig);
      }
      let r = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return ot(r);
    }
    function zs({ result: e, modelName: r, select: t, extensions: n }) {
      let i = n.getAllComputedFields(r);
      if (!i) return e;
      let o = [], s = [];
      for (let a of Object.values(i)) {
        if (t) {
          if (!t[a.name]) continue;
          let l = a.needs.filter((u) => !t[u]);
          l.length > 0 && s.push(rt(l));
        }
        Vp(e, a.needs) && o.push(jp(a, Pe(e, o)));
      }
      return o.length > 0 || s.length > 0 ? Pe(e, [...o, ...s]) : e;
    }
    function Vp(e, r) {
      return r.every((t) => ci(e, t));
    }
    function jp(e, r) {
      return ir(ne(e.name, () => e.compute(r)));
    }
    function pn({ visitor: e, result: r, args: t, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(r)) {
        for (let s = 0; s < r.length; s++) r[s] = pn({ result: r[s], args: t, modelName: i, runtimeDataModel: n, visitor: e });
        return r;
      }
      let o = e(r, i, t) ?? r;
      return t.include && Ys({ includeOrSelect: t.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), t.select && Ys({ includeOrSelect: t.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function Ys({ includeOrSelect: e, result: r, parentModelName: t, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || r[o] == null) continue;
        let l = n.models[t].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName) continue;
        let u = typeof s == "object" ? s : {};
        r[o] = pn({ visitor: i, result: r[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    function Zs({ result: e, modelName: r, args: t, extensions: n, runtimeDataModel: i }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[r] ? e : pn({ result: e, args: t ?? {}, modelName: r, runtimeDataModel: i, visitor: (s, a, l) => zs({ result: s, modelName: Re(a), select: l.select, extensions: n }) });
    }
    function Xs(e) {
      if (e instanceof oe) return Up(e);
      if (Array.isArray(e)) {
        let t = [e[0]];
        for (let n = 1; n < e.length; n++) t[n] = st(e[n]);
        return t;
      }
      let r = {};
      for (let t in e) r[t] = st(e[t]);
      return r;
    }
    function Up(e) {
      return new oe(e.strings, e.values);
    }
    function st(e) {
      if (typeof e != "object" || e == null || e instanceof Ne || Tr(e)) return e;
      if (vr(e)) return new Te(e.toFixed());
      if (wr(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let r = e.length, t;
        for (t = Array(r); r--; ) t[r] = st(e[r]);
        return t;
      }
      if (typeof e == "object") {
        let r = {};
        for (let t in e) t === "__proto__" ? Object.defineProperty(r, t, { value: st(e[t]), configurable: true, enumerable: true, writable: true }) : r[t] = st(e[t]);
        return r;
      }
      tr(e, "Unknown value");
    }
    function ra(e, r, t, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = r.customDataProxyFetch;
        return "transaction" in r && i !== void 0 && (r.transaction?.kind === "batch" && r.transaction.lock.then(), r.transaction = i), n === t.length ? e._executeRequest(r) : t[n]({ model: r.model, operation: r.model ? r.action : r.clientMethod, args: Xs(r.args ?? {}), __internalParams: r, query: (s, a = r) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = oa(o, l), a.args = s, ra(e, a, t, n + 1);
        } });
      });
    }
    function ta(e, r) {
      let { jsModelName: t, action: n, clientMethod: i } = r, o = t ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(r);
      let s = e._extensions.getAllQueryCallbacks(t ?? "$none", o);
      return ra(e, r, s);
    }
    function na(e) {
      return (r) => {
        let t = { requests: r }, n = r[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? ia(t, n, 0, e) : e(t);
      };
    }
    function ia(e, r, t, n) {
      if (t === r.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return r[t]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = oa(i, l), ia(a, r, t + 1, n);
      } });
    }
    var ea = (e) => e;
    function oa(e = ea, r = ea) {
      return (t) => e(r(t));
    }
    function aa(e, r, t) {
      let n = Re(t);
      return !r.result || !(r.result.$allModels || r.result[n]) ? e : Qp({ ...e, ...sa(r.name, e, r.result.$allModels), ...sa(r.name, e, r.result[n]) });
    }
    function Qp(e) {
      let r = new xe(), t = (n, i) => r.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => t(o, i)) : [n]));
      return hr(e, (n) => ({ ...n, needs: t(n.name, /* @__PURE__ */ new Set()) }));
    }
    function sa(e, r, t) {
      return t ? hr(t, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Gp(r, o, i) })) : {};
    }
    function Gp(e, r, t) {
      let n = e?.[r]?.compute;
      return n ? (i) => t({ ...i, [r]: n(i) }) : t;
    }
    function la(e, r) {
      if (!r) return e;
      let t = { ...e };
      for (let n of Object.values(r)) if (e[n.name]) for (let i of n.needs) t[i] = true;
      return t;
    }
    var mn = class {
      constructor(r, t) {
        this.extension = r;
        this.previous = t;
        this.computedFieldsCache = new xe();
        this.modelExtensionsCache = new xe();
        this.queryCallbacksCache = new xe();
        this.clientExtensions = Wr(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = Wr(() => {
          let r2 = this.previous?.getAllBatchQueryCallbacks() ?? [], t2 = this.extension.query?.$__internalBatch;
          return t2 ? r2.concat(t2) : r2;
        });
      }
      getAllComputedFields(r) {
        return this.computedFieldsCache.getOrCreate(r, () => aa(this.previous?.getAllComputedFields(r), this.extension, r));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(r) {
        return this.modelExtensionsCache.getOrCreate(r, () => {
          let t = Re(r);
          return !this.extension.model || !(this.extension.model[t] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(r) : { ...this.previous?.getAllModelExtensions(r), ...this.extension.model.$allModels, ...this.extension.model[t] };
        });
      }
      getAllQueryCallbacks(r, t) {
        return this.queryCallbacksCache.getOrCreate(`${r}:${t}`, () => {
          let n = this.previous?.getAllQueryCallbacks(r, t) ?? [], i = [], o = this.extension.query;
          return !o || !(o[r] || o.$allModels || o[t] || o.$allOperations) ? n : (o[r] !== void 0 && (o[r][t] !== void 0 && i.push(o[r][t]), o[r].$allOperations !== void 0 && i.push(o[r].$allOperations)), r !== "$none" && o.$allModels !== void 0 && (o.$allModels[t] !== void 0 && i.push(o.$allModels[t]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[t] !== void 0 && i.push(o[t]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var dn = class e {
      constructor(r) {
        this.head = r;
      }
      static empty() {
        return new e();
      }
      static single(r) {
        return new e(new mn(r));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(r) {
        return new e(new mn(r, this.head));
      }
      getAllComputedFields(r) {
        return this.head?.getAllComputedFields(r);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(r) {
        return this.head?.getAllModelExtensions(r);
      }
      getAllQueryCallbacks(r, t) {
        return this.head?.getAllQueryCallbacks(r, t) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    var ua = N("prisma:client");
    var ca = { Vercel: "vercel", "Netlify CI": "netlify" };
    function pa({ postinstall: e, ciName: r, clientVersion: t }) {
      if (ua("checkPlatformCaching:postinstall", e), ua("checkPlatformCaching:ciName", r), e === true && r && r in ca) {
        let n = `Prisma has detected that this project was built on ${r}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ca[r]}-build`;
        throw console.error(n), new R(n, t);
      }
    }
    function ma(e, r) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [r[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    var Jp = "Cloudflare-Workers";
    var Hp = "node";
    function da() {
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Jp ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === Hp ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    var Wp = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Vercel Edge Functions or Edge Middleware" };
    function fn() {
      let e = da();
      return { id: e, prettyName: Wp[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    var Ea = _(require("fs"));
    var at = _(require("path"));
    function gn(e) {
      let { runtimeBinaryTarget: r } = e;
      return `Add "${r}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Kp(e)}`;
    }
    function Kp(e) {
      let { generator: r, generatorBinaryTargets: t, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...t, i];
      return ai({ ...r, binaryTargets: o });
    }
    function Ke(e) {
      let { runtimeBinaryTarget: r } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${r}".`;
    }
    function ze(e) {
      let { searchedLocations: r } = e;
      return `The following locations have been searched:
${[...new Set(r)].map((i) => `  ${i}`).join(`
`)}`;
    }
    function fa(e) {
      let { runtimeBinaryTarget: r } = e;
      return `${Ke(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${r}".
${gn(e)}

${ze(e)}`;
    }
    function hn(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    function yn(e) {
      let { errorStack: r } = e;
      return r?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
    }
    function ga(e) {
      let { queryEngineName: r } = e;
      return `${Ke(e)}${yn(e)}

This is likely caused by a bundler that has not copied "${r}" next to the resulting bundle.
Ensure that "${r}" has been copied next to the bundle or in "${e.expectedLocation}".

${hn("engine-not-found-bundler-investigation")}

${ze(e)}`;
    }
    function ha(e) {
      let { runtimeBinaryTarget: r, generatorBinaryTargets: t } = e, n = t.find((i) => i.native);
      return `${Ke(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${r}".
${gn(e)}

${ze(e)}`;
    }
    function ya(e) {
      let { queryEngineName: r } = e;
      return `${Ke(e)}${yn(e)}

This is likely caused by tooling that has not copied "${r}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${r}" has been copied to "${e.expectedLocation}".

${hn("engine-not-found-tooling-investigation")}

${ze(e)}`;
    }
    var zp = N("prisma:client:engines:resolveEnginePath");
    var Yp = () => new RegExp("runtime[\\\\/]library\\.m?js$");
    async function ba(e, r) {
      let t = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? r.prismaPath;
      if (t !== void 0) return t;
      let { enginePath: n, searchedLocations: i } = await Zp(e, r);
      if (zp("enginePath", n), n !== void 0 && e === "binary" && ti(n), n !== void 0) return r.prismaPath = n;
      let o = await rr(), s = r.generator?.binaryTargets ?? [], a = s.some((m) => m.native), l = !s.some((m) => m.value === o), u = __filename.match(Yp()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: r.generator, runtimeBinaryTarget: o, queryEngineName: wa(e, o), expectedLocation: at.default.relative(process.cwd(), r.dirname), errorStack: new Error().stack }, p;
      throw a && l ? p = ha(c) : l ? p = fa(c) : u ? p = ga(c) : p = ya(c), new R(p, r.clientVersion);
    }
    async function Zp(engineType, config) {
      let binaryTarget = await rr(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, at.default.resolve(dirname, ".."), config.generator?.output?.value ?? dirname, at.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
      __filename.includes("resolveEnginePath") && searchLocations.push(zo());
      for (let e of searchLocations) {
        let r = wa(engineType, binaryTarget), t = at.default.join(e, r);
        if (searchedLocations.push(e), Ea.default.existsSync(t)) return { enginePath: t, searchedLocations };
      }
      return { enginePath: void 0, searchedLocations };
    }
    function wa(e, r) {
      return e === "library" ? It(r, "fs") : `query-engine-${r}${r === "windows" ? ".exe" : ""}`;
    }
    var Li = _(ui());
    function xa(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (r) => `${r[0]}5`) : "";
    }
    function Pa(e) {
      return e.split(`
`).map((r) => r.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    var va = _(is());
    function Ta({ title: e, user: r = "prisma", repo: t = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, va.default)({ user: r, repo: t, template: n, title: e, body: i });
    }
    function Ca({ version: e, binaryTarget: r, title: t, description: n, engineVersion: i, database: o, query: s }) {
      let a = go(6e3 - (s?.length ?? 0)), l = Pa((0, Li.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, Li.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${r?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? xa(s) : ""}
\`\`\`
`), p = Ta({ title: t, body: c });
      return `${t}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${ee(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    function Ir({ inlineDatasources: e, overrideDatasources: r, env: t, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = r[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = t[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0) throw new R(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0) throw new R("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    var En = class extends Error {
      constructor(r, t) {
        super(r), this.clientVersion = t.clientVersion, this.cause = t.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var ae = class extends En {
      constructor(r, t) {
        super(r, t), this.isRetryable = t.isRetryable ?? true;
      }
    };
    function S(e, r) {
      return { ...e, isRetryable: r };
    }
    var _r = class extends ae {
      constructor(t) {
        super("This request must be retried", S(t, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    };
    w(_r, "ForcedRetryError");
    var ar = class extends ae {
      constructor(t, n) {
        super(t, S(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    };
    w(ar, "InvalidDatasourceError");
    var lr = class extends ae {
      constructor(t, n) {
        super(t, S(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    };
    w(lr, "NotImplementedYetError");
    var $ = class extends ae {
      constructor(r, t) {
        super(r, t), this.response = t.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    };
    var ur = class extends $ {
      constructor(t) {
        super("Schema needs to be uploaded", S(t, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    };
    w(ur, "SchemaMissingError");
    var Ni = "This request could not be understood by the server";
    var lt = class extends $ {
      constructor(t, n, i) {
        super(n || Ni, S(t, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    };
    w(lt, "BadRequestError");
    var ut = class extends $ {
      constructor(t, n) {
        super("Engine not started: healthcheck timeout", S(t, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    };
    w(ut, "HealthcheckTimeoutError");
    var ct = class extends $ {
      constructor(t, n, i) {
        super(n, S(t, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    };
    w(ct, "EngineStartupError");
    var pt = class extends $ {
      constructor(t) {
        super("Engine version is not supported", S(t, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    };
    w(pt, "EngineVersionNotSupportedError");
    var Oi = "Request timed out";
    var mt = class extends $ {
      constructor(t, n = Oi) {
        super(n, S(t, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    };
    w(mt, "GatewayTimeoutError");
    var Xp = "Interactive transaction error";
    var dt = class extends $ {
      constructor(t, n = Xp) {
        super(n, S(t, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    };
    w(dt, "InteractiveTransactionError");
    var em = "Request parameters are invalid";
    var ft = class extends $ {
      constructor(t, n = em) {
        super(n, S(t, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    };
    w(ft, "InvalidRequestError");
    var Fi = "Requested resource does not exist";
    var gt = class extends $ {
      constructor(t, n = Fi) {
        super(n, S(t, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    };
    w(gt, "NotFoundError");
    var Mi = "Unknown server error";
    var kr = class extends $ {
      constructor(t, n, i) {
        super(n || Mi, S(t, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    };
    w(kr, "ServerError");
    var $i = "Unauthorized, check your connection string";
    var ht = class extends $ {
      constructor(t, n = $i) {
        super(n, S(t, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    };
    w(ht, "UnauthorizedError");
    var qi = "Usage exceeded, retry again later";
    var yt = class extends $ {
      constructor(t, n = qi) {
        super(n, S(t, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    };
    w(yt, "UsageExceededError");
    async function rm(e) {
      let r;
      try {
        r = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let t = JSON.parse(r);
        if (typeof t == "string") switch (t) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: t };
          default:
            return { type: "UnknownTextError", body: t };
        }
        if (typeof t == "object" && t !== null) {
          if ("is_panic" in t && "message" in t && "error_code" in t) return { type: "QueryEngineError", body: t };
          if ("EngineNotStarted" in t || "InteractiveTransactionMisrouted" in t || "InvalidRequestError" in t) {
            let n = Object.values(t)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: t } : { type: "DataProxyError", body: t };
          }
        }
        return { type: "UnknownJsonError", body: t };
      } catch {
        return r === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: r };
      }
    }
    async function Et(e, r) {
      if (e.ok) return;
      let t = { clientVersion: r, response: e }, n = await rm(e);
      if (n.type === "QueryEngineError") throw new V(n.body.message, { code: n.body.error_code, clientVersion: r });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError") throw new kr(t, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing") return new ur(t);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new pt(t);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new ct(t, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new R(i, r, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new ut(t, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new dt(t, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body) throw new ft(t, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403) throw new ht(t, Dr($i, n));
      if (e.status === 404) return new gt(t, Dr(Fi, n));
      if (e.status === 429) throw new yt(t, Dr(qi, n));
      if (e.status === 504) throw new mt(t, Dr(Oi, n));
      if (e.status >= 500) throw new kr(t, Dr(Mi, n));
      if (e.status >= 400) throw new lt(t, Dr(Ni, n));
    }
    function Dr(e, r) {
      return r.type === "EmptyError" ? e : `${e}: ${JSON.stringify(r)}`;
    }
    function Ra(e) {
      let r = Math.pow(2, e) * 50, t = Math.ceil(Math.random() * r) - Math.ceil(r / 2), n = r + t;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    var Fe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function Sa(e) {
      let r = new TextEncoder().encode(e), t = "", n = r.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
      for (let p = 0; p < o; p = p + 3) c = r[p] << 16 | r[p + 1] << 8 | r[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, t += Fe[s] + Fe[a] + Fe[l] + Fe[u];
      return i == 1 ? (c = r[o], s = (c & 252) >> 2, a = (c & 3) << 4, t += Fe[s] + Fe[a] + "==") : i == 2 && (c = r[o] << 8 | r[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, t += Fe[s] + Fe[a] + Fe[l] + "="), t;
    }
    function Aa(e) {
      if (!!e.generator?.previewFeatures.some((t) => t.toLowerCase().includes("metrics"))) throw new R("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    function tm(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    function Ia(e) {
      return new Date(tm(e));
    }
    var _a = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.11.0-15.efd2449663b3d73d637ea1fd226bafbcf45b3102", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    var bt = class extends ae {
      constructor(t, n) {
        super(`Cannot fetch data from service:
${t}`, S(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    };
    w(bt, "RequestError");
    async function cr(e, r, t = (n) => n) {
      let n = r.clientVersion;
      try {
        return typeof fetch == "function" ? await t(fetch)(e, r) : await t(Bi)(e, r);
      } catch (i) {
        let o = i.message ?? "Unknown error";
        throw new bt(o, { clientVersion: n });
      }
    }
    function im(e) {
      return { ...e.headers, "Content-Type": "application/json" };
    }
    function om(e) {
      return { method: e.method, headers: im(e) };
    }
    function sm(e, r) {
      return { text: () => Promise.resolve(Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), ok: r.statusCode >= 200 && r.statusCode <= 299, status: r.statusCode, url: r.url, headers: new Vi(r.headers) };
    }
    async function Bi(e, r = {}) {
      let t = am("https"), n = om(r), i = [], { origin: o } = new URL(e);
      return new Promise((s, a) => {
        let l = t.request(e, n, (u) => {
          let { statusCode: c, headers: { location: p } } = u;
          c >= 301 && c <= 399 && p && (p.startsWith("http") === false ? s(Bi(`${o}${p}`, r)) : s(Bi(p, r))), u.on("data", (m) => i.push(m)), u.on("end", () => s(sm(i, u))), u.on("error", a);
        });
        l.on("error", a), l.end(r.body ?? "");
      });
    }
    var am = typeof require < "u" ? require : () => {
    };
    var Vi = class {
      constructor(r = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [t, n] of Object.entries(r)) if (typeof n == "string") this.headers.set(t, n);
        else if (Array.isArray(n)) for (let i of n) this.headers.set(t, i);
      }
      append(r, t) {
        this.headers.set(r, t);
      }
      delete(r) {
        this.headers.delete(r);
      }
      get(r) {
        return this.headers.get(r) ?? null;
      }
      has(r) {
        return this.headers.has(r);
      }
      set(r, t) {
        this.headers.set(r, t);
      }
      forEach(r, t) {
        for (let [n, i] of this.headers) r.call(t, i, n, this);
      }
    };
    var lm = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var ka = N("prisma:client:dataproxyEngine");
    async function um(e, r) {
      let t = _a["@prisma/engines-version"], n = r.clientVersion ?? "unknown";
      if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
      let [i, o] = n?.split("-") ?? [];
      if (o === void 0 && lm.test(i)) return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
        let [s] = t.split("-") ?? [], [a, l, u] = s.split("."), c = cm(`<=${a}.${l}.${u}`), p = await cr(c, { clientVersion: n });
        if (!p.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
        let m = await p.text();
        ka("length of body fetched from unpkg.com", m.length);
        let f;
        try {
          f = JSON.parse(m);
        } catch (g) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", m), g;
        }
        return f.version;
      }
      throw new lr("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    async function Da(e, r) {
      let t = await um(e, r);
      return ka("version", t), t;
    }
    function cm(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    var La = 3;
    var ji = N("prisma:client:dataproxyEngine");
    var Ui = class {
      constructor({ apiKey: r, tracingHelper: t, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = r, this.tracingHelper = t, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: r, interactiveTransaction: t } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = r ?? this.tracingHelper.getTraceParent()), t && (n["X-transaction-id"] = t.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let r = [];
        return this.tracingHelper.isEnabled() && r.push("tracing"), this.logLevel && r.push(this.logLevel), this.logQueries && r.push("query"), r;
      }
    };
    var wt = class {
      constructor(r) {
        this.name = "DataProxyEngine";
        Aa(r), this.config = r, this.env = { ...r.env, ...typeof process < "u" ? process.env : {} }, this.inlineSchema = Sa(r.inlineSchema), this.inlineDatasources = r.inlineDatasources, this.inlineSchemaHash = r.inlineSchemaHash, this.clientVersion = r.clientVersion, this.engineHash = r.engineVersion, this.logEmitter = r.logEmitter, this.tracingHelper = r.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [r, t] = this.extractHostAndApiKey();
          this.host = r, this.headerBuilder = new Ui({ apiKey: t, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Da(r, this.config), ji("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(r) {
        r?.logs?.length && r.logs.forEach((t) => {
          switch (t.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let n = typeof t.attributes.query == "string" ? t.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [i] = n.split("/* traceparent");
                n = i;
              }
              this.logEmitter.emit("query", { query: n, timestamp: Ia(t.timestamp), duration: Number(t.attributes.duration_ms), params: t.attributes.params, target: t.attributes.target });
            }
          }
        }), r?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: r.traces });
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(r) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
      }
      async uploadSchema() {
        let r = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(r, async () => {
          let t = await cr(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          t.ok || ji("schema response status", t.status);
          let n = await Et(t, this.clientVersion);
          if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(r, { traceparent: t, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: r, traceparent: t, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(r, { traceparent: t, transaction: n, customDataProxyFetch: i }) {
        let o = n?.kind === "itx" ? n.options : void 0, s = Er(r, n), { batchResult: a, elapsed: l } = await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: t });
        return a.map((u) => "errors" in u && u.errors.length > 0 ? sr(u.errors[0], this.clientVersion, this.config.activeProvider) : { data: u, elapsed: l });
      }
      requestInternal({ body: r, traceparent: t, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await cr(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t, interactiveTransaction: i }), body: JSON.stringify(r), clientVersion: this.clientVersion }, n);
          a.ok || ji("graphql response status", a.status), await this.handleError(await Et(a, this.clientVersion));
          let l = await a.json(), u = l.extensions;
          if (u && this.propagateResponseExtensions(u), l.errors) throw l.errors.length === 1 ? sr(l.errors[0], this.config.clientVersion, this.config.activeProvider) : new j(l.errors, { clientVersion: this.config.clientVersion });
          return l;
        } });
      }
      async transaction(r, t, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[r]} transaction`, callback: async ({ logHttpCall: o }) => {
          if (r === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let l = await cr(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await Et(l, this.clientVersion));
            let u = await l.json(), c = u.extensions;
            c && this.propagateResponseExtensions(c);
            let p = u.id, m = u["data-proxy"].endpoint;
            return { id: p, payload: { endpoint: m } };
          } else {
            let s = `${n.payload.endpoint}/${r}`;
            o(s);
            let a = await cr(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await Et(a, this.clientVersion));
            let u = (await a.json()).extensions;
            u && this.propagateResponseExtensions(u);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let r = { clientVersion: this.clientVersion }, t = Object.keys(this.inlineDatasources)[0], n = Ir({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
        try {
          i = new URL(n);
        } catch {
          throw new ar(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\``, r);
        }
        let { protocol: o, host: s, searchParams: a } = i;
        if (o !== "prisma:") throw new ar(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\``, r);
        let l = a.get("api_key");
        if (l === null || l.length < 1) throw new ar(`Error validating datasource \`${t}\`: the URL must contain a valid API key`, r);
        return [s, l];
      }
      metrics() {
        throw new lr("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(r) {
        for (let t = 0; ; t++) {
          let n = (i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${t})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          };
          try {
            return await r.callback({ logHttpCall: n });
          } catch (i) {
            if (!(i instanceof ae) || !i.isRetryable) throw i;
            if (t >= La) throw i instanceof _r ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${t + 1}/${La} failed for ${r.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let o = await Ra(t);
            this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(r) {
        if (r instanceof ur) throw await this.uploadSchema(), new _r({ clientVersion: this.clientVersion, cause: r });
        if (r) throw r;
      }
    };
    function Na(e) {
      if (e?.kind === "itx") return e.options.id;
    }
    var Gi = _(require("os"));
    var Oa = _(require("path"));
    var Qi = Symbol("PrismaLibraryEngineCache");
    function pm() {
      let e = globalThis;
      return e[Qi] === void 0 && (e[Qi] = {}), e[Qi];
    }
    function mm(e) {
      let r = pm();
      if (r[e] !== void 0) return r[e];
      let t = Oa.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = Gi.default.constants.dlopen.RTLD_LAZY | Gi.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, t, i), r[e] = n.exports, n.exports;
    }
    var Fa = { async loadLibrary(e) {
      let r = await jn(), t = await ba("library", e);
      try {
        return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => mm(t));
      } catch (n) {
        let i = ni({ e: n, platformInfo: r, id: t });
        throw new R(i, e.clientVersion);
      }
    } };
    var Ji;
    var Ma = { async loadLibrary(e) {
      let { clientVersion: r, adapter: t, engineWasm: n } = e;
      if (t === void 0) throw new R(`The \`adapter\` option for \`PrismaClient\` is required in this context (${fn().prettyName})`, r);
      if (n === void 0) throw new R("WASM engine was unexpectedly `undefined`", r);
      Ji === void 0 && (Ji = (async () => {
        let o = n.getRuntime(), s = await n.getQueryEngineWasmModule();
        if (s == null) throw new R("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", r);
        let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a);
        return o.__wbg_set_wasm(l.exports), o.QueryEngine;
      })());
      let i = await Ji;
      return { debugPanic() {
        return Promise.reject("{}");
      }, dmmf() {
        return Promise.resolve("{}");
      }, version() {
        return { commit: "unknown", version: "unknown" };
      }, QueryEngine: i };
    } };
    var dm = "P2036";
    var Se = N("prisma:client:libraryEngine");
    function fm(e) {
      return e.item_type === "query" && "query" in e;
    }
    function gm(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    var $a = [...Mn, "native"];
    var qa = 0;
    var xt = class {
      constructor(r, t) {
        this.name = "LibraryEngine";
        this.libraryLoader = t ?? Fa, r.engineWasm !== void 0 && (this.libraryLoader = t ?? Ma), this.config = r, this.libraryStarted = false, this.logQueries = r.logQueries ?? false, this.logLevel = r.logLevel ?? "error", this.logEmitter = r.logEmitter, this.datamodel = r.inlineSchema, r.enableDebugLogs && (this.logLevel = "debug");
        let n = Object.keys(r.overrideDatasources)[0], i = r.overrideDatasources[n]?.url;
        n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary(), this.checkForTooManyEngines();
      }
      checkForTooManyEngines() {
        qa === 10 && console.warn(`${de("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`);
      }
      async transaction(r, t, n) {
        await this.start();
        let i = JSON.stringify(t), o;
        if (r === "start") {
          let a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
          o = await this.engine?.startTransaction(a, i);
        } else r === "commit" ? o = await this.engine?.commitTransaction(n.id, i) : r === "rollback" && (o = await this.engine?.rollbackTransaction(n.id, i));
        let s = this.parseEngineResponse(o);
        if (hm(s)) {
          let a = this.getExternalAdapterError(s);
          throw a ? a.error : new V(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
        }
        return s;
      }
      async instantiateLibrary() {
        if (Se("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
        Fn(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.loadEngine(), this.version();
      }
      async getCurrentBinaryTarget() {
        {
          if (this.binaryTarget) return this.binaryTarget;
          let r = await rr();
          if (!$a.includes(r)) throw new R(`Unknown ${ce("PRISMA_QUERY_ENGINE_LIBRARY")} ${ce(W(r))}. Possible binaryTargets: ${$e($a.join(", "))} or a path to the query engine library.
You may have to run ${$e("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
          return r;
        }
      }
      parseEngineResponse(r) {
        if (!r) throw new j("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(r);
        } catch {
          throw new j("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      async loadEngine() {
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let r = new WeakRef(this), { adapter: t } = this.config;
            t && Se("Using driver adapter: %O", t), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
              r.deref()?.logger(n);
            }, t), qa++;
          } catch (r) {
            let t = r, n = this.parseInitError(t.message);
            throw typeof n == "string" ? t : new R(n.message, this.config.clientVersion, n.error_code);
          }
        }
      }
      logger(r) {
        let t = this.parseEngineResponse(r);
        if (t) {
          if ("span" in t) {
            this.config.tracingHelper.createEngineSpan(t);
            return;
          }
          t.level = t?.level.toLowerCase() ?? "unknown", fm(t) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: t.query, params: t.params, duration: Number(t.duration_ms), target: t.module_path }) : gm(t) ? this.loggerRustPanic = new ue(Hi(this, `${t.message}: ${t.reason} in ${t.file}:${t.line}:${t.column}`), this.config.clientVersion) : this.logEmitter.emit(t.level, { timestamp: /* @__PURE__ */ new Date(), message: t.message, target: t.module_path });
        }
      }
      parseInitError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      parseRequestError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Se(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted) return;
        let r = async () => {
          Se("library starting");
          try {
            let t = { traceparent: this.config.tracingHelper.getTraceParent() };
            await this.engine?.connect(JSON.stringify(t)), this.libraryStarted = true, Se("library started");
          } catch (t) {
            let n = this.parseInitError(t.message);
            throw typeof n == "string" ? t : new R(n.message, this.config.clientVersion, n.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        };
        return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Se("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted) return;
        let r = async () => {
          await new Promise((n) => setTimeout(n, 5)), Se("library stopping");
          let t = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.disconnect(JSON.stringify(t)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, Se("library stopped");
        };
        return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
      }
      version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
      }
      debugPanic(r) {
        return this.library?.debugPanic(r);
      }
      async request(r, { traceparent: t, interactiveTransaction: n }) {
        Se(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let i = JSON.stringify({ traceparent: t }), o = JSON.stringify(r);
        try {
          await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
          let s = this.parseEngineResponse(await this.executingQueryPromise);
          if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new j(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic) throw this.loggerRustPanic;
          return { data: s, elapsed: 0 };
        } catch (s) {
          if (s instanceof R) throw s;
          if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:")) throw new ue(Hi(this, s.message), this.config.clientVersion);
          let a = this.parseRequestError(s.message);
          throw typeof a == "string" ? s : new j(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(r, { transaction: t, traceparent: n }) {
        Se("requestBatch");
        let i = Er(r, t);
        await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), Na(t));
        let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
        if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new j(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: a, errors: l } = s;
        if (Array.isArray(a)) return a.map((u) => u.errors && u.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0]) : { data: u, elapsed: 0 });
        throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
      }
      buildQueryError(r) {
        if (r.user_facing_error.is_panic) return new ue(Hi(this, r.user_facing_error.message), this.config.clientVersion);
        let t = this.getExternalAdapterError(r.user_facing_error);
        return t ? t.error : sr(r, this.config.clientVersion, this.config.activeProvider);
      }
      getExternalAdapterError(r) {
        if (r.error_code === dm && this.config.adapter) {
          let t = r.meta?.id;
          Vt(typeof t == "number", "Malformed external JS error received from the engine");
          let n = this.config.adapter.errorRegistry.consumeError(t);
          return Vt(n, "External error with reported id was not registered"), n;
        }
      }
      async metrics(r) {
        await this.start();
        let t = await this.engine.metrics(JSON.stringify(r));
        return r.format === "prometheus" ? t : this.parseEngineResponse(t);
      }
    };
    function hm(e) {
      return typeof e == "object" && e !== null && e.error_code !== void 0;
    }
    function Hi(e, r) {
      return Ca({ binaryTarget: e.binaryTarget, title: r, version: e.config.clientVersion, engineVersion: e.versionInfo?.commit, database: e.config.activeProvider, query: e.lastQuery });
    }
    function Ba({ copyEngine: e = true }, r) {
      let t;
      try {
        t = Ir({ inlineDatasources: r.inlineDatasources, overrideDatasources: r.overrideDatasources, env: { ...r.env, ...process.env }, clientVersion: r.clientVersion });
      } catch {
      }
      e && t?.startsWith("prisma://") && Hr("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let n = Ur(r.generator), i = !!(t?.startsWith("prisma://") || !e), o = !!r.adapter, s = n === "library", a = n === "binary";
      if (i && o || o && false) {
        let l;
        throw e ? t?.startsWith("prisma://") ? l = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : l = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : l = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new K(l.join(`
`), { clientVersion: r.clientVersion });
      }
      if (i) return new wt(r);
      if (s) return new xt(r);
      throw new K("Invalid client engine type, please use `library` or `binary`", { clientVersion: r.clientVersion });
    }
    function bn({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    var Ja = _(Wi());
    function Qa(e, r) {
      let t = Ga(e), n = ym(t), i = bm(n);
      i ? wn(i, r) : r.addErrorMessage(() => "Unknown error");
    }
    function Ga(e) {
      return e.errors.flatMap((r) => r.kind === "Union" ? Ga(r) : [r]);
    }
    function ym(e) {
      let r = /* @__PURE__ */ new Map(), t = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          t.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = r.get(i);
        o ? r.set(i, { ...n, argument: { ...n.argument, typeNames: Em(o.argument.typeNames, n.argument.typeNames) } }) : r.set(i, n);
      }
      return t.push(...r.values()), t;
    }
    function Em(e, r) {
      return [...new Set(e.concat(r))];
    }
    function bm(e) {
      return mi(e, (r, t) => {
        let n = ja(r), i = ja(t);
        return n !== i ? n - i : Ua(r) - Ua(t);
      });
    }
    function ja(e) {
      let r = 0;
      return Array.isArray(e.selectionPath) && (r += e.selectionPath.length), Array.isArray(e.argumentPath) && (r += e.argumentPath.length), r;
    }
    function Ua(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    var Me = class {
      constructor(r, t) {
        this.name = r;
        this.value = t;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(r) {
        let { colors: { green: t } } = r.context;
        r.addMarginSymbol(t(this.isRequired ? "+" : "?")), r.write(t(this.name)), this.isRequired || r.write(t("?")), r.write(t(": ")), typeof this.value == "string" ? r.write(t(this.value)) : r.write(this.value);
      }
    };
    var xn = class {
      constructor() {
        this.fields = [];
      }
      addField(r, t) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${r}: ${t}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(r) {
        let { colors: { green: t } } = r.context;
        r.writeLine(t("{")).withIndent(() => {
          r.writeJoined(Cr, this.fields).newLine();
        }).write(t("}")).addMarginSymbol(t("+"));
      }
    };
    function wn(e, r) {
      switch (e.kind) {
        case "IncludeAndSelect":
          wm(e, r);
          break;
        case "IncludeOnScalar":
          xm(e, r);
          break;
        case "EmptySelection":
          Pm(e, r);
          break;
        case "UnknownSelectionField":
          vm(e, r);
          break;
        case "UnknownArgument":
          Tm(e, r);
          break;
        case "UnknownInputField":
          Cm(e, r);
          break;
        case "RequiredArgumentMissing":
          Rm(e, r);
          break;
        case "InvalidArgumentType":
          Sm(e, r);
          break;
        case "InvalidArgumentValue":
          Am(e, r);
          break;
        case "ValueTooLarge":
          Im(e, r);
          break;
        case "SomeFieldsMissing":
          _m(e, r);
          break;
        case "TooManyFieldsGiven":
          km(e, r);
          break;
        case "Union":
          Qa(e, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function wm(e, r) {
      let t = r.arguments.getDeepSubSelectionValue(e.selectionPath);
      t && t instanceof J && (t.getField("include")?.markAsError(), t.getField("select")?.markAsError()), r.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green("`select`")}, but ${n.red("not both")} at the same time.`);
    }
    function xm(e, r) {
      let [t, n] = Pn(e.selectionPath), i = e.outputType, o = r.arguments.getDeepSelectionParent(t)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new Me(s.name, "true"));
      r.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${Pt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function Pm(e, r) {
      let t = e.outputType, n = r.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), Ka(n, t)), r.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(t.name)} must not be empty. ${Pt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(t.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function vm(e, r) {
      let [t, n] = Pn(e.selectionPath), i = r.arguments.getDeepSelectionParent(t);
      i && (i.value.getField(n)?.markAsError(), Ka(i.value, e.outputType)), r.addErrorMessage((o) => {
        let s = [`Unknown field ${o.red(`\`${n}\``)}`];
        return i && s.push(`for ${o.bold(i.kind)} statement`), s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`), s.push(Pt(o)), s.join(" ");
      });
    }
    function Tm(e, r) {
      let t = e.argumentPath[0], n = r.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof J && (n.getField(t)?.markAsError(), Dm(n, e.arguments)), r.addErrorMessage((i) => Ha(i, t, e.arguments.map((o) => o.name)));
    }
    function Cm(e, r) {
      let [t, n] = Pn(e.argumentPath), i = r.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (i instanceof J) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(t);
        o instanceof J && za(o, e.inputType);
      }
      r.addErrorMessage((o) => Ha(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function Ha(e, r, t) {
      let n = [`Unknown argument \`${e.red(r)}\`.`], i = Nm(r, t);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), t.length > 0 && n.push(Pt(e)), n.join(" ");
    }
    function Rm(e, r) {
      let t;
      r.addErrorMessage((l) => t?.value instanceof H && t.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = r.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (!(n instanceof J)) return;
      let [i, o] = Pn(e.argumentPath), s = new xn(), a = n.getDeepFieldValue(i);
      if (a instanceof J) if (t = a.getField(o), t && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields) s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new Me(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map(Wa).join(" | ");
        a.addSuggestion(new Me(o, l).makeRequired());
      }
    }
    function Wa(e) {
      return e.kind === "list" ? `${Wa(e.elementType)}[]` : e.name;
    }
    function Sm(e, r) {
      let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof J && n.getDeepFieldValue(e.argumentPath)?.markAsError(), r.addErrorMessage((i) => {
        let o = vn("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(t)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function Am(e, r) {
      let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof J && n.getDeepFieldValue(e.argumentPath)?.markAsError(), r.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(t)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = vn("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function Im(e, r) {
      let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath), i;
      if (n instanceof J) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof H && (i = s.text);
      }
      r.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(t)}\``), s.join(" ");
      });
    }
    function _m(e, r) {
      let t = e.argumentPath[e.argumentPath.length - 1], n = r.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (n instanceof J) {
        let i = n.getDeepFieldValue(e.argumentPath);
        i instanceof J && za(i, e.inputType);
      }
      r.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(t)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${vn("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(Pt(i)), o.join(" ");
      });
    }
    function km(e, r) {
      let t = e.argumentPath[e.argumentPath.length - 1], n = r.arguments.getDeepSubSelectionValue(e.selectionPath), i = [];
      if (n instanceof J) {
        let o = n.getDeepFieldValue(e.argumentPath);
        o instanceof J && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      r.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(t)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${vn("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function Ka(e, r) {
      for (let t of r.fields) e.hasField(t.name) || e.addSuggestion(new Me(t.name, "true"));
    }
    function Dm(e, r) {
      for (let t of r) e.hasField(t.name) || e.addSuggestion(new Me(t.name, t.typeNames.join(" | ")));
    }
    function za(e, r) {
      if (r.kind === "object") for (let t of r.fields) e.hasField(t.name) || e.addSuggestion(new Me(t.name, t.typeNames.join(" | ")));
    }
    function Pn(e) {
      let r = [...e], t = r.pop();
      if (!t) throw new Error("unexpected empty path");
      return [r, t];
    }
    function Pt({ green: e, enabled: r }) {
      return "Available options are " + (r ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    function vn(e, r) {
      if (r.length === 1) return r[0];
      let t = [...r], n = t.pop();
      return `${t.join(", ")} ${e} ${n}`;
    }
    var Lm = 3;
    function Nm(e, r) {
      let t = 1 / 0, n;
      for (let i of r) {
        let o = (0, Ja.default)(e, i);
        o > Lm || o < t && (t = o, n = i);
      }
      return n;
    }
    function Tn({ args: e, errors: r, errorFormat: t, callsite: n, originalMethod: i, clientVersion: o }) {
      let s = an(e);
      for (let p of r) wn(p, s);
      let a = t === "pretty" ? Rs : on, l = s.renderAllMessages(a), u = new br(0, { colors: a }).write(s).toString(), c = Ar({ message: l, callsite: n, originalMethod: i, showColors: t === "pretty", callArguments: u });
      throw new K(c, { clientVersion: o });
    }
    var Om = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function Ya({ modelName: e, action: r, args: t, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l }) {
      let u = new Ki({ runtimeDataModel: n, modelName: e, action: r, rootArgs: t, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l });
      return { modelName: e, action: Om[r], query: zi(t, u) };
    }
    function zi({ select: e, include: r, ...t } = {}, n) {
      return { arguments: Xa(t, n), selection: Fm(e, r, n) };
    }
    function Fm(e, r, t) {
      return e && r && t.throwValidationError({ kind: "IncludeAndSelect", selectionPath: t.getSelectionPath() }), e ? qm(e, t) : Mm(t, r);
    }
    function Mm(e, r) {
      let t = {};
      return e.model && !e.isRawAction() && (t.$composites = true, t.$scalars = true), r && $m(t, r, e), t;
    }
    function $m(e, r, t) {
      for (let [n, i] of Object.entries(r)) {
        let o = t.findField(n);
        o && o?.kind !== "object" && t.throwValidationError({ kind: "IncludeOnScalar", selectionPath: t.getSelectionPath().concat(n), outputType: t.getOutputTypeDescription() }), i === true ? e[n] = true : typeof i == "object" && (e[n] = zi(i, t.nestSelection(n)));
      }
    }
    function qm(e, r) {
      let t = {}, n = r.getComputedFields(), i = la(e, n);
      for (let [o, s] of Object.entries(i)) {
        let a = r.findField(o);
        n?.[o] && !a || (s === true ? t[o] = true : typeof s == "object" && (t[o] = zi(s, r.nestSelection(o))));
      }
      return t;
    }
    function Za(e, r) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (wr(e)) {
        if (Wt(e)) return { $type: "DateTime", value: e.toISOString() };
        r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: r.getSelectionPath(), argumentPath: r.getArgumentPath(), argument: { name: r.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (Tr(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return Bm(e, r);
      if (ArrayBuffer.isView(e)) return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
      if (Vm(e)) return e.values;
      if (vr(e)) return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Ne) {
        if (e !== Gt.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (jm(e)) return e.toJSON();
      if (typeof e == "object") return Xa(e, r);
      r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: r.getSelectionPath(), argumentPath: r.getArgumentPath(), argument: { name: r.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function Xa(e, r) {
      if (e.$type) return { $type: "Raw", value: e };
      let t = {};
      for (let n in e) {
        let i = e[n];
        i !== void 0 && (t[n] = Za(i, r.nestArgument(n)));
      }
      return t;
    }
    function Bm(e, r) {
      let t = [];
      for (let n = 0; n < e.length; n++) {
        let i = r.nestArgument(String(n)), o = e[n];
        o === void 0 && r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${r.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values" }), t.push(Za(o, i));
      }
      return t;
    }
    function Vm(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function jm(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    var Ki = class e {
      constructor(r) {
        this.params = r;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
      }
      throwValidationError(r) {
        Tn({ errors: [r], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model)) return { name: this.params.modelName, fields: this.model.fields.map((r) => ({ name: r.name, typeName: "boolean", isRelation: r.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(r) {
        return this.model?.fields.find((t) => t.name === r);
      }
      nestSelection(r) {
        let t = this.findField(r), n = t?.kind === "object" ? t.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(r) });
      }
      nestArgument(r) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(r) });
      }
    };
    var el = (e) => ({ command: e });
    var rl = (e) => e.strings.reduce((r, t, n) => `${r}@P${n}${t}`);
    function vt(e) {
      try {
        return tl(e, "fast");
      } catch {
        return tl(e, "slow");
      }
    }
    function tl(e, r) {
      return JSON.stringify(e.map((t) => Um(t, r)));
    }
    function Um(e, r) {
      return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : wr(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : Te.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Qm(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && r === "slow" ? il(e) : e;
    }
    function Qm(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function il(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(nl);
      let r = {};
      for (let t of Object.keys(e)) r[t] = nl(e[t]);
      return r;
    }
    function nl(e) {
      return typeof e == "bigint" ? e.toString() : il(e);
    }
    var Gm = /^(\s*alter\s)/i;
    var ol = N("prisma:client");
    function Yi(e, r, t, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && t.length > 0 && Gm.exec(r)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var Zi = ({ clientMethod: e, activeProvider: r }) => (t) => {
      let n = "", i;
      if (Array.isArray(t)) {
        let [o, ...s] = t;
        n = o, i = { values: vt(s || []), __prismaRawParameters__: true };
      } else switch (r) {
        case "sqlite":
        case "mysql": {
          n = t.sql, i = { values: vt(t.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = t.text, i = { values: vt(t.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = rl(t), i = { values: vt(t.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${r} provider does not support ${e}`);
      }
      return i?.values ? ol(`prisma.${e}(${n}, ${i.values})`) : ol(`prisma.${e}(${n})`), { query: n, parameters: i };
    };
    var sl = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [r, ...t] = e;
      return new oe(r, t);
    } };
    var al = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function Xi(e) {
      return function(t) {
        let n, i = (o = e) => {
          try {
            return o === void 0 || o?.kind === "itx" ? n ?? (n = ll(t(o))) : ll(t(o));
          } catch (s) {
            return Promise.reject(s);
          }
        };
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function ll(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    var ul = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, r) {
      return r();
    } };
    var eo = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(r) {
        return this.getGlobalTracingHelper().getTraceParent(r);
      }
      createEngineSpan(r) {
        return this.getGlobalTracingHelper().createEngineSpan(r);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(r, t) {
        return this.getGlobalTracingHelper().runInChildSpan(r, t);
      }
      getGlobalTracingHelper() {
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? ul;
      }
    };
    function cl(e) {
      return e.includes("tracing") ? new eo() : ul;
    }
    function pl(e, r = () => {
    }) {
      let t, n = new Promise((i) => t = i);
      return { then(i) {
        return --e === 0 && t(r()), i?.(n);
      } };
    }
    var Jm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var ml = Jm;
    function dl(e) {
      return typeof e == "string" ? e : e.reduce((r, t) => {
        let n = typeof t == "string" ? t : t.level;
        return n === "query" ? r : r && (t === "info" || r === "info") ? "info" : n;
      }, void 0);
    }
    var Cn = class {
      constructor() {
        this._middlewares = [];
      }
      use(r) {
        this._middlewares.push(r);
      }
      get(r) {
        return this._middlewares[r];
      }
      has(r) {
        return !!this._middlewares[r];
      }
      length() {
        return this._middlewares.length;
      }
    };
    var gl = _(ui());
    function Rn(e) {
      return typeof e.batchRequestIdx == "number";
    }
    function Sn(e) {
      return e === null ? e : Array.isArray(e) ? e.map(Sn) : typeof e == "object" ? Hm(e) ? Wm(e) : hr(e, Sn) : e;
    }
    function Hm(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function Wm({ $type: e, value: r }) {
      switch (e) {
        case "BigInt":
          return BigInt(r);
        case "Bytes":
          return Buffer.from(r, "base64");
        case "DateTime":
          return new Date(r);
        case "Decimal":
          return new Te(r);
        case "Json":
          return JSON.parse(r);
        default:
          tr(r, "Unknown tagged value");
      }
    }
    function fl(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let r = [];
      return e.modelName && r.push(e.modelName), e.query.arguments && r.push(ro(e.query.arguments)), r.push(ro(e.query.selection)), r.join("");
    }
    function ro(e) {
      return `(${Object.keys(e).sort().map((t) => {
        let n = e[t];
        return typeof n == "object" && n !== null ? `(${t} ${ro(n)})` : t;
      }).join(" ")})`;
    }
    var Km = { aggregate: false, aggregateRaw: false, createMany: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function to(e) {
      return Km[e];
    }
    var An = class {
      constructor(r) {
        this.options = r;
        this.tickActive = false;
        this.batches = {};
      }
      request(r) {
        let t = this.options.batchBy(r);
        return t ? (this.batches[t] || (this.batches[t] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[t].push({ request: r, resolve: n, reject: i });
        })) : this.options.singleLoader(r);
      }
      dispatchBatches() {
        for (let r in this.batches) {
          let t = this.batches[r];
          delete this.batches[r], t.length === 1 ? this.options.singleLoader(t[0].request).then((n) => {
            n instanceof Error ? t[0].reject(n) : t[0].resolve(n);
          }).catch((n) => {
            t[0].reject(n);
          }) : (t.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(t.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < t.length; i++) t[i].reject(n);
            else for (let i = 0; i < t.length; i++) {
              let o = n[i];
              o instanceof Error ? t[i].reject(o) : t[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < t.length; i++) t[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var zm = N("prisma:client:request_handler");
    var In = class {
      constructor(r, t) {
        this.logEmitter = t, this.client = r, this.dataloader = new An({ batchLoader: na(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => to(p.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Ym(o), containsWrite: u, customDataProxyFetch: i })).map((p, m) => {
            if (p instanceof Error) return p;
            try {
              return this.mapQueryEngineResult(n[m], p);
            } catch (f) {
              return f;
            }
          });
        }), singleLoader: async (n) => {
          let i = n.transaction?.kind === "itx" ? hl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: to(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : fl(n.protocolQuery), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(r) {
        try {
          return await this.dataloader.request(r);
        } catch (t) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = r;
          this.handleAndLogRequestError({ error: t, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a });
        }
      }
      mapQueryEngineResult({ dataPath: r, unpacker: t }, n) {
        let i = n?.data, o = n?.elapsed, s = this.unpack(i, r, t);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(r) {
        try {
          this.handleRequestError(r);
        } catch (t) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: t.message, target: r.clientMethod, timestamp: /* @__PURE__ */ new Date() }), t;
        }
      }
      handleRequestError({ error: r, clientMethod: t, callsite: n, transaction: i, args: o, modelName: s }) {
        if (zm(r), Zm(r, i) || r instanceof Le) throw r;
        if (r instanceof V && Xm(r)) {
          let l = yl(r.meta);
          Tn({ args: o, errors: [l], callsite: n, errorFormat: this.client._errorFormat, originalMethod: t, clientVersion: this.client._clientVersion });
        }
        let a = r.message;
        if (n && (a = Ar({ callsite: n, originalMethod: t, isPanic: r.isPanic, showColors: this.client._errorFormat === "pretty", message: a })), a = this.sanitizeMessage(a), r.code) {
          let l = s ? { modelName: s, ...r.meta } : r.meta;
          throw new V(a, { code: r.code, clientVersion: this.client._clientVersion, meta: l, batchRequestIdx: r.batchRequestIdx });
        } else {
          if (r.isPanic) throw new ue(a, this.client._clientVersion);
          if (r instanceof j) throw new j(a, { clientVersion: this.client._clientVersion, batchRequestIdx: r.batchRequestIdx });
          if (r instanceof R) throw new R(a, this.client._clientVersion);
          if (r instanceof ue) throw new ue(a, this.client._clientVersion);
        }
        throw r.clientVersion = this.client._clientVersion, r;
      }
      sanitizeMessage(r) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, gl.default)(r) : r;
      }
      unpack(r, t, n) {
        if (!r || (r.data && (r = r.data), !r)) return r;
        let i = Object.values(r)[0], o = t.filter((a) => a !== "select" && a !== "include"), s = Sn(Ii(i, o));
        return n ? n(s) : s;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Ym(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx") return { kind: "itx", options: hl(e) };
        tr(e, "Unknown transaction kind");
      }
    }
    function hl(e) {
      return { id: e.id, payload: e.payload };
    }
    function Zm(e, r) {
      return Rn(e) && r?.kind === "batch" && e.batchRequestIdx !== r.index;
    }
    function Xm(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function yl(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(yl) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...r] = e.selectionPath;
        return { ...e, selectionPath: r };
      }
      return e;
    }
    var El = "5.11.0";
    var bl = El;
    function wl(e) {
      return e.map((r) => {
        let t = {};
        for (let n of Object.keys(r)) t[n] = xl(r[n]);
        return t;
      });
    }
    function xl({ prisma__type: e, prisma__value: r }) {
      switch (e) {
        case "bigint":
          return BigInt(r);
        case "bytes":
          return Buffer.from(r, "base64");
        case "decimal":
          return new Te(r);
        case "datetime":
        case "date":
          return new Date(r);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${r}Z`);
        case "array":
          return r.map(xl);
        default:
          return r;
      }
    }
    var Cl = _(Wi());
    var q = class extends Error {
      constructor(r) {
        super(r + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    w(q, "PrismaClientConstructorValidationError");
    var Pl = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "__internal"];
    var vl = ["pretty", "colorless", "minimal"];
    var Tl = ["info", "query", "warn", "error"];
    var rd = { datasources: (e, { datasourceNames: r }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e)) throw new q(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [t, n] of Object.entries(e)) {
          if (!r.includes(t)) {
            let i = Lr(t, r) || ` Available datasources: ${r.join(", ")}`;
            throw new q(`Unknown datasource ${t} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n)) throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
            if (i !== "url") throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string") throw new q(`Invalid value ${JSON.stringify(o)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
        }
      }
    }, adapter: (e, r) => {
      if (e === null) return;
      if (e === void 0) throw new q('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!bn(r).includes("driverAdapters")) throw new q('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Ur() === "binary") throw new q('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string") throw new q(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string") throw new q(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!vl.includes(e)) {
          let r = Lr(e, vl);
          throw new q(`Invalid errorFormat ${e} provided to PrismaClient constructor.${r}`);
        }
      }
    }, log: (e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new q(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function r(t) {
        if (typeof t == "string" && !Tl.includes(t)) {
          let n = Lr(t, Tl);
          throw new q(`Invalid log level "${t}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let t of e) {
        r(t);
        let n = { level: r, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Lr(i, o);
            throw new q(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (t && typeof t == "object") for (let [i, o] of Object.entries(t)) if (n[i]) n[i](o);
        else throw new q(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, transactionOptions: (e) => {
      if (!e) return;
      let r = e.maxWait;
      if (r != null && r <= 0) throw new q(`Invalid value ${r} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let t = e.timeout;
      if (t != null && t <= 0) throw new q(`Invalid value ${t} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, __internal: (e) => {
      if (!e) return;
      let r = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new q(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [t] of Object.entries(e)) if (!r.includes(t)) {
        let n = Lr(t, r);
        throw new q(`Invalid property ${JSON.stringify(t)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    } };
    function Rl(e, r) {
      for (let [t, n] of Object.entries(e)) {
        if (!Pl.includes(t)) {
          let i = Lr(t, Pl);
          throw new q(`Unknown property ${t} provided to PrismaClient constructor.${i}`);
        }
        rd[t](n, r);
      }
      if (e.datasourceUrl && e.datasources) throw new q('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function Lr(e, r) {
      if (r.length === 0 || typeof e != "string") return "";
      let t = td(e, r);
      return t ? ` Did you mean "${t}"?` : "";
    }
    function td(e, r) {
      if (r.length === 0) return null;
      let t = r.map((i) => ({ value: i, distance: (0, Cl.default)(e, i) }));
      t.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = t[0];
      return n.distance < 3 ? n.value : null;
    }
    function Sl(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((r, t) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? t(i) : r(n)));
        }, l = (u) => {
          o || (o = true, t(u));
        };
        for (let u = 0; u < e.length; u++) e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!Rn(c)) {
            l(c);
            return;
          }
          c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
      });
    }
    var Ye = N("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var nd = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var id = Symbol.for("prisma.client.transaction.id");
    var od = { id: 0, nextId() {
      return ++this.id;
    } };
    function Ll(e) {
      class r {
        constructor(n) {
          this._originalClient = this;
          this._middlewares = new Cn();
          this._createPrismaPromise = Xi();
          this.$extends = Ks;
          e = n?.__internal?.configOverride?.(e) ?? e, pa(e), n && Rl(n, e);
          let i = n?.adapter ? yi(n.adapter) : void 0, o = new kl.EventEmitter().on("error", () => {
          });
          this._extensions = dn.empty(), this._previewFeatures = bn(e), this._clientVersion = e.clientVersion ?? bl, this._activeProvider = e.activeProvider, this._tracingHelper = cl(this._previewFeatures);
          let s = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Tt.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Tt.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, a = !i && jr(s, { conflictCheck: "none" }) || e.injectableEdgeEnv?.();
          try {
            let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
            c && N.enable("prisma:client");
            let p = Tt.default.resolve(e.dirname, e.relativePath);
            Dl.default.existsSync(p) || (p = e.dirname), Ye("dirname", e.dirname), Ye("relativePath", e.relativePath), Ye("cwd", p);
            let m = u.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: m.allowTriggerPanic, datamodelPath: Tt.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: m.binaryPath ?? void 0, engineEndpoint: m.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && dl(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: ma(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2e3, timeout: l.transactionOptions?.timeout ?? 5e3, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: o, isBundled: e.isBundled, adapter: i }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: Ir, getBatchRequestPayload: Er, prismaGraphQLToJSError: sr, PrismaClientUnknownRequestError: j, PrismaClientInitializationError: R, PrismaClientKnownRequestError: V, debug: N("prisma:client:accelerateEngine"), engineVersion: Il.version, clientVersion: e.clientVersion } }, Ye("clientVersion", e.clientVersion), this._engine = Ba(e, this._engineConfig), this._requestHandler = new In(this, o), l.log) for (let f of l.log) {
              let g = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              g && this.$on(g, (h) => {
                Jr.log(`${Jr.tags[g] ?? ""}`, h.message || h.query);
              });
            }
            this._metrics = new yr(this._engine);
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = ot(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            ho();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Zi({ clientMethod: i, activeProvider: a }), callsite: We(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = Al(n, i);
              return Yi(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new K("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (Yi(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new K(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: el, callsite: We(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Zi({ clientMethod: i, activeProvider: a }), callsite: We(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(wl);
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...Al(n, i));
            throw new K("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = od.nextId(), s = pl(n.length), a = n.map((l, u) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return l.requestTransaction?.(p) ?? l;
          });
          return Sl(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let u = { kind: "itx", ...a };
            l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
          } catch (u) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), u;
          }
          return l;
        }
        _createItxClient(n) {
          return ot(Pe(Ws(this), [ne("_appliedParent", () => this._appliedParent._createItxClient(n)), ne("_createPrismaPromise", () => Xi(n)), ne(id, () => n.id), rt(ml)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? nd, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => {
            let c = this._middlewares.get(++a);
            if (c) return this._tracingHelper.runInChildSpan(s.middleware, (A) => c(u, (T) => (A?.end(), l(T))));
            let { runInTransaction: p, args: m, ...f } = u, g = { ...n, ...f };
            m && (g.args = i.middlewareArgsToRequestArgs(m)), n.transaction !== void 0 && p === false && delete g.transaction;
            let h = await ta(this, g);
            return g.model ? Zs({ result: h, modelName: g.model, args: g.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : h;
          };
          return this._tracingHelper.runInChildSpan(s.operation, () => new _l.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: m, customDataProxyFetch: f }) {
          try {
            n = u ? u(n) : n;
            let g = { name: "serialize" }, h = this._tracingHelper.runInChildSpan(g, () => Ya({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion }));
            return N.enabled("prisma:client") && (Ye("Prisma Client call:"), Ye(`prisma.${i}(${_s(n)})`), Ye("Generated request:"), Ye(JSON.stringify(h, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: h, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: m, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: f });
          } catch (g) {
            throw g.clientVersion = this._clientVersion, g;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics")) throw new K("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
      }
      return r;
    }
    function Al(e, r) {
      return sd(e) ? [new oe(e, r), sl] : [e, al];
    }
    function sd(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    var ad = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Nl(e) {
      return new Proxy(e, { get(r, t) {
        if (t in r) return r[t];
        if (!ad.has(t)) throw new TypeError(`Invalid enum value: ${String(t)}`);
      } });
    }
    function Ol(e) {
      jr(e, { conflictCheck: "warn" });
    }
  }
});

// ../../node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "../../node_modules/.prisma/client/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2
    } = require_library();
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.11.0",
      engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.UserScalarFieldEnum = {
      id: "id",
      name: "name",
      email: "email",
      password: "password"
    };
    exports2.Prisma.ProblemScalarFieldEnum = {
      id: "id",
      slug: "slug",
      description: "description"
    };
    exports2.Prisma.LanguageScalarFieldEnum = {
      id: "id",
      name: "name",
      judge0Id: "judge0Id"
    };
    exports2.Prisma.SubmissionScalarFieldEnum = {
      id: "id",
      problemId: "problemId",
      tokenId: "tokenId",
      status: "status",
      memory: "memory",
      time: "time",
      userId: "userId"
    };
    exports2.Prisma.DefaultCodeScalarFieldEnum = {
      id: "id",
      problemId: "problemId",
      languageId: "languageId",
      code: "code"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports2.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports2.Prisma.ModelName = {
      User: "User",
      Problem: "Problem",
      Language: "Language",
      Submission: "Submission",
      DefaultCode: "DefaultCode"
    };
    var config2 = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\kacky\\Desktop\\codex\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../packages/db/.env"
      },
      "relativePath": "../../../packages/db/prisma",
      "clientVersion": "5.11.0",
      "engineVersion": "efd2449663b3d73d637ea1fd226bafbcf45b3102",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": '// This is your Prisma schema file,\r\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\r\n\r\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\r\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\r\n\r\ngenerator client {\r\n  provider = "prisma-client-js"\r\n}\r\n\r\ndatasource db {\r\n  provider = "postgresql"\r\n  url      = env("DATABASE_URL")\r\n}\r\n\r\nmodel User {\r\n  id          String       @id @unique @default(cuid())\r\n  name        String\r\n  email       String       @unique\r\n  password    String\r\n  submissions Submission[]\r\n}\r\n\r\nmodel Problem {\r\n  id          String        @id @unique @default(cuid())\r\n  slug        String        @unique\r\n  description String\r\n  submissions Submission[]\r\n}\r\n\r\nmodel Language {\r\n  id          String        @id @unique @default(cuid())\r\n  name        String @unique\r\n  judge0Id    Int\r\n  defaultCode DefaultCode[]\r\n}\r\n\r\nmodel Submission {\r\n  id     String @id @unique @default(cuid())\r\n  problemId String\r\n  tokenId String @unique\r\n  status String? @default("PENDING")\r\n  memory Int?\r\n  time String?\r\n  userId String @default("")\r\n  user   User   @relation(fields: [userId], references: [id])\r\n  problem Problem @relation(fields: [problemId], references: [id])\r\n}\r\n\r\nmodel DefaultCode {\r\n  id         String   @id @default(cuid())\r\n  problemId  String @unique\r\n  languageId String\r\n  code String\r\n  language   Language @relation(fields: [languageId], references: [id])\r\n}\r\n\r\n',
      "inlineSchemaHash": "2e802ded7267c0b04d84a3020d3c4b928cd7d4824098ed5950cc835c7226df40",
      "copyEngine": true
    };
    var fs2 = require("fs");
    config2.dirname = __dirname;
    if (!fs2.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "../../node_modules/.prisma/client",
        "../node_modules/.prisma/client"
      ];
      const alternativePath = alternativePaths.find((altPath) => {
        return fs2.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      }) ?? alternativePaths[0];
      config2.dirname = path.join(process.cwd(), alternativePath);
      config2.isBundled = true;
    }
    config2.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"submissions","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Submission","relationName":"SubmissionToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Problem":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"slug","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"submissions","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Submission","relationName":"ProblemToSubmission","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Language":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"judge0Id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"defaultCode","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DefaultCode","relationName":"DefaultCodeToLanguage","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Submission":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"problemId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tokenId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"PENDING","isGenerated":false,"isUpdatedAt":false},{"name":"memory","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"time","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":true,"type":"String","default":"","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"SubmissionToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"problem","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Problem","relationName":"ProblemToSubmission","relationFromFields":["problemId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"DefaultCode":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"problemId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"languageId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"language","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Language","relationName":"DefaultCodeToLanguage","relationFromFields":["languageId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports2.Prisma, config2.runtimeDataModel);
    config2.engineWasm = void 0;
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient2(config2);
    exports2.PrismaClient = PrismaClient2;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "query_engine-windows.dll.node");
    path.join(process.cwd(), "../../node_modules/.prisma/client/query_engine-windows.dll.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "../../node_modules/.prisma/client/schema.prisma");
  }
});

// ../../node_modules/.prisma/client/default.js
var require_default = __commonJS({
  "../../node_modules/.prisma/client/default.js"(exports2, module2) {
    module2.exports = { ...require_client() };
  }
});

// ../../node_modules/@prisma/client/default.js
var require_default2 = __commonJS({
  "../../node_modules/@prisma/client/default.js"(exports2, module2) {
    module2.exports = {
      ...require_default()
    };
  }
});

// ../../packages/db/index.ts
var import_client = __toESM(require_default2());
var prismaClientSingleton = () => {
  return new import_client.PrismaClient();
};
var prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
var db_default = prisma;
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

// src/addLanguage.ts
async function main(langName, judge0Id) {
  try {
    await db_default.language.create({
      data: {
        judge0Id,
        name: langName
      }
    });
    console.log("Added");
  } catch (error) {
    console.log("error");
  }
}
main(process.env.LANGUAGE_NAME || "", Number(process.env.JUDGE_ID) || 0);
/*! Bundled license information:

@prisma/client/runtime/library.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
